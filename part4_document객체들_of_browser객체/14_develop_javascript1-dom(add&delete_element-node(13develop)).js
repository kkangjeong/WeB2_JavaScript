// ex7) 동적으로 텍스트 노드 추가 & 삭제(ex6) + 엘리먼트 노드 2개 추가 & 삭제
window.addEventListener("load",function () {
    var section = document.querySelector("#section6");

    var titleInput =section.querySelector(".title-input");
    var menuListUl =section.querySelector(".menu-list");
    var addButton =section.querySelector(".add-button");
    var delButton =section.querySelector(".del-button");

    addButton.onclick = function () {

        var title = titleInput.value;

        // 2) (innerHTML 로) html에 있는 <li><a href="">aaa</a></li> 첫번째 줄이랑 <li><a href="">bbb</a></li> 두번째 줄이랑 가져오는 방법
        //menuListUl.innerHTML = '<li><a href=\"\">' + title + '</a></li>';       //ccc 입력하면 aaa, bbb(이전 데이터) 가 없어지는 문제
        menuListUl.innerHTML += '<li><a href=\"\">' + title + '</a></li>';          //이렇게 하면 되는데 객체가 쓸데없이 계속 만들어지고 추가되는 형식
                                                                                    // 오히려 1)이 더 성능상 좋은 거 일 수 있다

        // 3) 2보다 이렇게 하면 -> 누적이 없고 대입만 있으니까 굿(li를 빼서 최소한으로 동적으로 만드는 방법)
        // var html = '<a href=\"\">' + title + '</a>';
        // var li = document.createElement("li");
        // li.innerHTML = html;

        //menuListUl.appendChild(li);

        //+) appendChild쓰려면 텍스트노드를 추가!(title)하는 작업(document.createTextNode(title))이 필수였다
        // menuListUl.appendChild(title);   //못함 -> appendChild는 노드를 넣어야 하는데 title은 노드가 아니라 문자열이라서
        //4) (appendChild말고 append로)
        // var html = '<a href=\"\">' + title + '</a>';
        // var li = document.createElement("li");
        // li.innerHTML = html;
        // menuListUl.append(li);    //노드 여러개 넣기 가능//문자열도 넣기 가능//텍스트노드 자동으로 생성해서 document.createTextNode(title) 코드 안해도 된다



        /* 1) (appendChild, append 로) 엘리먼트가 많고 속성도 많고 자식들도 많고 부모자식연결도 많다면 너무 복잡하다//그러나 쓰일 때도 있다 -> 다른방법
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        var aNode = document.createElement("a");    //엘리먼트 노드 첫째꺼 추가
        var liNode = document.createElement("li");    //엘리먼트 노드 두번째꺼 추가
        aNode.href = "";

        menuListUl.appendChild(liNode); //menu-list의 자식은 li태그이고 , li태그의 자식은 a태그이고, a태그의 자식은 텍스트이니까 고려해서 코드짜기
        liNode.appendChild(aNode);
        aNode.appendChild(txtNode);
         */
    };

    //1) removeChild로
    delButton.onclick = function () {
        //var txtNode = menuListUl.childNodes[0];   //모든 노드 중에 첫번재
        var liNode = menuListUl.children[0];    //엘리먼트노드 중에 첫번째
        menuListUl.removeChild(liNode);
    };
    // 텍스트노드가 아니라 엘리먼트를 삭제하는 거니까

    // 2) remove로(1처럼 부모 얻어서 하는 게 아니라 내가 그냥 지워지겠다)
    // delButton.onclick = function () {
    //     var liNode = menuListUl.children[0];
    //     liNode.remove();
    // };

});

// ex6) 동적으로 텍스트 노드 추가 & 삭제
window.addEventListener("load",function () {
    var section = document.querySelector("#section6");

    var titleInput =section.querySelector(".title-input");
    var menuListDiv =section.querySelector(".menu-list");
    var addButton =section.querySelector(".add-button");
    var delButton =section.querySelector(".del-button");

    addButton.onclick = function () {
        var title = titleInput.value;
        var textNode = document.createTextNode(title);
        menuListDiv.appendChild(textNode);
    };

    delButton.onclick = function () {
        var txtNode = menuListDiv.childNodes[0];    
        menuListDiv.removeChild(txtNode);
    };
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