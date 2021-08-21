// Digital Clock
function clock() {
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  var absent = document.getElementById("absen");

  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear();

  var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  var week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
  var ids = ["dayname", "month", "daynum", "year"];
  var values = [week[dname], months[mo], dnum, yr];
  for (var i = 0; i < ids.length; i++) document.getElementById(ids[i]).firstChild.nodeValue = values[i];

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  if (h >= 3) {
    selamat.innerHTML = "Selamat Pagi . . .";
    absent.innerHTML = "";
  }

  if (h >= 6) {
    selamat.innerHTML = "Selamat Pagi, jangan lupa absen";
    absent.innerHTML = "Absen disini~";
  }

  if (h >= 8) {
    selamat.innerHTML = "Selamat Pagi . . .";
    absent.innerHTML = "";
  }

  if (h >= 11) {
    selamat.innerHTML = "Selamat Siang . . .";
    absent.innerHTML = "";
  }

  if (h >= 15) {
    selamat.innerHTML = "Selamat Sore . . .";
    absent.innerHTML = "";
  }

  if (h >= 19) {
    selamat.innerHTML = "Selamat Malam . . .";
    absent.innerHTML = "";
  }

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

}
var interval = setInterval(clock, 1000);

// Countdown1 PKWU

var countDate = new Date('August 23 2021 00:00:00').getTime();

function CountdownPKWU() {
  var now = new Date().getTime();
  gap = countDate - now

  var detik = 1000;
  var menit = detik * 60;
  var jam = menit * 60;
  var hari = jam * 24;
  
  var h = Math.floor(gap / (hari));
  var j = Math.floor((gap % (hari)) / (jam));
  var m = Math.floor((gap % (jam)) / (menit));
  var d = Math.floor((gap % (menit) / (detik)));

  document.getElementById('hari').innerText = h;
  document.getElementById('jam').innerText = j;
  document.getElementById('menit').innerText = m;
  document.getElementById('detik').innerText = d

  if (gap < 0) {
    clearInterval(CountdownPKWU);
    document.getElementById("countdown1").innerHTML = "";
    document.getElementById("timeOutPKWU").innerHTML = "Telah lewat tenggat waktu.";
  }
}
setInterval( function(){
  CountdownPKWU();
}, 1000);

// Countdown4 Sejindo
var countDate4 = new Date('August 26 2021 19:00:00').getTime();

function CountdownSj() {
  var now = new Date().getTime();
  gap = countDate4 - now

  var detik4 = 1000;
  var menit4 = detik4 * 60;
  var jam4 = menit4 * 60;
  var hari4 = jam4 * 24;
  
  var h4 = Math.floor(gap / (hari4));
  var j4 = Math.floor((gap % (hari4)) / (jam4));
  var m4 = Math.floor((gap % (jam4)) / (menit4));
  var d4 = Math.floor((gap % (menit4) / (detik4)));

  document.getElementById('hari4').innerText = h4;
  document.getElementById('jam4').innerText = j4;
  document.getElementById('menit4').innerText = m4;
  document.getElementById('detik4').innerText = d4;

  if (gap < 0) {
    clearInterval(CountdownSj);
    document.getElementById("countdown4").innerHTML = "";
    document.getElementById("timeOutSj").innerHTML = "Telah lewat tenggat waktu.";
  }
}
setInterval( function(){
  CountdownSj();
}, 1000);

// Countdown6 Olahraga
var countDate6 = new Date('August 23 2021 00:00:00').getTime();

function CountdownOl() {
  var now = new Date().getTime();
  gap = countDate6 - now

  var detikOl = 1000;
  var menitOl = detikOl * 60;
  var jamOl = menitOl * 60;
  var hariOl = jamOl * 24;
  
  var hOl = Math.floor(gap / (hariOl));
  var jOl = Math.floor((gap % (hariOl)) / (jamOl));
  var mOl = Math.floor((gap % (jamOl)) / (menitOl));
  var dOl = Math.floor((gap % (menitOl) / (detikOl)));

  document.getElementById('hariOl').innerText = hOl;
  document.getElementById('jamOl').innerText = jOl;
  document.getElementById('menitOl').innerText = mOl;
  document.getElementById('detikOl').innerText = dOl;

  if (gap < 0) {
    clearInterval(Countdown6);
    document.getElementById("countdownOl").innerHTML = "";
    document.getElementById("timeOutOl").innerHTML = "Telah lewat tenggat waktu.";
  }
}
setInterval( function(){
  CountdownOl();
}, 1000);








// Modal update log
const modal = document.querySelector('.modal');

const closeModal = document.querySelector('.oke')

const showModal = document.querySelector('.showModal');

showModal.addEventListener('click', function(){
  modal.classList.remove('hidden')
});

closeModal.addEventListener('click', function(){
  modal.classList.add('hidden')
});