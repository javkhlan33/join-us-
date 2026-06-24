import { use, useState } from "react";

export const Step1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div className="mt-12 space-y-6">
      <div>
        <label className="block text-lg font-semibold text-slate-700 mb-2">
          First name <span className="text-red-500">*</span>
        </label>

        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className="w-full h-11 border-2 border-sky-500 rounded-xl px-4 text-lg outline-none"
        />
      </div>

      <div>
        <label className="block text-lg font-semibold text-slate-700 mb-2">
          Last name <span className="text-red-500">*</span>
        </label>

        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className="w-full h-11 border border-gray-300 rounded-xl px-4 text-lg outline-none"
        />
      </div>

      <div>
        <label className="block text-lg font-semibold text-slate-700 mb-2">
          Username <span className="text-red-500">*</span>
        </label>

        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className="w-full h-11 border border-gray-300 rounded-xl px-4 text-lg outline-none"
        />
      </div>
    </div>
  );
};
