import { CARD_TYPES } from "@/lib/constants/cardTypes";
import { COLORS } from "@/lib/constants/colors";
import { NUMBERS } from "@/lib/constants/nums";

const bgColorMap = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
};

const textColorMap = {
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
};

type CardProps =
  | {
      color: (typeof COLORS)[number];
      num: (typeof NUMBERS)[number];
      type: "number";
    }
  | {
      color: (typeof COLORS)[number];
      type: "reverse";
    }
  | {
      type: "wild";
    }
  | {
      color: (typeof COLORS)[number];
      type: "draw2";
    }
  | {
      type: "draw4";
    }
  | {
      color: (typeof COLORS)[number];
      type: "skip";
    };

export const Card = (props: CardProps) => {
  const noColorCondition = props.type === "wild" || props.type === "draw4";
  const bgTwColor = noColorCondition ? "bg-black" : bgColorMap[props.color];
  const textTwColor = noColorCondition ? "text-black" : textColorMap[props.color];

  const heightOfWhite = props.type === "number" ? "h-5/6" : "h-2/3";
  const getText = ({ type }: { type?: "shortened" }) => {
    if (props.type === "number") {
      return props.num;
    } else if (props.type === "reverse") {
      if (type === "shortened") return "R";
      return "Reverse";
    } else if (props.type === "skip") {
      if (type === "shortened") return "S";
      return "Skip";
    }
  };
  return (
    <div className={`rounded-md relative w-56 ${bgTwColor} flex flex-col justify-center px-4 items-center h-80 border-2 border-black`}>
      <p
        className="text-white absolute text-4xl top-2 left-2 font-black"
        style={{
          textShadow: "#000 0px 3px 0px",
        }}
      >
        {getText({})}
      </p>
      <p
        className="text-white absolute text-4xl bottom-2 right-2 font-black"
        style={{
          textShadow: "#000 0px 3px 0px",
        }}
      >
        {getText({})}
      </p>
      {props.type === "wild" || props.type === "draw4" ? (
        <div className={`w-full ${heightOfWhite} grid grid-cols-2`}>
          <div className="h-full w-full bg-red-500 rounded-tl-[75px]" />
          <div className="h-full w-full bg-blue-500" />
          <div className="h-full w-full bg-yellow-500" />
          <div className="h-full w-full bg-green-500 rounded-br-[75px]" />
        </div>
      ) : (
        <div className={`bg-white rounded-tl-[75px] w-full ${heightOfWhite} flex justify-center items-center rounded-br-[75px]`}>
          <p
            className={`${textTwColor} text-7xl font-black`}
            style={{
              textShadow: "#000 0px 4px 0px",
            }}
          >
            {getText({ type: "shortened" })}
          </p>
        </div>
      )}
    </div>
  );
};
