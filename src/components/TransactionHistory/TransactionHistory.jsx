// import clsx from "clsx";
import style from './TransactionHistory.module.css';
// transaction - history
const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return (
          <tbody key={item.id}>
            <tr className={style.item}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default TransactionHistory;
