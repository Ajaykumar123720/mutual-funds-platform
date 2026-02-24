export class AnalyticsData {
    public investmentTrends: Array<{ date: string; trend: number }>;
    public performanceMetrics: Array<{ fundId: string; metric: number }>;
    public riskAnalysis: Array<{ fundId: string; riskLevel: string }>;
    public totalInvestments: number;

    constructor(
        investmentTrends: Array<{ date: string; trend: number }>,
        performanceMetrics: Array<{ fundId: string; metric: number }>,
        riskAnalysis: Array<{ fundId: string; riskLevel: string }>,
        totalInvestments: number = 0
    ) {
        this.investmentTrends = investmentTrends;
        this.performanceMetrics = performanceMetrics;
        this.riskAnalysis = riskAnalysis;
        this.totalInvestments = totalInvestments;
    }
    
    public addInvestmentTrend(date: string, trend: number): void {
        this.investmentTrends.push({ date, trend });
    }

    public addPerformanceMetric(fundId: string, metric: number): void {
        this.performanceMetrics.push({ fundId, metric });
    }

    public addRiskAnalysis(fundId: string, riskLevel: string): void {
        this.riskAnalysis.push({ fundId, riskLevel });
    }
}