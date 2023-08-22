"use client";
import React, { useState, useRef } from "react";
import "../../styles/drag.scss";
export default function Drag() {
  const [pendingList, setPendingList] = useState([{ id: 1, thing: "打掃" }]);
  const [progressList, setProgressList] = useState([
    { id: 1, thing: "寫程式" },
  ]);
  const [doneList, setDoneList] = useState([{ id: 1, thing: "買玩具" }]);
  const [inputText, setInputText] = useState("");
  const [dragOver, setDragOver] = useState({
    pendingList: false,
    progressList: false,
    doneList: false,
  });
  //新增
  function insert() {
    const newArr = [...pendingList];
    const lastOne = pendingList.find(
      (v, i) => pendingList.length === i + 1
    ) || { id: 0 };
    setPendingList([...newArr, { id: lastOne.id + 1, thing: inputText }]);
    setInputText("");
  }
  //刪除
  function del(thisId, type) {
    const filterThisData = type.filter((v, i) => {
      return v.id !== thisId;
    });
    console.log(thisId);
    switch (type) {
      case pendingList:
        setPendingList(filterThisData);
        break;
      case progressList:
        setProgressList(filterThisData);
        break;
      case doneList:
        setDoneList(filterThisData);
        break;
      default:
        break;
    }
  }

  function onDragOverfunc(e, type) {
    e.preventDefault();
    if (!dragOver[type]) {
      const answer = { [type]: true };
      const newArr = { ...dragOver, ...answer };
      setDragOver(newArr);
    }
  }
  function onDragLeavefunc(e, type) {
    e.preventDefault();
    if (dragOver[type]) {
      const answer = { [type]: false };
      const newArr = { ...dragOver, ...answer };
      setDragOver(newArr);
    }
  }

  function onDragStartFunc(e, index, type) {
    e.target.classList.add("dragging");
    const Info = JSON.stringify(type[index]);
    e.dataTransfer.setData("info", Info);
    e.dataTransfer.effectAllowed = "move";
  }

  function onDragEndFunc(e, type, id) {
    del(id, type);
    e.target.classList.remove("dragging");
  }

  //
  function onDropFunc(e, type) {
    const newData = JSON.parse(e.dataTransfer.getData("info"));
    const thing = newData.thing;

    const lastOne = type.find((v, i) => type.length === i + 1) || { id: 0 };
    const wrapData = [...type, { id: lastOne.id + 1, thing: thing }];
    let answer;
    switch (type) {
      case pendingList:
        setPendingList(wrapData);
        answer = { pendingList: false };
        break;
      case progressList:
        setProgressList(wrapData);
        answer = { progressList: false };
        break;
      case doneList:
        answer = { doneList: false };
        setDoneList(wrapData);
        break;
      default:
        break;
    }
    const newArr = { ...dragOver, ...answer };
    setDragOver(newArr);
  }
  const rowsTemplate = (
    <div className="rows border-b-2 border-gray-400-400 py-1 flex items-center justify-center">
      <span
        className="ml-2 cursor-pointer"
        onClick={() => {
          insert();
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </span>
      <input
        type="text"
        className="border-0 mx-1"
        value={inputText}
        placeholder="新增事項"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        className="group rounded-xl h-8 w-16
     bg-red-300 font-bold text-lg text-white relative overflow-hidden"
        onClick={() => {
          insert();
        }}
      >
        新增
        <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
      </button>
    </div>
  );
  const pendingDisplay = pendingList.map((v, i) => {
    return (
      <div
        draggable
        onDragStart={(e) => {
          onDragStartFunc(e, i, pendingList);
        }}
        onDragEnd={(e) => {
          onDragEndFunc(e, pendingList, v.id);
        }}
        className="rows border-b-2 border-gray-400-400 py-1 px-3 flex items-center justify-between"
        key={"pending" + v.id}
      >
        <p className="ml-2">
          {i + 1}.<span className="ml-2">{v.thing}</span>
        </p>
        <span
          onClick={() => {
            del(v.id, pendingList);
          }}
          className="cursor-pointer"
        >
          <i className="fa-solid fa-x"></i>
        </span>
      </div>
    );
  });
  const progressDisplay = progressList.map((v, i) => {
    return (
      <div
        draggable
        onDragStart={(e) => {
          onDragStartFunc(e, i, progressList);
        }}
        onDragEnd={(e) => {
          onDragEndFunc(e, progressList, v.id);
        }}
        className="rows border-b-2 border-gray-400-400 py-1 px-3 flex items-center justify-between"
        key={"progress" + v.id}
      >
        <p className="ml-2">
          {i + 1}.<span className="ml-2">{v.thing}</span>
        </p>
        <span
          onClick={() => {
            del(v.id, progressList);
          }}
          className="cursor-pointer"
        >
          <i className="fa-solid fa-x"></i>
        </span>
      </div>
    );
  });
  const doneDisplay = doneList.map((v, i) => {
    return (
      <div
        draggable
        onDragStart={(e) => {
          onDragStartFunc(e, i, doneList);
        }}
        onDragEnd={(e) => {
          onDragEndFunc(e, doneList, v.id);
        }}
        className="rows border-b-2 border-gray-400-400 py-1 px-3 flex items-center justify-between"
        key={"done" + v.id}
      >
        <p className="ml-2">
          {i + 1}.<span className="ml-2">{v.thing}</span>
        </p>
        <span
          onClick={() => {
            del(v.id, doneList);
          }}
          className="cursor-pointer"
        >
          <i className="fa-solid fa-x"></i>
        </span>
      </div>
    );
  });
  return (
    <div className="w-4/6 h-64 flex gap-5">
      <div
        className="pending w-1/3  border-2  shadow-lg rounded-lg overflow-hidden"
        style={
          dragOver.pendingList
            ? { border: "2px solid red" }
            : { border: "1px solid #ccc" }
        }
      >
        <div className="h-1/6 pending-title   bg-emerald-200 flex justify-center items-center">
          <p className="text-lg font-bold">待處理</p>
        </div>
        <div
          className="h-5/6 pending-drag"
          onDragOver={(e) => {
            onDragOverfunc(e, "pendingList");
          }}
          onDragLeave={(e) => {
            onDragLeavefunc(e, "pendingList");
          }}
          onDrop={(e) => {
            onDropFunc(e, pendingList);
          }}
        >
          {rowsTemplate}
          {pendingDisplay}
        </div>
      </div>
      <div
        className="in-progress w-1/3  border-2 shadow-lg rounded-lg overflow-hidden"
        style={
          dragOver.progressList
            ? { border: "2px solid red" }
            : { border: "1px solid #ccc" }
        }
      >
        <div className="h-1/6 progress-title  bg-sky-200  flex justify-center items-center">
          <p className="text-lg font-bold">進行中</p>
        </div>
        <div
          className="h-5/6 progress-drag"
          onDragOver={(e) => {
            onDragOverfunc(e, "progressList");
          }}
          onDragLeave={(e) => {
            onDragLeavefunc(e, "progressList");
          }}
          onDrop={(e) => {
            onDropFunc(e, progressList);
          }}
        >
          {progressDisplay}
        </div>
      </div>
      <div
        className="done w-1/3  border-2 shadow-lg rounded-lg  overflow-hidden"
        style={
          dragOver.doneList
            ? { border: "2px solid red" }
            : { border: "1px solid #ccc" }
        }
      >
        <div className="h-1/6 done-title    bg-yellow-200  flex justify-center items-center">
          <p className="text-lg font-bold">已完成</p>
        </div>
        <div
          className="w-full h-5/6 done-drag "
          onDragOver={(e) => {
            onDragOverfunc(e, "doneList");
          }}
          onDragLeave={(e) => {
            onDragLeavefunc(e, "doneList");
          }}
          onDrop={(e) => {
            onDropFunc(e, doneList);
          }}
        >
          {doneDisplay}
        </div>
      </div>
    </div>
  );
}
