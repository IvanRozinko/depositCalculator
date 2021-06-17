import React, { useState } from 'react';
import DepositCalc from './components/DepositCalc/DepositCalc';
import { DepositContext, Deposit } from './context/DepositInputs';

function App() {
  const [deposit, setState] = useState({ ...Deposit });

  const setContextValue = (newDeposit: typeof Deposit) => {
    setState({ 
      ...deposit,
      ...newDeposit
    });
  }

  return (
    <DepositContext.Provider value={{ deposit, setContextValue }}>
      <DepositCalc />
    </DepositContext.Provider>
  );
}

export default App;
