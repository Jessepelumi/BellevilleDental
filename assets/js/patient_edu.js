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

const products = [
    {
        name: "General information",
        value: "Get to know the basics of dental health",
        duration: "2 Hours",
        photo: "https://img.freepik.com/free-vector/dental-patient-card-abstract-concept-vector-illustration-referral-card-holder-dental-office-loyalty-program-electronic-medical-record-patient-data-smart-information-system-abstract-metaphor_335657-4028.jpg?size=626&ext=jpg&uid=R99624557&ga=GA1.2.1664086905.1681670100&semt=ais",
    },
    {
        name: "Children dental care",
        value: "Role of parents in children's dental development",
        duration: "3 Hours",
        photo: "https://img.freepik.com/free-photo/little-girl-sitting-dental-chair-posing-clinic_651396-1407.jpg?size=626&ext=jpg&uid=R99624557&ga=GA1.2.1664086905.1681670100&semt=ais",
    },
    {
        name: "Teaching oral care",
        value: "Role of school teachers in children's dental development",
        duration: "3 Hours",
        photo: "https://img.freepik.com/free-photo/stomatologist-explaining-proper-dental-hygiene-using-presentation-teeth-skeleton-extracting-mass-from-it-dentist-telling-kid-procedure-holding-sample-human-jaw-stomatology-office_482257-13326.jpg?size=626&ext=jpg&uid=R99624557&ga=GA1.1.1664086905.1681670100&semt=ais",
    },
    {
        name: "Best Practices",
        value: "Things parents and teachers can do incase of emergencies",
        duration: "2 Hours",
        photo: "https://img.freepik.com/free-photo/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-10421.jpg?size=626&ext=jpg&uid=R99624557&ga=GA1.2.1664086905.1681670100&semt=ais",
    }
];

const container = document.querySelector(".container");

for (let product of products) {
    const productBox = document.createElement("div");
    productBox.classList.add("main");

    const productEl = document.createElement("div");
    productEl.classList.add("box");

    const photoEl = document.createElement("img");
    photoEl.src = product.photo;
    photoEl.alt = product.name;
    photoEl.classList.add("img");

    const nameEl = document.createElement("p");
    nameEl.innerText = product.name;
    nameEl.classList.add("name", "fw-bold");

    const valueEl = document.createElement("p");
    valueEl.innerHTML = product.value;

    const durationEl = document.createElement("p");
    durationEl.innerHTML = "Duration: " + product.duration;

    const purchase = document.createElement("button");
    purchase.innerText = "Read Now";
    purchase.setAttribute("type", "button");

    productEl.append(nameEl, valueEl, durationEl, purchase);
    productBox.append(photoEl, productEl)

    container.appendChild(productBox);
}

$('#exampleModal').modal({
    show: true
})


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
})