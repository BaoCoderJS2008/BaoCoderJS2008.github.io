
 function selectLang() {
   $("#langList").fadeToggle();
 }

 const trans = document.getElementById("trans");
 const PT = document.getElementById("post-title");
 const PC = document.getElementById("post-content");
 const title = document.getElementById("title");
 const register = document.getElementById("register");
 const addIMG = document.getElementById("addImage");
 const create = document.getElementById("create");
 const info = document.getElementById("info");
 const home = document.getElementById("m1");
 function en() {
   $("#en").click(function() {
     const enURL = "../Lang/en.json";
     fetch(enURL)
       .then(response => response.json())
       .then(result => {
           title.innerHTML = result.title;
           PC.placeholder = result.post_content;
           PT.placeholder = result.post_title;
           trans.innerHTML = result.trans;
           home.innerHTML = result.home;
           info.innerHTML = result.info;
           register.innerHTML = result.register;
           addIMG.innerHTML = result.addImage;
           create.innerHTML = result.post;
       });
   });
 }

 function vi() {
    $("#vi").click(function() {
     const viURL = "../Lang/vi.json";
     fetch(viURL)
       .then(response => response.json())
       .then(result => {
           title.innerHTML = result.title;
           PC.placeholder = result.post_content;
           PT.placeholder = result.post_title;
           trans.innerHTML = result.trans;
           home.innerHTML = result.home;
           info.innerHTML = result.info;
           register.innerHTML = result.register;
           addIMG.innerHTML = result.addImage;
           create.innerHTML = result.post;
       });
   });
 }
