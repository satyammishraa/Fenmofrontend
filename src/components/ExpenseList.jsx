import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses, refresh }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense._id}
          expense={expense}
          onDelete={refresh}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
