import React, { useState, useEffect } from "react";

function StudentForm({ addStudent, updateStudent, editStudent }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setEmail(editStudent.email);
      setAge(editStudent.age);
    }
  }, [editStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !age) {
      alert("All fields are required");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return;
    }

    const student = {
      id: editStudent ? editStudent.id : null,
      name,
      email,
      age
    };

    editStudent ? updateStudent(student) : addStudent(student);

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Student Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button type="submit">
        {editStudent ? "Update Student" : "Add Student"}
      </button>

    </form>
  );
}

export default StudentForm;