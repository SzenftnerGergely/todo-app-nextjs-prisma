"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/utils/prisma"

export async function create(formData: FormData) {
  const input = formData.get("input") as string

  if (!input.trim()) {
    return
  }

  const existingTodos = await prisma.todo.findMany();
  const order = existingTodos.length + 1;

  await prisma.todo.create({
    data: {
      title: input,
      order: order,
    },
  });

  revalidatePath("/")
}

export async function todoStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });

  if (!todo) {
    return;
  }

  const updatedStatus = !todo.isCompleted;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });

  revalidatePath("/");

  return updatedStatus;
}

export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  await prisma.todo.delete({
    where: {
      id: inputId,
    },
  });

  revalidatePath("/");
}

export async function deleteCompletedTodo() {

  await prisma.todo.deleteMany({
    where: { isCompleted: true },
  });

  revalidatePath("/");
}

export async function filterActiveTodo() {
  const data = await prisma.todo.findMany({
    where: { isCompleted: false },
  });
  
  revalidatePath("/");

  return data
}

export async function filterCompletedTodo() {
  const data = await prisma.todo.findMany({
    where: { isCompleted: true },
  });
  
  revalidatePath("/");

  return data
}

export async function getAllTodos() {
  const data = await prisma.todo.findMany({
      select: {
          title: true,
          id: true,
          isCompleted: true,
      },
      orderBy: { order: 'asc' }
  })

  return data
}

export async function updateOrder (id: string, newOrder: number) {
  await prisma.todo.update({
    where: { id: id },
    data: { order: newOrder },
  });
};