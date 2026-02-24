import { User } from '../models/User';

export class UserService {
    private users: User[] = [];

    register(user: User): User {
        this.users.push(user);
        return user;
    }

    login(username: string, password: string): User | null {
        const user = this.users.find(u => u.username === username && u.password === password);
        return user || null;
    }

    updateProfile(username: string, updatedData: Partial<User>): User | null {
        const userIndex = this.users.findIndex(u => u.username === username);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
            return this.users[userIndex];
        }
        return null;
    }

    getUser(username: string): User | null {
        return this.users.find(u => u.username === username) || null;
    }
}