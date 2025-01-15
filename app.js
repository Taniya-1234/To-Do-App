let inp = document.querySelector("input");
let btn = document.querySelector("#add");
let ul = document.querySelector("ul");


btn.addEventListener("click",()=>{

    let text = inp.value;
    if (text.trim() === "") {
        alert("Please enter a task before adding!");
        return;
    }

    let li = document.createElement("li");
    ul.append(li);
    li.innerText = text;


    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Task";
    deleteBtn.classList.add("delete");
    deleteBtn.style.backgroundColor = "rgb(250, 163, 163)";
    deleteBtn.style.marginLeft = "40px";
    li.append(deleteBtn);

    inp.value = "";
})



ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        event.target.parentElement.remove();
    }
})