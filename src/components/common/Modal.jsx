const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-slate-900 p-6 rounded-lg shadow-lg w-full max-w-md border border-slate-700 relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-indigo-300 hover:text-white font-bold text-xl transition-colors"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
