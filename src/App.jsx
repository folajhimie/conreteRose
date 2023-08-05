import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Layout/Layout.jsx";
import Loan from "./components/loan.jsx";
import AllLoan from "./components/allLoan.jsx";
import RepaySchedule from "./components/repaySchedule.jsx";


function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="/" element={<Loan />} />
              <Route path="loan" element={<Loan />} />
              <Route path="all-loan" element={<AllLoan />} />
              <Route path="repay-schedule" element={<RepaySchedule/>} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
