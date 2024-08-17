let ogrenciler = ["Samet","Melike","Esma"]

sonuc = ogrenciler.length;              //Dizinin kaç karakterli olduğunu sorduk.

// array to string
sonuc= ogrenciler.toString();           //diziyi string değere çevirir.
sonuc= ogrenciler.join(" ");            //Dizinin aralarına boşluk koyarak string değere çevirir.

    //eleman silme

// sonuc= ogrenciler.pop();                //son eleman silinir ve silinen eleman geri döndürür.
// sonuc= ogrenciler.shift();              // ilk eleman silinir.

    //eleman ekleme

// sonuc = ogrenciler.push("Semih");       //Dizinin sonuna eleman ekler.
// sonuc = ogrenciler.unshift("Semra")     //dizinin başına eleman ekler.


//Dizileri Birleştirme
let markalar1 = ["BMW","MERCEDES"]
let markalar2 = ["AUDİ","LAND ROVER"]
let markalar3 = ["BENTLEY","TOGG"]

// sonuc= markalar1.concat(markalar2,markalar3); 

sonuc = markalar1.splice(0, 0, markalar3); //ekleme silme işlemleri için kullanılabilir.


console.log(sonuc);
console.log((markalar1));