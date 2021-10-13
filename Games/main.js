const gifts = [
  "CPU i9",
  "iPhone 6s",
  "Tivi 16inch",
  "Chúc bạn may mắn lần sau",
  "Chúc bạn may mắn lần sau",
  "Bạn đã trúng 1 ngàn",
  "Bạn đã trúng cái nịt ((:",
  "1 cục đất",
  "5 viên gạch",
  "Nokia 360",
  "1 Người yêu",
  "10 ngàn",
  "full 10 bộ bài tập Toán Lý Hoá",
  "Cho Admin 100k",
  "Bao Admin ăn",
  "Chip Snapdragon 888",
  "Tạch Lý",
  "3 viên kẹo",
  "8$",
  "Danh hiệu: người đen nhất năm",
  "1 cây bút bi",
  "1 Card GPU",
  "iPhone 13 pro max",
  "1 chip CPU 64 bit",
  "Được cái nịt",
  "Không khí",
  "Ê như Admin",
  "(-50)k",
  "(-70)k",
  "1 quyển notebook",
  "Samsung Galaxy ZFold3",
  "1 VGA rời",
  "Ổ bánh mì"
];
const colors = [
  "deepskyblue",
  "red",
  "yellow",
  "#00E9F9",
  "#0014E6",
  "#AAAFFF",
  "black",
  "Violet",
  "pink",
  "white",
  "#FF8100"
];
const start = document.getElementById("gift_start");
const box = document.getElementsByClassName("box")[0];
const gift = document.getElementById("gift");
const gift_text = document.getElementById("gift_text");
const turn = document.getElementById("turn");
const show = document.getElementById("gift_show");
var i = 0;
var result = "";
const storage = [];
var n = 0;
var id = 0;
var colorRnd;
let loop = setInterval(function() {
  if (n < gifts.length) {
  gift.innerHTML = gifts[n];
  n++;
  } else {
    clearInterval(loop);
    gift_text.innerHTML = "Bạn muốn thử vận may không? =))";
    n = 0;
  }
}, 70)
start.onclick = function() {
  start.style.display = "none";
  let loop = setInterval(function() {
    if (n < gifts.length) {
      gift.innerHTML = gifts[n];
       colorRnd = colors[Math.floor(Math.random()*colors.length)];
       turn.style.transform = `rotate(${i}deg)`;
       i += 5;
       i += 3;
       turn.style.backgroundColor = colorRnd;
      n++;
    } else {
      result = gifts[Math.floor(Math.random()*gifts.length)];
      gift.innerHTML = result;
      clearInterval(loop);
      id++;
      storage.push({
        gift_id: id,
        gift_name: result
      });
      window.localStorage.setItem("gifts_storage", JSON.stringify(storage));
      n = 0;
      swal({
        title: "Bạn đã trúng",
        text: `${result}`,
        icon: "success",
        button: "OK :v"
      })
      start.style.display = "block";
      turn.style.transform = "rotate(400deg)";
    }
  }, 300)
}
var gift_str = "";
show.onclick = function() {
  if (window.localStorage.getItem("gifts_storage")) {
    var get_gift = JSON.parse(window.localStorage.getItem("gifts_storage"));
    for (let n = 0; n < get_gift.length; n++) {
      if (!gift_str.includes(get_gift[n].gift_name)) {
      gift_str += get_gift[n].gift_id + ": "  + get_gift[n].gift_name + "\n";
      }
    }
    swal({
      title: "Số quà của bạn:",
      text: gift_str,
      icon: "success",
      button: "OK"
    }) 
  } else {
    swal({
      title: "Xin lỗi!",
      text: "Bạn chưa có quà",
      icon: "info"
    })
  }
}