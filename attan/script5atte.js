// Mock attendance data (replace with real API data)
const attendanceData = [
  { id
    : 'S001', name: 'John Doe', records: { '2023-10-01': 'Present', '2023-10-02': 'Absent' } },
  { id: 'S002', name: 'Jane Smith', records: { '2023-10-01': 'Present', '2023-10-02': 'Present' } },
  { id: 'S003', name: 'Bob Johnson', records: { '2023-10-01': 'Absent', '2023-10-02': 'Present' } },
  // Add more students as needed
];

// DOM Elements
const dateSelect = document.getElementById('date-select');
const filterBtn = document.getElementById('filter-btn');
const attendanceBody = document.getElementById('attendance-body');
const percentageEl = document.getElementById('attendance-percentage');

// Function to display attendance for a selected date
function displayAttendance(date) {
  attendanceBody.innerHTML = ''; // Clear previous data
  let presentCount = 0;
  let totalStudents = attendanceData.length;

  attendanceData.forEach(student => {
    const status = student.records[date] || 'Absent'; // Default to Absent if no record
    if (status === 'Present') presentCount++;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td class="${status === 'Present' ? 'status-present' : 'status-absent'}">${status}</td>
    `;
    attendanceBody.appendChild(row);
  });

  // Calculate and update percentage
  const percentage = totalStudents > 0 ? Math.round((presentCount / totalStudents) * 100) : 0;
  percentageEl.textContent = `Attendance Percentage: ${percentage}%`;
}

// Event listener for filter button
filterBtn.addEventListener('click', () => {
  const selectedDate = dateSelect.value;
  if (selectedDate) {
    displayAttendance(selectedDate);
  } else {
    alert('Please select a date.');
  }
});

// Load default data on page load
document.addEventListener('DOMContentLoaded', () => {
  displayAttendance(dateSelect.value); // Show data for default date
});