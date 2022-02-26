import React from "react";

export const Table = (props: {
  data: string[][],
  selected: string[],
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
    <table>
      <tbody>
        {props.data.map(row =>
          <tr key={row[0]}>
            {row.map(column =>
              <td
                key={column}
                style={{
                  //...isSelected(column),
                  background: props.selected.includes(column) ? 'green' : undefined,
                  cursor: 'pointer',
                }}
                onClick={() => toggleSelection(column)}
              >{column}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}