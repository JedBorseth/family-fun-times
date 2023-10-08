import { useRouter } from "next/router";
import { PlayerCard } from "../components/PlayerCard";
import { Button } from "@/components/ui/button";

const Play = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen w-screen justify-center items-center text-4xl font-bold flex flex-col gap-10">
      <div className="text-center flex flex-col gap-2">
        <h1>Everyone Join!</h1>
        <h2 className="text-2xl font-normal">Room Code is {router.query.code as string}</h2>
      </div>
      <div className="flex flex-wrap gap-4 py-4">
        <PlayerCard name="Joshua" />
        <PlayerCard name="Jedeer" />
        <PlayerCard name="Hanging Out" />
        <PlayerCard name="Miah" />
        <PlayerCard name="Mike" />
        <PlayerCard name="Dearest" />
        <PlayerCard name="Speerings" />
      </div>
      {/* TODO make this redirect us over to the play page */}
      <Button>Everyone In?</Button>
    </div>
  );
};

export default Play;
