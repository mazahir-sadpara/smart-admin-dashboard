const Input = ({ label, type = "text", value, onChange, placeholder, className = "" }) => {
  return (
    <div className={`mb-4 ${!label ? "mb-0" : ""}`}>
      {label && <label className="block mb-1 text-indigo-300 text-sm">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-5 py-2.5 rounded-full bg-[#333A5C] text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-none ${className}`}
      />
    </div>
  );
};

export default Input;
