// import React from "react";
import { useState } from "react";
import WATableData from "../../APIs/WATableAPI";

const WATable = () => {
  // API
  // --------------------------------------------------WATableAPI----------------------------------------------------

  const [watabledata] = useState(WATableData);

  return (
    <div className="rounded-xl">
      <table className="w-[100%] bg-white border-[1px] border-[black] rounded-xl">
        <thead>
          <tr>
            <th className="px-[2rem] py-[1rem] border-[1px] border-[black] bg-gray-50 text-center leading-[1.6] text-[1.2rem] font-medium text-gray-500 uppercase tracking-wider">
              Transaction Amount Range
            </th>
            <th className="px-[2rem] py-[1rem] border-[1px] border-[black] bg-gray-50 text-center leading-[1.6] text-[1.2rem] font-medium text-gray-500 uppercase tracking-wider">
              Platform fee / Per Transaction
            </th>
          </tr>
        </thead>
        <tbody className="text-center rounded-xl max-[400px]:text-left leading-[1.6]">
          {watabledata.map((e) => {
            return (
              <tr key={e.id}>
                <td className="px-6 py-4 border-[1px] border-[black] text-[1.4rem] font-normal text-[#212122]">
                  {e.AmountRange}
                </td>
                <td className="px-6 py-4 border-[1px] border-[black] text-[1.4rem] font-normal text-[#212122]">
                  {e.PlatformFee}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WATable;
