const content = document.getElementById('content');
let basket = JSON.parse(localStorage.getItem("data")) || [];
let main = document.getElementById('main');
let emptyBas =() => {
const divWithClassExists = document.querySelectorAll('div.card').length > 0;
if (divWithClassExists === true) return;
else return content.innerHTML = `<div class="empty" id="empty">Cart is empty</div>`;
};

let generateEndCart = () => {
    
    return (content.innerHTML = contentData.map((x)=>{ 
        let {id, name, price, img} = x;
        let search = basket.find((x) => x.id === id) || [];
        
        if (search.item === 0) return ;
        else if (search.item === undefined) return ;
        else return `<div class="card" id:${id} >
                <img src="${img}" class="photo" id="photo"></img>
                <div class="content__right" id="content__right">
                    
                <div class="name" id="name">${name}</div>
                    
                <div onclick="plus(${id}), generateEndCart()" class="plus btnS" id="plus">
                            <svg width="28" height="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                            </svg>
                    </div>
                    <div class="quant btnS" id=${id}>${search.item}</div>
                    <div onclick="minus(${id}), generateEndCart(),emptyBas();" class="minus btnS" id="minus">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14"></path>
                        </svg>
                    </div>
                    
                    <div class="price btnM" id="price">${price}$</div>
                    <div class="arrow">
                    <svg width="58" height="58" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9 18 6-6-6-6v12Z"></path>
                    </svg>
                    </div>
                    <div class="totalPrice btnM" id="totalPrice">${price* search.item}$</div>
                        
                </div>
            </div>`
    }).join(""))
    
};
generateEndCart();

emptyBas(); // this will print cart is empty

let limitCart = () => {
    let start = 0;
    Array.from(basket).forEach(function(target) {
        if (target.item === 0) return;
        else start ++;
        
    });
    if (start <= 4) return;
    else main.toggleAttribute('m');
};
limitCart();

let plus = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) return;
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
};
