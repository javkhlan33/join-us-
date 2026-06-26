"use client";

import { useState } from "react";

export const Step2 = (handleBack, handleNext) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
 const onlyMail=
  return (
    <div className="mt-12">
      <div className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-lg font-semibold text-slate-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Placeholder"
            className="w-full h-11 border-2 border-sky-500 rounded-xl px-4 text-lg outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-lg font-semibold text-slate-700 mb-2">
            Phone number <span className="text-red-500">*</span>
          </label>

          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            placeholder="Placeholder"
            className="w-full h-11 border border-gray-300 rounded-xl px-4 text-lg outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-lg font-semibold text-slate-700 mb-2">
            Password <span className="text-red-500">*</span>
          </label>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Placeholder"
            className="w-full h-11 border border-gray-300 rounded-xl px-4 text-lg outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-lg font-semibold text-slate-700 mb-2">
            Confirm password <span className="text-red-500">*</span>
          </label>

          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Placeholder"
            className="w-full h-11 border border-gray-300 rounded-xl px-4 text-lg outline-none"
          />
        </div>
      </div>
    </div>
  );
};
