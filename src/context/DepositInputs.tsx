import { createContext, useContext } from "react"

export const Deposit = {
  duration: 4,
  percent: 6,
  sum: 100000,
  monthly: 10000,
  withoutFirstMonth: false,
  longation: 0,
  percentDestination: 'deposit'
}

export type DepositDefaultContext = {
  deposit: typeof Deposit,
  setContextValue: (newDeposit: typeof Deposit) => void
}

export const DepositContext = createContext<DepositDefaultContext>({
  deposit: Deposit,
  setContextValue: () => {}
})
export const useDepositContext = () => useContext(DepositContext)