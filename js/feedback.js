function getandUpdate() {
    nam = document.getElementById('name').value;
    com = document.getElementById('comment').value;
    if (localStorage.getItem('itemjson') == null) {
        itemjsonArray = [];
        itemjsonArray.push([nam, com])
        localStorage.setItem('itemjson', JSON.stringify(itemjsonArray))
    }
    else {
        itemjsonArrayStr = localStorage.getItem('itemjson');
        itemjsonArray = JSON.parse(itemjsonArrayStr);
        itemjsonArray.push([nam, com])
        localStorage.setItem('itemjson', JSON.stringify(itemjsonArray))
    }
    update();
}

function update() {
    if (localStorage.getItem('itemjson') == null) {
        itemjsonArray = [];
        localStorage.setItem('itemjson', JSON.stringify(itemjsonArray))
    }
    else {
        itemjsonArrayStr = localStorage.getItem('itemjson');
        itemjsonArray = JSON.parse(itemjsonArrayStr);
    }
    let tablebody = document.getElementById("tablebody");
    let str = "";
    itemjsonArray.forEach((element, index) => {
            str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td> 
            <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td> 
            </tr>`; 
        });
        tablebody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getandUpdate);
update();

function deleted(itemIndex) {
    console.log("Delete",itemIndex);
    itemjsonArrayStr = localStorage.getItem('itemjson');
    itemjsonArray = JSON.parse(itemjsonArrayStr);
    itemjsonArray.splice(itemIndex)
    localStorage.setItem('itemjson', JSON.stringify(itemjsonArray));
    update();
}

