// SHOW LINKS
const showLinks = (icon, listLinks) => {
    const toggle = document.querySelector(icon);
    const nav = document.querySelector(listLinks);

    toggle.addEventListener("click", () => nav.classList.toggle("show"));
    document.addEventListener("click", (e) => {
        if(e.target.className !== "icon" && e.target.className !== "icon-shape") {
            nav.classList.remove("show")
        }
    });
};

showLinks(".icon", ".list-links");

// SHOW LINKS ACTIONS
function showActions() {
    const links = document.querySelectorAll(".list-links a");
    links.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    const nav = document.querySelector(".list-links");
    nav.classList.remove("show");
}

const links = document.querySelectorAll(".list-links a");
links.forEach((link) => link.addEventListener("click", showActions));

// DARK MODE SETTINGS
let modeToggle = document.getElementById("dark-mode-toggle");
let dark_on = localStorage.getItem("dark_on")
? JSON.parse(localStorage.getItem("dark_on"))
: false;

let dark = "#051e34";
let light = "#f6f7f9";

const setMode = (colorLight, colorDark, darkOn) => {
    document.documentElement.style.setProperty("--second-color", colorLight);
    document.documentElement.style.setProperty("--light-color", colorDark);
    dark_on = darkOn;
    localStorage.setItem("dark_on", JSON.stringify(dark_on));
};

modeToggle.addEventListener("click", (e) => {
    dark_on ? setMode(dark, light, false) : setMode(light, dark, true);
    e.target.classList.toggle("bxs-sun");
});

  // SET MODE AFTER RELOAD PAGE FROM LOCAL STORAGE
if (dark_on) {
    setMode(light, dark, true);
    modeToggle.classList.toggle("bxs-sun");
}

// DISPLAY SKILLS
let skills = [
    { name: "HTML", icon: "bx bxl-html5" },
    { name: "CSS", icon: "bx bxl-css3" },
    { name: "JAVASCRIPT", icon: "bx bxl-javascript" },
    { name: "SASS", icon: "bx bxl-sass" },
    { name: "BOOTSTRAP", icon: "bx bxl-bootstrap" },
    { name: "JSON & AJAX & AXIOS", icon: "bx bxs-file-json" },
    { name: "GIT & GITHUB", icon: "bx bxl-github" },
    { name: "ADOBE PHOTOSHOP", icon: "bx bxl-adobe" },
];

let skillsContentDOM = document.querySelector(".skills-content");

const displaySkills = () => {
    // calling the function once for each element in an array.
    const display = skills.map((skill) => {
    return `
            <div class="skills-box line-swaping">
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
            </div>
            `;
    });
    // returning each array as a string.
    skillsContentDOM.innerHTML = display.join("");
};

displaySkills();

// DISPLAY PORTFOLIO PROJECTS
let projects = [
    {
        name: "Leon Design",
        img: "images/leon-design.jpg",
        link: "https://salamamo.github.io/HTML_CSS_Template_One/",
    },
    {
        name: "Kasper Design",
        img: "images/kasper-design.jpg",
        link: "https://salamamo.github.io/HTML_CSS_Template_Two/",
    },
    {
        name: "TO DO LIST",
        img: "images/to-do-list.jpg",
        link: "https://salamamo.github.io/to-do-list-app/",
    },
    {
        name: "YOUTUBE NEW VERSION",
        img: "images/youtube-new-version.jpg",
        link: "https://salamamo.github.io/youtube-new-version/",
    },
    {
        name: "MY BOOKLIST APP",
        img: "images/booklist-app.jpg",
        link: "https://salamamo.github.io/my-booklist-app/",
    },
    {
        name: "BOOKMARKER APP",
        img: "images/bookmarker-app.jpg",
        link: "https://salamamo.github.io/bookmarker-app/",
    },
    ];

    let projectsContentDOM = document.querySelector(".portfolio-content");

const displayProjects = () => {
    const display = projects.map((project) => {
    return `
                <div class="project-box">
                    <div class="project-image">
                        <img src="${project.img}" alt="project-image" />
                        <div class="project-overlay">
                            <div class="project-details">
                                <a href="${project.link}" class="button" target="_blank"> Details </a>
                                <p>${project.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    });
    
    projectsContentDOM.innerHTML = display.join("");
};

displayProjects();

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    // reset: true,
});

  // HOME SCROLL REVEAL
sr.reveal(".home-desc", {});
sr.reveal(".home-social li", { interval: 200 });
sr.reveal(".home-img", { delay: 300 });

  // SKILLS SCROLL REVEAL
sr.reveal(".skills", {});

  // PORTFOLIO SCROLL REVEAL
sr.reveal(".portfolio", {});
