// dict, json

let userA={
    "Name":"Samet",
    "Surname":"Çakmak",
    "Year":21,
    "Adress":{
        "City":"İstanbul",
        "County":"Sultangazi"
    },
    "Hobby": ["Swiming","sport"]
}

let userB={
    "Name":"Semih",
    "Surname":"Çakmak",
    "Year":19,
    "Adress":{
        "City":"İstanbul",
        "County":"Sultangazi"
    },
    "Hobby": ["Swiming","sport"]
}


let sonuc;

sonuc = userA.Name;
sonuc= userA.Adress.County;
sonuc= userA.Hobby[1];

let users= [
    userA,
    userB
];
sonuc=users[1].Name;

let urunler =[
    {
        "urun_adi":"İphone 15 Pro",
        "urun_fiyat":75000
    },
    {
        "urun_adi":"Samsung S22",
        "urun_fiyat": 35000
    }
]
sonuc = urunler[0].urun_adi;

console.log(sonuc);