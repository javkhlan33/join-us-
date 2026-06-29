"use client";

import { Step1 } from "./_components/step1";
import { useState } from "react";
import { Step2 } from "./_components/step2";
import { Step3 } from "./_components/step3";
import { Step4 } from "./_components/step4";
import Image from "next/image";
import logo from "./logo.svg";

export default function Home() {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };
  return (
    <main className="min-h-screen bg-[#F4F4F4] flex items-center justify-center">
      {step === 4 ? (
        <Step4 />
      ) : (
        <div className="w-[480px] h-[655px] bg-white rounded-xl border border-gray-200 p-14">
          <div className="mb-8">
            <Image src={logo} alt="Logo" width={60} height={60} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">Join Us! 😎</h1>

          <p className="mt-4 text-gray-500">
            Please provide all current information accurately.
          </p>

          {step === 1 && <Step1 handleNext={handleNext} />}
          {step === 2 && (
            <Step2 handleNext={handleNext} handleBack={handleBack} />
          )}
          {step === 3 && (
            <Step3 handleNext={handleNext} handleBack={handleBack} />
          )}
        </div>
      )}
    </main>
  );
}
