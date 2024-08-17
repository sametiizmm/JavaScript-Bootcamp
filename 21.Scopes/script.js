var isim="Samet";           //global scope

function yazdir() {
    var isim="Esma";
    var yas= 21;            //function scope
    console.log(isim);
}

if (true) {
    var isim="semih";
}
console.log(isim);

const age=21                //sabit değişken değiştirilemez.