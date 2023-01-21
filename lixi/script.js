var startSound = new Audio("./sound/level.mp3");
var openLixi = new Audio("./sound/glass.mp3");
var clickSound = new Audio("./sound/click.mp3");
var click = 0;
var lixi = [];
var main = $(".main");
var baolixi = $("#baolixi");

function taoLixi()
{
    lixi = [];
    let min = 100;
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
                    confirmButtonText: 'Mở đi!',
                })
            }
        });
    })
    .then(() => { 
        Swal.fire({
        text: `Xin chúc mừng bạn đã nhận được ${layLixi()}k tiền lì xì :D`
    })
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
});

document.body.onclick = () => {
    if (click > 1) return;
    ++click;
    startSound.play();
}

baolixi.onclick = () => hienLixi();