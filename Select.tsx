import React from "react";

export const Select = (props: {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
}) => {
  const isSelected = (element: string) => {
    if (props.selected.includes(element)) {
      return { backgroundColor: 'green' }
    }
    return {}
  }

  const toggleSelection = (selectedElement: string) => {
    const newSelection = props.selected.filter(element => element !== selectedElement)

    if (!props.selected.includes(selectedElement)) {
      newSelection.push(selectedElement)
    }
    props.onChange(newSelection)
  }

  return (
    <ul>
      {props.options.map(o =>
        <li
          style={isSelected(o)}
          key={o}
          onClick={() => toggleSelection(o)}
        >{o}</li>
      )}
    </ul>
  )
}