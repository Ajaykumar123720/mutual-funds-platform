import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { adminRoutes } from './routes/adminRoutes';
import { investorRoutes } from './routes/investorRoutes';
import { advisorRoutes } from './routes/advisorRoutes';
import { analyticsRoutes } from './routes/analyticsRoutes';
import { authMiddleware } from './middleware/auth';
import { roleValidationMiddleware } from './middleware/roleValidation';

const app = express();
const PORT = process.env.PORT || 3000;

// Use process.cwd() to get the project root directory
const baseDir = process.cwd();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(baseDir, 'public')));

// Serve index.html at root
app.get('/', (req: Request, res: Response) => {
    const filePath = path.join(baseDir, 'public/index.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(`Error loading ${filePath}:`, err.message);
            res.status(500).json({ error: err.message, path: filePath });
        }
    });
});

// Role-based dashboard routes
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

// API Routes
app.use('/api/admin', adminRoutes());
app.use('/api/investor', investorRoutes());
app.use('/api/advisor', advisorRoutes());
app.use('/api/analytics', analyticsRoutes());

// Health check route
app.get('/health', (req: Request, res: Response) => {
    res.json({ message: 'Server is healthy' });
});

// 404 handler
app.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Export the app for serverless deployment (Vercel)
module.exports = app;