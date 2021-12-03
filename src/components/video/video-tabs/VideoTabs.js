import React, { useState } from "react";
import BillingTab from "../../account/billing-tab/BillingTab";
import MyPlanTab from "../../account/my-plan-tab/MyPlanTab";
import ProfileTab from "../../account/profile-tab/ProfileTab";
import "./VideoTabs.scss";

const VideoTabs = () => {
  const tabs = ["Profile", "My Plan", "Billing"];
  const [activeTab, setActiveTab] = useState("Profile");

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
    <div className="VideoTabs">
      <ul className="VideoTabs__tab">
        {tabs.map((value) => (
          <li
            onClick={() => setActiveTab(value)}
            className={`VideoTabs--item ${
              value === activeTab && "VideosTabs__tab--item--active"
            }`}>
            {value}
          </li>
        ))}
      </ul>
      {renderContent()}
    </div>
  );
};

export default VideoTabs;
