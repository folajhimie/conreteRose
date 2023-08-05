// import React from 'react'

import { datas } from "../data/loanData.jsx";

const AllLoan = () => {
  return (
    <div className="h-screen text-lg font-semibold w-full z-0 relative px-3 top-[3rem] ">
      <div className="flex justify-center mb-8 font-semibold text-lg">
        Request For All Loan.
      </div>

      <div className=" grid md:grid-cols-4 lg:grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 gap-3">
        {datas.map((data, index) => {
          return (
            <div
              className=""
              key={index}
            >
              <div className="">
                <div className="w-full">
                  <ul className="cursor-pointer p-3 mb-8 bg-white rounded-lg shadow-2xl border border-gray-300 ">
                    <li className="font-semibold text-[#444649] text-base lg:text-base capitalize text-center">
                      ID: {data.ID}
                    </li>
                    <li className="font-semibold text-[#444649] text-base lg:text-base capitalize text-center">
                      TRANSCATION: {data.TRANSACTION_ID}
                    </li>
                    <li className="font-semibold text-[#444649] text-base lg:text-base capitalize text-center">
                      FULL NAME: {data.FULL_NAME}
                    </li>
                    <li className="font-semibold text-[#444649] text-base lg:text-base capitalize text-center">
                      LOAN AMOUNT: {data.LOAN_AMOUNT}
                    </li>
                    <li className="font-semibold text-[#444649] text-base lg:text-base capitalize text-center">
                      REPAYMENT DURATION: {data.REPAYMENT_DURATION}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllLoan;
