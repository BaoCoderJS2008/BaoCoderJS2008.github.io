setInterval(function () {
  const time = new Date();
var h = time.getHours();
var m = time.getMinutes();
var s = time.getSeconds();
var ms = time.getMilliseconds();
const timeBox = document.querySelector("#time_display");
const time_v = document.querySelector("#time_v");
  var fullTime = `${h} Giờ ${m} phút ${s}.${ms} giây`;
  timeBox.innerHTML = fullTime;
}, 0);

    var s_v = 0;
    var h_v = 0;
    var m_v = 0;
    var day = 0;
    setInterval(function() {
    s_v++;
    if (s_v >= 60) {
      m_v++;
      s_v = 0;
    }
    if (m_v >= 60) {
      h_v++;
      m_v = 0;
     }
    if (h_v >= 24) {
      day++;
      h_v = 0;
    }
    time_v.innerHTML = `${day} day ${h_v}:${m_v}:${s_v} thời gian xem`;
  }, 1000)
  const submit = document.getElementById("submit");
  submit.onclick = function() {
    let search = document.getElementById("search_bar");
    if (search.value !== "") {
    alert(`"${search.value}" hiện chưa được Admin thêm vào :((`);
    }
  }