import { BackOfCard } from "./components/BackOfCard";
import { Card } from "./components/Card";

const Play = () => {
  return (
    <div className="min-h-screen w-screen flex-wrap gap-2 flex justify-center items-center">
      <Card color="red" num="1" type="number" />
      <Card color="blue" num="2" type="number" />
      <Card color="yellow" num="3" type="number" />
      <Card color="green" num="4" type="number" />
      <Card color="green" type="reverse" />

      <Card type="wild" />
      <Card color="blue" type="skip" />
      <Card color="red" type="draw2" />
      <Card type="draw4" />

      <BackOfCard />
    </div>
  );
};

export default Play;
