// import React from 'react'
import { useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Loan = () => {
  // const [comment, setComment] = useState({});
  const [response, setResponse] = useState("");

  var [userData, setUserData] = useState({
    action: "request_for_loan",
    full_name: "",
    loan_amount: "",
    repayment_duration: "",
  });

  const nameInput = useRef();

  // create a ref for the value input field
  const loanInput = useRef();

  const repayInput = useRef();

  var { full_name, loan_amount, repayment_duration } = userData;

  const handleName = (e) => setUserData({ ...userData, full_name: e.target.value });

  const handleLoan = (e) => setUserData({ ...userData, loan_amount: e.target.value });

  const handleRepay = (e) => setUserData({ ...userData, repayment_duration: e.target.value });

  // useEffect(() => {
  //   keyInput.current.focus();
  //   valueInput.current.focus();
  //   typeInput.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [value, key, type]);

  const postData = async (e) => {
    e.preventDefault();

    // Replace 'your-api-url' with the actual URL of your API endpoint
    const apiUrl = "https://okigwecreations.online/api/";

    // You may need to set additional headers based on your server's CORS configuration
    // const data = {
    //   // Your POST data goes here
    //   action: "request_for_loan",
    //   full_name: "Adlas Nig Limited",
    //   loan_amount: "2000000",
    //   repayment_duration: "12",
    // };

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Replace * with your server's allowed origin or specific domains.
        "Access-Control-Allow-Methods": "POST", // Specify the allowed HTTP methods (POST in this case).
        withCredentials: true,
        mode: 'no-cors',
      },
    };

    try {
      console.log("all data...", userData);
      const response = await axios.post(apiUrl, userData, config);
      setResponse(response.data);
      toast.success("Loan created successfully");
      setUserData({ ...userData, full_name: "" })
      setUserData({ ...userData, loan_amount: "" })
      setUserData({ ...userData, repayment_duration: "" })
      console.log(response.data);
    } catch (error) {
      toast.error(error);
      console.error(error);
    }
  };


  return (
    <div>
      <ToastContainer />
      <div className=" h-screen text-lg font-semibold w-full z-0 relative px-3 top-[3rem]">
        <div className="flex flex-col justify-center items-center h-[100vh]  ">
          <div className=" border-emerald-400 border z-5 relative rounded-[20px] max-w-[500px] bg-white bg-clip-border shadow-3xl flex flex-col w-full !p-6 3xl:p-![18px] shadow-slate-900">
            <div className="relative flex flex-row justify-between">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white mb-3 text-center w-full">
                PrimeBase Loan Input Form
              </h4>
            </div>
            <div className="mb-3">
              <label

                className="text-sm text-navy-700 dark:text-white font-bold"
              >
                Fullname:
              </label>
              <input
                type="text"
                id="text"
                placeholder="John Doe"
                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-300"
                onChange={handleName}
                ref={nameInput}
                value={full_name}
                required=""
              />
            </div>
            <div className="mb-3">
              <label

                className="text-sm text-navy-700 dark:text-white font-bold"
              >
                Loan Amount:
              </label>
              <input
                type="text"
                id="text"
                placeholder="2000"
                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-300"
                onChange={handleLoan}
                ref={loanInput}
                value={loan_amount}
                required=""
              />
            </div>
            <div className="mb-3">
              <label

                className="text-sm text-navy-700 dark:text-white font-bold"
              >
                Repayment Duration:
              </label>
              <input
                type="text"
                id="text"
                placeholder="11"
                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-300"
                onChange={handleRepay}
                ref={repayInput}
                value={repayment_duration}
                required=""
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={postData}
                className={`group relative flex w-full justify-center rounded-md border border-transparent bg-teal-800  py-2 px-4 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2 `}
              >
                Submit Loan
              </button>
            </div>
          </div>
        </div>

      </div>

      {response && <div>Response: {JSON.stringify(response)}</div>}
      <div>
        {/* <button className="text-rose-600 bg-teal-500" onClick={postData}>
          Make POST Request
        </button> */}
      </div>
    </div>
  );
};

export default Loan;
