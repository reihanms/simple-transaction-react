import { useState } from "react";
import { Button, Input } from "./components";
import { deleteRow, newRow } from "./helpers/rowHelper";
import { handleGrandTotal, productNameChange, productPriceChange, quantityChange } from "./helpers/fieldChangeHelper";

const App = () => {
  const [rows, setRows] = useState([{ quantity: 1 }]);
  const [grandTotal, setGrandTotal] = useState(0);

  const handleNewRow = () => {
    newRow(setRows, rows);
  };

  const handleDeleteRow = (index) => {
    deleteRow(index, rows, setRows);
  };

  const handleProductNameChange = (index, event) => {
    productNameChange(index, event, rows, setRows)
  };

  const handleProductPriceChange = (index, event) => {
    productPriceChange(index, event, rows, setRows, handleUpdateGrandTotal)
  }

  const handleQuantityChange = (index, event) => {
    quantityChange(index, event, rows, setRows, handleUpdateGrandTotal)
  }

  const handleUpdateGrandTotal = (updatedRows) => {
    handleGrandTotal(updatedRows, setGrandTotal)
  };

  return (
    <div className="App">
      <h1>Dimy Tech - Technical Test</h1>
      <Button variant="primary" onClickFunc={handleNewRow} label="New" />
      {rows.map((row, index) => (
        <div key={index} className="x-row">
          <Input
            label="Product Name"
            placeholder="Product Name"
            value={row.productName}
            onChangeText={(e) => handleProductNameChange(index, e)}
          />
          <Input
            type="number"
            label="Product Price"
            placeholder="Product Price"
            value={row.productPrice}
            onChangeText={(e) => handleProductPriceChange(index, e)}
          />
          <Input
            type="number"
            label="Quantity"
            placeholder="Quantity"
            value={row.quantity}
            onChangeText={(e) => handleQuantityChange(index, e)}
          />
          <Input
            type="number"
            label="Total"
            placeholder="Total"
            value={row.total}
            readonly
          />
          {rows.length > 1 && (
            <div className="x-button-delete">
              <Button
                variant="secondary"
                onClickFunc={() => handleDeleteRow(index)}
                label="Delete"
              />
            </div>
          )}
        </div>
      ))}
      <div className="x-grand-total">
        <Input
          type="number"
          label="Grand Total : "
          placeholder="Grand Total"
          value={grandTotal}
          readonly
        />
      </div>
    </div>
  );
};

export default App;
