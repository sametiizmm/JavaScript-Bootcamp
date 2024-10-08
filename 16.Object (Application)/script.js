/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

*/

let siparis_1 = {
    "siparis_id": 101,
    "siparis_tarihi": "30.12.2022",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"
    },
    "urunler": [
        {
            "urun_id": 5,
            "urun_adi": "IPhone 13 Pro",
            "urun_url": "http://abc.com/iphone-13-pro",
            "urun_fiyat": 22000
        },
        {
            "urun_id": 6,
            "urun_adi": "IPhone 13 Pro Max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "urun_fiyat": 25000
        }
    ]
};

let siparis_2 = {
    "siparis_id": 102,
    "siparis_tarihi": "30.12.2022",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"
    },
    "urunler": [
        {
            "urun_id": 6,
            "urun_adi": "IPhone 13 Pro Max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "urun_fiyat": 25000
        }
    ]
};

// ürünlerin kdv'li fiyatları
iphone13prokdv= ((siparis_1.urunler[0].urun_fiyat*18) /100);
iphone13promaxkdv= ((siparis_1.urunler[1].urun_fiyat*18) /100);

// sipariş toplamları
toplam1= (siparis_1.urunler[0].urun_fiyat+iphone13prokdv)+siparis_1.urunler[1].urun_fiyat+iphone13promaxkdv;
toplam2= (siparis_2.urunler[0].urun_fiyat+iphone13promaxkdv)

console.log(`1.Siparişin kdv dahil toplam ücreti:" ${toplam1} TL`);
console.log(`2.Siparişin kdv dahil toplam ücreti:" ${toplam2} TL`);