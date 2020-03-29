// ex5) element 노드의 속성 변경하기(버튼 누르면 이미지가 뜨는) & css 속성 변경하기

window.addEventListener("load",function () {
    var section = document.querySelector("#section5");

    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");


    changeButton.onclick = function () {
        //img.src = srcInput.value;      +) 1.jpg는 가능한데 상위 폴더는 못찾는다
        img.src = "12_images/" + srcInput.value;     // 1번
        //img.src = "12_images/" + imgSelect.value;       // 2번

        //img.style.border-color = ?;    // border의 color만 지울꺼지만 border-color 명칭 대쉬 있어서 사용불가네 -> 2가지 방법있다
        //img.style["border-color"] =  colorInput.value;     //1) 자바스크립트 객체는 모두 map이기 때문에 키값 이용
        img.style.borderColor =  colorInput.value;     //2) 이렇게도

        // 자바스크립트에서 css 속성(class) 바꿀 때에는 이렇게
        //console.log(img.className);
    };
    //자바스크립트로 css 스타일 바꾸기기
    //엘리먼트.스타일.속성 = "문자열이다아";
    //txt1.style.width = 100; 이 아니라 txt1.style.width = 100px; 이다

});



// ex4) childNodes & children 이용한 노드 선택
window.addEventListener("load",function () {
    var section4 = document.querySelector("#section4");

    var box = section4.querySelector(".box");

    //var input1 = box.childNodes[0]; //childNodes는 주석, 텍스트(여기서는 스페이스바)도 자식노드로 친다-> 그래서 hello hi 중 hi가 첫번째에 출력되는 것 -> 그래서 children 사용한다(태그형태만 자식노드로 치니까)
    //var input2 = box.childNodes[1];

    var input1 = box.children[0];   //
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "hi";

});


// ex3) selectors API Level1
window.addEventListener("load",function () {
    var section3 = document.getElementById("section3");

    var txtX = section3.querySelector(".txt-x");
    var txtY = section3.querySelector(".txt-y");
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