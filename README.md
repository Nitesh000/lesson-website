# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

### Description of the application

---

#### Tech Used

- T3 stack (Next js, Typescript, trpc, prisma, Tailwindcss)
- Database (Postgresql)

#### What have i done here?

- I just pust a site where you can add some of the courses.
- Inside every chapter it will have some chapters.
- And each chapters will contain some lessons.

#### How does it work?

- First it will go to the home page where it will show the chapters which are present in the postgresql.
- It uses trpc to fetch the data, with the help of Prisma(ORM) to get the data from the database.
- Then it send the data and it just get prints in the html.

#### The Dynamic routes.

- The url of the chapters follows.
- BASE_URL/[course_id]/[chapter_id]/[lesson_id]

#### Database Structure.

- Course model will contain the title and chapter[].
- Chapter model will contain the title and lesson[].
- Lesson model will contain the title and description of the lesson.
- Some screenshots of the database.[click here](https://drive.google.com/drive/u/1/folders/1eT4OCW_GsJHjCmc3RXKKERtogLi2EtGr)
