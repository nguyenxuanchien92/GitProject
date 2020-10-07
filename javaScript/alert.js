let evtClick = document.getElementById("btClickMe");
let divMess = document.getElementById("message");

function displayMess() {
    // alert("Xin Chào");
    //Bài 2
    // divMess.innerText = "Xin chào"
    //Bài 3
    document.write("Xin chào");
    //bài 4
    console.log("Xin chào");
}

if(evtClick){
    evtClick.addEventListener('click',displayMess);
}else {
    alert("Không bắt được sự kiện");
}

// evClick.addEventListener("click",alert("Xin chào"));

