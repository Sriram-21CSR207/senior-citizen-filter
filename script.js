document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filterButton');

    filterButton.addEventListener('click', function() {
        const tableRows = document.querySelectorAll('#individuals-table tbody tr');
        tableRows.forEach(row => {
            const age = parseInt(row.children[1].textContent);
            if (age >= 65) {
                row.style.backgroundColor = '#ffe0e0'; // Highlight senior citizens
                row.style.fontWeight = 'bold';
                row.style.transition = 'all 0.3s ease';
                row.style.display = 'table-row'; // Display senior citizens
            } else {
                row.style.display = 'none'; // Hide non-senior citizens
            }
        });
    });
});
