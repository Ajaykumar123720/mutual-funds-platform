import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { adminRoutes } from '../src/routes/adminRoutes';
import { investorRoutes } from '../src/routes/investorRoutes';
import { advisorRoutes } from '../src/routes/advisorRoutes';
import { analyticsRoutes } from '../src/routes/analyticsRoutes';
import { authMiddleware } from '../src/middleware/auth';
import { roleValidationMiddleware } from '../src/middleware/roleValidation';

const app = express();
const baseDir = process.cwd();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(baseDir, 'public')));

app.get('/', (req: Request, res: Response) => {
    const filePath = path.join(baseDir, 'public/index.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(`Error loading ${filePath}:`, err.message);
            res.status(500).json({ error: err.message, path: filePath });
        }
    });
});

app.get('/investor', (req: Request, res: Response) => {
    const filePath = path.join(baseDir, 'views/investor/index.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(`Error loading ${filePath}:`, err.message);
            res.status(500).json({ error: err.message, path: filePath });
        }
    });
});

app.get('/advisor', (req: Request, res: Response) => {
    const filePath = path.join(baseDir, 'views/advisor/index.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(`Error loading ${filePath}:`, err.message);
            res.status(500).json({ error: err.message, path: filePath });
        }
    });
});

app.get('/admin', (req: Request, res: Response) => {
    const filePath = path.join(baseDir, 'views/admin/index.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(`Error loading ${filePath}:`, err.message);
            res.status(500).json({ error: err.message, path: filePath });
        }
    });
});

app.get('/analytics', (req: Request, res: Response) => {
    const filePath = path.join(baseDir, 'views/analytics/index.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(`Error loading ${filePath}:`, err.message);
            res.status(500).json({ error: err.message, path: filePath });
        }
    });
});

app.use('/api/admin', adminRoutes());
app.use('/api/investor', investorRoutes());
app.use('/api/advisor', advisorRoutes());
app.use('/api/analytics', analyticsRoutes());

app.get('/health', (req: Request, res: Response) => {
    res.json({ message: 'Server is healthy' });
});

app.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error', error: err.message });
});

module.exports = app;
