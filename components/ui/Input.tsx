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
        className={`${style} w-full flex items-center bg-white rounded-md py-5 px-5 focus:outline-none`}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input