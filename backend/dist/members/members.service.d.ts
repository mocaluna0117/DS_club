import { PrismaService } from '../prisma/prisma.service';
import { CreateMemberInput, UpdateMemberInput } from './member.input';
export declare class MembersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        role: string;
        grade: number;
        bio: string | null;
        imageUrl: string | null;
        github: string | null;
        twitter: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__MemberClient<{
        name: string;
        role: string;
        grade: number;
        bio: string | null;
        imageUrl: string | null;
        github: string | null;
        twitter: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(input: CreateMemberInput): import(".prisma/client").Prisma.Prisma__MemberClient<{
        name: string;
        role: string;
        grade: number;
        bio: string | null;
        imageUrl: string | null;
        github: string | null;
        twitter: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, input: UpdateMemberInput): import(".prisma/client").Prisma.Prisma__MemberClient<{
        name: string;
        role: string;
        grade: number;
        bio: string | null;
        imageUrl: string | null;
        github: string | null;
        twitter: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__MemberClient<{
        name: string;
        role: string;
        grade: number;
        bio: string | null;
        imageUrl: string | null;
        github: string | null;
        twitter: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
