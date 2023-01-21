const skills=[
   
    {
        "name": "ExpressJS",
        "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
   
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        "name": "C++",
        "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
   
    {
        "name": "TailwindCSS",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
    },
    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
  
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },  
    {
        "name": "Pocketbase",
        "icon": "https://img.icons8.com/color/48/000000/firebase.png"
    },
    {
        "name": "Git VCS",
        "icon": "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },
  
     
];

const projects=[
    {
        id:1,
        name:"Codemon",
        description:"Codemon is a web project that helps user compile their code and use platform to solve DSA Problems. ",
        toolsused:"HTML, CSS, JS, EJS, Express js, MongoDB",
        image:"./src/Images/projects/projectimages/codemon.png",
        link:"https://github.com/anurag-327/Codemon"
    },
    {
        id:2,
        name:"Car Rental System",
        description:"Car Rental System is a Web Project that helps user to rent out cars for short period. ",
        toolsused:"HTML, CSS, JS, EJS, Express js, MongoDB",
        image:"./src/Images/projects/projectimages/carrental.png",
        link:"https://github.com/anurag-327/Car-Rental-System"
    },
    {
        id:2,
        name:"Google Keep Notes",
        description:"This project is a clone of Google keep notes that gives user flexibility of adding, deleting, updating and restoring deleted notes.",
        toolsused:"HTML, CSS, JS, EJS, Express js, MongoDB",
        image:"./src/Images/projects/projectimages/notes.png",
        link:"https://github.com/anurag-327/Google-Keep-Notes"
    },
    {
        id:4,
        name:"My Portfolio site",
        description:"My Portfolio website containing details of my Skils, Projects and Educational Details",
        toolsused:"HTML, CSS, JS",
        image:"./src/Images/projects/projectimages/portfolio.png",
        link:"https://github.com/anurag-327/Portfolio-site"
    },
    {
        id:5,
        name:"Weather App",
        description:"Minimal Weather App",
        toolsused:"HTML, CSS, JS, Express Js",
        image:"./src/Images/projects/projectimages/weather.png",
        link:"https://github.com/anurag-327/Weather-App"
    },
    {
        id:5,
        name:"Netflix UI Clone",
        description:"clone of Netflix's UI",
        toolsused:"HTML, CSS, JS",
        image:"./src/Images/projects/projectimages/netflix.png",
        link:"https://github.com/anurag-327/Netflix-UI-clone"
    }
]

const skillsdisplay=document.querySelector(".skills");
const projectsdisplay=document.querySelector(".projects");
const togglenav=document.querySelector(".togglenavbar");
const navbarlist=document.querySelector(".navbarlist");
const projectsbtn=document.querySelector(".projectsbtn")
const skillsbtn=document.querySelector(".skillsbtn")
const resumebtn=document.querySelector(".resumebtn")

const projectscontainer=document.querySelector(".projectscontainer");
const skillscontainer=document.querySelector(".skillscontainer");
const resumecontainer=document.querySelector(".resumecontainer");

togglenav.addEventListener("click",()=>
{
    navbarlist.classList.toggle("sm:hidden")
})

skillsbtn.addEventListener("click",()=>
{
    projectsbtn.classList.remove("bg-purple-600");
    projectsbtn.classList.add("bg-purple-300");
    skillsbtn.classList.remove("bg-purple-300");
    skillsbtn.classList.add("bg-purple-600");
    projectscontainer.classList.add("hidden");
    skillscontainer.classList.remove("hidden");
})
projectsbtn.addEventListener("click",()=>
{
    projectsbtn.classList.add("bg-purple-600");
    projectsbtn.classList.remove("bg-purple-300");
    skillsbtn.classList.add("bg-purple-300");
    skillsbtn.classList.remove("bg-purple-600");
    projectscontainer.classList.remove("hidden");
    skillscontainer.classList.add("hidden");
})


window.addEventListener("load",()=>
{
    displayskills();
    displayprojects();
})

function displayskills()
{
    for (var i = 0; i < skills.length; i++) {
        const node = document.createElement("div");
        let htmldata = `
        <div class="p-3 sm:p-1 rounded-md bg-black text-white hover:scale-110 transform transition duration-500 shadow-gray-900 shadow-md flex flex-col gap-4" >
        <div class="   m-auto  ">
          <img src="${skills[i].icon}" alt="${skills[i].name}>
        </div>
        <div class="" >
        
            <span class="font-semibold text-white sm:text-sm ">${skills[i].name}</span>
        </div>
    </div>`;
        node.insertAdjacentHTML("afterbegin", htmldata);
        node.classList.add("w-[15%]")
        node.classList.add("min-w-[8rem]")
        node.classList.add("sm:min-w-[5rem]")
        node.classList.add("sm:w-[35%]")
        node.classList.add("sm:max-w-[8rem]")
        skillsdisplay.appendChild(node);
    }
}

function displayprojects()
{
    for (var i = 0; i < projects.length; i++) {
        const node = document.createElement("div");
        let htmldata = `
        <div class="bg-[url('../Images/projects/projectbg/9.png')] rounded-lg hover:scale-105 transform transition duration-500 bg-fixed w-[90%] m-auto h-auto sm:w-[90%] sm:p-2 p-10">
        <div class="flex sm:flex-col gap-2 ">
            <div class="w-[70%] sm:m-auto sm:w-[100%] sm:p-2 mt-10">
            
                <span class="text-2xl font-bold">${projects[i].name}</span>
                <p class="font-poppins text-sm">${projects[i].description} </p>
                    <div>
                        <span class="block text-blue-700 font-bold ">Tools Used: ${projects[i].toolsused}</span>
                    </div>
                    <div class="mt-2">
                    <a href="${projects[i].link}" target="blank">
                    <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Code</button>
                    </a>
                    </div>

            </div>
            <div class="w-[70%] float-right sm:m-auto">
                <img class="border-2 border-black" src="${projects[i].image}" alt="Project image">
            </div>
        </div>
</div>`;
        node.insertAdjacentHTML("afterbegin", htmldata);
        node.classList.add("w-[100%]")
        // node.classList.add("min-w-[8rem]")
        // node.classList.add("sm:min-w-[40%]")
        // node.classList.add("sm:w-[80%]")
        projectsdisplay.appendChild(node);
    }
}