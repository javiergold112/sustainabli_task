import loginUserAPI from "../../../core/services/api/auth/login.service";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { setItemGeneric } from "../../services/storage/index.storage";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: loginMutation, isPending: pending } = useMutation({
    mutationFn: async (data) => await loginUserAPI(data),
    onSuccess: (input) => {
      if (input?.success) {
        setItemGeneric("token", input.tokens);
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Invalid response from server");
      }
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    },
  });
  return { loginMutation, pending };
};

export default useLogin;
