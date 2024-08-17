// let urun1 = "iphone 15";
// let urun2 = "iphone 14";
// let urun3 = "iphone 13";

let urunler = ["iphone 15","iphone 14","iphone 13"];
let fiyatlar =[45000,40000,35000];
let renkler = ["naturel","siyah","yeşil"]

let urun1 = ["iphone 13"- 35000 -"Yeşil"];
let urun2 = ["iphone 14"- 40000 -"Siyah"];
let urun3 = [];

urun3[0]= "İphone 15";
urun3[1]= 45000;                //diziye ürün ekledik ve değiştirebiliriz.
urun3[2]= ["Naturel","Mavi","kırmızı"];

console.log(urun3 [2] [1]);     //burada dizinin içindeki diziye eriştik.

console.log(urunler[0]);

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);


let kursAdi = "Komple Web Geliştirme Eğitimi";
console.log(kursAdi.split(" ")[2]);             //string bilgiyi diziye çevirip diziden eleman yazdırdık.
