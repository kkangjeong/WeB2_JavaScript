// ex2-2) 선택된 레코드 삭제하기 (event bubbling)
window.addEventListener("load", function(){
    var section = document.querySelector("#section2-2");
    //var delButtons = section.querySelectorAll(".del-button");

    var allclick = section.querySelector(".allclick");

    allclick.onclick = function (e) {
        var tr = e.target.parentElement.parentElement;
        tr.remove();
    };

});

//ex2) 버블링을 이용한 사용자 이벤트 처리(event bubbling : 이벤트함수가 연결되어있다면 3개 클릭이 있는데 그들의 부모 한번만 함수달면 버블링 기능을 통해 동작할 수 있다)
window.addEventListener("load", function () {
    var section = document.querySelector("#section2");

    var imgList = section.querySelector(".img-list");
    //var imgs = section.querySelectorAll(".img");

    var currentImg = section.querySelector(".current-img");

    //공통의 한 부모에다가만//이미지 클릭했을 때만 되도록 조건문(바탕 클릭하면 반응을 한다 ex) div태그...)
    imgList.onclick = function (e) {
        if(e.target.nodeName != "IMG")
            return;
        currentImg.src = e.target.src;

    };
    // event target으로 할 때는 3번 객체 만들었지만
    // for(var i =0; i<imgs.length; i++)
    //     imgs[i].onclick = function (e) {
    //         currentImg.src = e.target.src;
    //     };
});

//ex1-2) 선택된 레코드 삭제하기 (event target(bad))
window.addEventListener("load", function(){
    var section = document.querySelector("#section1-1");
    var delButtons = section.querySelectorAll(".del-button");

    for(var i=0; i<delButtons.length; i++)
        delButtons[i].onclick = function (e) {
            var tr = e.target.parentElement.parentElement;
            tr.remove();
        };

});

//ex1) 선택된 이미지를 보여주기 (event target(bad))
window.addEventListener("load", function () {
    var section = document.querySelector("#section1");

    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    for(var i =0; i<imgs.length; i++)
        imgs[i].onclick = function (e) {
            currentImg.src = e.target.src;
        };
});
