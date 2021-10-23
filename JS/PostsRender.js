$(document).ready(function() {
 /* ============= Post render ============= */
   var request;
   if (window.XMLHttpRequest) request = new XMLHttpRequest();
   else request = new ActiveXObject("Microsoft.XMLHTTP");
   
      /* Gửi request lên bằng AJAX */
   request.open("GET", "Posts/Posts.json", false);
   request.onreadystatechange = function() {
     if (request.status === 200) {
       
       for (let item of JSON.parse(request.responseText)) {
         $("#posts").append(`
         <div id="Post">
           <p style="
           font-size: 25px;
           color: deepskyblue;
           ">${item.title}</p>
           <p style="
           color:  #D2D6FF;
           font-size: 15px;
           ">${item.date_created} bởi Admin</p>
           <div style="
          /* text-align: center;*/
           ">
           <br />
           ${item.content}
           </div>
           <hr />
         </div>
         `);
         
       }
     }
   }
   
   request.send();
   const formData = new FormData();
   formData.append("text","Hello World!");
   console.log(formData);
   
})