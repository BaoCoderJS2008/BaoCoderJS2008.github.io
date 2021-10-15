const dark = document.getElementById("dark");
dark.onclick = function() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
const light = document.getElementById("light");
light.onclick = function() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}
var request;
const posts = document.getElementById("posts");


if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "https://raw.githubusercontent.com/BaoCoderJS2008/BaoCoderJS2008.github.io/main/Posts/Posts.json", false);
request.onreadystatechange = () => {
  if (request.status == 200 && request.status !== 4) {
    const result = JSON.parse(request.responseText);
    for (let items of result) {
    posts.innerHTML += `
    <div class="Admin">
        <div id="post" style="
        box-shadow: 2px 2px 2px;
        ">
          <div id="avt">
          <img src="${items.avatar}" style="
          width: 35px;
          height: 35px;
          position: absolute;
          left: 20px;
          margin-top: -5px;
          "/>
          </div>
          <div id="author_name" style="
          margin-left: 50px;
          ">${items.author} > ${items.subject} / posts / ${items.id}</div>
          <b><p id="post_title" style="
          text-align: center;
          "
          >${items.title}</p></b>
          <img src="${items.image}" style="
          width: 300px;
          height: 130px;
          margin-left: 20px;
          " />
          <div id="content">
            ${items.content}
          </div>
        </div>
      </div>
      <hr />
    `;
    }
  }
}
request.send();