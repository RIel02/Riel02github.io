"use strict";

const projects = [
    {
        title: "Personal Portfolio",
        description: "A simple personal portfolio website.",
        language: "HTML and CSS",
        type: "Web Development"
    },
    {
        title: "Simple Calculator",
        description: "A basic calculator for simple operations.",
        language: "JavaScript",
        type: "Programming"
    },
    {
        title: "Student Grade Calculator",
        description: "A program that calculates student grades.",
        language: "Java",
        type: "Programming"
    },
    {
        title: "Number Guessing Game",
        description: "A simple game where the user guesses a number.",
        language: "Python",
        type: "Game"
    },
    {
        title: "Curbside Thai",
        description: "A simple food ordering website.",
        language: "JavaScript",
        type: "Web Development"
    }
];

const list = document.getElementById("project-list");
const search = document.getElementById("search");
const message = document.getElementById("message");

function searchProjects(projectList, word) {

    word = word.trim().toLowerCase();

    if (word === "") {
        return projectList;
    }

    return projectList.filter(function(project) {

        return project.title.toLowerCase().includes(word) ||
               project.language.toLowerCase().includes(word) ||
               project.type.toLowerCase().includes(word);

    });
}

function displayProjects(projectList) {

    list.innerHTML = "";

    if (projectList.length === 0) {

        message.textContent = "No projects found.";

        return;
    }

    message.textContent = "Showing " + projectList.length + " projects.";

    for (let i = 0; i < projectList.length; i++) {

        list.innerHTML +=
            "<div class='project'>" +
            "<h3>" + projectList[i].title + "</h3>" +
            "<p>" + projectList[i].description + "</p>" +
            "<p>Language: " + projectList[i].language + "</p>" +
            "<p>Type: " + projectList[i].type + "</p>" +
            "</div>";
    }
}

search.addEventListener("input", function() {

    const results = searchProjects(projects, search.value);

    displayProjects(results);

});

displayProjects(projects);