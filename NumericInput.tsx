import React from "react";

// //prop type : NumbericInputProps
// interface NumericInputProps 

export const NumericInput = (p: {
  value: number
  onChange: (value: number) => void
}) => {
  return (
    <div>
      <button onClick={() => p.onChange(p.value - 1)}>-</button>
      <input
        type="number"
        value={p.value}
        onChange={(event) => p.onChange(parseInt(event.target.value || "0"))}
      />
      <button onClick={() => p.onChange(p.value + 1)}>+</button>
    </div>
  )
}
