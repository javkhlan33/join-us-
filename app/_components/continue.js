export const ContinueButton = ({ handleNext, handleBack }) => {
  return (
    <div className="flex w-full items-center gap-3">
      <button
        onClick={handleBack}
        className="w-[120px] h-11 border border-gray-300 rounded-md"
      >
        ← Back
      </button>

      <button
        onClick={handleNext}
        className="flex-1 h-11 bg-black text-white rounded-md"
      >
        Continue 2/3 →
      </button>
    </div>
  );
};
