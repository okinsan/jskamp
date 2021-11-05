function prime(number) {
    let isPrime = true

    if (number < 2) {
        isPrime = false
    }
    else {
        for (let i = 2; i < Math.sqrt(number) + 1; i++) {
            if (number===2) {
                continue
            }
            if (number % i === 0) {
                isPrime = false
                break
            }
        }
    }
    return isPrime
}


function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        if (prime(numbers[i])) {
            console.log("Asal")
        }
        else {
            console.log("Değil")
        }

    }
}

//findPrime(1, 2, 5, 8, 21, 13, 0,-9)

function asalBolenlerToplami(number) {
    let toplam=0
    for (let i = 2; i < Math.sqrt(number) + 1; i++) {
        if (number%i===0) {
            toplam+=i
            toplam+=number/i
        }
    }
    toplam++
    return(toplam)
}

function mukemmelSayiBul(number) {

for (let i = 1; i < number+1; i++) {
    if (i===asalBolenlerToplami(i)) {
        console.log(i)
    }
    
}
}
//mukemmelSayiBul(1000)

function arkadasSayilar(number1, number2) {

    if (asalBolenlerToplami(number1)===number2 && asalBolenlerToplami(number2)===number1){
        console.log("Arkadaş")
    }
    else{
        console.log("Değil")
    }
}

//arkadasSayilar(1184,1210)

function asalListele(number) {
    for (let i = 1; i < number+1; i++) {
        if (prime(i)) {
           console.log(i)
        }
    }
}

asalListele(1000)