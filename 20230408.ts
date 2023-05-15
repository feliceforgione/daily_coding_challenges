/* create a function getStudents that takes in one argument classroom. 
classroom will contain a boolean value called `hasTeachingAssistant` and `classList` array of people in classroom
the first value in `classList` will be the teacher, if `hasTeachingAssistant` is true then the second value in `classList` will be a teaching assistant, the remaining values will be students
*/

interface Classroom {
  hasTeachingAssistant: boolean;
  classList: string[];
}

const getStudents = (classroom: Classroom): string[] => {
  const { hasTeachingAssistant, classList } = classroom;
  let teacher: string, teacherAssistant: string, students: string[];
  hasTeachingAssistant
    ? ([teacher, teacherAssistant, ...students] = classList)
    : ([teacher, ...students] = classList);
  return students;
};

const classroom1 = {
  hasTeachingAssistant: true,
  classList: ["teacher", "assistant", "student1", "student2", "student3"],
};
const classroom2 = {
  hasTeachingAssistant: false,
  classList: ["teacher", "student1", "student2", "student3"],
};

console.log(getStudents(classroom1));
console.log(getStudents(classroom2));
