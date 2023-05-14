let tableCounter = 0;

      function addTable() {
        // Create a new table element
        const table = document.createElement('table');

        // Assign a unique ID to the table
        table.id = `table-${tableCounter}`;

        // Increment the table counter
        tableCounter++;

        // Create a header row for the table
        const headerRow = table.insertRow(0);

        // Create a cell for the header row
        const headerCell = headerRow.insertCell(0);

        // Create a unique text input element for the header cell
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter checklist name';
        headerCell.appendChild(input);

        // Create a button to add rows to the table
        const addButton = document.createElement('button');
        addButton.textContent = 'Add Row';
        addButton.addEventListener('click', addRow.bind(null, table.id));
        headerCell.appendChild(addButton);

        // Create a button to remove rows from the table
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Row';
        removeButton.addEventListener('click', removeRow.bind(null, table.id));
        headerCell.appendChild(removeButton);

        // Add the table to the table container
        const tableContainer = document.getElementById('table-container');
        tableContainer.appendChild(table);
      }

      function addRow(tableId) {
        // Get the table element by ID
        const table = document.getElementById(tableId);

        // Get the number of rows in the table
        const rowCount = table.rows.length;

        // Create a new row element
        const newRow = table.insertRow(rowCount);

        // Create a new cell element for each column in the table
        const newCell1 = newRow.insertCell(0);
        const newCell2 = newRow.insertCell(1);

        // Add some text to each cell
        newCell1.innerHTML = '<span class="input" role="textbox" contenteditable></span><div class="checkbox"></div>';
      }

      function removeRow(tableId) {
        // Get the table element by ID
        const table = document.getElementById(tableId);

        // Get the number of rows in the table
        const rowCount = table.rows.length;

        // Only remove a row if there is more than one row
        if (rowCount > 1) {
          table.deleteRow(rowCount - 1);
        }
      }

      function removeTable() {
        // Get the table container element
        const tableContainer = document.getElementById('table-container');

        // Get the number of tables in the container
        const tableCount = tableContainer.childNodes.length;

        // Only remove a table if there is at least one table
        if (tableCount > 0) {
          tableContainer.removeChild(tableContainer.childNodes[tableCount - 1]);
        }

        // Decrement the table counter
        tableCounter--;
      }