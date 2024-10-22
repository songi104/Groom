import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {

  const initialExpenses = [
    {id: 1, charge: "렌트비", amount:1600},
    {id: 2, charge: "교통비", amount:2000},
    {id: 3, charge: "식비", amount:3000}
  ]







  return ( 
  <main>
    <h1>예산 계산기</h1>

    <div style={{width: '100%', background:'white', padding:'1rem'}}>
<ExpenseForm/>
    </div>

    <div style={{width: '100%', background:'white', padding:'1rem'}}>
<ExpenseList initialExpenses={initialExpenses}/>
    </div>

    <div style={{display:'flex', justifyContent:'end', marginTop:'1rem'}}>
      <p>
        총지출:
        <span>원</span>
      </p>
    </div>
  </main>

  );
}

export default App;
