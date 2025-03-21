import { Form, Formik } from "formik";
import InputField from "../../../components/common/InputField";

import useAuthStore from "../../../core/store";
import { useRegister1 } from "../../../core/hooks/auth/register";

const RegisterStep1 = () => {
  const updateEmail = useAuthStore((state) => state.updateEmail);
  const { regMutation, pending } = useRegister1();
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(value) => {
        updateEmail(value.email);
        regMutation(value);
      }}
    >
      <Form className="flex flex-col items-center gap-8 justify-between px-4 py-3 ">
        <h1 className="text-white text-2xl font-black">Register</h1>
        <div className="flex flex-col gap-8">
          <InputField
            type="text"
            name="email"
            placeholder="Please Enter Your Email"
          />
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

export default RegisterStep1;
