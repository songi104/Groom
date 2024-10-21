import './App.css';
import ExpenseForm from './components/ExpenseForm';


function App() {
  return ( 
  <main>
    <h1>예산 계산기</h1>

    <div style={{width: '100%', background:'white', padding:'1rem'}}>
<ExpenseForm/>
    </div>

    <div style={{width: '100%', background:'white', padding:'1rem'}}>
      Expense List
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
