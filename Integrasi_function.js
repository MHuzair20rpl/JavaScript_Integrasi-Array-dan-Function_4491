function tampilkanNama() {
    console.log("Nama saya adalah Huzair");
}
tampilkanNama();
tampilkanNama();
tampilkanNama();

function tampilkanInformasi() {
    console.log("Umur saya adalah 17 tahun");
    console.log("Saya tinggal di rumah");
}
tampilkanInformasi();

function tampilkanGaris() {
    console.log("===================================");
}
tampilkanGaris();
console.log("Tanggal 30 PAS");
tampilkanGaris();

function tampilkanSalam(nama) {
    console.log(`Selamat datang, ${nama}`);
}
tampilkanSalam("Huzair");
tampilkanSalam("Fahmi");

function tampilkanSalam(nama1, umur) {
    console.log(`Nama saya adalah ${nama1}`);
    console.log(`Umur saya adalah ${umur} tahun`);
}
tampilkanSalam("Huzair", "17");

function hitungLuasPersegi(sisi) {
    return sisi * sisi;
}
const luas = hitungLuasPersegi(5);
console.log(luas);

function periksaNilai(nilai) {
    if (nilai < 0 || nilai > 100) {
        return "Nilai tidak valid";
    }
    return "Nilai valid";
}
console.log(periksaNilai(50));
console.log(periksaNilai(149));

const hitungLuasSegitiga = (alas, tinggi) => {
    return (alas * tinggi) / 2;
};
const luasSegitiga = hitungLuasSegitiga(10, 5);
console.log(luasSegitiga);