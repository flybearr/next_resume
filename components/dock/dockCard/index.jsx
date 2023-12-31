"use clinet";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useMousePosition } from "../hooks/useMousePosition";
import { useWindowResize } from "../hooks/useResize";

import {
  animated,
  useIsomorphicLayoutEffect,
  useSpringValue,
} from "react-spring";
import { useDock } from "../dockContext";
import "./dockCard.scss";
const INITIAL_WIDTH = 36;

export default function DockCard({ children, link }) {
  const cardRef = useRef(null);
  const [elCenterX, setElCenterX] = useState(0);
  const size = useSpringValue(INITIAL_WIDTH, {
    config: {
      mass: 0.1,
      tension: 320,
    },
  });
  const opacity = useSpringValue(0);
  const y = useSpringValue(0, {
    config: {
      friction: 29,
      tension: 238,
    },
  });
  const dock = useDock();

  useMousePosition(
    {
      onChange: ({ value }) => {
        const mouseX = value.x;
        if (dock.width > 0) {
          const transformedValue =
            INITIAL_WIDTH +
            36 *
              Math.cos((((mouseX - elCenterX) / dock.width) * Math.PI) / 2) **
                36;

          if (dock.hovered) {
            size.start(transformedValue);
          }
        }
      },
    },
    [elCenterX, dock]
  );

  useWindowResize(() => {
    const { x } = cardRef.current.getBoundingClientRect();

    setElCenterX(x + INITIAL_WIDTH / 2);
  });
  useIsomorphicLayoutEffect(() => {
    if (!dock.hovered) {
      size.start(INITIAL_WIDTH);
    }
  }, [dock.hovered]);
  const timesLooped = useRef(0);
  const timeoutRef = useRef();
  const isAnimating = useRef(false);

  const handleClick = () => {
    if (!isAnimating.current) {
      isAnimating.current = true;
      opacity.start(0.5);

      timesLooped.current = 0;

      y.start(-INITIAL_WIDTH / 2, {
        loop: () => {
          if (3 === timesLooped.current++) {
            timeoutRef.current = setTimeout(() => {
              opacity.start(0);
              y.set(0);
              isAnimating.current = false;
              timeoutRef.current = undefined;
            }, 2000);
            y.stop();
          }
          return { reverse: true };
        },
      });
    } else {
      clearTimeout(timeoutRef.current);
      opacity.start(0);
      y.start(0);
      isAnimating.current = false;
    }
  };
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <Link href={link} target="_blank">
      <div className="dock-card-container">
        <animated.button
          ref={cardRef}
          className="dock-card"
          onClick={handleClick}
          style={{
            width: size,
            height: size,
            y,
          }}
        >
          {children}
        </animated.button>
        <animated.div className="dock-dot" style={{ opacity }} />
      </div>
    </Link>
  );
}
