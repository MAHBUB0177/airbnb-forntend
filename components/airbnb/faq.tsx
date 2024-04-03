import { Collapse } from "antd";
import React from "react";

const Faq = () => {
  const { Panel } = Collapse;

  const items = [
    {
      key: "1",
      label: "Are gift cards physical or digital?",
      text: "Gift cards bought on Airbnb.com are digital only. However, physical gift cards are available at participating stores.",
    },
    {
      key: "2",
      label: "Where can I buy a physical gift card?",
      text: "You can buy a physical gift card at participating Target, Walmart, Best Buy, CVS, Walgreens, Kroger, Safeway, and Whole Foods store locations.",
    },
    {
      key: "3",
      label: "Do gift cards expire?",
      text: "Once a gift card has been added to your Airbnb account, the funds won’t expire.",
    },
    {
      key: "4",
      label: "Where are gift cards available?",
      text: "Airbnb gift cards are available in many countries around the world. You can find the full list of available countries and applicable Gift Card Terms here.",
    },
    {
      key: "5",
      label:
        "Can I send a gift card to someone who lives in a different country?",
      text: "Gift cards purchased in the United States can only be redeemed by users who reside in the United States. The gift card recipient must also have a valid payment method in the United States. The gift card value can be spent on any stay around the world.",
    },
    {
      key: "6",
      label: "Where can I buy a physical gift card?",
      text: "You can buy a physical gift card at participating Target, Walmart, Best Buy, CVS, Walgreens, Kroger, Safeway, and Whole Foods store locations.",
    },
    {
      key: "7",
      label: "Do gift cards expire?",
      text: "Once a gift card has been added to your Airbnb account, the funds won’t expire.",
    },
  ];
  return (
    <div className="mt-20 mb-20 ">
      <div className="flex flex-col md:flex-row  md:justify-between gap-4 w-full">
        <div className="w-full md:w-1/3">
          <p className="text-2xl md:text-5xl font-semibold ">
          Your questions <br /> answered
          </p>
          {/* <p className="pt-5 text-xl hidden md:block">
            For other questions visit our help{" "}
            <span className="underline font-medium"> center</span>
          </p> */}
        </div>

        <div className="w-full md:w-2/3">
          <Collapse accordion>
            {items.map((item, i) => (
              <Panel
                header={item.label}
                key={item.key}
                className="text-xl font-semibold "
              >
                <p className="font-light  text-slate-500">{item.text}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Faq;
