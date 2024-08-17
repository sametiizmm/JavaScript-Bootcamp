let sonuc ;


sonuc= 10;
sonuc= "10";
sonuc= Number("10");        //sayı olarak ekrana yazdırır
sonuc= parseInt("10.6");    //tam sayı olrak ekrana yazdırır
sonuc= parseFloat("10.6");  //ondalık sayı olarak ekrana yazdırır

sonuc= isNaN("10");         //Sayısal değer değil mi?

let sayi = 15.12445567;

sonuc= sayi.toPrecision(5);     //tüm sayı üzerinden 5 basamaklı sayıya yuvarlar ve döndürür.
sonuc= sayi.toFixed(5);         //ondalıklı sayı 5 basakmaklı olur

sonuc= Math.round(2.4);
sonuc= Math.round(2.6);     //en yakın sayıya yuvarlar
sonuc= Math.ceil(2.2);      //her durumda bir üst tam sasyıya yuvarlar
sonuc= Math.floor(2.2);     //her durumda bir ALT tam sasyıya yuvarlar
sonuc= Math.sqrt(5);        //karekök 
sonuc= Math.pow(2,3);       // 2x2x2 = 8
sonuc= Math.abs(-10);       // mutlak değer
sonuc= Math.min(2,3,7,5,1); // min değeri yazdırır
sonuc= Math.max(2,3);       // max değeri yazdırır
sonuc= Math.random();       // 0-1 arasında rastgele sayı üretir


console.log(typeof sonuc);
console.log(sonuc);
