// ex6) 동적으로 텍스트 노드 추가 & 삭제

window.addEventListener("load",function () {
    var section = document.querySelector("#section6");

    var titleInput =section.querySelector(".title-input");
    var menuListDiv =section.querySelector(".menu-list");
    var addButton =section.querySelector(".add-button");
    var delButton =section.querySelector(".del-button");

    addButton.onclick = function () {
        var title = titleInput.value;   //사용자가 입력한 값을 만드는 거니까 다음 줄 전에 만들어야지
        var textNode = document.createTextNode(title);      //1. 텍스트 노드 생성
        menuListDiv.appendChild(textNode);               //2. 텍스트 노드 추가할 엘리먼트 노드 선택  //3. 엘리먼트 노드에 텍스트 노드 추가하기
    };

    delButton.onclick = function () {
        var txtNode = menuListDiv.childNodes[0];    
        menuListDiv.removeChild(txtNode);
    };
    //but, 화이트스페이스 때문에 처음 누르면 삭제가 안된다ㅠㅠ공백 노드가 있었구나
    // (개발자도구로 보니까 스트링으로 삽입되었는데)"어쩌구1""어쩌구2""어쩌구3" 처럼 스트링으로 텍스트를 삽입하지는 않을거니까 태그로 할거니까
    // -> 근데 보통 ul태그랑 li태그써서 리스트로 하지 -> 이렇게 하지말고 14.html로
});

// ex5) element 노드의 속성 변경하기(버튼 누르면 이미지가 뜨는) & css 속성 변경하기

window.addEventListener("load",function () {
    var section = document.querySelector("#section5");

    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");


    changeButton.onclick = function () {
        img.src = "12_images/" + srcInput.value;     // 1번
        //img.src = "12_images/" + imgSelect.value;       // 2번

        img.style.borderColor =  colorInput.value;     //2) 이렇게도
    };
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