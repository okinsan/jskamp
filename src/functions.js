function addToCart(quantity,productName="Elma") {
<<<<<<< HEAD
    console.log("Sepete Eklendi. Ürün : "+ productName + "   Adet : "+quantity)
}

addToCart()
addToCart(5,"Yumurta")
addToCart(15)

let sayHello = ()=>{
    console.log("Hello")
=======
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
}

sayHello()

let sayHello2 = function () {
<<<<<<< HEAD
    console.log("Hello2")
}

sayHello2()

let product1={productName:"Karpuz", unitPrice:10, quantity:5}

function addToCart2(product) {
    console.log("Ürün: "+product.productName)
}

addToCart2(product1)

function addToCart3(products) {
=======
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
    console.log(products)
}

let products = [
<<<<<<< HEAD
    {productName:"Karpuz", unitPrice:10, quantity:5},
    {},
    {}
]

addToCart3(products)

function add(...numbers) {  //rest (...numbers parametresi her zaman en sonda kullanılır)
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total=total + numbers[i]        
    }
    console.log(total)
}

add(5,7)
add(10,20,30)


let numbers=[20,30,65,955,45,12]
console.log(numbers)
console.log(...numbers) //spread


let [akdeniz, karadeniz, ege, [akdenizSehirleri, karadenizSehirleri]]=[
    {name:"Akdeniz", location:"Güney"},
    {name:"Karadeniz", location:"Kuzey"},
    {name:"Ege", location:"Batı"},
    [
        ["Adana", "Antalya"],
        ["Trabzon", "Rize"],
        ["İzmir", "Manisa"]
    ]
]
console.log(akdeniz.name)
console.log(karadeniz.location)
console.log(akdenizSehirleri)
console.log(karadenizSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} ={productName:"Karpuz", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
=======
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)