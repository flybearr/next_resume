"use client";
import React, {
  createContext,
  useState,
  useRef,
  useCallback,
  useContext,
} from "react";
import { animated, useSpringValue } from "react-spring";
import { clamp } from "@react-spring/shared";
import { useWindowResize } from "../hooks/useResize";
import "./dock.scss";

export const DockContext = createContext({});

const DOCK_ZOOM_LIMIT = ["-400", "50"];

export const Dock = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState(0);
  const isZooming = useRef(false);
  const dockRef = useRef(null);
  const setIsZooming = useCallback((value) => {
    isZooming.current = value;
    setHovered(!value);
  }, []);

  const zoomLevel = useSpringValue(1, {
    onChange: () => {
      setWidth(dockRef.current.clientWidth);
    },
  });
  useWindowResize(() => {
    setWidth(dockRef.current.clientWidth);
  });
  return (
    <DockContext.Provider value={{ width, hovered, setIsZooming, zoomLevel }}>
      <animated.div
        ref={dockRef}
        className="dock"
        onMouseOver={() => {
          if (!isZooming.current) {
            setHovered(true);
          }
        }}
        onMouseOut={() => {
          setHovered(false);
        }}
        style={{
          x: "-50%",
          scale: zoomLevel
            .to({
              range: [DOCK_ZOOM_LIMIT[0], 1, DOCK_ZOOM_LIMIT[1]],
              output: [2, 1, 0.5],
            })
            .to((value) => clamp(0.5, 2, value)),
        }}
      >
        {children}
      </animated.div>
    </DockContext.Provider>
  );
};

//輸出使用
export const useDock = () => {
  return useContext(DockContext);
};
