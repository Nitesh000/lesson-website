import { NextPage } from "next";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

const ChapterId: NextPage = () => {
  const router = useRouter();
  const {chapterid} = router.query;
  const id = parseInt(chapterid as string);
  const getLessons = api.course.lessons.useQuery({ chapterId: id})
  return (
     <div className="w-[100%] flex flex-col gap-5 items-center mt-1 py-10 bg-blue-100">
      <h1 className="text-4xl text-blue-500 hover:text-blue-600">{`Chapter ${id}`}</h1>
      {getLessons?.data?.map((lesson) => (
      <div 
        className="block bg-white  px-4 py-2 rounded-md text-violet-800"
          key={lesson.id} onClick={() => router.push(`${router.asPath}/${lesson.id}`)}>
    <h2>{lesson.title}</h2> 
      </div>))}
    </div>
  )
}
export default ChapterId;
