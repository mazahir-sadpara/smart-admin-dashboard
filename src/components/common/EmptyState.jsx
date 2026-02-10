const EmptyState = ({ message = "No data available" }) => {
  return (
    <div className="flex justify-center items-center h-64 text-indigo-300">
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default EmptyState;
