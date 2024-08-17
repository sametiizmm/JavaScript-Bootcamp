let ad = "Samet";
let soyad = "Çakmak";
let yas = 21;
let sehir = "İstanbul";

let mesaj = "benim adım" + ad + "ve soyadım" + soyad + ". "+ sehir + "\'de yaşıyorum."+ "Emekliliğe "+ (65-yas) + " Kaldı.";
mesaj = `benim adım ${ad} ve soyadım ${soyad}, ${sehir} 'de yaşıyorum. Emekliliğe ${(65-yas)} Kaldı.`;
console.log(mesaj);