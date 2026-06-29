"use client";

import { useState } from "react";

export const Step2 = ({ handleBack, handleNext }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const validateInput = () => {
    let isValid = true;

    const onlyMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const onlyPhone = /^[0-9]{8}$/;
    const onlyPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/;
    // Email
    if (email.length === 0) {
      setEmailError("Email оруулна уу");
      isValid = false;
    } else if (!onlyMail.test(email)) {
      setEmailError("Email буруу байна");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Phone
    if (phoneNumber.length === 0) {
      setPhoneNumberError("Утасны дугаар оруулна уу");
      isValid = false;
    } else if (!onlyPhone.test(phoneNumber)) {
      setPhoneNumberError("8 оронтой дугаар оруулна уу");
      isValid = false;
    } else {
      setPhoneNumberError("");
    }

    // Password
    if (password.length === 0) {
      setPasswordError("Password оруулна уу");
      isValid = false;
    } else if (!onlyPassword.test(password)) {
      setPasswordError(
        "Password нь 8+ тэмдэгт, том үсэг, жижиг үсэг, тоо, тэмдэгт агуулсан байх ёстой",
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Confirm Password
    if (confirmPassword.length === 0) {
      setConfirmPasswordError("Password давтан оруулна уу");
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Password таарахгүй байна");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };
  const handleClickButton = () => {
    const shalgah = validateInput();
    if (shalgah) {
      handleNext();
    }
  };

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
          {emailError.length > 0 && (
            <p className="text-red-500">{emailError}</p>
          )}
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
          {phoneNumberError.length > 0 && (
            <p className="text-red-500">{phoneNumberError}</p>
          )}
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
          {passwordError.length > 0 && (
            <p className="text-red-500">{passwordError}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-lg font-semibold text-slate-700 mb-2">
            Confirm password <span className="text-red-500  ">*</span>
          </label>

          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Placeholder"
            className="w-full h-11 border border-gray-300 rounded-xl px-4 text-lg outline-none"
          />
          {confirmPasswordError.length > 0 && (
            <p className="text-red-500">{confirmPasswordError}</p>
          )}
        </div>
        <div className="flex gap-3 mt-10">
          <button
            onClick={handleBack}
            className="w-1/3 h-12 border border-gray-300 rounded-lg flex items-center justify-center gap-2"
          >
            ← Back
          </button>

          <button
            onClick={handleClickButton}
            className="w-2/3 h-12 bg-black text-white rounded-lg"
          >
            Continue 2/3 →
          </button>
        </div>
      </div>
    </div>
  );
};
