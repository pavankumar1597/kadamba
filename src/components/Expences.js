import ExpenseItem from "./ExpenseItem";

function Expences(props) {
  const expences = props.expences;
  return (
    <div className="expences">
      <div className="expences__title">Expences</div>
      <div className="expences__list">
        {expences.map((expence) => (
          <ExpenseItem
            key={expence.id}
            date={expence.date}
            title={expence.title}
            amount={expence.amount}
          />
        ))}
      </div>
    </div>
  );
}

export default Expences;
