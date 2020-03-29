// ex4) 서로 다른 기능의 여러 버튼을 가진 이벤트 처리하기
// 선택, 수정, 삭제가 공통 기능이 아니고
// 특별대우(버블링 멈추기) 하자니 번거롭고
window.addEventListener("load", function(){
    var section = document.querySelector("#section4");

    var tbody = section.querySelector(".notice-list tbody");

    tbody.onclick = function (e) {
        //+) e.preventDefault();    //엘리먼트노드의 기본행위 막기(ex)a태그의 하이퍼링크, img의 드래그 등등)
        var target = e.target;

        if(target.nodeName != "INPUT")
            return;

        // if(target.className = "aa sel-button"){
        //      문제점이 클래스이름이 여러개라면 수정과정이 길다
        //      그래서 classList.contains 사용// 그 클래스이름이 여러개 중에 있다면
        // }
        if(target.classList.contains("sel-button")){
            var tr = target.parentElement;  //지역변수라서 위로 뺐다//지역변수 함수에만 있다고 했는데 -> 변화되어서 가능해진다
            //var tr = target.parentElement.parentElement; 이렇게 tr찾을 수 있지만 구조 바뀌면 .parentElement.parentElement.parentElement 일 수 있어서 -> 순회를 해야한다(tr찾을 때 까지 찾기)
            // 처음 부모노드가 tr이라고 할 때// 그 노드가 tr이 아니면 그 위로 계속 올라가는
            for(; tr.nodeName != "TR"; tr=tr.parentElement);
            tr.style.background = "yellow";
        }
        else if(target.classList.contains("edit-button")){

        }
        else if(target.classList.contains("del-button")){

        }
    };
});

// ex3) 이벤트 버블링 멈추기 (event bubbling) :같은 부모를 공유하지만 다른 행위를 해야 할 때
window.addEventListener("load", function () {
    var section = document.querySelector("#section3");

    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");
    var addButton = section.querySelector(".add-button");

    imgList.onclick = function (e) {
        if(e.target.nodeName != "IMG")
            return;
        currentImg.src = e.target.src;
    };

    addButton.onclick = function (e) {
        //imgList의 이벤트(부모라서)도 동시에 실행되는데(버블링)막기 위해서 -> 그래서 imgList에 조건문 걸어놨지만 (안써서 그렇지)조건문 아닌 코드도 돌아가기 때문에 막기 위해서
        e.stopPropagation();        //뒤에 써도 되긴 하다

        //이미지 추가
        var img = document.createElement("img");
        img.src = "1_images/1.jpg";
        currentImg.insertAdjacentElement("afterend", img);
    };
});

// ex2-2) 선택된 레코드 삭제하기 (event bubbling)
window.addEventListener("load", function(){
    var section = document.querySelector("#section2-2");

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

    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function (e) {
        if(e.target.nodeName != "IMG")
            return;
        currentImg.src = e.target.src;

    };
});

//ex1-2) 선택된 레코드 삭제하기 (event target(bad))
window.addEventListener("load", function(){
    var section = document.querySelector("#section1-2");
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
