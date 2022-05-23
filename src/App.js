import './App.css';
import React, { useEffect } from 'react'
import BankCard from './components/BankCard';
import StockCard from './components/StockCard';
import { VaultType, Constants } from './constants.tsx';
import AddTransaction from './components/AddTransaction';
import CreditCard from './components/CreditCard';
import { Button } from 'react-bootstrap';
import AddVault from './components/AddVault';
import { db } from './helpers/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Transactions from './components/Transactions';
import Header from './components/Header';
import Authentication from './components/Authentication';

function App() {

  const vaultsRef = collection(db, "vaults");
  const [vaults, setVaults] = React.useState([]);
  const [showAddVault, setShowAddVault] = React.useState(false);
  const [showAddTransaction, setShowAddTransaction] = React.useState(false);
  const [vaultId, setVaultId] = React.useState('');
  const [selectedVault, setSelectedVault] = React.useState({});
  const [authenticated, setAuthenticated] = React.useState(false);

  const handleAddVault = (show) => {
    setShowAddVault(!show);
  }

  const handleAddTransaction = (show) => {
    setShowAddTransaction(!show);
  }

  useEffect(() => {
    const getVaults = async () => {
      const vaults = await getDocs(vaultsRef);
      setVaults(vaults.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    getVaults();
    if(!showAddTransaction){
      setSelectedVaultId(vaultId);
    }
  }, [showAddVault, showAddTransaction]);

  const setSelectedVaultId = (id) => {
    setVaultId(id);
    setSelectedVault(vaults.find(v => v.id == id));
    setShowAddTransaction(false);
  }


  return (
    <div className='App'>

     <Header/>

     {
        !authenticated ? <Authentication setAuthenticated={setAuthenticated}></Authentication> :
        ( <div className='d-flex justify-content-around flex-wrap p-4 bg-light'>

          <div style={{flex: 1}} className='d-flex flex-column align-items-center'>
              {vaults.map(v => {
                switch(v.type){
                  case VaultType.BANK_ACCOUNT:
                  case VaultType.CASH: return <BankCard bank={v} key={v.id} setVaultId={setSelectedVaultId} selectedVaultId={vaultId}></BankCard>;
                  case VaultType.STOCK: return <StockCard stock={v} key={v.id} setVaultId={setSelectedVaultId} selectedVaultId={vaultId}></StockCard>;
                  case VaultType.CREDIT: return <CreditCard credit={v} key={v.id} setVaultId={setSelectedVaultId} selectedVaultId={vaultId}></CreditCard>;
                }
              })}

            {showAddVault && <AddVault hideCard={handleAddVault} ></AddVault>}

            <div className='text-center mb-3'>
              <Button variant="dark" onClick={() => handleAddVault(showAddVault)}>{showAddVault ? Constants.CANCEL : Constants.ADD_VAULT}</Button>
            </div>

          </div>

          {/* <div className='hr-divider'></div> */}
          
        <div style={{flex: 1}} className='d-flex flex-column align-items-center'>
            { vaultId && <Transactions selectedVault={selectedVault} className='mb-3'></Transactions>}
            { showAddTransaction && <AddTransaction handleAddTransaction={handleAddTransaction} selectedVault={selectedVault}></AddTransaction>}
            <div className='text-center mb-3'>
              <Button variant="dark" onClick={() => handleAddTransaction(showAddTransaction)}>{showAddTransaction ? Constants.CANCEL : Constants.ADD_TRANSACTION}</Button>
            </div>      
        </div>
          
        </div>)}

      <div className='footer'></div>
    </div>
  );
}

export default App;
