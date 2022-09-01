let cartContent = document.getElementById('sidecart__content');
let totalPrice = document.getElementById('price__sum');




let generateCart = () => {

    return (cartContent.innerHTML = contentData.map((x)=>{
        
        let {id, name, price, img} = x;
        let search = basket.find((x) => x.id === id) || [];
        if (search.item === undefined)return;
        else if (search.item === 0)return;
        else return `
        <div id:Item-${id} class="sidecart__card">
        <div class="sidecart__photo"><img src="${img}" style="width:100%;"></div>
        <div class="sidecart__name">Name: ${name}</div>
        <div class="sidecart__quant">Quantity: ${search.item}</div>
        <div class="sidecart__price">Price: ${price}$</div>
        <div class="remove__item" onclick="remover(${id}), generateCart(), totalAmount(), generateContent(), calculation()">Remove</div>
        </div>
        `;
    }).join(""));
};
generateCart()

let totalAmount = () => {
    if(basket.lenght !== 0){
       let amount = basket.map((x) => {
            let {item, id} = x;
            let search = contentData.find((y) => y.id === id) || [];
            return item * search.price;
       }).reduce((x,y)=>x+y,0 );
       return document.getElementById('price__sum').innerHTML = `<b>Total: ${amount} $</b>`;
    }else return;
};
totalAmount();

let remover = (x) => {
    let {id} = x;
        let search = basket.find((y) => y.id === id);
        if (search.item === undefined) return;
        else if (search.item === 0) return;
        else { search.item = 0}
        localStorage.setItem("data", JSON.stringify(basket));
    };







