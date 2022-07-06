/* Load our sortable table module */
// Not loading!
// import "https://unpkg.com/table-sort-js/table-sort.js?module";
export function mkTable() {
    let table=document.createElement("table");
    // Make the table sortable
    ["table-sort","table-arrows"].forEach(function(className) {
        table.classList.add(className);
    });
    // Create the header row
    var headerRow=document.createElement("tr");
    var nameHeader=document.createElement("th");
    nameHeader.innerText="Name";
    var sizeHeader=document.createElement("th");
    sizeHeader.innerText="Size";
    [nameHeader,sizeHeader].forEach(function(domNode) {
        headerRow.appendChild(domNode);
    });
    table.appendChild(headerRow);
    table.addRow=function(name, size) {
        var newRow=document.createElement("tr");
        var nameCell=document.createElement("td");
        var sizeCell=document.createElement("td");
        nameCell.innerText=name;
        sizeCell.innerText=size;
        sizeCell["data-sort"]=size;
        [nameCell,sizeCell].forEach(function(domNode) {
            newRow.appendChild(domNode);
        });
        table.appendChild(newRow);
    };
    return table;
};