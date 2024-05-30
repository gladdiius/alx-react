import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  // Convert the grades object to an Immutable.js Seq
  const gradesSeq = Seq(grades);

  // Filter students with a score >= 70
  const bestStudents = gradesSeq.filter((student) => student.score >= 70);

  // Transform the students' names to have the first letter capitalized
  const capitalizedBestStudents = bestStudents.map((student) => ({
    ...student,
    firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
    lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
  }));

  // Convert the result back to a JavaScript object and print it
  console.log(capitalizedBestStudents.toJS());
}
