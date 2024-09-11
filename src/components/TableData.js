import React, { useState } from "react";
import Pagination from "./Pagination";

const TableData = ({ header, data }) => {
  const [itemsPerPage] = useState(7);
  const [selectAll, setSelectAll] = useState(false);
  const [seletedCheckBox, setSelectedCheckBox] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const totalItems = data.slice(firstIndex, lastIndex);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    if (checked) {
      const selectAllById = totalItems.map((itm) => itm._id);
      console.log(selectAllById);
      setSelectedCheckBox(selectAllById);
    } else {
      setSelectedCheckBox([]);
    }
  };

  const handleCheckBox = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSelectedCheckBox((prev) => [...prev, value]);
    } else {
      setSelectedCheckBox((prevSelected) =>
        prevSelected.filter((id) => id !== value)
      );
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>SN</th>
            {header.map((col, i) => (
              <th key={i}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {totalItems.map((row, index) => (
            <tr key={row._id}>
              <td>
                <input
                  type="checkbox"
                  checked={seletedCheckBox.includes(row._id)}
                  value={row._id}
                  onChange={handleCheckBox}
                />
              </td>
              <td>{firstIndex + index + 1}</td>
              {header.map((col, i) => (
                <td key={i}>
                  {col.render
                    ? col.render(row[col.key])
                    : row[col.key] ?? "---"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        length={data.length}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
    </div>
  );
};

export default TableData;
