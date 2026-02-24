export class Fund {
    id: string;
    name: string;
    type: string;
    riskLevel: string;
    performanceMetrics: {
        oneYearReturn: number;
        threeYearReturn: number;
        fiveYearReturn: number;
        expenseRatio: number;
    };

    constructor(id: string, name: string, type: string, riskLevel: string, performanceMetrics: { oneYearReturn: number; threeYearReturn: number; fiveYearReturn: number; expenseRatio: number; }) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.riskLevel = riskLevel;
        this.performanceMetrics = performanceMetrics;
    }
}