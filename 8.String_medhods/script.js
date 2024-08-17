let kursAdi= "Kopmle uygulamalı web geliştirme eğitimi";
let sonuc;

sonuc= kursAdi.toLowerCase();
sonuc= kursAdi.toUpperCase();
sonuc= kursAdi.length;

sonuc= kursAdi.slice(0,6);
sonuc= kursAdi.substring(0,6);

sonuc= kursAdi.replace("eğitimi","Kursu");

sonuc=kursAdi.trim();
sonuc=kursAdi.trimStart();
sonuc=kursAdi.trimEnd();

sonuc=kursAdi.indexOf("Komple");
sonuc=kursAdi.split(" ");



console.log(sonuc);