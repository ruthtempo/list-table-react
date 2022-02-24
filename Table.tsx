import React from "react";

export const Table = (props: {
  data: string[][],
}) => {

  return (
    <table>
      <tbody>
        {props.data.map(row =>
          <tr key={row[0]}>
            {row.map(column =>
              <td key={column}>{column}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}