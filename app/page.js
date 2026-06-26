"use client";

import { Step1 } from "./_components/step1";
import { ContinueButton } from "./_components/continue";
import { useState } from "react";
import { Step2 } from "./_components/step2";
import { Step3 } from "./_components/step3";

export default function Home() {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    <main className="min-h-screen bg-[#F4F4F4] flex items-center justify-center">
      <div className="w-[480px] min-h-[655px] bg-white rounded-xl border border-gray-200 p-14">
        {/* Logo */}
        <div className="mb-8">
          <div className="text-3xl font-black">{`<>`}</div>
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 ">Join Us! 😎</h1>

        <p className="mt-4 text-l text-gray-500">
          Please provide all current information accurately.
        </p>
        <div>
          {step == 1 && <Step1 handleNext={handleNext} />}
          {step == 2 && <Step2 />}
          {step == 3 && <Step3 />}
          {step == 4 && <Step4 />}
        </div>
      </div>
    </main>
  );
}
