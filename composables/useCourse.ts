import { CourseOutline } from '~~/server/api/course/meta.get';

export default async () => {
  
  const hello = useFetchWithCache<CourseOutline>('/api/course/meta');
  console.log(hello)
  return hello;

}
