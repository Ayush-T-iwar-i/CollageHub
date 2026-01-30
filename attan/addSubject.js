let subjectsData = JSON.parse(localStorage.getItem("subjectsData")) || {};

document.getElementById("subject-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const subject = document.getElementById("subject-name").value.trim();
  const section = document.getElementById("section-name").value.trim();
  const dept = document.getElementById("department").value.trim();

  const key = subject + "_" + section;

  if (subjectsData[key]) {
    alert("Subject already exists");
    return;
  }

  subjectsData[key] = {
    subject: subject,
    section: section,
    department: dept,
    students: []
  };

  localStorage.setItem("subjectsData", JSON.stringify(subjectsData));
  alert("Subject Added");

  document.getElementById("subject-form").reset();
});
