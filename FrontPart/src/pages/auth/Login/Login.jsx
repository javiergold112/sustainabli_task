import { Form, Formik } from "formik";
import InputField from "../../../components/common/InputField";
import useLogin from "../../../core/hooks/auth/login";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginMutation, pending } = useLogin();

  const onSubmit = (val) => {
    loginMutation(val);
  };

  return (
    <>
      <Formik
        initialValues={{
          emailOrUsername: "",
          password: "",
          rememberme: true,
        }}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col items-center gap-8 justify-between px-4 py-3 ">
          <h1 className="text-white text-2xl font-black">Login</h1>
          <div className="flex flex-col gap-8">
            <InputField
              type="text"
              name="emailOrUsername"
              placeholder="Please enter your email or username"
            />
            <InputField
              type="password"
              name="password"
              placeholder="Please enter your Password"
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
      <div className="w-full   text-center text-white">
        <p>
          Don't have an account? <Link to="/auth/signup-1">Sign up</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
