// Get references to the input and select elements
var searchInput = document.getElementById('searchInput');
var departmentSelect = document.getElementById('departmentSelect');
var positionSelect = document.getElementById('positionSelect');

// Get references to the employee table body and the filter button
var employeeTableBody = document.getElementById('employeeTableBody');
var filterButton = document.getElementById('filterButton');

// Add event listener to the filter button
filterButton.addEventListener('click', filterEmployees);

// Function to filter employees based on search input and filter selects
function filterEmployees() {
  var searchValue = searchInput.value.toLowerCase();
  var departmentValue = departmentSelect.value.toLowerCase();
  var positionValue = positionSelect.value.toLowerCase();

  // Loop through each employee row in the table body
  for (var i = 0; i < employeeTableBody.rows.length; i++) {
    var employeeRow = employeeTableBody.rows[i];
    var employeeName = employeeRow.cells[0].textContent.toLowerCase();
    var employeeDepartment = employeeRow.cells[1].textContent.toLowerCase();
    var employeePosition = employeeRow.cells[2].textContent.toLowerCase();

    // Check if the employee row matches the filter criteria
    if (
      employeeName.includes(searchValue) &&
      (departmentValue === 'all' || employeeDepartment === departmentValue) &&
      (positionValue === 'all' || employeePosition === positionValue)
    ) {
      // Show the employee row if it matches the filter criteria
      employeeRow.style.display = '';
    } else {
      // Hide the employee row if it doesn't match the filter criteria
      employeeRow.style.display = 'none';
    }
  }
}
