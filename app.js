const studentInfo = [
    {
        stName: "Umer Fareed",
        class: "XI",
        subject: "Computer Science",
        rollNo: "309367"
    },
    {
        stName: "Ali Khan",
        class: "XI",
        subject: "Mathematics",
        rollNo: "309368"
    },
    {
        stName: "Sara Ahmed",
        class: "XI",
        subject: "Physics",
        rollNo: "309369"
    },
    {
        stName: "Ayesha Iqbal",
        class: "XI",
        subject: "Chemistry",
        rollNo: "309370"
    },
    {
        stName: "Hamza Ali",
        class: "XI",
        subject: "Biology",
        rollNo: "309371"
    },
    {
        stName: "Fatima Noor",
        class: "XI",
        subject: "English",
        rollNo: "309372"
    },
    {
        stName: "Zain Malik",
        class: "XI",
        subject: "Urdu",
        rollNo: "309373"
    },
    {
        stName: "Hira Shah",
        class: "XI",
        subject: "Islamic Studies",
        rollNo: "309374"
    },
    {
        stName: "Owais Raza",
        class: "XI",
        subject: "Economics",
        rollNo: "309375"
    },
    {
        stName: "Sana Tariq",
        class: "XI",
        subject: "Computer Science",
        rollNo: "309376"
    }
];

const studentContent = document.getElementById("studentInfo");
const filterSearchbar = document.getElementById("filterSearchbar");
const button = document.getElementById("filterButton");

function displayStudents(students) {
    studentContent.innerHTML = "";
    students.forEach(student => {
        let studentHtml = `
                    <div class="contant">
                        <p><span>Name:</span> ${student.stName}</p>
                        <p><span>Class:</span> ${student.class}</p>
                        <p><span>Subject:</span> ${student.subject}</p>
                        <p><span>Roll No:</span> ${student.rollNo}</p>
                    </div>
                `;
        studentContent.innerHTML += studentHtml;
    });
}
displayStudents(studentInfo);

const searchHandler = () => {
    let value = filterSearchbar.value.trim();
    if (value === "") {
        displayStudents(studentInfo);
    } else {
        const filtered = studentInfo.filter(student => student.rollNo.includes(value));
        displayStudents(filtered);
    }
};

button.addEventListener("click", searchHandler);