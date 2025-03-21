import * as yup from "yup";

export const registerValidation = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be at least 5 characters long")
    .max(20, "Username cannot exceed 20 characters")
    .required("Username is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(30, "Password cannot exceed 30 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});
