function Filters({ category, setCategory, sort, setSort }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <input
        className="border rounded-xl p-2 flex-1 focus:ring-2 focus:ring-indigo-400 outline-none"
        placeholder="Filter by category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <select
        className="border rounded-xl p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="date_desc">Newest First</option>
      </select>
    </div>
  );
}

export default Filters;
