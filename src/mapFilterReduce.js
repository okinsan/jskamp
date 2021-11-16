let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

cart.map(p=>{
    console.log(p.productName+" : "+p.quantity*p.unitPrice)
})


let quantityOver2 = cart.filter(p=>p.quantity>2)
console.log(quantityOver2)

let total = cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)
console.log(total)