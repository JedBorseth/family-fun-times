import { Button } from "@/components/ui/button";
import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const CustomButton = (props: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <Button className={twMerge(props.className, "text-white bg-black hover:bg-black rounded-none -ml-4")}>
      <div className="flex flex-col">
        <div className="uppercase">{props.children}</div>
        <div className="w-full h-[0.1rem] bg-red-500" />
        <div className="w-full h-[0.1rem] bg-yellow-500" />
        <div className="w-full h-[0.1rem] bg-blue-500" />
        <div className="w-full h-[0.1rem] bg-green-500" />
      </div>
    </Button>
  );
};
