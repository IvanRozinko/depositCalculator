import React, { useState } from 'react';
import DepositCalc from './components/DepositCalc/DepositCalc';
import { DepositContext, Deposit, IDeposit } from './context/DepositInputs';

function App() {
  const [deposit, setState] = useState<IDeposit>({ ...Deposit });

  const setContextValue = (newDeposit: IDeposit) => {
    setState({ 
      ...deposit,
      ...newDeposit,
    });
  }

  return (
    <DepositContext.Provider value={{ deposit, setContextValue }}>
      <DepositCalc />
    </DepositContext.Provider>
  );
}

export default App;
