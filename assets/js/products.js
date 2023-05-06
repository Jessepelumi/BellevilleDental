const products = [
    {
        name: "Oral-B Rechargeable Toothbrush",
        value: "2.3B",
        photo: "https://m.media-amazon.com/images/I/71eU7ZuVXYL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Water Dental Flosser",
        value: "198M",
        photo: "https://m.media-amazon.com/images/I/710XJeult+L._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Rechargeable Water Dental Flosser",
        value: "100M",
        photo: "https://m.media-amazon.com/images/I/71eU7ZuVXYL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Whitening Gel Syringes",
        value: "149M",
        photo: "https://m.media-amazon.com/images/I/716ROIefM5L._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "GUM - Advanced Dental Picks",
        value: "2.5B",
        photo: "https://m.media-amazon.com/images/I/71hcySeE6kL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Oral-B Glide Pro-Health Dental Floss",
        value: "187M",
        photo: "https://m.media-amazon.com/images/I/61xcsiSxu4L._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Fixodent Denture Adhesive Cream)",
        value: "392M",
        photo: "https://m.media-amazon.com/images/I/61hr9OnQRUL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Glide Comfort Plus Dental Floss",
        value: "123M",
        photo: "https://m.media-amazon.com/images/I/713evG6ywXL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Bitvae Water Dental flosser",
        value: "209M",
        photo: "https://m.media-amazon.com/images/I/718WKXCnlyL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Aiocoid Dental Whitening",
        value: "355M",
        photo: "https://m.media-amazon.com/images/I/71O2n683ToL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Bubble Gum Flavored Tooth Polish",
        value: "3.1B",
        photo: "https://m.media-amazon.com/images/I/816RxdrFkDL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Ultrasonic Cleaner for Dentures",
        value: "2.9B",
        photo: "https://m.media-amazon.com/images/I/61tuPluE2oL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Best Dental Care Finger Wipes",
        value: "2.9B",
        photo: "https://m.media-amazon.com/images/I/71ZlhGsDyqL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Dental Mixing Tips Impression",
        value: "2.9B",
        photo: "https://m.media-amazon.com/images/I/61ne50ydvyL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Dental Floss Portable Dispenser",
        value: "2.9B",
        photo: "https://m.media-amazon.com/images/I/71xiveqbrQL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Oral Care Cleaning Kit",
        value: "2.9B",
        photo: "https://m.media-amazon.com/images/I/71lZaOa6Z8L._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
        name: "Electric Tooth Cleaning Tool",
        value: "2.9B",
        photo: "https://m.media-amazon.com/images/I/61hafunfb-L._AC_UL600_QL65_.jpg",
    },
    {
        name: "Coconut-Oil Infused Dental Floss",
        value: "2.9B",
        photo: "https://m.media-amazon.com/images/I/81L37TmKO0L._AC_UL600_QL65_.jpg",
    },
    {
        name: "Plackers Twin-Line Dental Flossers",
        value: "2.9B",
        photo: "https://m.media-amazon.com/images/I/714LjzCB8nL._AC_UL600_QL65_.jpg",
    },
    {
        name: "Expandable Dental Floss",
        value: "2.9B",
        photo: "https://m.media-amazon.com/images/I/61-dfekqjkL._AC_UL600_QL65_.jpg",
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
    valueEl.innerHTML = product.value + ` <span>${product.value}</span>`;

    const rating_container = document.createElement("div");
    rating_container.classList.add("rating_container");

    const rating = document.querySelector(".rating");

    const purchase = document.createElement("button");
    purchase.innerText = "ADD TO CART";


    rating_container.append(rating, purchase);
    productEl.append(nameEl, valueEl, purchase, rating_container);
    productBox.append(photoEl, productEl)

    container.appendChild(productBox);
}

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
})
