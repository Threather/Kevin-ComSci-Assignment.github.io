window.onload = function() {
    // Elements
    var table = document.getElementById("myTable");
    var iframe = document.getElementById("iframe");
    var backButton = document.getElementById("backButton");

    // Student data
    let studentData = {
        "class": "ITE103(Evening)",
        "professor": "CHHUNNAN",
        "studentName": "Pom Kevin",
        "studentMajor": "Computer Science",
        "studentID": "60230633"
    };

    // Populate student data
    for (let key in studentData) {
        document.getElementById(key).textContent = studentData[key];
    }

    // Hide elements initially
    hideElement(table);
    hideElement(backButton);

    // Event listeners
    document.getElementById("toggleButton").addEventListener("click", toggleTable);
    
    document.getElementById("homework1Link").addEventListener("click", function(event) {
        displayHomework(event, "./hw-file/hw1.html");
    });
    document.getElementById("homework2Link").addEventListener("click", function(event) {
        displayHomework(event, "./hw-file/hw2.html");
    });
    document.getElementById("homework3Link").addEventListener("click", function(event) {
        displayHomework(event, "./hw-file/hw3.html");
    });
    backButton.addEventListener("click", goBack);

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

    function toggleTable() {
        if (table.style.display === "none") {
            showElement(table, "table");
        } else {
            hideElement(table);
        }
    }

    function displayHomework(event, homeworkFile) {
        event.preventDefault();
        table.style.display = "none"; // Hide the table immediately
        iframe.style.display = "block";
        setTimeout(function() {
            iframe.style.opacity = "1";
            iframe.style.transform = "scaleY(1)";
        }, 0);
        showElement(backButton, "inline-block");
        iframe.src = homeworkFile;
    }

    function goBack() {
        hideElement(iframe);
        setTimeout(function() {
            showElement(table, "table");
        }, 500);
        hideElement(backButton);
    }
};
