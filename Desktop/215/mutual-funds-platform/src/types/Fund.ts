export interface Fund {
    id: string;
    name: string;
    type: string;
    riskLevel: 'low' | 'medium' | 'high';
    performanceMetrics: {
        oneYearReturn: number;
        threeYearReturn: number;
        fiveYearReturn: number;
        expenseRatio: number;
    };
    inceptionDate: Date;
    minimumInvestment: number;
    description: string;
    holdings: Array<{
        asset: string;
        percentage: number;
    }>;
}