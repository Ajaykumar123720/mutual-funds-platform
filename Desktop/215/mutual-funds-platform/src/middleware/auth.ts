import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Extend Express Request type to include user property
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

const secretKey = process.env.JWT_SECRET || 'your_secret_key';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err: Error | null, decoded: JwtPayload | string | undefined) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        (req as any).user = decoded;
        next();
    });
};

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if ((req as any).user) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};

export const authMiddleware = authenticate;