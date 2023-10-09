const FormInput = ({ name, type, label, error, ...props }) => {
  return (
    <div >
      <input name={name} type={type} className="bg-gray-400"/>
    </div>
  );
};

export default FormInput;
// placeholder = "Email";
// type = "email";
// name = "email";
// className = "outline-none bg-gray-200 ";
