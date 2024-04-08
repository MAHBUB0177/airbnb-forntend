import { Select } from "antd";
import React, { useState } from "react";

const options=[
    {
      value: '1',
      label: 'Not Identified',
    },
    {
      value: '2',
      label: 'Closed',
    },
    {
      value: '3',
      label: 'Communicated',
    },
    {
      value: '4',
      label: 'Identified',
    },
    {
      value: '5',
      label: 'Resolved',
    },
    {
      value: '6',
      label: 'Cancelled',
    },
  ]

interface AutoCompleteProps {
  destination:string,
  selectChange: (value: string) => void;
  selectRef: React.MutableRefObject<HTMLDivElement | null>;
}
const AutoComplete = ({ selectChange,selectRef, destination}: AutoCompleteProps) => {
  return (
    <div className="text-textprimary text-sm leading-0 py-0 cursor-pointer"  ref={selectRef}>
      <Select
     
      size="large"
      bordered={false}
      suffixIcon={null}
      showSearch
      value={destination}
      style={{
        width: "100%",
        height: '30px' 
      }}
      placeholder="Select Destination"
      onChange={selectChange}
      // optionFilterProp="children"
      filterOption={(input, option) =>
        ((option?.label ?? "").toLowerCase()).includes(input.toLowerCase())
      }
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={options}
    />
    </div>
  );
};

export default AutoComplete;
