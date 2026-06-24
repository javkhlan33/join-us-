export const ContinueButton = ({ handleNext, handleback }) => {
  return (
    <div>
      <button
        onClick={handleback}
        className="h-11 px-6 border border-gray-300 rounded-lg text-black"
      >
        ← Back
      </button>

      <button
        onClick={handleNext}
        className="fw-full h-14 bg-black text-white rounded-xl mt-24 text-xl font-medium"
      >
        Continue 2/3 →
      </button>
    </div>
  );
};
