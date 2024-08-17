// let toplam= 0;

// for(let i =0; i <= 10; i++) {
//     toplam +=i
//     console.log(i);
//     console.log("merhaba");
// }
// console.log(toplam);



let sayilar = [1,3,5,6,9,8];
let toplam =0;

for(let i=0; i<sayilar.length; i++) {
    toplam+= sayilar[i];
}
for(let index in sayilar){
    console.log(index);
}

for(let sayi of sayilar) {
    console.log(sayi);
}
console.log(toplam);


let user = {
    "name": "Samet Çakmak",
    "username": "sametiizmm",
    "paswd": "123345",
    "email": "sametiizmm@gmail.com"
};

for(let key in user){
    console.log(user[key]);
}