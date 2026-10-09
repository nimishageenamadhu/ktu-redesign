const semesterOptions = [
  "Semester 1 (S1)",
  "Semester 2 (S2)",
  "Semester 3 (S3)",
  "Semester 4 (S4)",
  "Semester 5 (S5)",
  "Semester 6 (S6)",
  "Semester 7 (S7)",
  "Semester 8 (S8)"
];

// Fill all semester dropdowns
[
  "syllabusSemester",
  "calendarSemester",
  "examSemester",
  "resultSemester"
].forEach(id => {
  const select = document.getElementById(id);

  if (select) {
    semesterOptions.forEach((label, index) => {
      const option = document.createElement("option");
      option.value = index + 1;
      option.textContent = label;

      if (index === 2) option.selected = true;
      select.appendChild(option);
    });
  }
});

// Close home-page notification
const closeNotice = document.getElementById("closeNotice");
if (closeNotice) {
  closeNotice.addEventListener("click", () => {
    document.getElementById("notice").style.display = "none";
  });
}

// Syllabus and calendar buttons
const syllabusBtn = document.getElementById("syllabusBtn");
if (syllabusBtn) {
  syllabusBtn.addEventListener("click", () => {
    const semester = document.getElementById("syllabusSemester").value;
    alert(
      `You selected Semester ${semester}. Add the official syllabus PDF link here.`
    );
  });
}

const calendarBtn = document.getElementById("calendarBtn");
if (calendarBtn) {
  calendarBtn.addEventListener("click", () => {
    const semester = document.getElementById("calendarSemester").value;
    alert(
      `You selected Semester ${semester}. Add the official calendar PDF link here.`
    );
  });
}

// Demo examination timetable
const sampleExams = [
  {
    date: "15-11-2026",
    code: "MA301",
    subject: "Mathematics",
    time: "9:30 AM - 12:30 PM"
  },
  {
    date: "17-11-2026",
    code: "PH301",
    subject: "Engineering Physics",
    time: "9:30 AM - 12:30 PM"
  },
  {
    date: "20-11-2026",
    code: "EC301",
    subject: "Basic Electrical Engineering",
    time: "9:30 AM - 12:30 PM"
  },
  {
    date: "23-11-2026",
    code: "CS301",
    subject: "Programming and Problem Solving",
    time: "9:30 AM - 12:30 PM"
  }
];

function showTimetable() {
  const body = document.getElementById("timetableBody");
  const type = document.getElementById("examType");
  const semester = document.getElementById("examSemester");
  const heading = document.getElementById("tableHeading");

  if (!body || !type || !semester) return;

  heading.textContent =
    `${type.value} Examination - Semester ${semester.value}`;

  body.innerHTML = "";

  sampleExams.forEach(exam => {
    const row = document.createElement("tr");

    const values = [
      exam.date,
      exam.code.replace("301", `${semester.value}01`),
      exam.subject,
      exam.time
    ];

    values.forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    body.appendChild(row);
  });
}

const viewTimetable = document.getElementById("viewTimetable");
if (viewTimetable) {
  viewTimetable.addEventListener("click", showTimetable);
  showTimetable();
}

// Result charts
if (typeof Chart !== "undefined") {
  const performanceCanvas = document.getElementById("performanceChart");

  if (performanceCanvas) {
    new Chart(performanceCanvas, {
      type: "bar",
      data: {
        labels: [
          "Mathematics",
          "Physics",
          "Chemistry",
          "Electronics",
          "Computing"
        ],
        datasets: [{
          label: "Marks (%)",
          data: [82, 76, 74, 88, 81],
          backgroundColor: [
            "#79558f",
            "#a17db3",
            "#c7add4",
            "#8c639e",
            "#d8b9ee"
          ],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }

  const gradeCanvas = document.getElementById("gradeChart");

  if (gradeCanvas) {
    new Chart(gradeCanvas, {
      type: "doughnut",
      data: {
        labels: ["S Grade", "A Grade", "B Grade", "C Grade"],
        datasets: [{
          data: [2, 2, 1, 0],
          backgroundColor: [
            "#352044",
            "#79558f",
            "#b38bc9",
            "#e8d8c3"
          ]
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}

const analyseBtn = document.getElementById("analyseBtn");
if (analyseBtn) {
  analyseBtn.addEventListener("click", () => {
    const semester = document.getElementById("resultSemester").value;
    alert(`Showing sample result analysis for Semester ${semester}.`);
  });
}

console.log("KTU redesign website loaded successfully.");