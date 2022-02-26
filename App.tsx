import React, { useState } from "react";
import { NumericInput } from "./NumericInput";
import { Select } from "./Select"
import { Table } from "./Table";

const fruits = ['apple', 'mango', 'passionfruit', 'banana', 'strawberry']
const fruits2 = ['mango', 'coco', 'lichy', 'peach', 'banana']
const ingredients = [
  ['rice', 'cucumber', 'salmon', 'tuna']
]
const lists = [
  ['salmon', 'tuna'],
  ['zimt', 'pepper'],
  ['tomato', 'cucumber', 'onion', 'mango']
]

export const App = () => {
  const [value, changeValue] = useState(0)
  const [selection, setSelection] = useState<string[]>([])

  return (
    <div>
      <NumericInput value={value} onChange={changeValue} />
      <Select options={fruits} selected={selection} onChange={setSelection} />
      <Select options={fruits2} selected={selection} onChange={setSelection} />
      <Table data={ingredients} selected={selection} onChange={setSelection} />
      <Table data={lists} selected={selection} onChange={setSelection} />
    </div>
  )
}