import { useEffect, useState } from "react";
import { getExpenses } from "./api/expenseApi";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filters";
const [darkMode, setDarkMode] = useState(
  localStorage.getItem("theme") === "dark"
);

function App() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("date_desc");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const res = await getExpenses({ category, sort });
      setExpenses(res.data.data);
      setTotal(res.data.total);
    } catch (err) {
      console.error("Error fetching expenses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [category, sort]);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);




  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-300">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
       <div className="mb-8 flex justify-between items-center">
  <div>
    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
      Expense Dashboard
    </h1>
    <p className="text-gray-500 dark:text-gray-400 mt-2">
      Track, filter and manage your spending efficiently.
    </p>
  </div>

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition"
  >
    {darkMode ? "☀ Light" : "🌙 Dark"}
  </button>
</div>

        {/* Summary Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 mb-6 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Expenses</p>
            <h2 className="text-3xl font-bold text-indigo-600">
              ₹{total}
            </h2>
          </div>
          <div className="text-sm text-gray-400">
            {expenses.length} transactions
          </div>
        </div>

        {/* Expense Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
          <ExpenseForm onSuccess={fetchExpenses} />
        </div>

        {/* Filters */}
        <div className="bg-white shadow-lg rounded-2xl p-4 mb-6">
          <Filters
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />
        </div>

        {/* Expense List */}
        <div className="space-y-4">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : expenses.length === 0 ? (
            <div className="bg-white p-6 rounded-2xl shadow text-center text-gray-400">
              No expenses yet. Add your first expense 🚀
            </div>
          ) : (
           <ExpenseList expenses={expenses} refresh={fetchExpenses} />

          )}
        </div>

      </div>
    </div>
  );
}

export default App;
