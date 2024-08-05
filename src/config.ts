import { IState } from "./interfaces/IState"

const getFirstOfMonth = (year: number, month: number): Date => {
    return new Date(year, month, 1);
}
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const firstOfCurrentMonth = getFirstOfMonth(currentYear, currentMonth);
const firstOfNextMonth = currentMonth === 11 
    ? getFirstOfMonth(currentYear + 1, 0)
    : getFirstOfMonth(currentYear, currentMonth + 1);

export const InitialState: IState = {
    userBalance: 0,
    destinationWalletAddress: "0QDVBOnE8bm6B_CWKwUUZ2NTIt56V6gVdMMDTHiTfjkS0OEs",
    destinationWalletTransactions: [],
    periodStartDate: firstOfCurrentMonth,
    periodEndDate: firstOfNextMonth,
    defaultTransactionComment: "Made with ♥ by Dean Martin"
}