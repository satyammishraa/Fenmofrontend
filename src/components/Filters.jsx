function Filters({ category, setCategory, sort, setSort }) {
  return (
    <div>
      <input
        placeholder="Filter by category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="date_desc">Newest First</option>
      </select>
    </div>
  );
}

export default Filters;
