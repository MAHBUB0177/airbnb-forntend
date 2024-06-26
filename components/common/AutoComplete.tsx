import { Select } from "antd";
import React, { useState } from "react";

const options=[
    {
      value: '1',
      label: 'Southeast Asia',
    },
    {
      value: '2',
      label: 'Europe',
    },
    {
      value: '3',
      label: 'Canada',
    },
    {
      value: '4',
      label: 'Middle East kkkk kkki iiii iiii hello jerry ',
    },
    {
      value: '5',
      label: 'Thailand',
    },
    {
      value: '6',
      label: 'Cancelled',
    },
  ]

interface AutoCompleteProps {
  destination:string,
  selectChange: (value: string) => void;
  selectRef?: React.MutableRefObject<HTMLDivElement | null>;
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
      className="w-[100%] md:w-[100%] lg:min-w-[170px] xl:max-w-[400px] h-[30px]"
      // style={{
      //   width: "100%", 
      //   // minWidth:'200px',
      //   maxWidth: '400px', 
      //   height: '30px' 
      // }}
      placeholder="Select Destination"
      onChange={selectChange}
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
