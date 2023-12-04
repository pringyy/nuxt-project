export default async () => {
  const course = await useCourse();
  console.log(course)

  const firstChapter = course.value.chapters[0]
  const firstLesson = firstChapter.lessons[0];
  const path = `course/chapter/${firstChapter.slug}/lesson/${firstLesson.slug}`;

  return {
    lesson: firstLesson,
    path,
  };
};