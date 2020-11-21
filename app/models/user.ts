export interface User {
    id: number;
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
    display_name: string;
    avatar?: string;
    role?: 'admin' | 'moderator';
}

