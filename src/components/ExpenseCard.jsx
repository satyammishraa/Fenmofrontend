function ExpenseCard({ expense }) {
  const amount = expense.amount?.$numberDecimal || expense.amount;

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl hover:scale-[1.02] transition duration-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-gray-800">
          ₹{amount}
        </h3>
        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
          {expense.category}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-2">
        {expense.description}
      </p>
      <p className="text-gray-400 text-xs">
        {new Date(expense.date).toLocaleDateString()}
      </p>
    </div>
  );
}

export default ExpenseCard;
