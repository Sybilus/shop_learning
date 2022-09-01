// sidecart opening

let carttoggle = () => {
    let sidecart = document.getElementById('sidecart');
    sidecart.toggleAttribute('visible')
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

switchBtn.addEventListener('change', () => {
    const switcher = document.getElementsByClassName('Whit');
    
    Array.from(switcher).forEach(function(target) {
        if (!target.classList.contains('dark'))
        return target.classList.add('dark');
        else target.classList.remove('dark');
    });

});






