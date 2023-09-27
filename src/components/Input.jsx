import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChangeText,
  readonly,
}) => {
  return (
    <div className="x-input-component">
      <p className="x-input-label">{label}</p>
      <input
        className="x-input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeText}
        readOnly={readonly}
      />
    </div>
  );
};

export default Input;
