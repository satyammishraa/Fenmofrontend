function ExpenseList({ expenses }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((e) => (
          <tr key={e._id}>
            <td>₹{parseFloat(e.amount.$numberDecimal)}</td>
            <td>{e.category}</td>
            <td>{e.description}</td>
            <td>{new Date(e.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseList;
