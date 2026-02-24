import { Router } from 'express';
import { AdminController } from '../controllers/adminController';
import { authenticate } from '../middleware/auth';
import { validateAdminRole } from '../middleware/roleValidation';

const adminController = new AdminController();

export const adminRoutes = () => {
    const router = Router();

    // Admin routes
    router.use(authenticate);
    router.use(validateAdminRole);

    router.get('/users', (req, res) => adminController.getAllUsers(req, res));
    router.post('/users', (req, res) => adminController.createUser(req, res));
    router.put('/users/:id', (req, res) => adminController.updateUser(req, res));
    router.delete('/users/:id', (req, res) => adminController.deleteUser(req, res));
    router.get('/content', (req, res) => adminController.getContent(req, res));
    router.post('/content', (req, res) => adminController.updateContent(req, res));
    router.get('/reports', (req, res) => adminController.generateReports(req, res));

    return router;
};