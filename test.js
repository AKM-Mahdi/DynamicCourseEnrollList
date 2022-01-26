const studentName = document.getElementById("name");
const courseName = document.getElementById("course");
const courseAmount =document.getElementById("amount");
const addList = document.querySelector(".btn");
const studentList =document.getElementById("studentList");

addList.addEventListener("click", function(event){
    // console.log("it is working");
    event.preventDefault();

    if(studentName.value=="" || courseName.value=="" || courseAmount.value==""){
        alert("please fill out all the fields")
    }
    else{

        const newRow = document.createElement("tr");
        studentList.appendChild(newRow);

        // creating Student Name 
        const newStudentName =document.createElement("td");
        newStudentName.innerHTML=studentName.value;
        newRow.appendChild(newStudentName);

        // creating student Course 
        const newStudentCourse = document.createElement("td");
        newStudentCourse.innerHTML=courseName.value;
        newRow.appendChild(newStudentCourse);

        // creating course amount 
        const newAmount =document.createElement("td");
        newAmount.innerHTML=courseAmount.value;
        newRow.appendChild(newAmount);



    }
});

