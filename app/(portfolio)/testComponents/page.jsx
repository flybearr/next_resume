"use client";
import React, { useState } from "react";

import "@/styles/test.scss";
import { Permanent_Marker } from "next/font/google";
const font = Permanent_Marker({ subsets: ["latin"], weight: ["400"] });
export default function Page() {
  const engineer = [
    { name: "邱俊明", id: "COLD-S001" },
    { name: "林彥廷", id: "COLD-S002" },
    { name: "楊翔鈞", id: "COLD-S003" },
    { name: "陳宏遠", id: "COLD-S004" },
  ];

  const [date, setDate] = useState("");
  const [deviceDate, setDeviceDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [prjName, setPrjName] = useState("");
  const [customerId, setCustomerId] = useState(0);
  const [unit, setUnit] = useState("");
  //複合式  技師名稱 + 人員編號
  const [engSelectOpt, setEngSelectOpt] = useState(engineer);
  const [adress, setAdress] = useState("");
  // const []
  const array1 = [
    "訂單日期",
    "設備交期",
    "客戶名稱",
    "案件名稱",
    "客戶編號",
    "配合施工單位",
    "人員編號",
    "配合技師(機電)",
    "送貨地點",
    "配合技師(消防)",
    "案場聯絡人",
    "配合技師(VPC)",
  ];

  const opts = (
    <select
      name="eng"
      id="eng"
      onChange={(e) => {
        setEngSelectOpt(e.target.value);
      }}
    >
      <option value="null">請選擇</option>
      {engSelectOpt.map((v, i) => {
        return (
          <option key={v.id} value={v.id}>
            {v.name}
          </option>
        );
      })}
    </select>
  );
  return (
    <div className="w-full h-full">
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <div className="area">
        {array1.map((v, i) => {
          const dom =
            v === "配合技師(機電)" ? opts : <input type="text" name="" id="" />;
          // const engId = selectOpt ?
          return (
            <div key={"array1" + i} className="everyTag">
              <label htmlFor="" className="label">
                {v}
              </label>
              {dom}
            </div>
          );
        })}
      </div>
    </div>
  );
}
