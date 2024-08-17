function selamlama(msg) {
    console.log(msg);
}
selamlama("selam");
selamlama("iyi günler");
selamlama("iyi akşamlar");

function yasHesapla(dogumYili) {
    return new Date().getFullYear() -dogumYili;
}



function emeklilik(dogumYili,isim) {
    let yas= yasHesapla(dogumYili);

    if (yas>65) {
        console.log("Zaten emeklisiniz...");
    }
    else{
        console.log(`Merhaba ${isim}, emekliliğinize ${65-yas} yıl Kalmıştır.`);
    }
}

emeklilik(2002,"Samet")