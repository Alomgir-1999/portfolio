# 🌐 Personal Portfolio Website  

This is a **Personal Portfolio Website** built with **HTML5 + CSS3**.  
It showcases personal information, resume, services, portfolio, and contact section.  

![Portfolio Preview](./preview.png)  
*(Replace `preview.png` with your actual screenshot file name)*  

---

## ✨ Features  
- Responsive **Navbar** with smooth animations  
- **Home Section** with animated text and gradient border profile image  
- Professional **CV Download Button**  
- **Social Media Icons** with hover effects  
- Clean, modern design with **Google Fonts**  
- Lightweight and fast  

---

## 🛠️ Technologies Used  
- **HTML5**  
- **CSS3 (Animations, Flexbox, Gradient)**  
- **Google Fonts (Poppins, SUSE Mono)**  
- **Font Awesome / Icons**  

=============================================================STYLE=================================================


/*---/* =======================
   Google Fonts
======================= */
@import url('https://fonts.googleapis.com/css2?family=SUSE+Mono:ital,wght@0,100..800;1,100..800&display=swap'); /* SUSE Mono ফন্ট ইম্পোর্ট */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'); /* Poppins ফন্ট ইম্পোর্ট */


/* =======================
   Universal Styles
======================= */
* {
  margin: 0; /* সব এলিমেন্টের margin মুছে ফেলা */
  padding: 0; /* সব এলিমেন্টের padding মুছে ফেলা */
  box-sizing: border-box; /* padding & border কে width এর মধ্যে রাখে */
  font-family: 'Poppins', sans-serif; /* পুরো ওয়েবসাইটে Poppins ফন্ট ব্যবহার */
}

body {
  width: 100vw; /* পুরো viewport এর প্রস্থ নেবে */
  /* background-image: url(/Bg_img/abstract-digital-grid-black-background.jpg);  ব্যাকগ্রাউন্ড ইমেজ */
  background-repeat: no-repeat; /* ইমেজ রিপিট হবে না */
  background-size: cover; /* ইমেজ পুরো স্ক্রিন ঢেকে দেবে */
}


/* =======================
   Navbar Styles
======================= */
.navber {
  position: fixed; /* সবসময় টপে থাকবে */
  top: 0; /* উপরে 0px */
  width: 100%; /* পুরো প্রস্থ জুড়ে */
  padding: 25px 9%; /* উপর-নিচে 25px, ডান-বামে স্ক্রিনের 9% */
  margin: 0; /* margin নেই */

  background: #00000011; /* হালকা কালো ব্যাকগ্রাউন্ড (transparent) */
  display: flex; /* flexbox layout */
  justify-content: space-between; /* দুই পাশে কনটেন্ট */
  align-items: center; /* উল্লম্বভাবে সেন্টার */

  z-index: 100; /* সব কনটেন্টের ওপরে */
  filter: blur(50%); /* ব্লার ইফেক্ট */

  /* Animation এর আগে হাইড করা হয়েছে */
  visibility: hidden;
  opacity: 0;
  animation: show-content 1.05s linear forwards; /* show-content animation চলবে */
  animation-delay: 1.2s; /* 1.2s পরে শুরু হবে */
}

.logo {
  font-size: 30px; /* লেখা বড় */
  font-weight: 700; /* bold */
  font-family: 'Lucida Sans', Geneva, Verdana, sans-serif; /* নির্দিষ্ট ফন্ট */
  color: aqua; /* অ্যাকুয়া রঙ */
}

a {
  color: azure; /* সাদা রঙ */
  text-decoration: none; /* underline বাদ */
}

.navber ul {
  display: flex; /* মেনু আইটেমগুলো এক লাইনে */
  justify-content: center; /* কেন্দ্র করে */
  align-items: center; /* উল্লম্বভাবে কেন্দ্র */
  gap: 20px; /* প্রতিটি আইটেমের মাঝে ফাঁকা */
}

.navber ul li {
  list-style: none; /* bullet বাদ */
}

.navber ul li a {
  font-size: 20px; /* টেক্সট সাইজ */
  font-weight: 500; /* semi-bold */
  transition: 0.3s; /* hover effect মসৃণ */
}

.navber ul li a:hover {
  color: aqua; /* hover করলে রঙ aqua হবে */
}


/* =======================
   Home Section
======================= */
.home {
  display: flex; /* Flexbox layout */
  align-items: center; /* কন্টেন্ট সেন্টার */
  height: 100vh; /* পুরো স্ক্রিনের উচ্চতা */
  padding: 60px 9% 0; /* টপে 60px, পাশে 9% */
  gap: 50px; /* দুই কলামের মাঝে ফাঁকা */

  visibility: hidden; /* আগে লুকানো */
  opacity: 0; /* স্বচ্ছ */
  animation: show-content 1.06s linear forwards; /* show-content animation */
  animation-delay: 1.2s; /* 1.2s পরে শুরু হবে */
}

.home-info h1 {
  color: aliceblue; /* হালকা নীল রঙ */
  font-size: 55px; /* বড় লেখা */
  margin-bottom: 20px; /* নিচে ফাঁকা */
}

.home-info h2 {
  color: aqua; /* aqua রঙ */
  font-size: 30px; /* মাঝারি সাইজ */
  margin-top: -10px; /* উপরের লেখা সাথে লাগানো */
}

.home-info h2 span {
  position: relative; /* relative পজিশন */
  display: inline-block; /* inline + block */
  color: transparent; /* ডিফল্ট রঙ লুকানো */
  -webkit-text-stroke: .7px rgb(255, 17, 0); /* লাল বর্ডার টেক্সটে */

  animation: display-text 16s linear infinite; /* display-text animation চলবে */
  animation-delay: calc(-4s * var(--i)); /* প্রতিটি span আলাদা টাইমিং */
}

.home-info h2 span::before{ 
    content: attr(data-text); 
    position: absolute; width: 0%; 
    border-right: 2px solid rgb(255, 17, 0); 
    color: rgb(255, 17, 0); 
    white-space: nowrap; 
    overflow: hidden; 
    animation: fill-text 4s linear infinite; 
    animation-delay: calc(-4s * var(--i));}
.home-info p {
  color: blueviolet; /* প্যারা রঙ */
  font-size: 16px; /* টেক্সট সাইজ */
  margin: 10px 0 25px; /* উপর 10px, নিচে 25px */
  text-align: justify; /* টেক্সট ব্লক স্টাইলে */
}


/* =======================
   Buttons & Social Icons
======================= */
.home-info .btn-sci {
  display: flex; /* বোতাম ও আইকন এক লাইনে */
  align-items: center; /* সেন্টার */
}

.btn {
  display: inline-block; /* inline block */
  padding: 10px 30px; /* ভেতরে ফাঁকা */
  background: #7ddd00; /* সবুজ ব্যাকগ্রাউন্ড */
  border: 2px solid #7ddd00; /* বর্ডার */
  border-radius: 40px; /* কোণা গোল */
  box-shadow: 0 0 10px #7ddd00; /* শ্যাডো */
  font-size: 16px; /* সাইজ */
  font-weight: 600; /* semi-bold */
  color: black; /* টেক্সট কালো */
  transition: 0.3s; /* hover এ মসৃণ */
}

.btn:hover {
  background: transparent; /* hover করলে ব্যাকগ্রাউন্ড নেই */
  color: #7ddd00; /* টেক্সট সবুজ */
  box-shadow: none; /* শ্যাডো বাদ */
}

.btn-sci .sci {
  margin-left: 20px; /* বাটনের ডান পাশে ফাঁকা */
}

.btn-sci .sci a {
  display: inline-flex; /* আইকন flex */
  padding: 8px; /* ভিতরে ফাঁকা */
  border: 2px solid #7ddd00; /* সবুজ বর্ডার */
  border-radius: 50%; /* গোলাকার */
  font-size: 18px; /* আইকন সাইজ */
  transition: 0.3s; /* hover এ মসৃণ */
}

.btn-sci .sci a:hover {
  background: #7ddd00; /* hover করলে সবুজ */
  color: #000000; /* আইকন কালো */
  box-shadow: 0 0 10px; /* glow effect */
}


/* =======================
   Home Image Box
======================= */
.home-img .img-box {
  position: relative; /* relative */
  margin-left: 30px; /* বাম পাশে ফাঁকা */
  height: 32vw; /* viewport অনুযায়ী উচ্চতা */
  width: 32vw; /* viewport অনুযায়ী প্রস্থ */
  border: 1px solid #030e03; /* গাঢ় সবুজ বর্ডার */
  border-radius: 50%; /* গোল */
  padding: 5px; /* ভেতরে ফাঁকা */

  display: flex; /* flexbox */
  justify-content: center; /* মাঝখানে */
  align-items: center; /* সেন্টার */
  overflow: hidden; /* বাইরে কিছু দেখা যাবে না */
}

.home-img .img-box::before,
.home-img .img-box::after {
  content: ''; /* খালি pseudo element */
  position: absolute; /* absolute পজিশন */
  width: 500px; /* সাইজ */
  height: 500px;
  background: conic-gradient(transparent, transparent, transparent, gold); /* গোলাকার গ্রেডিয়েন্ট */

  transform: rotate(0); /* শুরুতে ঘুরানো নেই */
  animation: rotate-border 10s linear infinite; /* ঘুরতে থাকবে */
}

.home-img .img-box::after {
  animation-delay: -5s; /* দ্বিতীয় বর্ডার পরে শুরু */
}

.home-img .img-box .img-item {
  position: relative; 
  height: 100%; 
  width: 100%; 
  border-radius: 50%; /* গোলাকার */
  background: #030e03; /* গাঢ় সবুজ */

  display: flex; 
  justify-content: center; 
  overflow: hidden; 
  z-index: 2; /* উপরে থাকবে */
}

.home-img .img-box .img-item img {
  position: absolute;
  top: 10px; /* ছবিটা একটু নিচে */
  display: block;
  width: 100%; /* পুরো ফিট */
  object-fit: cover; /* ছবি কভার করবে */
  mix-blend-mode: lighten; /* blend effect */
}


/* =======================
   Bars Animation
======================= */
.bars-box {
  position: absolute; 
  width: 100%; 
  height: 100%; 
  display: flex; 
  z-index: -1; /* পিছনে থাকবে */
}

.bars-box .bar {
  width: 100%; 
  height: 100%; 
  background: #030e03; /* গাঢ় সবুজ */

  transform: translateY(-100%); /* উপরের দিক থেকে আসবে */
  animation: nav-animation .5s ease-in-out forwards; /* animation */
  animation-delay: calc(.1s * var(--i)); /* প্রতিটি bar আলাদা সময়ে আসবে */
}


/* =======================
   Keyframes Animations
======================= */
@keyframes show-content {
  100% {
    visibility: visible; /* দেখা যাবে */
    opacity: 1; /* পুরোপুরি অপ্যাক */
  }
}

@keyframes display-text {
  25%, 100% {
    display: none; /* কিছু সময় লুকানো থাকবে */
  }
}

@keyframes fill-text {
  10%, 100% { width: 0; } /* শুরু ও শেষে লুকানো */
  70%, 90% { width: 100%; } /* মাঝখানে পুরো দেখা যাবে */
}

@keyframes rotate-border {
  100% { transform: rotate(360deg); } /* 360 ডিগ্রী ঘুরবে */
}

@keyframes nav-animation {
  100% { transform: translateX(0%); } /* সঠিক জায়গায় বসবে */
}


## 📂 Project Structure  
