let sonuc;
let a = 10, b = 20, c = 30 ;


// 1 - Aritmatik Operatörler
sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = c % a;  // Kalan
sonuc = a++;  // a + 1 tekrar değişkeni yazdırmamız gerekir.
sonuc = ++a;  // a + 1 direk sonuca etki eder.
sonuc = a--;  // a - 1 tekrar değişkeni yazdırmamız gerekir.
sonuc = --a;  // a - 1 direk sonuca etki eder.



// 2 - Atama Operatörler
sonuc = a;
sonuc += a // sonuc = sonuc + a
sonuc -= a // sonuc = sonuc - a
sonuc *= a // sonuc = sonuc * a
sonuc /= a // sonuc = sonuc / a
sonuc %= a // sonuc = sonuc % a

// 3 - Karşılaştırma Operatörler
sonuc = (a==b)      //Eşitmi
sonuc = (a!=b)      //Eşit değilmi
sonuc = (3==="3")   // değer ve tip kontrolü yapar
sonuc = (a > b)
sonuc = (a < b)
sonuc = (a <= b)

// 4 - Mantıksal Operatörler
/*

and (&&)  ve

true , true => True
true , false => False


or (||)  veya
true , true => true
true , false => true
false , false => false

*/

console.log(sonuc);