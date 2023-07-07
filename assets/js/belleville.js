AOS.init();

const accordion = document.querySelectorAll('.accordion');
const probs = document.querySelectorAll('.arrows');

accordion.forEach(i => {
    i.addEventListener('click', () => {
        i.classList.toggle('active');
        i.parentElement.classList.toggle('active');

        const pannel = i.nextElementSibling;

        if(pannel.style.display === 'block'){
             pannel.style.display = 'none';
        } else {
             pannel.style.display = 'block';
        }                
    })
});

console.log(window.scrollY)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navigation')
    if(window.scrollY >= 100){
        nav.style.background = "#0081C9";
    }else{
        nav.style.background = "transparent";
    }
})

function updateTicker() {
    var ticker = document.getElementById("ticker");
    var currentDate = new Date().toLocaleDateString();
    var currentTime = new Date().toLocaleTimeString();
    var location = "Unknown";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            // Use a geocoding API to get the location from latitude and longitude
            var apiUrl = "https://api.openweathermap.org/geo/1.0/reverse?lat=" + latitude + "&lon=" + longitude + "&limit=1&appid=&limit=1&appid=2d7ecdab97a83914ffacff69de3bc3d1";
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                location = data[0].name + ", " + data[0].country;

                ticker.innerText = currentDate + " " + currentTime + " | " + location;
                ticker.style.width = ticker.clientWidth + "px";

                if (ticker.scrollWidth > ticker.clientWidth) {
                    ticker.animate([
                            { transform: "translateX(0)" },
                            { transform: "translateX(-" + (ticker.scrollWidth - ticker.clientWidth) + "px)" }
                        ], {
                            duration: (ticker.scrollWidth - ticker.clientWidth) * 20,
                            iterations: Infinity
                        });
                }
            })
            .catch(error => {
                console.log(error);
                ticker.innerText = currentDate + " " + currentTime + " | " + location;
                ticker.style.width = ticker.clientWidth + "px";
            });
        }, function(error) {
            console.log(error);
            ticker.innerText = currentDate + " " + currentTime + " | " + location;
            ticker.style.width = ticker.clientWidth + "px";
        });
    } else {
        ticker.innerText = currentDate + " " + currentTime + " | " + location;
        ticker.style.width = ticker.clientWidth + "px";
    }
}

updateTicker();
setInterval(updateTicker, 60000); // Update every minute

const burger = document.getElementById("burger");
const close = document.getElementById("close");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
    if (menu.classList.contains("d-none")) {
        menu.classList.remove("d-none");
    }
})

close.addEventListener("click", () => {
    menu.classList.add("d-none");
});

let visitorCount = localStorage.getItem('visitorCount') || 0
    visitorCount++
    localStorage.getItem('visitorCount', visitorCount)
    document.getElementById('visitorCount').innerHTML = visitorCount;


    const courses = [
        {
            name: "Dr. Olivia Patel",
            value: "Director, Belleville Dentals",
            photo: "https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?size=626&ext=jpg&ga=GA1.1.1664086905.1681670100&semt=sph",
        },
        {
            name: "Dr. Emily Carter",
            value: "Head, Pediatric Dentistry",
            photo: "https://img.freepik.com/free-photo/isolated-shotof-happy-successful-mature-senior-physician-wearing-medical-unifrom-stethoscope-having-cheerful-facial-expression-smiling-broadly-keeping-arms-crossed-chest_343059-2254.jpg?size=626&ext=jpg&ga=GA1.2.1664086905.1681670100&semt=ais",
        },
        {
            name: "Dr. Mabel Restania",
            value: "Director, Belleville School of Dentistry",
            photo: "https://img.freepik.com/foto-gratis/doctor-sonriente-vista-lateral-trabajo_23-2149726960.jpg?w=1060&t=st=1688700594~exp=1688701194~hmac=49381619c717f77a345dcdb4902032d02b0cea4c8183f262d5177a378c15e2dc",
        },
        {
            name: "Dr. Jennifer Adams",
            value: "Head, Cosmetic Dentistry",
            photo: "https://img.freepik.com/free-photo/front-view-smiley-doctor-clinic_23-2149726935.jpg?t=st=1688698418~exp=1688699018~hmac=9e2ed0a3f685fef82d48e7c107d30394b8a3a66046b50378505845ded44fa285",
        },
        {
            name: "Dr. Ethan Ramirez",
            value: "Theatre Manager",
            photo: "https://img.freepik.com/free-photo/cheerful-doctor-making-notes-looking-away_23-2147896151.jpg?size=626&ext=jpg&ga=GA1.1.1664086905.1681670100&semt=sph",
        },
        {
            name: "Dr. Andrew Johnson",
            value: "Chief Technologists",
            photo: "https://img.freepik.com/free-photo/medium-shot-veterinarian-with-microscope_23-2149143897.jpg?w=1060&t=st=1688699926~exp=1688700526~hmac=7af89e1af64e14826c408c985fc5b1769f444d06a0cd0671d06f013e0182af84",
        }
    ];
    
    const modal_container = document.querySelector(".modal_container");
    
    for (let course of courses) {
        const productBox = document.createElement("div");
        productBox.classList.add("main");
    
        const productEl = document.createElement("div");
        productEl.classList.add("box");
    
        const photoEl = document.createElement("img");
        photoEl.src = course.photo;
        photoEl.alt = course.name;
        photoEl.classList.add("img");
    
        const nameEl = document.createElement("p");
        nameEl.innerText = course.name;
        nameEl.classList.add("name", "fw-bold");
    
        const valueEl = document.createElement("p");
        valueEl.innerHTML = course.value;
    
        // const purchase = document.createElement("button");
        // purchase.innerHTML = `Details`
           
        productEl.append(nameEl, valueEl);
        productBox.append(photoEl, productEl)
    
        modal_container.appendChild(productBox);
    }
