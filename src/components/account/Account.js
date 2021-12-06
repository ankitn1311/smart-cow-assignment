import React, { useState } from "react";
import "./Account.scss";
import BillingTab from "./billing-tab/BillingTab";
import MyPlanTab from "./my-plan-tab/MyPlanTab";
import ProfileTab from "./profile-tab/ProfileTab";

const Account = () => {
  const tabs = ["Profile", "My Plan", "Billing"];
  const [activeTab, setActiveTab] = useState("Profile");

  // Funtion to render content according to the current tab value.
  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileTab />;
      case "My Plan":
        return <MyPlanTab />;
      case "Billing":
        return <BillingTab />;
      default:
        return null;
    }
  };

  return (
    <div className="Account">
      <ul className="Account__tab">
        {tabs.map((value) => (
          <li
            key={value}
            onClick={() => setActiveTab(value)}
            className={`Account__tab--item ${
              value === activeTab && "Account__tab--item--active"
            }`}>
            {value}
          </li>
        ))}
      </ul>
      {renderContent()}
    </div>
  );
};

export default Account;
