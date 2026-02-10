const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition-all shadow-lg shadow-indigo-500/30 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
