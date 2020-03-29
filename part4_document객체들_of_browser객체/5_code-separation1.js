//window.onload = function(){   //이벤트가 누적되어서 동시에 돌아가도록 : addEventListener
window.addEventListener("load",function () {

    var btnPrint = document.getElementById("btn-print");

    btnPrint.onclick = function(){

        var x = prompt("x 값을 입력하세요", 0);
        var y = prompt("y 값을 입력하세요", 0);

        btnPrint.value = x + y;
    };
});