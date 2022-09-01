// sidecart opening

let carttoggle = () => {
    let sidecart = document.getElementById('sidecart');
    sidecart.toggleAttribute('visible')
}
//header background when scroll
function scrollFunction() {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            document.getElementById("header").style.backgroundColor = "#6074c1";
            document.getElementById("header").style.borderTop = "solid 1px black";
            document.getElementById("header").style.borderBottom = "solid 1px black";
        } else {
            document.getElementById("header").style.backgroundColor = "";
            document.getElementById("header").style.borderTop = "";
            document.getElementById("header").style.borderBottom = "";
        }
    }
//go to top btn visibility after scroll
let goTop = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("goTop").style.visibility = "visible";
    } else document.getElementById("goTop").style.visibility = "";
}
//back to top
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// dark mode down

const switchBtn = document.getElementById("switch");

switchBtn.addEventListener("change", () => {
    toggleClass();
});
let toggleClass = () => {
let switcher = document.getElementsByClassName("header__in");
switcher.toggleAttribute('Dark');
}







