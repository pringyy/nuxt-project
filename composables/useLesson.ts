import { LessonWithPath } from '~~/types/course';

export default async (
  chapterSlug: string,
  lessonSlug: string
) => {
  const Object = useFetchWithCache<LessonWithPath>(
    `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  );
  console.log("hello", Object)
  return Object;
}
