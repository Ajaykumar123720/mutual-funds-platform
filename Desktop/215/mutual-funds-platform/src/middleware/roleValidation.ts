import { Request, Response, NextFunction } from 'express';

const roleValidation = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user as any;
        const userRole = user?.role;

        if (!userRole || !roles.includes(userRole)) {
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }

        next();
    };
};

export const validateAdminRole = roleValidation(['admin']);
export const validateAdvisorRole = roleValidation(['advisor']);
export const validateInvestorRole = roleValidation(['investor']);
export const validateAnalystRole = roleValidation(['analyst']);
export const roleValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    next();
};

export default roleValidation;