import { useState } from "react";

export const Step1 = ({ handleNext }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const validateinput = () => {
    const onlyLetter = /^[\p{L}\s'-]+$/u;
    let isValid = true;
    if (firstName.length == 0) {
      setFirstNameError("Нэрээ оруулна уу");
      isValid = false;
    } else if (onlyLetter.test(firstName) == false) {
      setFirstNameError("Нэр зөвхөн үсгээр байх ёстой");
      isValid = false;
    } else {
      setFirstNameError("");
    }
    if (lastName.length === 0) {
      setLastNameError("Овгоо оруулна уу");
      isValid = false;
    } else if (!onlyLetter.test(lastName)) {
      setLastNameError("Овог зөвхөн үсгээр байх ёстой");
      isValid = false;
    } else {
      setLastNameError("");
    }
    if (userName.length === 0) {
      setUserNameError("Username оруулна уу");
      isValid = false;
    } else {
      setUserNameError("");
    }

    return isValid;
  };

  const handleClickButton = () => {
    const shalgah = validateinput();
    if (shalgah == true) {
      handleNext();
    }
  };
  return (
    <div className="mt-12 flex flex-col gap-5">
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
        {firstNameError.length > 0 && (
          <p className="text-red-500">{firstNameError}</p>
        )}
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
        {lastNameError.length > 0 && (
          <p className="text-red-500">{lastNameError}</p>
        )}
      </div>
      <div>
        <label className=" text-lg font-semibold text-slate-700 mb-2 ">
          Username <span className="text-red-500">*</span>
        </label>

        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className="w-full h-11 border border-gray-300 rounded-xl px-4 text-lg outline-none"
        />
        {userNameError.length > 0 && (
          <p className="text-red-500">{userNameError}</p>
        )}
      </div>
      <button
        className="bg-black text-white w-full rounded-lg h-20 py-2 "
        onClick={handleClickButton}
      >
        Continue 1/3 →
      </button>
    </div>
  );
};
