import React, { useEffect, useRef } from "react";
import { App } from "./three";

export const ThreeCanvas = () => {
  const canvas = useRef(null);
  const active = useRef(false)
  useEffect(() => {
    if(!active.current){
        const app = new App(canvas.current)
        console.log(app);
        active.current = true
    }
  }, []);

  return <div ref={canvas} style={{height: '500px', width: '500px'}}/>;
};
