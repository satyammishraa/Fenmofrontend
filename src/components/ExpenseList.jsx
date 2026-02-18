import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {expenses.map((expense) => (
        <ExpenseCard key={expense._id} expense={expense} />
      ))}
    </div>
  );
}

export default ExpenseList;
