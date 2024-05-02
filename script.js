window.onload = function() {
    // Elements
    var iframe = document.getElementById("iframe");
    var backButton = document.getElementById("backButton");
    var toggleButton = document.getElementById("toggleButton");
    var courseLinks = document.getElementsByClassName("courseLink");
    var courseSections = document.getElementsByClassName("courseSection");
    var coursesTable = document.getElementById("coursesTable");

    // Student data
    let studentData = {
        "studentName": "Pom Kevin",
        "studentMajor": "Computer Science",
        "studentID": "60230633"
    };

    // Populate student data
    for (let key in studentData) {
        document.getElementById(key).textContent = studentData[key];
    }

    // Hide elements initially
    for (let i = 0; i < courseSections.length; i++) {
        hideElement(courseSections[i]);
    }
    hideElement(backButton);
    hideElement(coursesTable);
    hideElement(iframe);

    // Event listeners
    toggleButton.addEventListener("click", function() {
        if (coursesTable.style.display === "none" && iframe.style.display === "none") {
            showElement(coursesTable, "block");
            backButton.dataset.state = "courses";
        } else {
            hideElement(coursesTable);
            hideElement(iframe);
            for (let i = 0; i < courseSections.length; i++) {
                hideElement(courseSections[i]);
            }
            hideElement(backButton);
            backButton.dataset.state = "";
        }
    });

    for (let i = 0; i < courseLinks.length; i++) {
        courseLinks[i].addEventListener("click", function(event) {
            event.preventDefault();
            displayAssignments(event.target.getAttribute("data-course"));
            backButton.dataset.state = "assignments";
        });
    }

    backButton.addEventListener("click", function() {
        if (backButton.dataset.state === "homework") {
            goBackToAssignments();
        } else if (backButton.dataset.state === "assignments") {
            goBackToCourses();
        } else if (backButton.dataset.state === "courses") {
            hideElement(coursesTable);
            hideElement(backButton);
            backButton.dataset.state = "";
        }
    });

    // Homework links
    document.getElementById("homework1Link").addEventListener("click", function(event) {
        displayHomework(event, "./Course/ITE103/hw-file/hw1.html");
    });
    document.getElementById("homework2Link").addEventListener("click", function(event) {
        displayHomework(event, "./Course/ITE103/hw-file/hw2.html");
    });
    document.getElementById("homework3Link").addEventListener("click", function(event) {
        displayHomework(event, "./Course/ITE103/hw-file/hw3.html");
    });
    document.getElementById("homework4Link").addEventListener("click", function(event) {
        displayHomework(event, "./Course/ITE103/hw-file/hw4.html");
    });

    // Functions
    function hideElement(element) {
        element.style.opacity = "0";
        element.style.transform = "scaleY(0)";
        setTimeout(function() {
            element.style.display = "none";
        }, 500); // this matches the duration of your transition
    }

    function showElement(element, displayStyle) {
        element.style.display = displayStyle;
        setTimeout(function() {
            element.style.opacity = "1";
            element.style.transform = "scaleY(1)";
        }, 0);
    }

    function displayAssignments(course) {
        // You can use the course parameter to filter the assignments for the selected course
        var courseSection = document.getElementById(course);
        if (courseSection) {
            hideElement(coursesTable);
            showElement(courseSection, "block");
            showElement(backButton, "inline-block");
        } else {
            alert("There are no assignments for this course yet.");
        }
    }

    function goBackToAssignments() {
        hideElement(iframe);
        for (let i = 0; i < courseSections.length; i++) {
            showElement(courseSections[i], "block");
        }
        backButton.dataset.state = "assignments";
    }

    function goBackToCourses() {
        for (let i = 0; i < courseSections.length; i++) {
            hideElement(courseSections[i]);
        }
        showElement(coursesTable, "block");
        backButton.dataset.state = "courses";
    }

    function displayHomework(event, homeworkFile) {
        event.preventDefault();
        hideElement(coursesTable);
        for (let i = 0; i < courseSections.length; i++) {
            hideElement(courseSections[i]);
        }
        iframe.src = homeworkFile;
        showElement(iframe, "block");
        backButton.dataset.state = "homework";
    }
};
