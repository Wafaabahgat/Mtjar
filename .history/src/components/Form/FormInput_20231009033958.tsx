
const FormInput = ({ name, type, placeholder, error, ...props }) => {
  return (
    <div >
      <input name={name} type={type} placeholder={placeholder} className="bg-gray-200 outline-none"/>
    </div>
  );
};

export default FormInput;

