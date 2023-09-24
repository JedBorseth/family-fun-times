import { useEffect, useState } from "react";
import Background from "./components/Background";
import { Card } from "./components/Card";

const Play = () => {
  const COLORS = ["green", "red", "blue", "yellow"] as const;
  const [currentTurn, setCurrentTurn] = useState<(typeof COLORS)[number]>(
    COLORS[0]
  );
  useEffect(() => {
    setInterval(() => {
      if (currentTurn === COLORS[COLORS.length - 1]) setCurrentTurn(COLORS[0]);
      else setCurrentTurn(COLORS[COLORS.indexOf(currentTurn) + 1]);
    }, 2000);
  }, [COLORS]);

  return (
    <div className="bg-transparent">
      <Background currentTurn={currentTurn}>
        <Card color="red" num="1" type="number" />
        <Card color="blue" num="2" type="number" />
        <Card color="yellow" num="3" type="number" />
        <Card color="green" num="4" type="number" />
        <Card color="green" type="reverse" />
        <Card type="wild" />
        <Card color="blue" type="skip" />
        <Card color="red" type="draw2" />
        <Card type="draw4" />
      </Background>
    </div>
  );
};

export default Play;
