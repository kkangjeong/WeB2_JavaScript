// ex3) selectors API Level1
window.addEventListener("load",function () {
    var section3 = document.getElementById("section3");     //(html에서 자바스크립트로 바뀌어지니까)id 이름 바꾸고

    var txtX = section3.querySelector(".txt-x");     //querySelectorAll()이랑 querySelector()있는데 전자는 여러개, 후자는 한개
    var txtY = section3.querySelector(".txt-y");     // 여기는 section3에 txt-x는 한개니까(css selector 구문을 ""안에 쓰기 //#인지 or .인지 그거)
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});


// ex2) element 선택방법 개선하기
window.addEventListener("load",function () {
    var section2 = document.getElementById("section2");

    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});


// ex1) 계산기 프로그램
window.addEventListener("load",function () {

    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});