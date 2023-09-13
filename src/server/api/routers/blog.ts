import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";

export const blogRouter = createTRPCRouter({
	getAll: publicProcedure
		.input(z.object({ filter: z.object({ tags: z.array(z.string()).optional() }).optional() }))
		.query(async ({ input, ctx }) => {
			const data = await ctx.prisma.blog.findMany({
				where: { tags: { hasEvery: input.filter?.tags || [] } },
				orderBy: [{ createdAt: "desc" }, { updatedAt: "desc" }],
			});
			return data;
		}),
	getBySlug: publicProcedure.input(z.string()).query(({ input, ctx }) => {
		return ctx.prisma.blog.findFirst({ where: { slug: input } });
	}),
});
