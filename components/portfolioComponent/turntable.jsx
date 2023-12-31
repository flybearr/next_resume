"use client";
import React, { useRef, useState, useEffect } from "react";
import "../../styles/turntable.scss";
import EditLightBox from "../child-component/editLightBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Turntable() {
  const id = useRef("");
  const canvasRef = useRef(null);
  //預設獎品
  const prizeList = ["獎品1", "獎品2"];
  const [prize, setPrize] = useState(prizeList);
  const [prizeInput, setPrizeInput] = useState("");
  const [tempKey, setTempKey] = useState([...prize]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [finalRotation, setFinalRotation] = useState(0);
  const [editLightBox, setEditLightBox] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let rotation = 0;
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radius = 200;
    const slices = prize.length;

    for (let i = 0; i < slices; i++) {
      const startAngle = ((i + finalRotation) * Math.PI * 2) / slices;
      const endAngle = ((i + 1 + finalRotation) * Math.PI * 2) / slices;
      const angle = (startAngle + endAngle) / 2; // 计算扇形的中心角度
      context.beginPath();
      context.moveTo(x, y);
      context.arc(x, y, radius, startAngle, endAngle);
      context.closePath();
      context.fillStyle = `hsl(${(i * 360) / slices}, 50%, 50%)`;
      const centerPointX = Math.cos(0) * radius;
      const centerPointY = Math.sin(0) * radius;
      context.fill();

      const text = prize[i];
      context.fillStyle = "#fff";
      context.font = "bold 20px Arial";
      const textWidth = context.measureText(text).width;
      const textHeight = 20;
      const textX = x + Math.cos(angle) * radius * 0.6 - textWidth / 2;
      const textY = y + Math.sin(angle) * radius * 0.6 + textHeight / 2;
      if (prize.length === 1) {
        console.log(textX + "," + textY);
        context.fillText(text, centerPointX + textWidth / 2, 260);
      } else if (prize.length === 0) {
        context.fillText("無獎項", centerPointX + textWidth / 2, 260);
      } else {
        context.fillText(text, textX, textY);
      }
    }

    const animate = () => {
      // 清除畫布
      context.clearRect(0, 0, canvas.width, canvas.height);

      // 畫圓形
      for (let i = 0; i < slices; i++) {
        const startAngle = ((i + rotation) * Math.PI * 2) / slices;
        const endAngle = ((i + 1 + rotation) * Math.PI * 2) / slices;
        context.beginPath();
        context.moveTo(x, y);
        context.arc(x, y, radius, startAngle, endAngle);
        context.closePath();
        context.fillStyle = `hsl(${(i * 360) / slices}, 50%, 50%)`;
        context.fill();
      }
      // 更新旋轉角度
      rotation += 0.4;
      setFinalRotation(rotation);
      // 循環動畫
      if (isAnimating) {
        id.current = requestAnimationFrame(animate);
      }
    };

    if (isAnimating) {
      animate();
    }
    return () => {
      cancelAnimationFrame(id.current);
    };
  }, [isAnimating, prize]);

  const handleClickToggle = () => {
    setIsAnimating(!isAnimating);
  };
  const delPrize = (i) => {
    const copyPrize = [...prize];
    copyPrize.splice(i, 1);
    setPrize(copyPrize);
  };

  useEffect(() => {
    setTempKey([...prize]);
  }, [prize]);
  return (
    <div className="turning_wrap">
      {editLightBox && (
        <EditLightBox
          setPrize={setPrize}
          tempKey={tempKey}
          setTempKey={setTempKey}
          setEditLightBox={setEditLightBox}
        />
      )}
      <p className="title">目前獎品</p>
      <div className="prize">
        <br />
        {prize.map((v, i) => {
          return (
            <div key={`${v + i}`} className="prize_wrap">
              <span>
                {v}
                <div className="pr-2">
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    onClick={() => {
                      delPrize(i);
                    }}
                    className="ml-3 hover:text-red-500 cursor-pointer"
                  />
                </div>
              </span>
            </div>
          );
        })}
      </div>
      <div className="canvasWrap">
        <div className="triangle"></div>
        <canvas ref={canvasRef} width={500} height={500} />
      </div>
      <div>
        <button
          onClick={handleClickToggle}
          className={isAnimating ? "stop_turn" : "start_turn"}
        >
          {isAnimating ? "停止" : "開始"}
        </button>
      </div>
      <br />
      <label htmlFor="">
        獎項：
        <input
          type="text"
          value={prizeInput}
          onChange={(e) => {
            setPrizeInput(e.target.value);
          }}
          className="border border-black"
        />
        <button
          onClick={() => {
            setPrize([...prize, prizeInput]);
            setPrizeInput("");
          }}
          className="addPrize"
        >
          新增
        </button>
        <button
          onClick={() => {
            setEditLightBox(true);
          }}
          className="editPrize"
        >
          編輯
        </button>
      </label>
    </div>
  );
}
