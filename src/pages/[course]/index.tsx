import { NextPage } from "next";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

const CourseId: NextPage = () => {
  const router= useRouter();
  const {course} = router.query;
  const id = parseInt(course as string);

  const getChapters = api.course.chapter.useQuery({courseId:id });
  return (
     <div className="w-[100%] flex flex-col gap-5 items-center mt-1 py-10 bg-blue-100">
      <h1 className="text-4xl text-blue-500 hover:text-blue-600">{`Course ${id}`}</h1>
      {getChapters?.data?.map((chapter) => (
      <div 
        className="block bg-violet-200 px-4 py-2 rounded-md text-violet-800 hover:bg-violet-300 hover:cursor-pointer"
          key={chapter.id} onClick={() => router.push(`/${chapter.courseId}/${chapter.id}`)}>
    <h2>{chapter.title}</h2> 
      </div>))}
    </div>
  )
}
export default CourseId;
