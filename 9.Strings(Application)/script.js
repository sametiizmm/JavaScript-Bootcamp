let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Gelistirme Kursu";
// 1- url kac karakterlidir?
let sonuc;

sonuc = url.length;
// 2- kursAdi kag kelimeden olusmaktadar?
sonuc=kursAdi.split(" "); //boşluklardan ayırdık..
sonuc=sonuc.length;         //uzunluğunu sorduk.

// 3- url https ile mi bastiyor?
if (url.startsWith("https") > -1 ){
    console.log("Evet");
} else {
    console.log("Hayır");
}


// 4- kursAdi içerisinde Egitimi kelinesi var mi?

if (kursAdi.indexOf("Egitimi") > -1) {
    console.log("Evet var");
}else{
    console.log("Hayır yok");
}

// 5- url ve kursAdi dediskenlerini kullanarak asa§idaki string bilgiyi olusturunuz.
// https://www.sadikturan.com/komple-web-gelistirme-kursu
kursAdi= kursAdi.toLowerCase();
sonuc= url + kursAdi.replaceAll(" ","-");

console.log(sonuc)