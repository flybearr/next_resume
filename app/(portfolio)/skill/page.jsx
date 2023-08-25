"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { useScroll, animated, useSpring } from "@react-spring/web";
import Typed_animation from "../../../components/typed_animation";
import Card from "@/components/card.jsx";
import Trail from "@/components/useSpring/useTrail";
import "../../../styles/scroll.scss";
export default function Page() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [animate, api] = useSpring(
    () => ({
      x: "100%",
      y: "100%",
      rotate: 0,
      opacity: 0,
    }),
    []
  );

  const { scrollYProgress, scrollY } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      setScroll(scrollYProgress);
      if (scrollYProgress > 0.4) {
        api.start({
          x: "0",
          y: "0",
          rotate: 360,
          opacity: 1,
        });
      } else {
        api.start({
          x: "100%",
          y: "100%",
          rotate: 0,
          opacity: 0,
        });
      }
    },
    default: {
      immediate: true,
    },
  });
  useEffect(() => {
    let percent = (scroll * 100).toFixed(0);
    console.log(percent);
    let canvas = canvasRef;
    function circle() {
      var ctx = canvas.current.getContext("2d");

      /*填充文字*/

      ctx.font = "12px Microsoft YaHei";
      /*文字颜色*/
      ctx.fillStyle = "#FF4437";
      /*文字内容*/
      var insertContent = "";
      var text = ctx.measureText(insertContent);
      /*插入文字，后面两个参数为文字的位置*/
      /*此处注意：text.width获得文字的宽度，然后就能计算出文字居中需要的x值*/
      ctx.fillText(insertContent, (132 - text.width) / 2, 68);

      /*填充百分比*/
      var ratioStr = percent + "%";
      var text = ctx.measureText(ratioStr);
      ctx.fillText(ratioStr, (132 - text.width) / 2, 85);

      /*开始圆环*/
      var circleObj = {
        ctx: ctx,
        /*圆心*/
        x: 66,
        y: 66,
        /*半径*/
        radius: 55,
        /*环的宽度*/
        lineWidth: 10,
      };
      /*有色的圆环*/
      /*从-90度的地方开始画*/
      circleObj.startAngle = (-Math.PI * 2 * 90) / 360;
      /*从当前度数减去-90度*/
      circleObj.endAngle = Math.PI * 2 * (percent / 100 - 0.25);
      circleObj.color = "#FF4437";
      drawCircle(circleObj);
      /*灰色的圆环*/
      /*开始的度数-从上一个结束的位置开始*/
      circleObj.startAngle = circleObj.endAngle;
      /*结束的度数*/
      circleObj.endAngle = Math.PI * 2;
      circleObj.color = "#ff453833";
      drawCircle(circleObj);
    }
    /*画曲线*/
    function drawCircle(circleObj) {
      var ctx = circleObj.ctx;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(
        circleObj.x,
        circleObj.y,
        circleObj.radius,
        circleObj.startAngle,
        circleObj.endAngle,
        false
      );
      //设定曲线粗细度
      ctx.lineWidth = circleObj.lineWidth;
      //给曲线着色
      ctx.strokeStyle = circleObj.color;
      //连接处样式
      ctx.lineCap = "round";
      //给环着色
      ctx.stroke();
      ctx.closePath();
    }
    requestAnimationFrame(circle);
  }, [scroll]);
  return (
    <div className="body overflow-hidden" ref={containerRef}>
      <div className="w-[30%] h-[30%] fixed bottom-0 right-0 z-50">
        <canvas
          id="circle"
          height="132px"
          width="132px"
          ref={canvasRef}
        ></canvas>
      </div>
      <animated.div>
        <div className="flex flex-col justify-center items-center gap-1">
          <Typed_animation />
          <FontAwesomeIcon
            icon={faDownLong}
            size="4x"
            className="text-red-600 arrow_animate"
          />
        </div>
        <div
          className="w-full h-[80vh] "
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Card>
            <Trail open={open}>
              <span className="w-36 h-full text-left">just</span>
              <span className="w-36 h-full text-left">do</span>
              <span className="w-36 h-full text-left">it</span>
            </Trail>
          </Card>
        </div>
      </animated.div>

      <div className="animated__layers">
        <animated.div
          className="bg-teal-300 w-full h-[50%]"
          style={{
            transform: scrollYProgress.to((val) => {
              if (val < 0.5) {
                return `translateX(${(1 - val * 2) * 100}%)`;
              } else {
                return `translateX(0%)`;
              }
            }),
          }}
        >
          <h1 className="title">
            <span>
              <animated.span style={animate}>Aha!</animated.span>
            </span>
            <span>
              <animated.span style={animate}>CSS</animated.span>
            </span>
          </h1>
        </animated.div>
        <animated.div
          className="bg-red-300 w-full h-[50%] translate-x-[0%]"
          style={{
            transform: scrollYProgress.to((val) => {
              if (val < 0.5) {
                return `translateX(${(val * 2 - 1) * 100}%)`;
              } else {
                return `translateX(0%)`;
              }
            }),
          }}
        >
          <h1 className="title flex justify-center items-center">
            <span>
              <animated.span style={animate}>program</animated.span>
            </span>
          </h1>
          <div className="mx-auto flex justify-center items-center gap-5">
            <animated.img src="/img/js.png" style={animate}></animated.img>
            <animated.img src="/img/java.png" style={animate}></animated.img>
            <animated.img src="/img/python.png" style={animate}></animated.img>
            <animated.img src="/img/c-sharp.png" style={animate}></animated.img>
          </div>
        </animated.div>
      </div>
      <div className="animated__layers z-10">
        <animated.div
          className="dot"
          style={{
            clipPath: scrollYProgress.to((val) => {
              if (val > 0.65) {
                return `circle(${(val - 0.65) * 2 * 100}%)`;
              } else {
                return `circle(0%)`;
              }
            }),
          }}
        ></animated.div>
      </div>
      <div className="animated__layers z-20">
        <animated.div
          className="dot2"
          style={{
            clipPath: scrollYProgress.to((val) => {
              if (val > 0.75) {
                return `circle(${(val - 0.75) * 2.9 * 100}%)`;
              } else {
                return `circle(0%)`;
              }
            }),
          }}
        ></animated.div>
      </div>
      <div className="animated__layers z-30">
        <animated.div
          className="dot3"
          style={{
            clipPath: scrollYProgress.to((val) => {
              if (val > 0.85) {
                return `circle(${(val - 0.85) * 4.8 * 100}%)`;
              } else {
                return `circle(0%)`;
              }
            }),
          }}
        ></animated.div>
      </div>
      {Array(5)
        .fill(1)
        .map((_, i) => {
          return (
            <div className="w-full h-[100vh]" key={"empty_page" + i}></div>
          );
        })}
    </div>
  );
}
