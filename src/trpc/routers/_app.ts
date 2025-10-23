import { createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
import { inngest } from '@/inngest/client'

export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query((ctx) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async() => {
    await inngest.send({
      name: 'test/helloworld',
      data: {
        email: "shuja@gmail.com"
      }
    })
    return prisma.workflow.create({
      data: {
        name: 'test-workflow',
      },
    });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
