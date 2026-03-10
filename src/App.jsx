  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  import Navbar from "./navbar/Navbar";
  import Dashboard from "./dashboard/Dashboard";
  import Home from "./pages/home/Home";
  import Students from "./pages/students/Students";
  import Teachers from "./pages/teachers/Teachers";
  import Staff from "./pages/staff/Staff";
  import Coorinators from "./pages/cooridnators/Coorinators";
  import { StudentsProvider } from "./StudentsContex";

// Hoe to run 
// Run Vite :npm run dev
// Run json :npx json-server db.json


  const App = () => {
    return (
      <StudentsProvider>
        <Router>
          <Navbar />
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-[20%]">
              <Dashboard />
            </div>
           
            <div className="sm:w-[80%] p-4">
                <Home/>
              <Routes>
                <Route path="/students" element={<Students />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/coorinators" element={<Coorinators />} />
              </Routes>
            </div>
          </div>
        </Router>
      </StudentsProvider>
    );
  };

  export default App;