import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const courseRouter = createTRPCRouter({
  courses: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.course.findMany({
      include: {
        chapters: true,
      }
    });
  }),
  findCouse: publicProcedure.input(z.object({
    id: z.number()
  })).query(({ctx, input}) => {
    return ctx.prisma.course.findFirst({
      where: {
        id: input.id
      },
      include: {
        chapters: true
      }
    })
  }),
  chapter: publicProcedure.input(z.object({ courseId: z.number() })).query(({ctx, input}) => {
    return ctx.prisma.chapter.findMany({
      where: {
        courseId: input.courseId
      }, include: {
        lessons: true
      },
    })
  }),
  lessons: publicProcedure.input(z.object({ chapterId: z.number() })).query(({ctx, input}) => {
    return ctx.prisma.lesson.findMany({
      where: {
        chapterId: input.chapterId
      }
    })
  }),
  getLesson: publicProcedure.input(z.object({ lessonId: z.number() })).query(({ctx, input}) => {
    return ctx.prisma.lesson.findUnique({
      where: {
        id: input.lessonId
      }
    })
  }),
});
