import { Router } from 'express';
import { AnalyticsController } from '../controllers/analyticsController';
import { authenticate } from '../middleware/auth';
import { validateAnalystRole } from '../middleware/roleValidation';

const analyticsController = new AnalyticsController();

export const analyticsRoutes = () => {
    const router = Router();

    router.use(authenticate);
    router.use(validateAnalystRole);

    router.get('/trends', (req, res) => analyticsController.getInvestmentTrends(req, res));
    router.get('/performance', (req, res) => analyticsController.getFundPerformance(req, res));
    router.post('/report', (req, res) => analyticsController.generateReport(req, res));

    return router;
};