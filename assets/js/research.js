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
        name: "Frontiers in Dentistry",
        value: "3000+ Students",
        duration: "2-4 Months",
        photo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/3e/2e7617db4f41159ef04dd51da70278/Asset-1.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
    },
    {
        name: "Introduction to Implant Dentistry",
        value: "2000+ Students",
        duration: "2-4 Months",
        photo: "https://t3.ftcdn.net/jpg/00/56/96/24/240_F_56962404_aTiKdfNfLlLGetojOulk19M9llRDBxKb.jpg",
    },
    {
        name: "Technnology in Dentistry",
        value: "1000+ Students",
        duration: "1 Month",
        photo: "https://img.freepik.com/free-photo/patient-pov-listening-explication-teeth-treatment-dentist-coverall-showing-x-ray-tablet-stomatology-specialist-wearing-protective-suit-against-infection-with-covid19-pointing-radiograph_482257-13149.jpg?w=1380&t=st=1682743754~exp=1682744354~hmac=fa7ce4054bd9d64116c9b22bcaad66131a0d21c69ac6094576f29a738aef342d",
    },
    {
        name: "Research Planning",
        value: "1000+ Students",
        duration: "1-3 Months",
        photo: "https://img.freepik.com/free-vector/dentist-with-magnifier-ladder-examining-huge-patient-tooth-dental-chair-private-dentistry-dental-service-private-dental-clinic-concept-pinkish-coral-bluevector-vector-isolated-illustration_335657-1563.jpg?w=1060&t=st=1682743899~exp=1682744499~hmac=263097a8853239b567ab46c3bca5f5d2637a2064abca845c5e66b11933c2d083",
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
    nameEl.classList.add("name");

    const valueEl = document.createElement("p");
    valueEl.innerHTML = product.value;

    const durationEl = document.createElement("p");
    durationEl.innerHTML = "Duration: " + product.duration;

    const purchase = document.createElement("button");
    purchase.innerText = "Register Now"

    productEl.append(nameEl, valueEl, durationEl, purchase);
    productBox.append(photoEl, productEl)

    container.appendChild(productBox);
}