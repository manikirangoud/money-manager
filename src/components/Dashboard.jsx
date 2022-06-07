import React, { useEffect } from "react";
import BankCard from './BankCard';
import StockCard from './StockCard';
import { VaultType, Constants } from '../constants.tsx';
import AddTransaction from './AddTransaction';
import CreditCard from './CreditCard';
import { Button } from 'react-bootstrap';
import AddVault from './AddVault';
import Transactions from './Transactions';
import Authentication from './Authentication';
import { useDispatch, useSelector } from "react-redux";
import { getVaultsInit, updateSelectedVaultIdInit, updateSelectedVaultInit } from "../redux/actions/vaultActions";
import { async } from "@firebase/util";
//const pdfjs = require('pdfjs-dist/es5/build/pdf');
// import * as pdfjs from "pdfjs-dist/build/pdf";

// async function getContent(src){
//   const doc = await pdfjs.getDocument(src).promise;
//   const page = await doc.getPage(2);
//   return await page.getTextContent();
// }

// async function getItems(src){
//   const content = await getContent(src);
//   const items = content.items.map((item) => {
//     console.log("pdf content: ", item);
//   });
// }


// getItems('./doc.pdf');





const Dashboard: React.FC = () => {

  const [showAddVault, setShowAddVault] = React.useState(false);
  const [showAddTransaction, setShowAddTransaction] = React.useState(false);
  //const [authenticated, setAuthenticated] = React.useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVaultsInit());
  }, []);
  
  const vaultData = useSelector(state => state.vaultData);
  const vaults = vaultData && vaultData.vaults;
  const vaultId = vaultData && vaultData.selectedVaultId;
  const selectedVault = vaultData && vaultData.selectedVault;

  const userData = useSelector(state => state.userData);
  const isAuthenticated = userData && userData.isAuthenticated;

  // console.log(vaultId, selectedVault);

  const handleAddVault = (show) => {
    setShowAddVault(!show);
  }

  const handleAddTransaction = (show) => {
    setShowAddTransaction(!show);
  }

  const setSelectedVaultId = (id) => {
    dispatch(updateSelectedVaultIdInit(id));
    dispatch(updateSelectedVaultInit(vaults.find(v => v.id === id)));
    setShowAddTransaction(false);
  }

  return (!isAuthenticated ? <Authentication/> :
    (
      <div className='d-flex justify-content-around flex-wrap p-4 bg-light' style={{minHeight: '80vh'}}>
        <div style={{ flex: 1 }} className='d-flex flex-column align-items-center'>
          {vaults && vaults.map(v => {
            switch (v.type) {
              case VaultType.BANK_ACCOUNT:
              case VaultType.CASH: return <BankCard bank={v} key={v.id} setVaultId={setSelectedVaultId} selectedVaultId={vaultId} handleAddTransaction={handleAddTransaction}></BankCard>;
              case VaultType.STOCK: return <StockCard stock={v} key={v.id} setVaultId={setSelectedVaultId} selectedVaultId={vaultId} handleAddTransaction={handleAddTransaction}></StockCard>;
              case VaultType.CREDIT: return <CreditCard credit={v} key={v.id} setVaultId={setSelectedVaultId} selectedVaultId={vaultId} handleAddTransaction={handleAddTransaction}></CreditCard>;
            }
          })}

          {showAddVault && <AddVault hideCard={handleAddVault} ></AddVault>}

          <div className='text-center mb-3' style={{width: '22rem'}}>
            <Button style={{width: '20rem'}} variant="outline-dark" size='sm' onClick={() => handleAddVault(showAddVault)}>{showAddVault ? Constants.CANCEL : Constants.ADD_VAULT}</Button>
          </div>

        </div>

        {/* <div className='hr-divider'></div> */}

        {/* <div style={{ flex: 1 }} className='d-flex flex-column align-items-center'>
          {vaultId && <Transactions selectedVault={selectedVault} className='mb-3'></Transactions>}
          {showAddTransaction && <AddTransaction handleAddTransaction={handleAddTransaction} selectedVault={selectedVault}></AddTransaction>}
          <div className='text-center mb-3'>
            <Button variant="dark" onClick={() => handleAddTransaction(showAddTransaction)}>{showAddTransaction ? Constants.CANCEL : Constants.ADD_TRANSACTION}</Button>
          </div>
        </div> */}

      </div>
    ));
}




export default Dashboard;