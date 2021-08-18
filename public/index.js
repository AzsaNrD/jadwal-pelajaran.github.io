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

  if (h >= 6) {
    selamat.innerHTML = "Selamat Pagi, jangan lupa absen";
    absent.innerHTML = "Absen disini~";
  }

  if (h >= 8) {
    selamat.innerHTML = "Selamat Pagi . . .";
    absent.innerHTML = "";
  }

  if (h >= 12) {
    selamat.innerHTML = "Selamat Siang . . .";
    absent.innerHTML = "";
  }

  if (h >= 15) {
    selamat.innerHTML = "Selamat Sore . . .";
    absent.innerHTML = "";
  }

  if (h >= 18) {
    selamat.innerHTML = "Selamat Malam . . .";
    absent.innerHTML = "";
  }

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}
var interval = setInterval(clock, 1000);

// Countdown1 PKWU

var countDate = new Date('August 22 2021 00:00:00').getTime();

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
  document.getElementById('detik').innerText = d;
}
setInterval( function(){
  CountdownPKWU();
}, 1000);

// Countdown2 Geografi
var countDate2 = new Date('August 19 2021 18:00:00').getTime();

function CountdownGeo() {
  var now = new Date().getTime();
  gap = countDate2 - now

  var detik2 = 1000;
  var menit2 = detik2 * 60;
  var jam2 = menit2 * 60;
  var hari2 = jam2 * 24;
  
  var h2 = Math.floor(gap / (hari2));
  var j2 = Math.floor((gap % (hari2)) / (jam2));
  var m2 = Math.floor((gap % (jam2)) / (menit2));
  var d2 = Math.floor((gap % (menit2) / (detik2)));

  document.getElementById('hari2').innerText = h2;
  document.getElementById('jam2').innerText = j2;
  document.getElementById('menit2').innerText = m2;
  document.getElementById('detik2').innerText = d2;
}
setInterval( function(){
  CountdownGeo();
}, 1000);

// Countdown Matematika
var countDate3 = new Date('August 19 2021 23:59:59').getTime();

function CountdownMtk() {
  var now = new Date().getTime();
  gap = countDate3 - now

  var detik3 = 1000;
  var menit3 = detik3 * 60;
  var jam3 = menit3 * 60;
  var hari3 = jam3 * 24;
  
  var h3 = Math.floor(gap / (hari3));
  var j3 = Math.floor((gap % (hari3)) / (jam3));
  var m3 = Math.floor((gap % (jam3)) / (menit3));
  var d3 = Math.floor((gap % (menit3) / (detik3)));

  document.getElementById('hari3').innerText = h3;
  document.getElementById('jam3').innerText = j3;
  document.getElementById('menit3').innerText = m3;
  document.getElementById('detik3').innerText = d3;
}
setInterval( function(){
  CountdownMtk();
}, 1000);