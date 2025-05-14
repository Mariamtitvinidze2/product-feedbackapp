"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import translationJson from "../../language.json";

type Language = "en" | "it" | "ru" | "tr" | "es" | "de" | "fr";

type TranslationKeys = {
  signin: string;
  signup: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: string;
  gender: string;
  male: string;
  female: string;
  noAccount: string;
  haveAccount: string;
  selectLanguage: string;
};

type Translations = {
  [key in Language]: TranslationKeys;
};

const translation: Translations = translationJson;

type FormData = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .max(20, "Maximum 20 characters")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Repeat your password"),
});

const Signup = () => {
  const [language, setLanguage] = useState<Language>("en");
  const t = translation[language];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const [submitError, setSubmitError] = useState("");

  const onSubmit = (data: FormData) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="flex flex-col gap-[20px] items-center">
      {/* Language Selector */}
      <div className="mb-4">
        <label htmlFor="lang" className="mr-2 font-medium">
          {t.selectLanguage}:
        </label>
        <select
          id="lang"
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="border border-gray-300 px-3 py-1 rounded-md"
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="ru">Русский</option>
          <option value="tr">Türkçe</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
          <option value="fr">Français</option>
        </select>
      </div>

      <div className="w-[450px] h-auto bg-white rounded-lg flex flex-col p-8 shadow-md">
        <h5 className="text-2xl font-semibold mb-6 text-center">{t.signup}</h5>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            type="text"
            placeholder={t.firstName}
            {...register("firstName")}
            className="h-10 px-3 mb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-sm text-red-500 mb-2">
            {errors.firstName?.message}
          </p>

          <input
            type="text"
            placeholder={t.lastName}
            {...register("lastName")}
            className="h-10 px-3 mb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-sm text-red-500 mb-2">
            {errors.lastName?.message}
          </p>

          <select
            {...register("gender")}
            className="h-10 px-3 mb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
          >
            <option value="">{t.gender}</option>
            <option value="female">{t.female}</option>
            <option value="male">{t.male}</option>
          </select>
          <p className="text-sm text-red-500 mb-2">{errors.gender?.message}</p>

          <input
            type="text"
            placeholder={t.email}
            {...register("email")}
            className="h-10 px-3 mb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-sm text-red-500 mb-2">{errors.email?.message}</p>

          <input
            type="password"
            placeholder={t.password}
            {...register("password")}
            className="h-10 px-3 mb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-sm text-red-500 mb-2">
            {errors.password?.message}
          </p>

          <input
            type="password"
            placeholder={t.password + " (repeat)"}
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
            {t.signup}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          {t.haveAccount}{" "}
          <Link href="/">
            <span className="text-blue-500 hover:underline cursor-pointer">
              {t.signin}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
