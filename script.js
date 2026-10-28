3function perkenalan() {
    document.getElementById("teksPerkenalan").textContent =
        "Halo, nama saya Moses. Saya mahasiswa Informatika dari Bandung.";
}
function ubahTema() {
    const warna = ["#e7f7ed", "#fff2df", "#f0eaff", "#f2f6fb"];
    const sekarang = document.body.style.backgroundColor;
    let indeks = warna.indexOf(sekarang);
    document.body.style.backgroundColor = warna[(indeks + 1) % warna.length];
}
function hitungJumlah() {
    const a = document.getElementById("angka1").value;
    const b = document.getElementById("angka2").value;
    if (a === "" || b === "") {
        document.getElementById("hasilJumlah").textContent = "Masukkan kedua angka terlebih dahulu.";
        return;
    }
    document.getElementById("hasilJumlah").textContent = "Hasil penjumlahan: " + (Number(a) + Number(b));
}
function cekBilangan() {
    const nilai = document.getElementById("angkaCek").value;
    if (nilai === "") {
        document.getElementById("hasilCek").textContent = "Masukkan angka terlebih dahulu.";
        return;
    }
    const angka = Number(nilai);
    document.getElementById("hasilCek").textContent =
        angka + (angka % 2 === 0 ? " adalah bilangan genap." : " adalah bilangan ganjil.");
}
function tampilkanWaktu() {
    document.getElementById("waktu").textContent =
        "Sekarang: " + new Date().toLocaleString("id-ID");
}
