import { Request, Response } from 'express';
import { Fund } from '../models/Fund';
import { Investment } from '../models/Investment';
import { UserService } from '../services/userService';
import { FundService } from '../services/fundService';

export class InvestorController {
    private userService: UserService;
    private fundService: FundService;

    constructor() {
        this.userService = new UserService();
        this.fundService = new FundService();
    }

    async exploreFunds(req: Request, res: Response) {
        try {
            const funds = this.fundService.getAllFunds();
            res.status(200).json(funds);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching funds', error });
        }
    }

    async compareFunds(req: Request, res: Response) {
        const { fundIds } = req.body;
        try {
            const funds = this.fundService.getFundsByIds(fundIds);
            res.status(200).json(funds);
        } catch (error) {
            res.status(500).json({ message: 'Error comparing funds', error });
        }
    }

    async manageInvestment(req: Request, res: Response) {
        const { userId, fundId, amount } = req.body;
        try {
            const investment = new Investment(userId, fundId, amount, new Date());
            res.status(201).json({ message: 'Investment created successfully', investment });
        } catch (error) {
            res.status(500).json({ message: 'Error managing investment', error });
        }
    }

    async viewPortfolio(req: Request, res: Response) {
        const { userId } = req.query;
        try {
            res.status(200).json({ message: 'Portfolio retrieved', userId });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching portfolio', error });
        }
    }
}