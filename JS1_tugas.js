//if statement --ini adalah contoh penggunaan if tanpa else--
let Weight = 46;

if (Weight > 35) {
    console.info("berat badan saya di atas 35 kg.");
}


//if...else statement --ini contoh penggunaan if...else--
const usia = 17;
let syaratBuatKTP = true;

if (usia >= 17 && syaratBuatKTP) {
    console.info("Umur 17 tahun diwajibkan membuat KTP.");
} else {
    console.info("Umur Anda belum memenuhi syarat membuat KTP.");
}


//nested if --ini adalah contoh penggunaan if...else untuk menguji kondisi urutannya--
let menuMakananTerenak = "Kwetiau Seafood Goreng";

if (menuMakananTerenak === "Kwetiau Seafood Goreng"){
    console.log("Solaria menjual menu makanan ini dengan harga Rp. 45.000 ");
}else if (menuMakananTerenak === "Nasi Goreng Kambing"){
    console.log("Solaria menjual menu makanan ini dengan harga Rp. 41.000 ");
}else if (menuMakananTerenak === "Mie Ayam Spesial Solaria Pedas"){
    console.log("Solaria menjual menu makanan ini dengan harga Rp. 27.000 ");
}else if (menuMakananTerenak === "Chicken Cordong Bleu"){
    console.log("Solaria menjual menu makanan ini dengan harga Rp. 48.000 dengan kentang ");
}else if (menuMakananTerenak === "Nasi Goreng"){
    console.log("Solaria menjual menu makanan ini dengan harga Rp. 31.000 ");
}else {
    console.log("Makanan ini belum masuk kriteria terenak");
}


//switch case
const materiDesign  = "Test";

switch (materiDesign) {
    case "Empathize":
        console.log ("Tahapan " + materiDesign + " merupakan tahapan design thinking.");
        break;
    case "Define":
        console.log ("Tahapan " + materiDesign + " merupakan tahapan design thinking.");
        break;
    case "Ideate":
        console.log ("Tahapan " + materiDesign + " merupakan tahapan design thinking.");
        break;
    case "Prototype":
        console.log ("Tahapan " + materiDesign + " merupakan tahapan design thinking.");
        break;
    case "Test":
        console.log ("Tahapan " + materiDesign + " merupakan tahapan design thinking.");
        break;
    default:
        console.log (`Tahapan ${materiDesign} bukan bagian dari tahapan design thinking` + ".");    
}


//for statement
let semuaItem = [
    {Bagian: "Kenangan", jumlahFoto: 100},
    {Bagian: "mySelf", jumlahFoto: 7},
    {Bagian: "Baptis", jumlahFoto: 10},
    {Bagian: "Mudik", jumlahFoto: 45},
];
let keseluruhanItem = 0;

for (let z=0; z < semuaItem.length; z++){
    keseluruhanItem += semuaItem[z].jumlahFoto;
}

console.log("Jika digabungkan akan membentuk " + keseluruhanItem + " item.");


//while --contoh penggunaan while menggunakan Array--
let Favorit = ["Harry Potter", "The Twilight", "The Childe", "Monster High", "Percy Jackson"];
let i = 0;

while (i < Favorit.length){
    console.log ("List Film Favorit: " + Favorit[i]);
    i++;
}


//do while --ini adalah contoh penggunaan do...while pada Array--
let filmFav = ["Harry Potter", "The Twilight", "The Childe", "Monster High", "Percy Jackson"];
let j = 0;

do {
    if (filmFav[j] === "The Childe") {
        console.log("Akhir film ini memiliki plot twist yang lucu...");
    }
    j++;
} while ( j <filmFav.length);


//function --ini adalah contoh penggunaan parameter function--
function nilaiAkhirMahasiswa(result){
    var Grade = " ";
    if(result >=0 && result <=69){
        Grade = "Anda mendapatkan Grade E"
    }else if(result >=70 && result <=79){
        Grade = "Anda mendapatkan Grade C"
    }else if(result >=80 && result <=89){
        Grade = "Anda mendapatkan Grade B"
    }else if(result >=90 && result <=100){
        Grade = "Anda mendapatkan Grade A"
    }
   console.log(Grade);
}
nilaiAkhirMahasiswa(90);