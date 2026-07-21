/* ================================================================
   ✏️  CONFIG.JS — FILE KONFIGURASI PORTOFOLIO
   ================================================================
   Halo! File ini adalah SATU-SATUNYA file yang perlu kamu ubah.
   Ikuti petunjuk di setiap bagian, lalu simpan dan refresh browser.
   Jangan ubah file lain kecuali kamu sudah paham JavaScript.
   ================================================================ */


/* ----------------------------------------------------------------
   👤 PROFIL UTAMA
   Ubah nama, tagline, deskripsi, dan info pribadimu di sini.
   ---------------------------------------------------------------- */
const CONFIG_PROFILE = {
  name:       "Habib Alfino Febrianto",   // Nama lengkap kamu
  initials:   "FINO",                  // 2 huruf inisial (untuk logo & avatar)
  tagline:    "Fullstack Developer & UI Designer", // Kalimat singkat di bawah nama
  greeting:   "Halo, saya",          // Kata sapaan sebelum nama besar
  bio: [
    // Paragraf pertama tentang kamu (boleh diedit bebas)
    `Halo Semuanya perkenalkan nama saya habib,
     Saya berumur 16 tahun, Saya murid dari dismks brantas karangkates,
      Saya tinggal di desa boro kecamatan selorejo kabupaten blitar`,
    // Paragraf kedua (teknologi yang kamu pakai)
    `jika gabut saya terkadang membuat 3d model random untuk saya upload di youtube saya : Federic Parkerr,
     Terkadang saya membuat website untuk gabut, saya juga pernah menghosting sebuah website menggunakan vercel yang gratis.
      Saya juga bertanggung jawab atas hal yang saya buat.`,
  ],

  // Info detail di kartu about
  location:   "Blitar, Jawa Timur",
  education:  "SMKS Brantas Karangkates — RPL",
  focus:      "Web App & Mobile Development",
  languages:  "Indonesia, Jawa",

  // Status badge di hero & about (ganti teks sesuai kondisimu)
  status:     "Available for work — 2026",   // contoh: "Sedang Sekolah" / "Open to Projects"
  statusOpen: true,    // true = titik hijau (aktif), false = titik merah

  // Link tombol "Unduh CV" — ganti dengan path file CV kamu
  cvLink:     "img/CV_Habib Alfino Febrianto .pdf",     // contoh: "file/cv-rizky.pdf"
};


/* ----------------------------------------------------------------
   📊 STATISTIK HERO
   Angka yang muncul di bagian bawah hero dengan animasi counter.
   ---------------------------------------------------------------- */
const CONFIG_STATS = [
  { number: 7,   label: "Proyek"    },
  { number: 2,    label: "Tahun pengalaman" },
  { number: 0,   label: "Klien"     },
];


/* ----------------------------------------------------------------
   🔗 SOSIAL MEDIA & KONTAK
   Ganti nilai "url" dengan link profilmu. Kosongkan ("") untuk sembunyi.
   ---------------------------------------------------------------- */
const CONFIG_SOCIAL = {
  email:     "finofebriantohabiba@gmail.com",
  instagram: "https://www.instagram.com/finzzz1770/",   // kosongkan "" untuk sembunyikan
  github:    "https://github.com/Fino905",
  linkedin:  "https://www.linkedin.com/in/fino-x-pplg-2-421155384/",
  twitter:   "",   // kosongkan "" untuk sembunyikan
};


/* ----------------------------------------------------------------
   🛠️  KEAHLIAN (SKILLS)
   Tambah / hapus skill sesuai kemampuanmu.
   Skill bar: nilai 0–100 (persentase kemampuan).
   ---------------------------------------------------------------- */
const CONFIG_SKILLS = {
  categories: [
    {
      icon:   "fa-solid fa-desktop",
      title:  "Frontend",
      tags:   ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Tailwind CSS"],
    },
    {
      icon:   "fa-solid fa-server",
      title:  "Backend",
      tags:   ["PHP", "Laravel", "Node.js", "Express", "MySQL", "MongoDB"],
    },
    {
      icon:   "fa-solid fa-wrench",
      title:  "Tools & Others",
      tags:   ["Git", "GitHub", "Figma", "Docker", "VS Code", "Linux"],
    },
  ],

  bars: [
    { name: "Frontend Development", pct: 90 },
    { name: "Backend Development",  pct: 90 },
    { name: "UI / UX Design",       pct: 75 },
    { name: "Mobile Development",   pct: 65 },
  ],
};


/* ----------------------------------------------------------------
   💼 PROYEK
   Tambah proyek baru dengan menambah blok { ... } di bawah.
   category harus salah satu dari: "Web App" / "Mobile" / "Game" / "Web"
   ---------------------------------------------------------------- */
const CONFIG_PROJECTS = [
  {
    title:    "3D Model",
    desc:     "3D model yang saya buat menggunakan Blockbench, model ini saya buat untuk di upload ke youtube saya",
    tags:     ["3D", "Modeling", "Blockbench"],
    category: "3D",
    image:    "img/project 1.png",   // path ke file gambar proyek (opsional)
    link:     "https://drive.google.com/drive/folders/1BODLJ88mkKrENT_kFAopaOkZul6cyk55?usp=sharing",   // ganti dengan URL proyekmu
  },
  {
    title:    "Website Kelas XI RPL 2",
    desc:     "Website untuk kelas XI RPL 2 yang dibuat dengan HTML, CSS, dan JavaScript.",
    tags:     ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image:    "img/project 2.png",
    link:     "https://xpplg2smkbrantas-website.vercel.app/",
  },
  {
    title:    "Website Studio Minecraft",
    desc:     "Website untuk studio Minecraft yang dibuat dengan HTML, CSS, dan JavaScript.",
    tags:     ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image:    "img/project 3.png",
    link:     "https://qmcstudiowebsite.vercel.app/",
  },
  {
    title:    "Website Random",
    desc:     "Website random yang dibuat dengan React, Chart.js, dan Tailwind CSS.",
    tags:     ["HTMML",, "CSS"],
    category: "Local Website",
    image:    "img/project 4.png",
    link:     "https://drive.google.com/drive/folders/1C_okn5Kn6mcYnu6EprvsZfu2HhndS5Z3?usp=sharing",
  },
  {
    title:    "Tingkerkat Arduino Uno LCD",
    desc:     "Arduino Uno dengan LCD yang menampilkan lirik lagu dari ayy bagindas dengan design yang minimalis",
    tags:     ["Arduino", "LCD"],
    category: "Tingkerkat",
    image:    "img/project 5.png",
    link:     "https://www.tinkercad.com/things/kO7T5TJ4GRO-cb2",
  },
  {
    title:    "Python Project",
    desc:     "{Project python simpel yang pernah saya buat sendiri disekolahan sebagai tugas dan belajar mandiri}",
    tags:     ["Python"],
    category: "python",
    image:    "img/project 6.png",
    link:     "https://drive.google.com/drive/folders/1H83386zJHIclthy9P7KMthZToPX1M2Nq?usp=sharing",
  },
];


/* ----------------------------------------------------------------
   🎨 WARNA TEMA  (opsional — skip jika tidak mau ubah)
   Ganti kode warna hex sesuai selera.
   ---------------------------------------------------------------- */
const CONFIG_THEME = {
  accent:  "#1aafff",   // warna utama (ungu)
  accent2: "rgba(26, 111, 255, 0.35)",   // warna kedua (pink)
};
