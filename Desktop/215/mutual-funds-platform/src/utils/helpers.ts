export function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
}

export function validateEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function calculateRiskLevel(investmentAmount: number, fundRisk: number): string {
    if (investmentAmount < 1000) {
        return 'Low Risk';
    } else if (fundRisk > 7) {
        return 'High Risk';
    } else {
        return 'Moderate Risk';
    }
}

export function parseDate(dateString: string): Date {
    return new Date(dateString);
}

export function generateReportId(): string {
    return 'report-' + Math.random().toString(36).substr(2, 9);
}