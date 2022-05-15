import './App.css';
import BankCard from './components/BankCard';
import StockCard from './components/StockCard';
import myData from './data.json';
import { VaultType } from './constants.tsx';
import VaultInput from './components/VaultInput';



function App() {

  let vaults = myData.vaults;

  return (
    <div className='d-flex justify-content-center flex-wrap p-5 bg-light'>
      <div className='me-5'>
        {vaults.map(v => {
          switch(v.type){
            case VaultType.BANK_ACCOUNT:
            case VaultType.CREDIT:
            case VaultType.CASH: return <BankCard bank={v} key={v.id}></BankCard>;
            case VaultType.STOCK: return <StockCard stock={v} key={v.id}></StockCard>;
          }
        })}
      </div>
      <VaultInput vaults={vaults}></VaultInput>
    </div>
  );
}

export default App;
