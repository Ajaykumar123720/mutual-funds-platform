export class User {
    username: string;
    password: string;
    role: 'admin' | 'investor' | 'advisor';
    investmentPreferences: string[];

    constructor(username: string, password: string, role: 'admin' | 'investor' | 'advisor', investmentPreferences: string[]) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.investmentPreferences = investmentPreferences;
    }
}