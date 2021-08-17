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

  if (h == 6) {
    selamat.innerHTML = "Selamat Pagi, jangan lupa absen";
    absent.innerHTML = "Absen disini~";
  }

  if (h >= 8) {
    selamat.innerHTML = "Selamat Pagi . . .";
  }

  if (h >= 12) {
    selamat.innerHTML = "Selamat Siang . . .";
  }

  if (h >= 15) {
    selamat.innerHTML = "Selamat Sore . . .";
  }

  if (h >= 18) {
    selamat.innerHTML = "Selamat Malam . . .";
  }

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}
var interval = setInterval(clock, 1000);
