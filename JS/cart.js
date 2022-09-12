
let content = document.getElementById('content');
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cart__num");
    cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x,y) => x + y, 0);
};

calculation();


let generateContent = () => {
    
    let searchInput = document.getElementById('search');
    searchInput.value = '';
    let maxval = document.getElementById('maksymalna').value;
    let maxymal = Math.max.apply(Math, contentData.map(m => m.price)); // bajerancka mapa 
    if (maxval === '') //szuka wszystkich priców i zwraca największy jako maxymal
    {// a tutaj jak nie ma wartości to ustawia największą tą maxymal
        document.querySelector('input[name="maksymalna"]').value = maxymal;
        document.querySelector('input[name="maksymalna"]').max = maxymal;
    };
    
    return (content.innerHTML = contentData.map((x)=>{
        let maxval = document.getElementById('maksymalna').value;
        let minval = document.getElementById('minimalna').value;
        let {id, desc, name, price, img} = x;
        let search = basket.find((x) => x.id === id) || [];
        if(x.price >= minval && x.price <= maxval)
        
        return `
        <div id:Item-${id} name="karta" class="content__card ${id}">
        <img src="${img}" class="cardPhoto" ></img>
        <div class="cardName">${name}</div>
        <div class="cardDesc">${desc}</div>    
        
        <div class="cardPrice">
        Price: ${price}$
        </div> 
        <div class="cardbtn"> 
        <button onclick="plus(${id})" id="plus" class="content__card__cart">+</button>
        <div id=${id} class="content__card__cart quant">
        ${search.item === undefined? 0 : search.item}
        </div> 
        <button onclick="minus(${id})" id="minus" class="content__card__cart minus">-</button> 
        </div>
        </div>
        `;
    }).join(""));
    

};

generateContent()

let plus = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else {search.item += 1;}
    
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

let minus = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search.item === undefined) return;
    else if (search.item === 0) return;
    else { search.item -= 1;}
    
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

// search bar

let searchInput = document.getElementById('search');
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    let usuwaZnikanie = document.getElementsByName('karta');
    Array.from(usuwaZnikanie).forEach(function(x) {
        x.classList.remove('nima');
    });
    
    const visibl = contentData.map((x)=>{
        let {name, id} = x;
        let karta = document.getElementsByClassName(id);
        if (name.includes(value)) return;
        else karta[0].classList.add('nima');
    })
});



