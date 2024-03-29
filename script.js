var startSound = new Audio("./sound/level.mp3");
var openLixi = new Audio("./sound/glass.mp3");
var clickSound = new Audio("./sound/click.mp3");
var click = 0;
var lixi = [];
var main = $(".main");
var timeP = $("#time");


setInterval(() => {
    var date = new Date();
    var time = `Hôm nay là ngày ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    timeP.textContent = time;
}, 0.2);

function cls(time)
{
    setTimeout(() => {
        main.innerHTML = "";
        $("h2").classList.add("hide");
    }, time);
}

function taoLixi()
{
    lixi = [];
    let min = 0;
    let max = 500;
    let count = 20;
    for (var i = 0; i < 10; i++)
    {
        let n = Math.floor(Math.random() * (max - min + 1) + min);
        lixi[i] = n;
    }
}
function layLixi()
{
    return lixi[Math.floor(Math.random()*lixi.length)];
}

function hienLixi()
{
    Swal.fire({
        title: 'Lì xì nè',
        text: 'Bấm ok để mở nha :)',
        imageUrl: './img/baolixi.png',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
    })
    .then(() => {
        clickSound.play();
        taoLixi();
        Swal.fire({
            title: 'Bao lì xì',
            text: 'Mở nhé?',
            icon: 'question',
            confirmButtonText: 'Ok'
        })
    .then(result => {
            if (result.isConfirmed) {
                openLixi.play();
                Swal.fire({
                    title: 'Hồi hợp không nè?',
                    text: "Mở nha :))",
                    icon: 'question',
                    confirmButtonText: 'Mở đi!',
                })
            }
        });
    })
    .then(() => { 
        Swal.fire({
        text: `Xin chúc mừng bạn đã nhận được ${layLixi()}k Việt Nam đồng :D`
    })
    .then(() => loiChuc());
});
}
function loiChuc()
{
    Swal.fire({
        title: "Chúc mừng năm mới!",
        html: `<p style="color: red;">Năm mới này, chúc Uyên nhiều sức khỏe và học giỏi hơn nha, chúc bạn đạt điểm cao trong kì thi học sinh giỏi Văn sắp tới cũng như đậu vào trường cấp 3 mà bạn muốn nha :3</p>
               <hr>
               <p>Học sinh giỏi tin</p>
               <b>- Lập trình viên Nguyễn Thái Bảo 9/5</b>
        `
    })
    .then(() => {
        Swal.fire({
            title: "À đúng rồi",
            html: `
                <p>Mốt nhớ kèm mình nhiều hơn nhé nhất là môn toán đó :)</p>
                <hr>
                <b>- Lập trình viên Nguyễn Thái Bảo 9/5</b>
            `
        });
    });
}

function $(ele)
{
    return document.querySelector(ele);
}

Swal.fire({
    title: "Chúc mừng năm mới!!",
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff',
    backdrop: `
    rgba(0,0,123,0.4)
    left top
    no-repeat
  `
}).then(() => hienLixi());

document.body.onclick = () => {
    if (click > 1) return;
    ++click;
    startSound.play();
}
