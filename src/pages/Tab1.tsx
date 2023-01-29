import {
  IonPage,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { App } from "../three";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [number, setNumber] = useState<number>(0);
  useEffect(() => {
    setNumber(1);
  }, []);

  useEffect(() => {
    if (number > 0) {
      const app = new App(canvas.current);
      console.log(app);
      
    }
  }, [number]);

  return <IonPage ref={canvas}></IonPage>;
};

export default Tab1;
