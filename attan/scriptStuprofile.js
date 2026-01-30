const data = JSON.parse(localStorage.getItem("studentProfile"));

if (data) {
  document.getElementById("name").innerText = data.name;
  document.getElementById("enroll").innerText = "Enrollment: " + data.enrollment;
  document.getElementById("year").innerText = data.admissionYear;
  document.getElementById("semester").innerText = data.semester;
  document.getElementById("course").innerText = data.course;
  document.getElementById("email").innerText = data.email;
  document.getElementById("phone").innerText = data.phone;
  document.getElementById("address").innerText = data.address;
}

// Photo Upload
document.getElementById("uploadPhoto").addEventListener("change", function(e){
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(){
    document.getElementById("profilePhoto").src = reader.result;
    localStorage.setItem("profilePhoto", reader.result);
  };

  reader.readAsDataURL(file);
});

// Load saved photo
const savedPhoto = localStorage.getItem("profilePhoto");
if (savedPhoto) {
  document.getElementById("profilePhoto").src = savedPhoto;
}
