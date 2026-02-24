import { Router } from 'express';
import { InvestorController } from '../controllers/investorController';
import { authenticate } from '../middleware/auth';
import { validateInvestorRole } from '../middleware/roleValidation';

const investorController = new InvestorController();

export const investorRoutes = () => {
    const router = Router();

    router.use(authenticate);
    router.use(validateInvestorRole);

    // Route to explore mutual funds
    router.get('/funds', (req, res) => investorController.exploreFunds(req, res));

    // Route to compare mutual fund options
    router.post('/funds/compare', (req, res) => investorController.compareFunds(req, res));

    // Route to manage investments
    router.post('/investments', (req, res) => investorController.manageInvestment(req, res));

    // Route to get portfolio
    router.get('/portfolio', (req, res) => investorController.viewPortfolio(req, res));

    return router;
};