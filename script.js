// Data nama-nama khodam (setan) di Indonesia beserta URL gambar
const khodamData = [
  {
    name: "Siluman Kadal",
    imageUrl:
      "https://akcdn.detik.net.id/community/media/visual/2022/04/11/kadal-1_169.jpeg?w=620",
  },
  {
    name: "Kunti Lanak",
    imageUrl:
      "https://assets.promediateknologi.id/crop/0x0:1080x664/750x500/webp/photo/p1/294/2023/09/01/604717b592eb4ef898bbb0b64040ee60_67879164_106534127401376_5010486643502001741_n-4144339369.jpg",
  },
  {
    name: "Siluman Ular Kadut",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1306620139744292864/csg3Dr-z_400x400.jpg",
  },
  {
    name: "Siluman Cebong",
    imageUrl:
      "https://akcdn.detik.net.id/visual/2019/04/17/434c253c-aff3-490c-a6ba-44faa7178f86_169.jpeg?w=650",
  },
  {
    name: "Kuntilanak Merah",
    imageUrl:
      "https://i.pinimg.com/736x/8e/0f/03/8e0f030027cf46e0951aff3e1400a052.jpg",
  },
  {
    name: "Tuyul",
    imageUrl:
      "https://preview.redd.it/tuyul-is-a-bald-pale-child-like-creature-from-indonesia-v0-g4gyg7zheb0b1.jpg?width=640&crop=smart&auto=webp&s=92b4560f75643b4d8d6e1354cdf542574144e7cf",
  },
  {
    name: "Genderuwo",
    imageUrl:
      "https://awsimages.detik.net.id/community/media/visual/2021/11/25/hiii-genderuwo-ikut-kawal-sidang-uu-cipta-kerja-di-jakarta-4_169.jpeg?w=1200",
  },
  {
    name: "Sundel Bolong",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/014/050/093/original/illustration-of-a-traditional-indonesian-ghost-named-sundel-bolong-on-a-red-background-free-vector.jpg",
  },
  {
    name: "Suster Ngepot",
    imageUrl:
      "https://asset-2.tstatic.net/bali/foto/bank/images/suster-ngesot_20161205_144801.jpg",
  },
  {
    name: "Jenglot",
    imageUrl:
      "https://www.supernaturalconfessions.com/uploads/1/1/8/8/11889555/jeng_orig.jpeg",
  },
  {
    name: "Pocong",
    imageUrl:
      "https://d1tgyzt3mf06m9.cloudfront.net/v3-staging/2023/10/review-film-pamali-dusun-pocong.jpg",
  },
  {
    name: "Suling Sakti",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1ABWmcyLKdaqbsa78WqraBgQ0xConqF-8A&s",
  },
  {
    name: "Badarawuhi",
    imageUrl:
      "https://jabarekspres.com/wp-content/uploads/2024/04/Film-badarawuhi.png",
  },
  {
    name: "Buto Ijo",
    imageUrl:
      "https://static.wikia.nocookie.net/dreadout/images/b/bf/Butoijo.jpg/revision/latest?cb=20210122195723",
  },
  {
    name: "Babi Ngepet",
    imageUrl:
      "https://qph.cf2.quoracdn.net/main-qimg-d91480cc88ce7d7bb6f312c7fe7b116c-lq",
  },
  {
    name: "Kera Sakti",
    imageUrl: "https://i1.sndcdn.com/artworks-000610392661-jgdx90-t500x500.jpg",
  },
  {
    name: "Nyi Roro Kidul",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTsf9mOsNamzHrSllZ2YEgPJMcKJkweIwng&s",
  },
  {
    name: "Gerandong",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTsf9mOsNamzHrSllZ2YEgPJMcKJkweIwng&s",
  },
  {
    name: "Wewe Gombel",
    imageUrl:
      "https://thumb.viva.id/vivabanten/1265x711/2022/12/29/63adae995bba5-ilustrasi-hantu-wewe-gombel_banten.jpg",
  },
  {
    name: "Kalagondang",
    imageUrl:
      "https://yt3.googleusercontent.com/yOvWX73hlqDBLj66XadQkfY_R7k8tXfTVuYDfCH9cnhVPkAjeQP87Qu4J-jHKacfYmJy2naLUA=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Ferdi Sambo",
    imageUrl:
      "https://asset.kompas.com/crops/t5o709sFfgCRBBo-TgihMMCGOHM=/403x280:1263x853/1200x800/data/photo/2022/07/21/62d91cc22eb39.jpg",
  },
  {
    name: "Macan Loreng",
    imageUrl:
      "https://cdn1-production-images-kly.akamaized.net/v_iOy4DW7CSge_6fwzdtEs6RPSQ=/500x667/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3381508/original/048049500_1613722631-900366-patung-macan-nyentrik.jpg",
  },
  {
    name: "Belut Putih",
    imageUrl:
      "https://i.pinimg.com/1200x/7d/50/84/7d5084f6185f0cb746f74f56aa5fcf46.jpg",
  },
  {
    name: "Tikus Curut",
    imageUrl: "https://fumida.co.id/wp-content/uploads/2020/11/curut-1.jpg",
  },
  {
    name: "Buaya Darat",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1306620139744292864/csg3Dr-z_400x400.jpg",
  },
];

// Fungsi untuk menghitung index khodam berdasarkan nama dan tanggal lahir
function calculateKhodamIndex(fullName, dob) {
  // Mengubah tanggal lahir menjadi format timestamp
  const birthDate = new Date(dob);
  const timestamp = birthDate.getTime();

  // Menghitung nilai hash dari nama lengkap dan timestamp
  let hash = 0;
  for (let i = 0; i < fullName.length; i++) {
    hash += fullName.charCodeAt(i);
  }
  hash += timestamp;

  // Menggunakan modulus untuk mendapatkan index dari array khodamData
  const index = hash % khodamData.length;

  return index;
}

// Memproses form saat di-submit
document
  .getElementById("khodamForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value;

    // Memanggil fungsi untuk menghitung index khodam
    const khodamIndex = calculateKhodamIndex(fullName, dob);
    const selectedKhodam = khodamData[khodamIndex];

    // Menampilkan modal dengan nama khodam dan gambar
    const modal = document.getElementById("myModal");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
        <h2>Khodam Anda</h2>
        <h3>${selectedKhodam.name}</h3>
        <img src="${selectedKhodam.imageUrl}" alt="${selectedKhodam.name}" style="max-width: 100%; max-height: 300px;">
      `;

    modal.style.display = "block";
  });

// Menutup modal jika tombol close diklik
document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
  });

// Menutup modal jika area di luar modal diklik
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
