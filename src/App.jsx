import React, { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Loading from "./components/Loading";
import DownloadExcel from "./components/DownloadExcel";
import studentsData from "./data/studentsData";
import "./styles/styles.css";

function App() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setStudents(studentsData);
      setLoading(false);
    }, 1500);
  }, []);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const updateStudent = (student) => {
    setStudents(
      students.map((s) => (s.id === student.id ? student : s))
    );
    setEditStudent(null);
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="container">

      <h1 className="title">Student Management System</h1>

      <StudentForm
        addStudent={addStudent}
        updateStudent={updateStudent}
        editStudent={editStudent}
      />

      <DownloadExcel students={students} />

      {loading ? (
        <Loading />
      ) : (
        <StudentTable
          students={students}
          deleteStudent={deleteStudent}
          setEditStudent={setEditStudent}
        />
      )}

    </div>
  );
}

export default App;