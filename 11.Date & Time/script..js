let simdi = new Date();     //şimdiki tarih - Saat

//get medhods

sonuc = simdi;
sonuc = simdi.getDate();
sonuc = simdi.getDay();     // 0: Pazar - 6: Cumartesi
sonuc = simdi.getFullYear();    // yıl
sonuc = simdi.getHours();       // saat bilgisi
sonuc = simdi.getTime();  

//Set Medhods
// simdi.setFullYear(2025);
// simdi.setMonth(7);          // 0: ocak
// simdi.setDate(15);

sonuc=simdi;

let dogumTarihi = new Date(2002,7,27);


let milisecond =  simdi - dogumTarihi;
let saniye= milisecond/1000;


console.log(sonuc);
console.log(typeof sonuc);