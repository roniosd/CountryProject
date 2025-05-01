export const Input = ({value, autoComplete}) => {
  return <>
  <input className="py-3 rounded-lg px-5 border text-white w-full mt-5 focus:outline-none" type="text" name={value}  placeholder={`Enter Your ${value}`} required autoComplete={autoComplete} autoCorrect="fasle"/>
  
  </>
}
