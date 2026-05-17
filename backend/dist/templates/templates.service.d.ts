import { PrismaService } from '../prisma/prisma.service';
import { PostType } from '../posts/post.model';
export declare class TemplatesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(type?: PostType): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: number;
        createdAt: Date;
        type: import(".prisma/client").$Enums.PostType;
        content: string;
        titleTemplate: string;
    }[]>;
    create(name: string, type: PostType, titleTemplate: string, content: string): import(".prisma/client").Prisma.Prisma__TemplateClient<{
        name: string;
        id: number;
        createdAt: Date;
        type: import(".prisma/client").$Enums.PostType;
        content: string;
        titleTemplate: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TemplateClient<{
        name: string;
        id: number;
        createdAt: Date;
        type: import(".prisma/client").$Enums.PostType;
        content: string;
        titleTemplate: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
