import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Employees from "../components/Employees";

function ViewP() {
    const [employees, setEmployees] = useState([
        {first_name: "mike",
            last_name: "john",
            surname: "Ruger",
            phone: "254725476598",
            gender: "male",
            residence: "Nairobi",
            id_number: "33340340",
            department: "MOBILE",
            qualification: "developer"},
            {first_name: "mirriam",
                last_name: "kawira",
                surname: "sunny",
                phone: "254725676598",
                gender: "female",
                residence: "Nairobi",
                id_number: "80340340",
                department: "MOBILE",
                qualification: "developer"},
                {first_name: "Aleo",
                    last_name: "njeri",
                    surname: "peace",
                    phone: "254725486598",
                    gender: "female",
                    residence: "Nairobi",
                    id_number: "81340340",
                    department: "MOBILE",
                    qualification: "developer"}
    ]);
    const handleDelete = (id_number) => {
        const newEmployees = employees.filter(employee => employee.id_number !== id_number);
        setEmployees(newEmployees)
    }
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Employees employees={employees} title="Our Members" handleDelete={handleDelete}/>       
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default ViewP;
