var post_storage;
if (localStorage.getItem("posts")) {
  post_storage = JSON.parse(localStorage.getItem("posts"));
  for (let num = 0; num < post_storage.length; num++) {
    $("#main").append(`
        <div>
        <h4 style="
        text-align: center;
        font-size: 20px;
        color: skyblue;
        ">${post_storage[num].title}</h4>
        <p>${post_storage[num].content}</p>
        <div id="img_box">
        <img src="${post_storage[num].image}"  style="
        width: 300px;
        height: 300px;
        margin-left: 10px;
        "/>
        </div>
        <hr />
        </div>
       `);
  }
} else {
  post_storage = [];
}
const addImage = $("#addImage");
const postImage = document.getElementById("imageFile");
addImage.click(function() {
  postImage.click();
});
var imageFile;
var imageResult;
postImage.addEventListener("change", function(event) {
  imageFile = event.target.files[0];
  fileReader = new FileReader();
  fileReader.readAsDataURL(imageFile);
  fileReader.onload = function(readerEvent) {
    imageResult = readerEvent.target.result;
    document.getElementById("preview").innerHTML = `
    <img src="${imageResult}" style="
    width: 200px;
    height: 200px;
    margin-left: 70px;
    margin-top: 10px;
    " />
    `;
  }
});
$("#create").click(function() {
  document.getElementById("preview").innerHTML = "";
  const title = document.getElementById("post-title");
  const content = document.getElementById("post-content");
  if (title.value.length > 1 && content.value.length > 1) {
    post_storage.push({
      title: title.value,
      content: content.value,
      image: imageResult || " "
    });
    imageResult = "";
    title.value = "";
    content.value = "";
    localStorage.setItem("posts", JSON.stringify(post_storage));

    $("#main").append(`
      <h4 style="
      text-align: center;
      color: deepskyblue;
      font-size: 20px;
      ">${post_storage[post_storage.length - 1].title}</h4>
      <p>${post_storage[post_storage.length - 1].content}</p>
      <div id="img_box">
      <img src="${post_storage[post_storage.length - 1].image}"  style="
      width: 300px;
      height: 300px;
      margin-left: 10px;
      "/>
      </div>
      <hr />
      `);
  } else {
    alert("Tiêu đề hoặc nội dung bạn đã bỏ trống");
  }
});
/* ================ Đăng ký ============== */

$("#register").click(function() {
  if (!localStorage.getItem("login")) {
    var lastName = document.getElementById("Ten").value;
    var firstName = document.getElementById("Ho").value;
    var imageSrc = "";
    var user = `${firstName} ${lastName}`;
    $("#main").fadeOut();
    $("#Header").fadeOut();
    $("#registerForm").fadeIn();
    $("#select").click(function() {
      $("#avatar").click();
      $('#avatar').on('change', function() {
        var file = $(this)[0].files[0];

        var fileReader = new FileReader();
        fileReader.onload = function() {
          imageSrc = event.target.result;
          var fileName = file.name;
          var fileSize = file.size;
          document.getElementById("avatarD").src = imageSrc;

        };
        fileReader.readAsDataURL(file);
      });
    });
    $("#submit").click(function() {
      lastName = document.getElementById("Ten").value;
      firstName = document.getElementById("Ho").value;
      user = `${firstName} ${lastName}`;
      if (user && avatar) {
        const login = {
          user: user,
          avatar: imageSrc
        }
        localStorage.setItem("login", JSON.stringify(login));
        $("#main").fadeIn();
        $("#Header").fadeIn();
        $("#registerForm").fadeOut();
      }
    });
  }
});
if (localStorage.getItem("login")) {
 const register = document.getElementById("register")
 register.innerHTML = "Thông tin của bạn";
 register.id = "personal";
 $("#personal").click(function() {
   $("#main").fadeOut();
   $("#Header").fadeOut();
   $("body").append(`
   <div style="
   width: 250px;
   height: 400px;
   background: whitesmoke;
   box-shadow: 1px 1px;
   margin-left: 50px;
   " id="profile">
     <img src=" " style="
      width: 70px;
      height: 70px;
      border-radius: 100px;
      margin-left: 90px;
      margin-top: 20px;
     " id="user_avt" />
     <b><p id="name"></p></b>
     <p id="NPosts"></p>
     <button id="back" style="
     width: 50%;
     height: 30px;
     margin-left: 65px;
     background: black;
     color: white;
     border: none;
     ">Trở lại</button>
   </div>
   `);
   $("#back").click(function() {
     $("#main").fadeIn();
     $("#Header").fadeIn();
     $("#profile").fadeOut();
   })
   document.getElementById("user_avt").src = JSON.parse(localStorage.getItem("login")).avatar;
   document.getElementById("name").innerHTML = JSON.parse(localStorage.getItem("login")).user;
   if (localStorage.getItem("posts")) {
   document.getElementById("NPosts").innerHTML = "Số bài viết: " + JSON.parse(localStorage.getItem("posts")).length;
   } else {
     document.getElementById("NPosts").innerHTML = `Số bài viết: 0`;
   }
 })
}
var menuClick = false;
$("#menu").click(function() {
  if (menuClick == false) {
  document.getElementById("imgLogo").style.top = "390px";
  menuClick = true;
  } else {
    document.getElementById("imgLogo").style.top = "190px";
    menuClick = false;
  }
});
/* ======================================= */