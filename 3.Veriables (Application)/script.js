
/*
1- Iki ogrencinin asagidaki bilgilerini degiskenler içerisinde saklayınız.

ögrenci 1:
    isim                :Esma Çakmak
    dogum tarihi        :2012
    matematik notlar    : 70, 70, 80
ögrenci 2:
    isim                :Melike Çakmak
    dogum tarihi        :2008
    matematik notlar    : 40, 40, 50



2- Ogrencilerinin yas bilgilerini degiskende tutunuz.

3- Ogrencilerinin ders ortalama notunu degiskende saklayinaz.

4- Ogrencilerinin 50 gecme notuna gore basari durumlarina degiskende saklayiniz.

*/

//Şuanki Yıl bilgisini Bilgisayardan aldık

let suankiYil = new Date().getFullYear()

//Öğrenci 1

var ogr1_Ad = "Esma";
var ogr1_Soyad = "Çakmak";
var ogr1_dogumTarihi = 2012;
var ogr1_matNot1 = 70 ;
var ogr1_matNot2 = 70 ;
var ogr1_matNot3 = 80 ;
var ogr1_ortalama = (ogr1_matNot1+ogr1_matNot2+ogr1_matNot3)/3 ;
var ogr1_gecmeDurumu = ogr1_ortalama>=50;
let ogr1_yas = (suankiYil - parseInt(ogr1_dogumTarihi));

console.log(ogr1_yas);
console.log(parseInt(ogr1_ortalama));
console.log(ogr1_gecmeDurumu);


//Öğrenci 2

var ogr2_Ad = "Melike";
var ogr2_Soyad = "Çakmak";
var ogr2_dogumTarihi = 2008;
var ogr2_matNot1 = 40 ;
var ogr2_matNot2 = 40 ;
var ogr2_matNot3 = 50 ;
var ogr2_ortalama = (ogr2_matNot1+ogr2_matNot2+ogr2_matNot3)/3 ;
var ogr2_gecmeDurumu = ogr2_ortalama >= 50;
let ogr2_yas = (suankiYil - parseInt(ogr2_dogumTarihi));

console.log(ogr2_yas);
console.log(parseInt(ogr2_ortalama));
console.log(ogr2_gecmeDurumu);

