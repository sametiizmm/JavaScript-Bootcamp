// 1- Bir sayinin 10-50 arasinda olup olmadigana kontrol ediniz.
let sayi = 19;

if ((10<sayi) && (sayi<50)) {
    console.log("Sayı 10-50 arasındadır.")
} else{
    console.log(sayi)
}

// 2- Bir sayinin pozitif tek says olup olmadagina kontrol ediniz.
if (sayi%2==1 && sayi>0){
    console.log("sayı pozitif tek sayıdır")
}
else{
    console.log("Sayı çift sayıdır.")
}
// 3- x, y, z sayilarinin buyüklük karsalastirmasana yapinaz. (else if 'i arastaraniz.)
let x = 10, y=20, z=30

if (x > y && x > z) {
    console.log("x en büyük")
} else if (y>x && y>z) {
    console.log("y en büyük")
} else if(z>y && z>x) {
    console.log("z en büyük")
}
// 4- 2 vize ve 1 final notuna gore hesaplanan ortalama 1çin;
// a- Eder ortalama 50 ve üstündeyse gecti degilse kalda yazsin.
// b- Gecmek için ortalama 50 bile olsa final notu en az 50 olmalidar.
// c- Finalden 70 alindiâinda ortalama 50' nin altinda olsa bile dersten geçilsin.
var vize1=10;
var vize2=10;
var final=80;
let ortalama = (vize1+vize2+final)/3;


if (ortalama>=50 && final>=50) {    
    console.log("Sınıfı başarı ile geçti")
} else if ((final>=70 || ortalama<50)){
    console.log("Sınıfı final notu ile geçti.")
} 
else {
    console.log(" KALDI... Sınıfı geçmek için min ortalamanız 50 olmalıdır.")
}