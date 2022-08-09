function addMore() {
    document.getElementById('error').innerHTML = "";

    let name = document.getElementById('name').value;
    if (name == "") {
        document.getElementById('error').innerHTML = "Please enter value";
    }
    else {
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent = name;

        let img = document.createElement('img');
        img.src = "https://toppng.com//public/uploads/preview/recycling-bin-vector-delete-icon-png-black-11563002079w1isxqyyiv.png"
        img.href = "javascript:void(0)";
        img.className = "remove"
        li.appendChild(img);
    
        let pos = box.firstElementChild;
        if (pos == "") {
            box.appendChild(li);
        }
        else {
            box.insertBefore(li, pos);
        }

    }
    document.getElementById('name').value = "";

}
let btn = document.querySelector('ul')
btn.addEventListener('click', function (e) {
    let box = document.getElementById('box');
    let li = e.target.parentNode;
    box.removeChild(li);
});






