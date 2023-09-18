import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Loader } from "lucide-react";
import { LETTERS } from "@/lib/constants/letters";
import { CustomButton } from "./components/CustomButton";

const Home = () => {
  const { toast } = useToast();

  const [inputState, setInputState] = useState({
    name: "",
    code: "",
  });

  const createRoom = trpc.room.create.useMutation();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-10">
      <div className="rounded-2xl bg-black p-4 flex justify-center items-center">
        <div className="border-2 border-white p-10">
          <div className="text-white rounded-full w-56 font-bold text-7xl -rotate-12 -ml-2 -mt-6 uppercase flex flex-col h-full justify-center items-center">
            <p className="ml-4 -mb-1">Uno</p>
            <div className="w-full h-1 bg-red-500" />
            <div className="w-full h-1 bg-yellow-500" />
            <div className="w-full h-1 bg-blue-500" />
            <div className="w-full h-1 bg-green-500" />
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3">
        <Card className="bg-black text-white p-4">
          <div className="border-2 border-white h-full">
            <CardHeader>
              <CardTitle className="uppercase font-bold">Host</CardTitle>
              <CardDescription className="text-white">Host a game to play with others!</CardDescription>
            </CardHeader>
            <CardContent>
              <CustomButton
                className="flex gap-2"
                disabled={createRoom.isLoading}
                onClick={() => {
                  createRoom.mutate();
                }}
              >
                {createRoom.isLoading && <Loader className="animate-spin h-4 w-4" />}
                Select
              </CustomButton>
            </CardContent>
          </div>
        </Card>
        <div className="w-full h-full flex justify-center items-center text-xl font-bold py-4">
          <p className="uppercase">Or</p>
        </div>
        <Card className="bg-black text-white p-4">
          <div className="border-2 border-white h-full">
            <CardHeader>
              <CardTitle className="uppercase font-bold">Player</CardTitle>
              <CardDescription className="text-white">Play a game with others!</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 items-start">
              <Label htmlFor="name">Player Name:</Label>
              <Input
                onChange={(e) => {
                  setInputState({ ...inputState, name: e.target.value });
                }}
                id="name"
                value={inputState.name}
              />
              <Label htmlFor="code">Game Code:</Label>
              <Input
                maxLength={4}
                onChange={(e) => {
                  if (
                    e.target.value.split("").every((v) => {
                      const typedVal = v.toUpperCase() as (typeof LETTERS)[number];
                      return LETTERS.includes(typedVal);
                    })
                  ) {
                    setInputState({ ...inputState, code: e.target.value.toUpperCase() });
                  }
                }}
                value={inputState.code}
                id="room-code"
              />
              <CustomButton
                onClick={() => {
                  if (!inputState.name || !inputState.code)
                    toast({
                      title: "You are a Moron!",
                      description: "Hey Moron! You have to fill out a name and a code to play 🤦‍♂️",
                    });
                }}
              >
                Select
              </CustomButton>
            </CardContent>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default Home;
