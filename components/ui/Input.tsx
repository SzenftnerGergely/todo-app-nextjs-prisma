interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  style?: string;
}

const Input = ({ name, type, placeholder, value, style }: inputProps) => {
  return (
    <>
      <input
        className={`w-full flex placeholder-gray-600 font-semibold items-center text-gray-600 bg-white dark:bg-[#25273c] rounded-md py-5 px-5 focus:outline-none ${style}`}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input