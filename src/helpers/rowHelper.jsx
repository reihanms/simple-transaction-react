export const newRow = (setRows, rows) => {
  const newRow = {
    productName: "",
    productPrice: "",
    quantity: 1,
    total: "",
  };
  setRows([...rows, newRow]);
};

export const deleteRow = (index, rows, setRows) => {
  const updatedRows = [...rows];
  updatedRows.splice(index, 1);
  setRows(updatedRows);
};
