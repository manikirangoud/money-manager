import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { db } from '../helpers/firebase';
import { collection, addDoc } from 'firebase/firestore';
import BankVault from '../DataObjects/BankVault.ts';
import { VaultType, CommonFeilds, CreditFeilds, Constants } from '../constants.tsx';
import { renderVaults } from '../helpers/renderHelper';

interface Data{
  show: false;
  showCard: () => void;
}

const AddVault: React.FC<Data> = (props) => {

  const vaultsRef = collection(db, "vaults");
  const [formData, updateFormData] = React.useState(BankVault);
  const [balanceOrLimit, setBalanceOrLimit] = React.useState(CommonFeilds.BALANCE);
  
  function addVault(){
    addDoc(vaultsRef, formData);
    props.hideCard(true);
  }

  const handleChange = (e) => {

    if(e.target.name === CommonFeilds.TYPE){
        if(Number(e.target.value.trim()) === VaultType.CREDIT){
          setBalanceOrLimit(CreditFeilds.LIMIT);
        }else{
          setBalanceOrLimit(CommonFeilds.BALANCE);
        }
    }

    updateFormData({
      ...formData,
      [e.target.name]: (e.target.name === CommonFeilds.TYPE || e.target.name === CommonFeilds.BALANCE) ? Number(e.target.value.trim()) : e.target.value.trim()
    });
  };
    
  return (
    <>
      <Card style={{ width: '20rem' }} className="mb-3">

        <Card.Header>
          <Card.Title>Add a new vault</Card.Title>
        </Card.Header>

        <Card.Body>
          <Form>
            {renderVaults(handleChange)}

            <Form.Group className="mb-3">
              <Form.Label>Vault name</Form.Label>
              <Form.Control
                name={CommonFeilds.NAME}
                placeholder="Vault name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Vault {balanceOrLimit}</Form.Label>
              <Form.Control
                type="number"
                name={balanceOrLimit}
                placeholder="0.00"
                min={0.00}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Vault description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleChange} name={CommonFeilds.DESCRIPTION}/>
            </Form.Group>

          </Form>
        </Card.Body>

        <Card.Footer className='text-end'>
          <Button variant="dark" onClick={(e) => {addVault(e)}}>
           {Constants.SAVE_CHANGES}
          </Button>
        </Card.Footer>

      </Card>
    </>
  );
}
  
export default AddVault;