import { Request, Response } from 'express';
import { AnalyticsService } from '../services/analyticsService';

export class AnalyticsController {
    private analyticsService: AnalyticsService;

    constructor() {
        this.analyticsService = new AnalyticsService();
    }

    public getInvestmentTrends(req: Request, res: Response): void {
        try {
            const trends = this.analyticsService.getInvestmentTrends();
            res.status(200).json(trends);
        } catch (error) {
            res.status(500).json({ message: 'Error analyzing investment trends', error });
        }
    }

    public getFundPerformance(req: Request, res: Response): void {
        try {
            const { fundId } = req.query;
            const performance = this.analyticsService.getFundPerformance(fundId as string);
            res.status(200).json(performance);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching fund performance', error });
        }
    }

    public generateReport(req: Request, res: Response): void {
        try {
            const report = this.analyticsService.generateReport();
            res.status(200).json(report);
        } catch (error) {
            res.status(500).json({ message: 'Error generating report', error });
        }
    }

    public async analyzeInvestmentTrends(req: Request, res: Response): Promise<void> {
        try {
            const trends = await this.analyticsService.getInvestmentTrendsAsync();
            res.status(200).json(trends);
        } catch (error) {
            res.status(500).json({ message: 'Error analyzing investment trends', error });
        }
    }

    public async updateFundPerformance(req: Request, res: Response): Promise<void> {
        try {
            const { fundId, performanceData } = req.body;
            await this.analyticsService.updatePerformanceData(fundId, performanceData);
            res.status(200).json({ message: 'Fund performance updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating fund performance', error });
        }
    }
}