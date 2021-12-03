import React from "react";
import PdfIcon from "../../../assets/svg/PdfIcon";
import "./BillingTab.scss";

const BillingTab = () => {
  //Mock Data
  const tableHeaders = ["REFERENCE ID", "DATE", "AMOUNT", "INVOICE"];
  const tableData = [
    { id: "4571222f6rthswfg9981fr55", date: "7/12/2020", amount: 28 },
    { id: "4571222f6rthswfg9981fr55", date: "7/12/2020", amount: 36 },
    { id: "4571222f6rthswfg9981fr55", date: "7/12/2020", amount: 14 },
  ];

  return (
    <div className="Billing">
      <table className="Billing__table">
        <tr className="Billing__table--head">
          {tableHeaders.map((data) => (
            <th className="Billing__table--data">{data}</th>
          ))}
        </tr>

        {tableData.map((data) => {
          return (
            <tr className="Billing__table--row">
              <td className="Billing__table--data">{data.id}</td>
              <td className="Billing__table--data">{data.date}</td>
              <td className="Billing__table--data">{data.amount}</td>
              <td className="Billing__table--data">
                <PdfIcon />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default BillingTab;
