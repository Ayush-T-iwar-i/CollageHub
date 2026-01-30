let subjectsData = JSON.parse(localStorage.getItem("subjectsData")) || {};
const subjectSelect = document.getElementById("select-subject");

// Load subjects
for (let key in subjectsData) {
  let opt = document.createElement("option");
  opt.value = key;
  opt.textContent = subjectsData[key].subject + " - " + subjectsData[key].section;
  subjectSelect.appendChild(opt);
}

// Add student
document.getElementById("student-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const key = subjectSelect.value;
  const id = studentId.value.trim();
  const name = studentName.value.trim();

  subjectsData[key].students.push({ id, name });

  localStorage.setItem("subjectsData", JSON.stringify(subjectsData));
  alert("Student Added");

  this.reset();
});
