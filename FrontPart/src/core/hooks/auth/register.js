import {
  registerStep1,
  registerStep2,
  registerStep3,
} from "../../../core/services/api/auth/register.service";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useRegister1 = () => {
  const navigate = useNavigate();
  const { mutate: regMutation, isPending: pending } = useMutation({
    mutationFn: registerStep1,
    onSuccess: (input) => {
      toast.success(input.message);
      navigate("/auth/signup-2");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Registration failed");
    },
  });

  return {
    regMutation,
    pending,
  };
};

export const useRegister2 = () => {
  const navigate = useNavigate();
  const { mutate: regMutation, isPending: pending } = useMutation({
    mutationFn: registerStep2,
    onSuccess: (input) => {
      toast.success(input.message);
      navigate("/auth/signup-3");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Registration failed");
    },
  });

  return {
    regMutation,
    pending,
  };
};

export const useRegister3 = () => {
  const navigate = useNavigate();
  const { mutate: regMutation, isPending: pending } = useMutation({
    mutationFn: registerStep3,
    onSuccess: (input) => {
      toast.success(input.message);
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Registration failed");
    },
  });

  return {
    regMutation,
    pending,
  };
};
