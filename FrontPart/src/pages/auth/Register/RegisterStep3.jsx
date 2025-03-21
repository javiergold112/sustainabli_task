import useAuthStore from "../../../core/store";
import { ErrorMessage, Form, Formik } from "formik";
import InputField from "../../../components/common/InputField";
import { useRegister3 } from "../../../core/hooks/auth/register";
import { registerValidation } from "../../../core/validation/auth.validation";
const RegisterStep3 = () => {
  const email = useAuthStore((state) => state.email);
  const { pending, regMutation } = useRegister3();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(value) => {
        regMutation({ ...value, email: email });
      }}
      validationSchema={registerValidation}
    >
      <Form className="flex flex-col items-center gap-8 justify-between px-4 py-3 ">
        <h1 className="text-white text-2xl font-black">Register</h1>
        <div className="flex flex-col gap-8">
          <InputField type="text" name="username" placeholder="User Name" />
          <ErrorMessage name="username" className="text-red-500" />
          <InputField type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" className="text-red-500" />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-sm cursor-pointer disabled:bg-white/45 bg-white text-[#2148C0] py-2 text-lg font-bold"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterStep3;
