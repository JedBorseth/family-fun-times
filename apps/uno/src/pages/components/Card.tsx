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

type CardProps = {
  color: (typeof COLORS)[number];
  num: (typeof NUMBERS)[number];
  type: (typeof CARD_TYPES)[number];
};

export const Card = ({ num, color, type }: CardProps) => {
  const bgTwColor = bgColorMap[color];
  const textTwColor = textColorMap[color];
  return (
    <div className={`rounded-md relative w-56 ${bgTwColor} flex flex-col justify-center px-4 items-center h-80 border-2 border-black`}>
      <p
        className="text-white absolute text-4xl top-2 left-2 font-black"
        style={{
          textShadow: "#000 0px 3px 0px",
        }}
      >
        {num}
      </p>
      <p
        className="text-white absolute text-4xl bottom-2 right-2 font-black"
        style={{
          textShadow: "#000 0px 3px 0px",
        }}
      >
        {num}
      </p>
      <div className="bg-white rounded-tl-[75px] w-full h-5/6 flex justify-center items-center rounded-br-[75px]">
        <p
          className={`${textTwColor} text-7xl font-black`}
          style={{
            textShadow: "#000 0px 4px 0px",
          }}
        >
          {num}
        </p>
      </div>
    </div>
  );
};
