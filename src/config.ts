import { MainViews } from "./enums/MainViews"
import { IState } from "./interfaces/IState"
import { GetFirstOfCurrentMonth, GetFirstOfNextMonth } from "./utilities/DateTime"

export const InitialState: IState = {
    userBalance: 0,
    destinationFriendlyWalletAddress: "EQDVBOnE8bm6B_CWKwUUZ2NTIt56V6gVdMMDTHiTfjkS0Adj",
    periodStartDate: GetFirstOfCurrentMonth(),
    periodEndDate: GetFirstOfNextMonth(),
    defaultTransactionComment: "Made with ♥ by Dean Martin",
    carouselInvervalInMs: 5000,
    purchaseOptions: [
        {
            title: "1 TON",
            subtitle: "Buy Now!",
            amount: 1
        },
        {
            title: "2 TON",
            subtitle: "Buy Now!",
            amount: 2
        },
        {
            title: "5 TON",
            subtitle: "Buy Now!",
            amount: 5
        },
        {
            title: "10 TON",
            subtitle: "Buy Now!",
            amount: 10
        },
        {
            title: "50 TON",
            subtitle: "Buy Now!",
            amount: 50
        },
        {
            title: "100 TON",
            subtitle: "Buy Now!",
            amount: 100
        }
    ],
    defaultMainView: MainViews.Bets,
    transactionsQuery: {
        isFetching: false,
        refreshIntervalInMs: (1000 * 10),
        data: []
    },
    enableTonTestNetwork: true,
    jackpotAmount: 0
}