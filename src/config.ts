import { IState } from "./interfaces/IState"
import { GetFirstOfCurrentMonth, GetFirstOfNextMonth } from "./utilities/DateTime"

export const InitialState: IState = {
    userBalance: 0,
    destinationWalletAddress: "0QDVBOnE8bm6B_CWKwUUZ2NTIt56V6gVdMMDTHiTfjkS0OEs",
    destinationWalletTransactions: [],
    periodStartDate: GetFirstOfCurrentMonth(),
    periodEndDate: GetFirstOfNextMonth(),
    defaultTransactionComment: "Made with ♥ by Dean Martin",
    carouselItems: [
        {
            title: "Jackpot!",
            subtitle: (7594280).toLocaleString() + ' TON',
            backgroundImageUrl: "banner_2.jpeg"
        },
        {
            title: "Provably Fair",
            subtitle: "Trust Every Play!",
            backgroundImageUrl: "banner_1.jpg"
        }
    ],
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
    transactionRefetchIntervalInMs: (1000 * 10)
}

//     const { connected, getTransactions } = useTonConnect();