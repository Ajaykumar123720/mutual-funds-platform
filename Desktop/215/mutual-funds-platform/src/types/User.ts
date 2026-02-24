export interface User {
    username: string;
    password: string;
    role: 'admin' | 'investor' | 'advisor';
    investmentPreferences?: {
        riskTolerance: 'low' | 'medium' | 'high';
        preferredFunds?: string[];
    };
}