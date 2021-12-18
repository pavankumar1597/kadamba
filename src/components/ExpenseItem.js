import "./ExpenseItem.css";
import ExpenceDate from "./ExpenceDate";

function ExpenseItem(props) {
  const expenceDate = props.date;
  const expenceTitle = props.title;
  const expenceAmount = props.amount;

  return (
    <div className="expense-item">
      <ExpenceDate date={expenceDate} />
      <div className="expense-item__description">
        <h2>{expenceTitle} </h2>
        <div className="expense-item__price">{expenceAmount + 200}rs</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
