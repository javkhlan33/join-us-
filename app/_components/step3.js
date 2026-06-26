"use client";

import { useState } from "react";

export const Step3 = () => {
  const [birthDate, setBirthDate] = useState("");
  const [image, setImage] = useState(null);

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
        </label>
      </div>
    </div>
  );
};
