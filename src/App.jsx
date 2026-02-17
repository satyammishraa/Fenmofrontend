import { useEffect, useState } from "react";
import { getExpenses } from "./api/expenseApi";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filters";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [total, setTotal] = useState(0);

  const fetchExpenses = async () => {
    try {
      const res = await getExpenses({ category, sort });
      setExpenses(res.data.data);
      setTotal(res.data.total);
    } catch (err) {
      console.error("Error fetching expenses");
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [category, sort]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <ExpenseForm onSuccess={fetchExpenses} />

      <Filters
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <h3>Total: ₹{total}</h3>

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
