"use strict"

let ul = document.getElementById('albums');

fetch("https://jsonplaceholder.typicode.com/albums")            
.then((response) => response.json())
.then((data) => {
    data.forEach((value) => {
        let li = document.createElement('li');
        li.textContent = value.title;
        li.className = "album_title";
        ul.append(li);
        let btn = document.createElement('button');
        btn.className = "album_btn";
        btn.innerHTML = "delete";
        li.append(btn);
    });
})
.catch((error) => console.error(error));

ul.onclick = function(event) {
    
    const isRemoveButton = event.target.className === "album_btn";

    if (isRemoveButton) {
        let row = event.target.closest(".album_title");
        row.remove();
    }
}
