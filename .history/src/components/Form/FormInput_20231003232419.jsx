const FormInput = ({ name, type, label, error, ...props }) => {
  return (
    <div className="bg-gray-200 w-64 flex items-center p-3 lg:w-61">
      <input
        placeholder="Email"
        type="email"
        name="email"
        className="outline-none bg-gray-200 "
      />
    </div>
  );
};

export default FormInput;
placeholder="Email"
type="email"
name="email"
className="outline-none bg-gray-200 "