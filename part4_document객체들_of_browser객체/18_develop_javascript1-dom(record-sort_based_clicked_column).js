//ex11) 제목column 누르면 제목column 기준으로 오름차순/내림차순 정렬하기
window.addEventListener("load", function(){

    var notices = [
        {"id":1, "title":"자바스크립트란..", "regDate":"2020-03-10", "writerId":"kang", "hit":2},
        {"id":2, "title":"유투브란..", "regDate":"2020-03-11", "writerId":"kkang", "hit":1},
        {"id":3, "title":"기본기가 튼튼해야..", "regDate":"2020-03-12", "writerId":"kji", "hit":3},
        {"id":4, "title":"조회수는..", "regDate":"2020-03-13", "writerId":"ji", "hit":0}
    ];

    var section = document.querySelector("#section11");

    var noticeList =section.querySelector(".notice-list");
    var titldTd = section.querySelector(".title");
    var tbodyNode = noticeList.querySelector("tbody");

    //notices의 데이터 바인딩하는 함수
    var bindData = function(){
        //저번꺼 복붙
        var template = section.querySelector("template");

        for(var i=0; i<notices.length; i++){
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = notices[i].id;

            var aNode = tds[1].children[0];
            aNode.href=notices[i].id;
            aNode.textContent = notices[i].title;

            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;

            tbodyNode.appendChild(cloneNode);
        }
    };

    bindData();
    
    var titleSorted = false;    //내림차순도 하기 위해서//처음에는 정렬이 안된 것

    titldTd.onclick = function(){
        //39 데이터 남아있으니까 리셋해서 없애야하니까
        tbodyNode.innerHTML = "";

        //객체 형태의 배열이라서 기준열을 제공해야(-1인지 1인지 0인지)
        //오름차순 정렬
        if(!titleSorted)    //한번만 호출되도록
            notices.sort(function (a, b) {
                titleSorted = true;

                if (a.title < b.title)
                    return -1;
                else if (a.title > b.title)
                    return 1;
                else
                    return 0;
            });
        else
            notices.reverse();  //내림차순 쉽게//정렬 한번이라도 된 적이 있으면

        bindData();
    };
});

//ex10) 다중 엘리먼트 노드선택 & 일괄삭제 & 노드의 자리바꾸기
window.addEventListener("load", function() {
    var section = document.querySelector("#section10");

    var noticeList = section.querySelector(".notice-list");
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function () {
        var inputs = tbody.querySelectorAll("input[type='checkbox']");

        for (var i = 0; i < inputs.length; i++)
            inputs[i].checked = allCheckbox.checked;
    };

    delButton.onclick = function () {
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");

        for(var i=0;i<inputs.length;i++)
            inputs[i].parentElement.parentElement.remove();
    };

    swapButton.onclick = function () {
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");

        if(inputs.length != 2) {
            alert("2개를 선택해주세요");
            return;
        }
        var trs =[];
        for(var i =0; i<inputs.length; i++)
            trs.push(inputs[i].parentElement.parentElement);

        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);
    };
});

// ex9) 노드 삽입 & 노드 바꾸기
window.addEventListener("load", function(){
    var section = document.querySelector("#section9");

    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");
    var noticeList =section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var currentNode = tbodyNode.firstElementChild;


    var currentNode = tbodyNode.firstElementChild;

   downButton.onclick = function(){
       var nextNode = currentNode.nextElementSibling;

       if(nextNode == null){
           alret("더 이상 이동할 수 없습니다!");
           return;
       }
       currentNode.insertAdjacentElement("beforebegin", nextNode);
   };

    upButton.onclick = function(){
        var prevNode = currentNode.previousElementSibling;

        if(prevNode == null){
            alert("더 이상 이동할 수 없습니다!");
            return;
        }
        currentNode.insertAdjacentElement("afterend", prevNode);
    };
});

// ex8) 노드 복제와 template tag
window.addEventListener("load",function () {
    var notice = [
        {id:5, title: "첫번째꺼", regDate:"2020-03-15", writerID:"jik", hit:0},
        {id:6, title: "두번째꺼", regDate:"2020-03-16", writerID:"ji", hit:17}
    ];
    var section = document.querySelector("#section8");

    var cloneButton =section.querySelector(".clone-button");
    var templateButton =section.querySelector(".template-button");
    var noticeList =section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");

    cloneButton.onclick = function () {

    };


    templateButton.onclick = function () {
        // 2) 참고할 만 한 노드들이 없을 때 - 템플릿 태그 사용하기
        var template = section.querySelector("template");
        var cloneNode = document.importNode(template.content, true);    //위랑 여기만 다르다

        var tds = cloneNode.querySelectorAll("td");
        tds[0].textContent = notice[0].id;
        tds[1].innerHTML = '<a href="'+notice[0].id+'">'+notice[0].title + '</a>';

        tds[2].textContent = notice[0].regDate;
        tds[3].textContent = notice[0].writerID;
        tds[4].textContent = notice[0].hit;

        tbodyNode.append(cloneNode);
    };
});

// ex7) 동적으로 텍스트 노드 추가 & 삭제(ex6) + 엘리먼트 노드 2개 추가 & 삭제
window.addEventListener("load",function () {
    var section = document.querySelector("#section7");

    var titleInput =section.querySelector(".title-input");
    var menuListUl =section.querySelector(".menu-list");
    var addButton =section.querySelector(".add-button");
    var delButton =section.querySelector(".del-button");

    addButton.onclick = function () {

        var title = titleInput.value;

        //4) (appendChild말고 append로)
        var html = '<a href=\"\">' + title + '</a>';
        var li = document.createElement("li");
        li.innerHTML = html;
        menuListUl.append(li);    //텍스트노드 자동으로 생성해서 document.createTextNode(title) 코드 안해도 된다
    };

        // 2) remove로(1처럼 부모 얻어서 하는 게 아니라 내가 그냥 지워지겠다)
    delButton.onclick = function () {
        var liNode = menuListUl.children[0];
        liNode.remove();
    };
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
