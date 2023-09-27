import Swal from "sweetalert2";

export const productNameChange = (index, event, rows, setRows) => {
  const updatedRows = [...rows];
  updatedRows[index].productName = event.target.value;
  setRows(updatedRows);
};

export const productPriceChange = (
  index,
  event,
  rows,
  setRows,
  updateGrandTotal
) => {
  const updatedRows = [...rows];
  const price = parseFloat(event.target.value);
  updatedRows[index].productPrice = price;
  updatedRows[index].total = price * updatedRows[index].quantity;
  setRows(updatedRows);
  updateGrandTotal(updatedRows);
};

export const quantityChange = (
  index,
  event,
  rows,
  setRows,
  updateGrandTotal
) => {
  const updatedRows = [...rows];
  const quantity = parseInt(event.target.value, 10);

  if (quantity < 1) {
    // Menampilkan alert jika qty kurang dari 1
    Swal.fire({
      icon: "error",
      title: "Invalid Quantity",
      text: "Quantity must be greater than 0",
    });
    return;
  }

  updatedRows[index].quantity = quantity;
  updatedRows[index].total = updatedRows[index].productPrice * quantity;
  setRows(updatedRows);
  updateGrandTotal(updatedRows);
};

export const handleGrandTotal = (updatedRows, setGrandTotal) => {
  const total = updatedRows.reduce((acc, row) => acc + row.total, 0);
  setGrandTotal(total);
};
