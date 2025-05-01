export const Button = ({onClick, children }) => {
  return (
    <button
    onClick={onClick} className="border hover:border-amber-400 text-white font-semibold px-6 py-2 flex items-center gap-4 rounded-xl transition-all group">
      {children}
    </button>
  );
};
