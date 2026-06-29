"use client";

import { useState } from "react";

export const Step3 = ({ handleBack, handleNext }) => {
  const [birthDate, setBirthDate] = useState("");
  const [image, setImage] = useState(null);

  const [imageError, setImageError] = useState("");
  const [birthDateError, setBirthDateError] = useState("");

  const validateInput = () => {
    let isValid = true;

    if (birthDate.length === 0) {
      setBirthDateError("Please select a date.");
      isValid = false;
    } else {
      setBirthDateError("");
    }

    if (image === null) {
      setImageError("Image cannot be blank");
      isValid = false;
    } else {
      setImageError("");
    }

    return isValid;
  };

  const handleClickButton = () => {
    const shalgah = validateInput();

    if (shalgah) {
      handleNext();
    }
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mt-12 space-y-5">
      {/* Date of birth */}
      <div>
        <label className="block text-lg font-semibold text-slate-700 mb-2">
          Date of birth <span className="text-red-500">*</span>
        </label>

        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none"
        />
        {birthDateError.length > 0 && (
          <p className="text-red-500">{birthDateError}</p>
        )}
      </div>

      {/* Profile image */}
      <div>
        <label className="block text-lg font-semibold text-slate-700 mb-2">
          Profile image <span className="text-red-500">*</span>
        </label>

        <label className="w-full h-40 bg-gray-100 rounded-xl border border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
          {image ? (
            <img
              src={image}
              alt="preview"
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <>
              <div className="text-3xl">📷</div>
              <p className="mt-2 text-gray-700">Add image</p>
            </>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="hidden"
          />
          {imageError.length > 0 && (
            <p className="text-red-500">{imageError}</p>
          )}
        </label>
      </div>
      <div className="flex gap-3 mt-10">
        <button
          onClick={handleBack}
          className="w-1/3 h-12 border border-gray-300 rounded-lg"
        >
          ← Back
        </button>

        <button
          onClick={handleClickButton}
          className="w-2/3 h-12 bg-black text-white rounded-lg"
        >
          Submit 3/3 →
        </button>
      </div>
    </div>
  );
};
