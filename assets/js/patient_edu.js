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

let visitorCount = localStorage.getItem('visitorCount') || 0
visitorCount++
localStorage.getItem('visitorCount', visitorCount)
document.getElementById('visitorCount').innerHTML = visitorCount;