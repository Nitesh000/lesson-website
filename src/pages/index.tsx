import { type NextPage } from "next";
import { useRouter } from "next/router";
import {api} from "../utils/api";

const Home: NextPage = () => {
  const router = useRouter();

  const getCourses = api.course.courses.useQuery();

  return (
     <div className="w-[100%] flex flex-col gap-5 items-center mt-1 py-10 bg-blue-100">
      <h1 className="text-4xl text-blue-500 hover:text-blue-600">Courses</h1>
      {getCourses?.data?.map((course) => (
      <div 
        className="block bg-violet-200 px-4 py-2 rounded-md text-violet-800 hover:bg-violet-300 hover:cursor-pointer"
          key={course.id} onClick={() => router.push(`/${course.id}`)}>
    <h2>{course.title}</h2> 
      </div>))}
    </div>
  )
};

export default Home;
