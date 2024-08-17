// 1- Kendisine gönderilen kelimeyi belirtilen kez ekrana yazdıran fonksiyon yazın.
function tekrar(kelime,adet) {
    for (let i = 0; i < adet; i++) {
        console.log(kelime);
    }
}
tekrar("Samet",7);

// 2- Dikdörtgenin alan ve cevresini hesaplayan fonksiyonu yazanız.
function alanHesap(uzunKenar,kısaKenar) {
    let alan=uzunKenar*kısaKenar;
    console.log(`Kenarları ${uzunKenar} ve ${kısaKenar} olan dikdörtgenin alanı: ${alan} 'm² dir.`);
}
alanHesap(8,4);
// 3- Yaza tura uygulamasana fonksiyon kullanarak yap1n1z.
function yazıTura() {
    let random=Math.random();
    if ( random < 0.5 ) {
        console.log("Yazı");
    }
    else{
        console.log("Tura");
    }
}
yazıTura();

// 4- Kendisine gönderllen bir sayinzn tam bolenterini dizi seklinde döndüren fonksiyonu yaziniz.
function tamBölen(sayı) {
    let sayılar=[];

    for (let i = 0; i < sayı; i++) {
        if (sayı % i == 0) {
            sayılar.push(i);
        }
    }
    return sayılar;
}
console.log(tamBölen(24));
console.log(tamBölen(10));
console.log(tamBölen(3));

// 5- Degisken sayıda parametre alan toplan isminde bir fonksiyon tanamlaysnaz.

function toplam() {
    let sonuc=0;
    for (let i = 0; i < arguments.length; i++) {
        sonuc+=arguments[i]
        
    }
    return sonuc;
}
console.log(toplam(5,7,2));