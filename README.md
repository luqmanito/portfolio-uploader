This is a [Next.js](https://nextjs.org/) project.

## Mulai

repo ini sudah live, bisa dicek melalui 
https://portfolio-uploader.vercel.app/

bila ingin menjalankan secara lokal
Petama, install node modules lalu jalankan mode dev atau build 


```npm i
# then
in dev mode :
npm run dev
# or
in build mode :
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Fitur

Penjelasan fitur secara singkat

- Memiliki fitur mengubah foto background dan profile, tinggal klik atau drop file gambar. Ukuran size maksimal 2mb dan tipe gambar hanya boleh png, jpeg dan jpg.
- Memiliki fitur menambahkan data singkat profil seperti nama, posisi dan deskripi, dan juga riwayat portofolio / pekerjaan.

- Setelah mengisi semua form input, kamu bisa melihat hasilnya dengan mengklik profile tab pada header, atau bila kamu klik tombol Simpan Perubahan, maka otomatis akan mengarah ke halaman profil.

## Perubahan-perubahan

- Penyesuaian nama form input, menambahkan nama label di setiap form input, supaya lebih jelas.
- Validasi bila semua form belum terisi maka tombol Simpan Perubahan tidak bisa diklik
- Tombol Add Portofolio dan Simpan Perubahan dipindah ke paling bawah halaman, supaya lebih mudah diakses ketika user selesai mengisi form.
- Untuk mejaga konsistensi maka gambar cover dan avatar di halaman profil tidak bisa tampil seutuhnya. Namun User bisa melihat preview gambar yg telah diupload dengan mengklik cover atau avatar akan muncul dengan size utuh.
