const body = document.querySelector("body");
const dayNightToggle = document.querySelector(".dayNightToggle");
const day = document.querySelector(".day");
const night = document.querySelector(".night");
const aboutMe = document.querySelector("#aboutMe");
const myProjects = document.querySelector("#myProjects");
const aboutMeContent = document.querySelector("#aboutMeContent");
const myProjectsContent = document.querySelector("#myProjectsContent");

let isDay = true;

dayNightToggle.addEventListener("click", function () {

    isDay = !isDay;

    if (!isDay) {
    body.style.backgroundColor = "black";
    dayNightToggle.style.backgroundColor = "white";
    day.style.display = "none";
    night.style.display = "inline-block";
    aboutMe.style.color = "white";
    myProjects.style.color = "white";
    aboutMe.style.backgroundColor = "rgb(30, 30, 30)";
    myProjects.style.backgroundColor = "rgb(30,30,30)";
    aboutMeContent.style.color = "white";
    myProjectsContent.style.color = "white";
    } else {
    body.style.backgroundColor = "white";
    dayNightToggle.style.backgroundColor = "black";
    day.style.display = "inline-block";
    night.style.display = "none";
    aboutMe.style.color = "black";
    myProjects.style.color = "black";
    aboutMe.style.backgroundColor = "rgb(210, 210, 210)";
    myProjects.style.backgroundColor = "rgb(210, 210, 210)";
    aboutMeContent.style.color = "black";
    myProjectsContent.style.color = "black";

    }

});