import { useState } from "react";
import { createExpense } from "../api/expenseApi";

function ExpenseForm({ onSuccess }) {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createExpense(form);
    setForm({ amount: "", category: "", description: "", date: "" });
    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      <input
        className="border rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        required
      />
      <input
        className="border rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        required
      />
      <input
        className="border rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <input
        className="border rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="md:col-span-4 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
