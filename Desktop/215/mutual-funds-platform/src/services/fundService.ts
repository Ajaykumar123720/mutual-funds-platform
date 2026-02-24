import { Fund } from '../models/Fund';

export class FundService {
    private fundData: Fund[] = [];

    getAllFunds(): Fund[] {
        return this.fundData;
    }

    getFundById(id: string): Fund | undefined {
        return this.fundData.find(fund => fund.id === id);
    }

    getFundsByIds(ids: string[]): Fund[] {
        return this.fundData.filter(fund => ids.includes(fund.id));
    }

    addFund(newFund: Fund): void {
        this.fundData.push(newFund);
    }

    updateFund(id: string, updatedFund: Partial<Fund>): boolean {
        const index = this.fundData.findIndex(fund => fund.id === id);
        if (index !== -1) {
            this.fundData[index] = { ...this.fundData[index], ...updatedFund };
            return true;
        }
        return false;
    }

    deleteFund(id: string): boolean {
        const index = this.fundData.findIndex(fund => fund.id === id);
        if (index !== -1) {
            this.fundData.splice(index, 1);
            return true;
        }
        return false;
    }
}