import { createContext, useContext } from "react"

export interface IDeposit {
  duration: number,
  percent: number,
  sum: number,
  monthly: number,
  withoutFirstMonth: boolean,
  longation: number,
  percentDestination: string
}

export interface DepositDefaultContext{
  deposit: IDeposit
  setContextValue: (newDeposit: IDeposit) => void
}

export const Deposit: IDeposit = {
  duration: 4,
  percent: 6,
  sum: 100000,
  monthly: 10000,
  withoutFirstMonth: false,
  longation: 0,
  percentDestination: 'deposit'
}

export const DepositContext = createContext<DepositDefaultContext>({
  deposit: Deposit,
  setContextValue: (newDeposit: IDeposit):void => {}
})

export const useDepositContext = () => useContext<DepositDefaultContext>(DepositContext)