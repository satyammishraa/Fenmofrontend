import { deleteExpense } from "../api/expenseApi";

function ExpenseCard({ expense, onDelete }) {
  const amount = expense.amount?.$numberDecimal || expense.amount;

  const handleDelete = async () => {
    await deleteExpense(expense._id);
    onDelete(); // refresh list
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 hover:shadow-xl hover:scale-[1.02] transition duration-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          ₹{amount}
        </h3>

        <div className="flex items-center gap-3">
          <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
            {expense.category}
          </span>

          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Delete
          </button>
        </div>
      </div>

      <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
        {expense.description}
      </p>

      <p className="text-gray-400 text-xs">
        {new Date(expense.date).toLocaleDateString()}
      </p>
    </div>
  );
}


export default ExpenseCard;
