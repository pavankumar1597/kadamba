import React from "react"; // rafce - > react arrow function export component
import Expences from "./components/Expences";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const expences = [
    { title: "car Expense", amount: 500, date: new Date(2021, 2, 28) },
    { title: "house Expense", amount: 1000, date: new Date(2021, 5, 28) },
    { title: "phone Expense", amount: 200, date: new Date(2021, 9, 28) },
  ];

  return (
    <div>
      <Expences expences={expences}></Expences>
    </div>
  );
}

export default App;
