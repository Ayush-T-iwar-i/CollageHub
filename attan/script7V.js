const students = [
  { roll: 1, name: "Ayush Tiwari" },
  { roll: 2, name: "Rohit Sharma" },
  { roll: 3, name: "Priya Singh" },
  { roll: 4, name: "Anjali Verma" }
];

const table = document.getElementById("attendanceTable");

students.forEach(student => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${student.roll}</td>
    <td>${student.name}</td>
    <td>${student.id}</td>
    <td>
      <input type="radio" name="att_${student.roll}" value="Present">
    </td>
    <td>
      <input type="radio" name="att_${student.roll}" value="Absent">
    </td>
  `;

  table.appendChild(row);
});

function submitAttendance() {
  let attendanceData = [];

  students.forEach(student => {
    const selected = document.querySelector(
      `input[name="att_${student.roll}"]:checked`
    );

    attendanceData.push({
      roll: student.roll,
      name: student.name,
      status: selected ? selected.value : "Not Marked"
    });
  });

  console.table(attendanceData);
  alert("Attendance Submitted Successfully!");
}
