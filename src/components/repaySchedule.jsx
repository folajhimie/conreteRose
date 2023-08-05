// import React from 'react'
import { repayment } from "../data/loanData.jsx";

function repaySchedule() {
  return (
    <div className="h-screen text-lg font-semibold w-full z-0 relative px-3 top-[3rem] ">
      <div className="flex justify-center mb-8 font-semibold text-lg">
        Repayment Schedule.
      </div>

      <div className=" grid md:grid-cols-3 lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-7">
        {repayment.map((repay, index) => {
          return (
            <div
              className=""
              key={index}
            >
              <div className=" ">
                <div className="w-full  ">
                  <ul className="cursor-pointer p-3 mb-8 bg-white rounded-lg shadow-2xl border border-gray-300 ">
                    <li className="font-semibold text-[#444649] text-base lg:text-md capitalize text-center">
                      ID: {repay.ID}
                    </li>
                    <li className="font-semibold text-[#444649] text-base lg:text-md capitalize text-center">
                      TRANSCATION: {repay.TRANSACTION_ID}
                    </li>
                    <li className="font-semibold text-[#444649] text-base lg:text-md capitalize text-center">
                      FULL NAME: {repay.LOAN_BALANCE}
                    </li>
                    <li className="font-semibold text-[#444649] text-base lg:text-md capitalize text-center">
                      LOAN AMOUNT: {repay.MONTH_COUNT}
                    </li>
                    <li className="font-semibold text-[#444649] text-base lg:text-md capitalize text-center">
                      EXPECTED REPAYMENT AMOUNT: {repay.EXPECTED_REPAYMENT_AMOUNT}
                    </li>
                    <li className="font-semibold text-[#444649] text-base lg:text-md capitalize text-center">
                      INTEREST: {repay.INTEREST}
                    </li>
                    <li className="font-semibold text-[#444649] text-base lg:text-md capitalize text-center">
                      TOTAL REPAYMENT AMOUNT: {repay.TOTAL_REPAYMENT_AMOUNT}
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
}

export default repaySchedule