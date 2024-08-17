// 1- "Elma, Armut, Muz, Gilek" elemanlarina sahip bir dizi olusturunuz.
let meyveler = ["Elma","Armut","Muz","Çilek"];
// 2- Dizi kaç elemanladir?
sonuç = meyveler.length;
console.log(sonuç);
// 3- Dizinin ilk ve son elemani nedir?
console.log(meyveler[0], meyveler[3]);
// 4- Elma dizinin bir elemanımıdir?
sonuc= meyveler.includes("Elma");
console.log(sonuc);
// 5- Kiraz meyvesini listenin sonuna ekleyiniz.
meyveler.push("Kiraz");
// 6- Dizinin son 2 elemaninı siliniz.
sonuc1= meyveler.splice(3,2);   //burada 3. elemandan başlassın 2 eleman silsin dedik.

console.log(sonuc1);
console.log(meyveler);


// 7- Asagidaki bilgileri dizi içerisinde saklayaniz ve her ögrencinin yaşını hesaplayiniz.
   
    /*
    Ögrenci 1: Yigit Bilgi 2010 (70,60, 80)
    Ogrenci 2: Ada Bilgi 2012 (80,80,90)
    Ogrenci 3: Ahmet Turan 2009 (60,60, 70)
    */
suAnkiYıl=2023

let ogrenciler = [
    Ogrenci1= ["Samet Çakmak",2002,[70,60,80]],
    Ogrenci2= ["Melike Çakmak",2008,[80,80,90]],
    Ogrenci3= ["Esma Çakmak",2012,[60,60,70]]
]

Ogrenci1[4]= (suAnkiYıl - Ogrenci1[1]);
Ogrenci2[4]= (suAnkiYıl - Ogrenci2[1]);
Ogrenci3[4]= (suAnkiYıl - Ogrenci3[1]);

console.log(ogrenciler);