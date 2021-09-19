import {json} from "../include/js/json.js";

let table = document.querySelector('.table')
window.table = table



    // let tr = document.createElement('tr');
    //
    // let td1 = document.createElement('td');
    // td1.innerHTML = '<b>hahahha</b>'
    // let td2 = document.createElement('td');
    // let td3 = document.createElement('td');
    // let td4 = document.createElement('td');
    //
    // tr.append(td1,td2,td3,td4)
    //
    //
    // table.tBodies[0].insertAdjacentElement('afterend', tr)
    // table.insertAdjacentHTML('afterend', '<tr><td>hhuhu</td></tr>')

// fill table with data
for(let row of json) {
    let tr = document.createElement('tr');
    let idx = 0
    let td0 = document.createElement('td');
    td0.setAttribute('id', 0)
    let td1 = document.createElement('td');
    td1.setAttribute('id', 1)
    let td2 = document.createElement('td');
    td2.classList.add('td-dotted')
    td2.setAttribute('id', 2)
    let td3 = document.createElement('td');
    td3.setAttribute('id', 3)
    

    tr.append(td0,td1,td2,td3)

    table.tBodies[0].insertAdjacentElement('afterend', tr)

    td0.insertAdjacentHTML('beforeend', row.name.firstName)
    td1.insertAdjacentHTML('beforeend', row.name.lastName)
    td2.insertAdjacentHTML('beforeend', row.about)
    td3.insertAdjacentHTML('beforeend', row.eyeColor)
}

// // Сортировка
// let tableHeader = table.querySelector('.table-header');
// tableHeader.onclick = sortTable
// // let rows = table.rows
// // console.log(rows)

// function sortTable(e) {
//     let colIndex = e.target.cellIndex
//     let rows = document.getElementsByTagName("td")[colIndex].textContent
//     //let rowsArr = Array.from(rows)
//     //let rows1 = rowsArr.getElementsByTagName("td")
//     console.log(rows)

// }













//               sorting

// table header
let tableHeader = table.querySelector('.table-header');
window.tableHeader = tableHeader;
// need row index on click
tableHeader.onclick = sortTable


// let rows = table.rows;

function sortTable(e) {
    let tdClicked = e.target;
    tdClicked  = tdClicked.closest('th')
    let colIndex = tdClicked.cellIndex

   // достать все строки таблицы
    let rows = table.rows;
    
    // делаем из строк массив
    let rowsArr = Array.from(rows)
    // сортируем строки

    //console.log(rowsArr)
    rowsArr.sort(function (row1, row2) {
        //console.log(row1.cells[colIndex].textContent, row2.cells[colIndex].textContent)
        if (row1.cells[colIndex].textContent  > row2.cells[colIndex].textContent) {
            return 1;
        } else if (row1.cells[colIndex].textContent  < row2.cells[colIndex].textContent) {
            return -1;
        } else {
            return 0;
        }

        
    })
console.log(rowsArr)
    // for(let row of json){
    //     console.log(row)
        
    //     let td228 = document.createElement('tr')
    //     table.tBodies[0].insertAdjacentElement('afterend', td228)
    //     td228.insertAdjacentHTML('beforeend', row.name)
        
    // }
    // if (item1.attr < item2.attr)
    //     return -1;
    // if ( item1.attr > item2.attr)
    //     return 1;
    // return 0;
    //console.log(rowsArr)
    // let zzz = colIndex;
    // console.log(typeof(zzz))
    // let yyy = String(zzz)
    // console.log(yyy)
    //document.getElementsById().innerHTML += rowsArr
}