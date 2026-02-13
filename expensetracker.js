const expenseForm = document.getElementById("expense-form");
const expenseTable = document.getElementById("expense-table").querySelector("tbody");

expenseForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const desc = document.getElementById("desc").value.trim();
    const date = document.getElementById("date").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than 0");
        return;
    }

    
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${desc}</td>
        <td>${date}</td>
        <td>₹${amount}</td>
        <td>${category}</td>
    `;

    
    expenseTable.appendChild(newRow);


    expenseForm.reset();
});
