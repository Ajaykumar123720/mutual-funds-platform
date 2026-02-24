export class Investment {
    userId: string;
    fundId: string;
    amountInvested: number;
    investmentDate: Date;

    constructor(userId: string, fundId: string, amountInvested: number, investmentDate: Date) {
        this.userId = userId;
        this.fundId = fundId;
        this.amountInvested = amountInvested;
        this.investmentDate = investmentDate;
    }
}