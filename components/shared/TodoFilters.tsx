import { deleteCompletedTodo, getAllTodos } from '@/app/actions/todoActions'
import Form from '../ui/Form'
import Button from '../ui/Button'

const TodoFilters = async () => {

    return (
        <div className='w-full'>
            <Form action={deleteCompletedTodo}>
                <Button
                    actionButton
                    text="Clear completed"
                    type="submit"
                />
            </Form>
        </div>
    )
}

export default TodoFilters
