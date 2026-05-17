import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginInput } from './auth.input';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(input: LoginInput): Promise<{
        accessToken: string;
        adminName: string;
    }>;
    createAdmin(email: string, password: string, name: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        passwordHash: string;
    }>;
}
