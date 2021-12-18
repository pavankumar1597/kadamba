import "./ExpenceDate.css";
function ExpenceDate(props) {
  console.log(props.date);

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear("en-US", { year: "long" });

  return (
    <div className="expense-date">
      <div className="expense-date__monh">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenceDate;
