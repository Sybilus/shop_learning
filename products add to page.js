let shop = document.getElementById("shop"); // newly added elements will go in there on web

let variablefordatalocalstoring = JSON.parse(localStorage.getItem("data")) || []; // this is for local storing

let generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => { // x can be changed but need to be the same everywhere
      let { id, name, price, desc, img } = x; // we can skip this but later $ gotta be with x.
      let search = variablefordatalocalstoring.find((x) => x.id === id) || []; // this is for checking local storage
      return `
    <div id=product-id-${id} class="item">
    
        <i onclick="plus(${id})" class="random"></div>
        <div id=${id} class="quantity">
        ${search.item === undefined ? 0 : search.item} 
        </div>
        <i onclick="minus(${id})" class="random"></div>
    
    </div>
    `; // if something was found in local storage this is part after: but if not will return 0 part after ? 
    }) // you can always fetch other stored data
    .join(""));
};

generateShop(); // this is to actually generate items

let plus = (id) => {
  let selectedItem = id;
  let search = variablefordatalocalstoring.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    variablefordatalocalstoring.push({
      id: selectedItem.id, // all you put there will endup stored in local
      item: 1,             //
    });
  } else {
    search.item ++;
  }

  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(variablefordatalocalstoring));
};
let minus = (id) => {
  let selectedItem = id;
  let search = variablefordatalocalstoring.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item --;
  }
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(variablefordatalocalstoring));
};
let update = (id) => {
  let search = variablefordatalocalstoring.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
};