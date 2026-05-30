function calculateresult(){
    let numberofsubjects = document.getElementById("subjectcount").value;
    let totalmarks = 0;
    for(let i=1; i<=numberofsubjects; i++){
        let marks = prompt("Enter marks for subject " + i);
        totalmarks += parseFloat(marks);
    }
     let average = totalmarks / numberofsubjects;
     let grade, result;
  // Conditions
  if (average >= 75) {
    grade = "A";
    result = "Pass";
  } else if (average >= 50) {
    grade = "B";
    result = "Pass";
  } else if (average >= 33) {
    grade = "C";
    result = "Pass";
  } else {
    grade = "F";
    result = "Fail";
  }
   
    document.getElementById("result").innerHTML = 
    "Total Marks: " + totalmarks + "<br>"+ 
    "Average: " + average + "<br>" +
    "Grade: " + grade + "<br>" +
    "Result: " + result;

}