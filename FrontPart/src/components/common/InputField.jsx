import { Field } from "formik";

const InputField = ({ name, placeholder, type }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer  border border-white py-3 px-5 text-lg text-white rounded-sm">
      <Field
        name={name}
        placeholder={placeholder}
        type={type}
        className="border-none outline-none focus:bg-[#2148C0]  !bg-none min-w-[320px] !bg-[#2148C0]  "
      />
    </div>
  );
};

export default InputField;
