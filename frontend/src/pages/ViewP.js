import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Employees from "../components/Employees";

function ViewP() {
  const [employees, setEmployees] = useState(null);
  const handleDelete = (id_number) => {
    const newEmployees = employees.filter(
      (employee) => employee.id_number !== id_number
    );
    setEmployees(newEmployees);
  };

  // useEffect(() => {
  //   fetch("http://127.0.0.1:3000/api/employees")
  //     .then((res) => res.json())
  //     .then((data) => setEmployees(data))
  //     .catch((error) => console.error("Error fetching employees:", error));
  // }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/employees")
      .then((res) => {
        console.log("Raw response:", res);
        return res.json();
      })
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);
  

  console.log(employees);

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        {employees && (
          <Employees
            employees={employees}
            title="Our Members"
            handleDelete={handleDelete}
          />
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default ViewP;
