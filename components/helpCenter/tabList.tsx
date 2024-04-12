"use client";
import React, { useState } from "react";
import { Tabs } from "antd";
import Guides from "./guides";

interface MyTabsProps {
  defaultActiveKey: string;
}
const TabList = () => {
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState("1");
  console.log(activeKey, "+++++++++++++");
  function callback(key: string) {
    console.log(key);
    setActiveKey(key);
  }
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane
          tab={<span className="text-[#232323] font-medium ">Guest</span>}
          key="1"
        >
          <Guides active={activeKey} />
        </TabPane>
        <TabPane
          tab={<span className="text-[#232323] font-medium ">Host</span>}
          key="2"
        >
          <Guides active={activeKey} />
        </TabPane>
        <TabPane
          tab={
            <span className="text-[#232323] font-medium ">Experience Host</span>
          }
          key="3"
        >
          <Guides active={activeKey} />
        </TabPane>
        <TabPane
          tab={
            <span className="text-[#232323] font-medium ">Travel admin</span>
          }
          key="4"
        >
          <Guides active={activeKey} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabList;
