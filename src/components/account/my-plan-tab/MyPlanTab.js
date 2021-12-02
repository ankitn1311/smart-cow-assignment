import React from "react";
import CrossIcon from "../../../assets/svg/CrossIcon";
import TickIcon from "../../../assets/svg/TickIcon";
import "./MyPlanTab.scss";

const MyPlanTab = () => {
  const features = [
    "Pellentesque interdum libero et",
    "Pellentesque posuere jdfkdfkdfhd",
    "Cras sed felis eget",
    "Maecenas eget luctus",
    "Nullam vitae augue",
  ];

  const plans = [
    { name: "Free", available: [0, 1, 2], price: 0, active: false },
    { name: "Pro", available: [0, 1, 2, 3], price: 12, active: false },
    { name: "Team", available: [0, 1, 2, 3, 4], price: 23, active: true },
    { name: "Agency", available: [0, 1, 2, 3, 4, 5], price: 43, active: false },
  ];

  return (
    <div className="MyPlan">
      {plans.map((plan) => (
        <div
          className={`MyPlan__plan ${plan.active && "MyPlan__plan--active"}`}>
          <div className="MyPlan__plan--name">{plan.name}</div>
          <ul className="MyPlan__plan--features">
            {features.map((feature, index) => (
              <li className="MyPlan__plan--feature">
                <span className="MyPlan__plan--icon">
                  {index + 2 > plan.available.length ? (
                    <CrossIcon color={`${plan.active ? "white" : "black"}`} />
                  ) : (
                    <TickIcon color={`${plan.active ? "white" : "black"}`} />
                  )}
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="MyPlan__plan--price">
            <span className="MyPlan__plan--dollar">$</span>
            {plan.price}
          </div>
          <button
            className={`MyPlan__plan--button ${
              plan.active && "MyPlan__plan--button--active"
            }`}>
            {plan.active ? "Current Plan" : "Downgrade"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyPlanTab;
