//연습문제_1) 선택된 레코드 삭제하기 : event target
window.addEventListener("load", function(){
    var section = document.querySelector("#section1-1");
    var delButtons = section.querySelectorAll(".del-button");

    for(var i=0; i<delButtons.length; i++)
        delButtons[i].onclick = function (e) {
            var tr = e.target.parentElement.parentElement;
            tr.remove();
        };

});

//ex1) 선택된 이미지를 보여주기(event target)
window.addEventListener("load", function () {
    var section = document.querySelector("#section1");

    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    // 이벤트 객체는 파라미터 값을 전달받을 수 있다
    // 돌아가는데 왜 bad? -> 똑같은 객체 (function) 세 번 만드는 게 비효율적 -> 나중에 이벤트 버블링 이용
    for(var i =0; i<imgs.length; i++)
        imgs[i].onclick = function (e) {
            currentImg.src = e.target.src;
        };
});
