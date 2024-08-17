


let sayilar = [1,5,7,15,12,24,3,25];
// 1- sayilar listesindeki her bir elemanin karesini yazdir:

// for(i of sayilar){
//     i=i**2;
//     console.log(i);
// }

// 2- sayilar listesindeki hangi sayilar 5' in katidir?

// for(let i=0; i<sayilar.length; i++){
//     if (sayilar[i]%5==0) {
//         console.log(sayilar[i]);
//     }
// }

// 3- sayilar listesindeki cift sayilarin toplamin1 bulunuz

    // let toplam=0;
    // for (let i in sayilar){
    //     if (sayilar[i]%2==0) {
    //         toplam+=sayilar[i];
    //     }
    // }
    // console.log(toplam);

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];
// 4- urunter listesindeki tüm ürünleri büyük harf ile yazdırın.

// for(let i in urunler){
//     i=urunler[i].toUpperCase();
//     console.log(i);
// }


// 5- urunter listesinde içinde samsung geçen kaç ürün vardır.

for (let i = 0; i < urunler.length; i++) {
    let a= urunler[i].indexOf("samsung");
    if(a==0){
        console.log(urunler[i]);
    };
}


let ogrenciler = [
    {"ad": "Samet","soyad": "Çakmak", "notlar": [60, 70,60]},
    {"ad": "Melike","soyad": "Çakmak", "notlar": [80.70,80]},
    {"ad": "Esma","soyad": "Çakmak", "notlar": [70,70,60]}
];


//ogrenciler listesindeki her ogrencinin ortalaması ve başarı durumlarını yazdırırn.
let ogr_ortalama= [
    ogr1=[],
    ogr2=[],
    ogr3=[]
]
ogr1ort=0
for (i of ogrenciler[0].notlar){
    ogr1ort+=i/ogrenciler[0].notlar.length
}
ogr1[0]=ogr1ort;

ogr2ort=0
for (i of ogrenciler[1].notlar){
    ogr2ort+=i/ogrenciler[1].notlar.length
}
ogr2[0]=ogr2ort;

ogr3ort=0
for (i of ogrenciler[2].notlar){
    ogr3ort+=i/ogrenciler[2].notlar.length
}
ogr3[0]=ogr3ort;


console.log(ogr_ortalama);

//tüm öğrencilerin not ortalaması kaçtır.
toplamNot_ort=0
for (let i of ogr_ortalama) {
    toplamNot_ort+=i/ogr_ortalama.length;
}
console.log(toplamNot_ort);