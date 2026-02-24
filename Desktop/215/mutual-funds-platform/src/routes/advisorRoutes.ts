import { Router } from 'express';
import { AdvisorController } from '../controllers/advisorController';
import { authenticate } from '../middleware/auth';
import { validateAdvisorRole } from '../middleware/roleValidation';

const advisorController = new AdvisorController();

export const advisorRoutes = () => {
    const router = Router();

    router.use(authenticate);
    router.use(validateAdvisorRole);

    router.get('/advice', (req, res) => advisorController.provideAdvice(req, res));
    router.post('/educational-content', (req, res) => advisorController.createEducationalContent(req, res));
    router.get('/select-fund', (req, res) => advisorController.assistInFundSelection(req, res));

    return router;
};