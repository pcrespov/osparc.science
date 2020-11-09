function createImage(src, width, height, alt) {
    const img = document.createElement("img");
    img.src = src;
    // img.width = width;
    // img.height = height;
    // img.alt = alt;
    return img;
}

function createTable() {
    const tbl = document.createElement("table");
    tbl.style.width = "100%";

    const theader = tbl.createTHead();
    const header = theader.insertRow(0);
    header.insertCell(0).innerHTML = "<b>Name</b>";
    header.insertCell(1).innerHTML = "<b>File type</b>";
    header.insertCell(2).innerHTML = "<b>Size</b>";
    header.insertCell(3).innerHTML = "<b>Operation</b>";

    return tbl;
}

function populateTable(tbl, data) {
    const tbdy = document.createElement("tbody");
    for (let i = 0; i < data.length; i++) {
        const rowData = data[i];
        const tr = tbl.insertRow();
        for (let j = 0; j < 4; j++) {
            const td = tr.insertCell();
            td.appendChild(document.createTextNode(rowData[j]));
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
}

const header = createImage("resources/header.png");
document.body.appendChild(header);


const filesTable = createTable();
document.body.appendChild(filesTable);

const tableData = [
    ["template.json", "Json", "51B", "Open"]
];
populateTable(filesTable, tableData);


const footer = createImage("resources/footer.png");
document.body.appendChild(footer);
