import Image from "next/image";

export const PlayerCard = ({ name }: { name: string }) => {
  return (
    <div className="text-lg flex flex-col items-center">
      {name === "Benny" ? (
        <Image src="/benny.jpeg" width={100} height={100} className="object-cover w-[100px] h-[100px] rounded-full shadow-lg border-2 border-gray-300" alt="Player Avatar" />
      ) : (
        <div className="w-[100px] h-[100px] rounded-full shadow-lg border-2 border-gray-300 flex justify-center items-center">
          <p className="uppercase">{name[0]}</p>
        </div>
      )}

      <p className="font-normal">{name}</p>
    </div>
  );
};
