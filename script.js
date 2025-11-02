// declaring name and font size:
var nickname = "Rifat";
var splitNumber = nickname.split('')
var initialWordWidth = 100 / splitNumber.length
var Name = document.getElementById('name');
Name.classList.add(`text-[${initialWordWidth}vw]`)
Name.innerText = nickname
var bgColorInit = "bg-zinc-900"
var bgColorPost = "bg-slate-950"
var container = document.getElementById("container")
container.classList.add(bgColorInit)
// font families declaration: 
var fonts = [
    "momo-trust-display-regular",
    "momo-signature-regular",
    "playfair-display-two",
    "lobster-two-bold-italic",
    "noto-serif-two",
    "saira-two",
    "josefin-sans-two",
    "alfa-slab-one-regular",
    "jersey-10-regular",
    "lobster-regular",
    "shadows-into-light-regular",
    "caveat-two"
]
var i = 0;
console.log(i)
// canvas display and animation:
var cd = document.getElementById("canvas_display")
cd.classList.add("canvas_display")

var interval = setInterval(() => {
    console.log(i, fonts[0])
    // Name.classList.add(fonts[i]);
    i++;
    if (i >= fonts.length) {
        clearInterval(interval);
        cd.classList.add("expand-from-center")

        //canvas_display text will be visible here:
        var credit = document.getElementById("credit")
        credit.classList.add("show-zoom")

    }
}, 250);
console.log(i)

setTimeout(() => {
    container.classList.add(bgColorPost)
    container.classList.remove(bgColorInit)
    cd.classList.add("shrink-to-center")
    Name.classList.add("hidden")

    // adding smooth scrolling - Lenis
    
}, 8000);

// year variable set on current-year id:
var year = document.getElementById("current-year");
var date = new Date();
var currentYear = date.getFullYear();
year.innerText = currentYear;



console.log(initialWordWidth, fonts[0], currentYear)
