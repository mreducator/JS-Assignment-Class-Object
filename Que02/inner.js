class Student {
    constructor(name) {
      this.name = name;
      this.courses = []; 
    }
    enroll(course) {
      if (!this.courses.includes(course)) {
        this.courses.push(course);
        console.log(`${this.name} has been enrolled in ${course}.`);
      } else {
        console.log(`${this.name} is already enrolled in ${course}.`);
      }
    }
    displayCourses() {
      if (this.courses.length > 0) {
        console.log(`${this.name} is enrolled in: ${this.courses.join(', ')}`);
      } else {
        console.log(`${this.name} is not enrolled in any courses.`);
      }
    }
  }
  
  class Admission {
    constructor() {
      this.courseEnrollments = {};
    }
    enrollStudent(student, course) {
      student.enroll(course); 
      if (!this.courseEnrollments[course]) {
        this.courseEnrollments[course] = [];
      }
      if (!this.courseEnrollments[course].includes(student.name)) {
        this.courseEnrollments[course].push(student.name);
      }
    }
    displayEnrolledStudents(course) {
      if (this.courseEnrollments[course] && this.courseEnrollments[course].length > 0) {
        console.log(`Students enrolled in ${course}: ${this.courseEnrollments[course].join(', ')}`);
      } else {
        console.log(`No students are enrolled in ${course}.`);
      }
    }
  }
  const admission = new Admission();
  
  const student1 = new Student('Alice');
  const student2 = new Student('Bob');
  
  admission.enrollStudent(student1, 'Math 101');
  admission.enrollStudent(student1, 'History 202');
  admission.enrollStudent(student2, 'Math 101');
  
  student1.displayCourses();
  student2.displayCourses();
  
  admission.displayEnrolledStudents('Math 101');
  admission.displayEnrolledStudents('History 202');
  