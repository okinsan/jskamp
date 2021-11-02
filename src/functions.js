function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi. Ürün : "+ productName + "   Adet : "+quantity)
}

addToCart()
addToCart(5,"Yumurta")
addToCart(15)

let sayHello = ()=>{
    console.log("Hello")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello2")
}

sayHello2()

let product1={productName:"Karpuz", unitPrice:10, quantity:5}

function addToCart2(product) {
    console.log("Ürün: "+product.productName)
}

addToCart2(product1)

function addToCart3(products) {
    console.log(products)
}

let products = [
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