import Image from "next/image";

export const PlayerCard = ({ name, imageUrl }: { name: string; imageUrl?: string }) => {
  return (
    <div className="text-lg flex flex-col items-center">
      <Image src={imageUrl ?? "https://github.com/joshborseth.png"} width={100} height={100} className="rounded-full shadow-lg" alt="Player Avatar" />
      <p className="font-normal">{name}</p>
    </div>
  );
};
