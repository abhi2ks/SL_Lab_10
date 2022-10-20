const parser = require("simple-excel-to-json");
const doc = parser.parseXls2Json("./Example.xlsx")[0];

// console.log(doc);

const totalCGPA = doc.reduce((prevValue, currentValue) => {
  prevValue += currentValue.CGPA;
  return prevValue;
}, 0);

const avgCGPA = totalCGPA / doc.length;
console.log(avgCGPA);
console.log(totalCGPA);
// console.log(doc.length);

const gradedDocument = doc.map((student) => {
  if (student.CGPA > 9.5) {
    student.GRADE = "S";
  } else if (student.CGPA < 9.5 && student.CGPA > 9.0) {
    student.GRADE = "A";
  } else if (student.CGPA < 9.0 && student.CGPA > 8.5) {
    student.GRADE = "B";
  } else if (student.CGPA < 8.5 && student.CGPA > 8.0) {
    student.GRADE = "C";
  } else if (student.CGPA < 8.0 && student.CGPA > 7.5) {
    student.GRADE = "D";
  }
});
