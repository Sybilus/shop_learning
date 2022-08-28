
let content = document.getElementById('content');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateContent = () => {

    return (content.innerHTML = contentData.map((x)=>{
        let {id, desc, name, price, img} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id:Item-${id} name="karta" class="content__card">
        <img src="${img}" class="cardPhoto" style="min-height:150px;"></img>
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
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
};

