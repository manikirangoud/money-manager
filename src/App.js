import './App.css';
import React, { Fragment } from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import HistoryDashBoard from './components/HistoryDashBoard';
import Dashboard from './components/Dashboard';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import RecurringTransactionsDashBoard from './components/RecurringTransactionsDashboard';
import DaysLeftDashBoard from './components/DaysLeftDashBoard';

function App() {

  return (
    <div className='App'>

      <Header/>

        {/* <Routes>
          <Route exact path='/history' element={<HistoryDashBoard/>} />
          <Route exact path='*' element={<Dashboard/>} />
        </Routes>  */}


      <Tab.Container id="left-tabs-example" defaultActiveKey="recurring">
        <Row className='p-0'>
          <Col sm={3} className="p-0 mt-3">
            <Nav variant="pills" className="flex-column ps-2" navbar="true">
              <Nav.Item>
                <Nav.Link eventKey="recurring">Recurring Transactions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="days-left">Days Left</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="accounts">Accounts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="history">History</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          
          <Col sm={9}  className="p-0">
            <Tab.Content>
              <Tab.Pane eventKey="recurring">
                <RecurringTransactionsDashBoard/>
                {/* <Routes>
                  <Route exact path='*' element={<Dashboard/>} />
                </Routes>  */}
              </Tab.Pane>

              <Tab.Pane eventKey="days-left">
                <DaysLeftDashBoard/>
                {/* <Routes>
                  <Route exact path='*' element={<Dashboard/>} />
                </Routes>  */}
              </Tab.Pane>

              <Tab.Pane eventKey="accounts">
                <Dashboard/>
                {/* <Routes>
                  <Route exact path='*' element={<Dashboard/>} />
                </Routes>  */}
              </Tab.Pane>

              <Tab.Pane eventKey="history">
                <HistoryDashBoard/>
                {/* <Routes>
                  <Route exact path='/history' element={<HistoryDashBoard/>} />
                </Routes>  */}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <div className='footer' style={{minHeight: '10vh'}}></div>
    </div>
  );
}

export default App;
