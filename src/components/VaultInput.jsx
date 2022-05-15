import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { renderVaultOptions } from '../helpers/renderHelper';

interface Data{
    vaults: Array;
}

const VaultInput: React.FC<Data> = (vaults: Array) => {

    const [vaultType, setVaultType] = React.useState(1);

    function setSelectedVault(vId){
        const v = vaults.vaults.find(v => v.id == vId);
        if(v && v.type){
            setVaultType(v.type);
        }
    }
    
    
    return(
        <Card style={{ width: '40rem' }} className="mb-3">
            <Card.Header>
                <Card.Title>Add/ Remove data</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>
                    {/* <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                    </Form.Group> */}

                    <Form.Group className="mb-3">
                        <Form.Label>Select the vault</Form.Label>
                        <Form.Select onChange={(e) => setSelectedVault(e.target.value)} >
                            {vaults.vaults.map(v => {
                                return <option key={v.id} value={v.id}>{v.name}</option>;
                            })}
                        </Form.Select>
                    </Form.Group>

                    {vaultType > 0 && renderVaultOptions(vaultType)}

                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id="disabledFieldsetCheck"
                            label="Can't check this"
                        />
                    </Form.Group>

                    <Button type="submit" variant="dark">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}


export default VaultInput;