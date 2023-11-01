import { TransactionTable, TransactionTd, TransactionTh } from "./Transactions.styled";
export const TransactionHistory = ({ items }) => {
    return (

<TransactionTable>
  <thead>
    <tr>
      <TransactionTh>Type</TransactionTh>
      <TransactionTh>Amount</TransactionTh>
      <TransactionTh>Currency</TransactionTh>
    </tr>
  </thead>

  <tbody>
   
{items.map(item => (<tr key={item.id}>
      <TransactionTd>{item.type}</TransactionTd>
    <TransactionTd>{item.amount}</TransactionTd>
    <TransactionTd>{item.currency}</TransactionTd>
    </tr>  )) }
  </tbody>
</TransactionTable>

    )
} 