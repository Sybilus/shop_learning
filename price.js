
    // let towar = document.getElementsByName("karta");
    // towar.classList.toggle("visibl");   


// let getMax = () =>{
    
//     let maxval = document.getElementById('maksymalna').value;

//     let masort = (contentData.map((x)=>{

//         if (x.price < maxval) 
//         return x;

//     }));
//    console.log(masort)
// };

// let getMin = () =>{

//     let minval = document.getElementById('minimalna').value;

//     let misort = (contentData.map((x)=>{

//         if(x.price > val)
//         return x;

//     }))

//     console.log(misort)


// };
let prefered = () => {
    let maxval = document.getElementById('maksymalna').value;
    let minval = document.getElementById('minimalna').value;
    let misort = (contentData.map((x)=>{
        
    if(x.price >= minval && x.price <= maxval)
    return x;
        
   }))
    console.log(misort)

};