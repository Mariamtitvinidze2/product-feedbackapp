"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  email: string;
  password: string;
  repeatPassword: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .max(20, "Maximum 20 characters")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Repeat your password"),
});

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const [submitError, setSubmitError] = useState("");

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="w-[450px] h-auto bg-white rounded-lg flex flex-col p-8 shadow-md">
      <h5 className="text-2xl font-semibold mb-6 text-center">Sign in</h5>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          type="text"
          placeholder="Email"
          {...register("email")}
          className="h-10 px-3 mb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p className="text-sm text-red-500 mb-2">{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="h-10 px-3 mb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p className="text-sm text-red-500 mb-2">{errors.password?.message}</p>

        <input
          type="password"
          placeholder="Repeat password"
          {...register("repeatPassword")}
          className="h-10 px-3 mb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p className="text-sm text-red-500 mb-4">
          {errors.repeatPassword?.message}
        </p>

        {submitError && (
          <p className="text-sm text-red-500 mb-2">{submitError}</p>
        )}

        <button
          type="submit"
          className="bg-black text-white h-10 rounded-md hover:bg-blue-600 transition-colors font-medium shadow-[0_4px_10px_rgba(255,255,255,0.5)]"
        >
          Sign in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <span className="text-blue-500 hover:underline cursor-pointer">
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Signin;
