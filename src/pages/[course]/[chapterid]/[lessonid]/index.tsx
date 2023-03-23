import { NextPage } from "next";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

const LessonId: NextPage = () => {
  const router = useRouter();
  const {lessonid} = router.query;
  const id = parseInt(lessonid as string);
  const lessons = api.course.getLesson.useQuery({ lessonId: id})
  console.log(lessons);
  return (
     <div className="w-[100%] flex flex-col gap-5 items-center mt-1 py-10 bg-blue-100">
      <h1 className="text-4xl text-blue-500 hover:text-blue-600">{`Lesson ${id}`}</h1>
      <div 
        className="block bg-violet-200 px-4 py-2 rounded-md text-violet-800 hover:bg-violet-300 hover:cursor-pointer">
    <h2>{lessons?.data?.description}</h2> 
    </div></div>
  )
}

export default LessonId
