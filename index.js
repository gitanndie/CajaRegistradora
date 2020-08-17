var tableItems = document.getElementById("itemsTable");
var row = 0;
var items = [[5, "manzanas", 500], [3, "papas", 800], [2, "gaseosas", 1200], [5, "lechugas", 1500]];
var total = 0;
var memory = 0;

insertRowsAndColumns();
calculateTotal();

function insertRowsAndColumns() {
    for (var index = 0; index < items.length; index++) {
        row = tableItems.insertRow(index + 1); 

        for (var indexCell = 0; indexCell < 3; indexCell++) {
            row.insertCell(indexCell);
            tableItems.rows.item(index + 1).cells[indexCell].innerHTML = items[index][indexCell];                    
        }

        row.insertCell(3);

        tableItems.rows.item(index + 1).cells[3].innerHTML = (items[index][0] * items[index][2]).toFixed(2);
    
        memory = items.length;
    }
}

function calculateTotal() {
    total = 0;

    for (var index = 0; index < items.length; index++) {
        total += items[index][0] * items[index][2];
    }

    document.getElementById("totalData").innerHTML = total.toFixed(2);
}

function addNewItem() {
    var itemQty = document.getElementById("quantity").value;
    var itemDescription = document.getElementById("description").value;
    var itemRate = document.getElementById("rate").value;
    
    items.push([itemQty, itemDescription, itemRate]);

    row = tableItems.insertRow(memory + 1);

    for (var indexCell = 0; indexCell < 3; indexCell++) {
        row.insertCell(indexCell);
        tableItems.rows.item(memory + 1).cells[indexCell].innerHTML = items[memory][indexCell];                    
    }

    row.insertCell(3);
    tableItems.rows.item(memory + 1).cells[3].innerHTML = (items[memory][0] * items[memory][2]).toFixed(2);

    calculateTotal();
    
    memory = items.length;   
}

function deleteLastItem() {
    document.getElementById("itemsTable").deleteRow(memory);
    items.pop();
    memory = items.length;

    calculateTotal();
}

function deleteAllItems() {
    while (memory !== 0) {
        deleteLastItem();
    }
}