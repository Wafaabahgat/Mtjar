const FormInput = ({ name, type, label, error, ...props }) => {
  return (
    <div >
      <input name={name} type={type} />
    </div>
  );
};

export default FormInput;
// placeholder = "Email";
// type = "email";
// name = "email";
// className = "outline-none bg-gray-200 ";
