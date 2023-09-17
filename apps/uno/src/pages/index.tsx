import { ModeToggle } from "@/components/ui/modeToggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Loader } from "lucide-react";
import { LETTERS } from "@/lib/constants/letters";

const Home = () => {
  const { toast } = useToast();

  const [inputState, setInputState] = useState({
    name: "",
    code: "",
  });

  const createRoom = trpc.room.create.useMutation();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-10">
      <div className="flex-col gap-10 hidden lg:flex justify-center items-center">
        <h1 className="text-2xl font-bold">UNO</h1>
        <h2 className="text-xl">Let&apos;s get ready to rumble!</h2>
        <ModeToggle />
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Host</CardTitle>
            <CardDescription>Host a game to play with others!</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="flex gap-2"
              disabled={createRoom.isLoading}
              onClick={() => {
                createRoom.mutate();
              }}
            >
              {createRoom.isLoading && <Loader className="animate-spin h-4 w-4" />}
              Select
            </Button>
          </CardContent>
        </Card>
        <div className="w-full h-full flex justify-center items-center text-xl font-bold py-4">
          <p>Or</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Player</CardTitle>
            <CardDescription>Play a game with others!</CardDescription>
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
                if (e.target.value.split("").every((v) => LETTERS.includes(v.toUpperCase()))) {
                  setInputState({ ...inputState, code: e.target.value.toUpperCase() });
                }
              }}
              value={inputState.code}
              id="code"
            />
            <Button
              onClick={() => {
                if (!inputState.name || !inputState.code)
                  toast({
                    title: "You are a Moron!",
                    description: "Hey Moron! You have to fill out a name and a code to play 🤦‍♂️",
                  });
              }}
            >
              Select
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Home;
