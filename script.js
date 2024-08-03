//your code here

  // Function to calculate the total price and add a new row with the total
  function addTotalRow() {
    // Get all the price elements using the data-ns-test attribute
    
    const priceElements = document.querySelectorAll('[data-ns-test="price"]');
    // Initialize total price variable
    let totalPrice = 0;
    
    // Loop through the price elements and sum up the prices
    priceElements.forEach(element => {
      const priceText = element.textContent.replace(/[^\d.-]/g, '');
	  const price = parseFloat(priceText);
      if (!isNaN(price)) {
        totalPrice += price;
      }
    });
    
    // Create a new row
    const table = document.getElementById('groceryTable');
    const newRow = document.createElement('tr');
    
    // Create a new cell for the total
    const newCell = document.createElement('td');
    newCell.colSpan = 2; // Assuming you want it to span across two columns
    newCell.textContent = `Total: $${totalPrice.toFixed(2)}`;
    newCell.setAttribute('data-ns-test', 'grandTotal');
    
    // Append the cell to the row and the row to the table
    newRow.appendChild(newCell);
    table.appendChild(newRow);
  }
  
  // Call the function to add the total row
  window.onload = addTotalRow;

