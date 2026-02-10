const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-[#333A5C] text-left">
            {columns.map((col, idx) => (
              <th key={idx} className="py-3 px-6 text-indigo-300 font-medium text-sm">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={row.id || rowIdx} className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
              {columns.map((col) => (
                <td key={col} className="py-3 px-6 text-white">
                  {typeof row[col.toLowerCase()] === 'object' && row[col.toLowerCase()] !== null
                    ? row[col.toLowerCase()]
                    : row[col.toLowerCase()] || row[col] || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
