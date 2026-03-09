import React from "react";
import * as XLSX from "xlsx";

function DownloadExcel({ students }) {

  const downloadFile = () => {

    const worksheet = XLSX.utils.json_to_sheet(students);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    XLSX.writeFile(workbook, "students.xlsx");

  };

  return (
    <button className="excelBtn" onClick={downloadFile}>
      Download Excel
    </button>
  );
}

export default DownloadExcel;