var content = $(".log");
var chatInput = $(".input1");
var sendBtn = $(".sendBtn");
var imgBtn = $(".fa-image");
var imgInput = $("#imgInput");
var likeBtn = $(".like");
var settingBtn = $(".settings");
var questionBtn = $(".question");
var chatHistory = $(".chat-history");
var delBtn = $(".fa-trash");
var videoInput = $("#videoInput");
var videoBtn = $(".fa-video");
var { random, round } = Math;
var storage;
var log = $(".log");
var fileReader = new FileReader();
var time, h, m, s, fullTime;
time = new Date();
h = time.getHours();
m = time.getMinutes();
s = time.getSeconds();
fullTime = `${h}:${m}:${s} hôm nay`;

function $(element) {
  return document.querySelector(element);
}

function sendMsg(type, msg, delay = 0) {
  setTimeout(() => {
    switch (type) {
      case "user":
        content.innerHTML += `
            <li class="clearfix">
          <div class="message-data">
            <span class="message-data-time"> Bạn, ${getFullTime()}</span>
          </div>
             <div onclick="speak(this.innerHTML)" class="message my-message">
             ${msg}
             </div>
        </li>
  `;
        break;
      case "bot":
        content.innerHTML += `
                  <li class="clearfix">
          <div class="message-data text-right">
            <span class="message-data-time">${getFullTime()}</span>
            <img src="img/avatar.png" alt="avatar" class="avatar">
          </div>
          <div class="message other-message float-right" onclick="speak(this.innerHTML)">
          ${msg}
          </div>
        </li>
        `;
        break;
    }
    log.scrollTo(0, log.innerHTML.length);
    storage = log.innerHTML;
    localStorage.setItem("msgs", storage);
  }, delay);
}

function getFullTime() {
  setInterval(() => {
    time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
    fullTime = `${h}:${m}:${s} hôm nay`;
  }, 0);
  return fullTime;
}

sendMsg("bot", `
Xin chào, tôi giúp gì được cho bạn nhỉ? 
`);
sendBtn.onclick = () => {
  if (chatInput.value.trim() !== "") {
    sendMsg("user", chatInput.value);
    switch (chatInput.value) {
    case "hello":
      sendMsg("bot", "hi", 2000);
      break;
    default:
      sendMsg("bot", "Tin nhắn chưa được lập trình sẵn :(", 1000);
  }
    chatInput.value = "";
  }
}
imgBtn.onclick = () => imgInput.click();
imgInput.onchange = e => {
  var file = e.target.files[0];
  fileReader.readAsDataURL(file);
fileReader.onloadend = () => {
  sendMsg("user", `
    <img src="${fileReader.result}" class="msg-img" />
  `);
}
}
likeBtn.onclick = () => sendMsg("user", `
  <i class="far fa-thumbs-up" style="
    font-size: 30px;
  "></i>
`);
questionBtn.onclick = () => sendMsg("bot", `
  Vào Facebook admin để hỏi nha, click vào
  link: <a href="https://www.facebook.com/profile.php?id=100069847337388">Nguyễn Thái Bảo</a>
`, 1000);

settingBtn.onclick = () => {
  sendMsg("bot", `
         
  `);
}

if (localStorage.getItem("msgs")) {
  storage = localStorage.getItem("msgs");
  content.innerHTML = storage;
} else {
  storage = log.innerHTML;
}
delBtn.onclick = () => {
  localStorage.removeItem("msgs");
  log.innerHTML = "";
  storage = "";
}
videoBtn.onclick = () => videoInput.click();
videoInput.onchange = e => {
  var file = e.target.files[0];
  fileReader.readAsDataURL(file);
  fileReader.onloadend = () => {
    sendMsg("user", `
      <video controls>
        <source src="${fileReader.result}" type="video/mp4">
      </video>
    `);
  }
}
function speak(text) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}