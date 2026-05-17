import { ContactService } from './contact.service';
import { CreateContactInput } from './contact.input';
export declare class ContactResolver {
    private readonly contactService;
    constructor(contactService: ContactService);
    sendContact(input: CreateContactInput): import(".prisma/client").Prisma.Prisma__ContactClient<{
        name: string;
        id: number;
        createdAt: Date;
        email: string;
        message: string;
        read: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: number;
        createdAt: Date;
        email: string;
        message: string;
        read: boolean;
    }[]>;
    markContactRead(id: number): import(".prisma/client").Prisma.Prisma__ContactClient<{
        name: string;
        id: number;
        createdAt: Date;
        email: string;
        message: string;
        read: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
