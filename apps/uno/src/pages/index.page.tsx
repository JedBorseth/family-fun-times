import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { LETTERS } from "@/lib/constants/letters";
import { useRouter } from "next/router";
import { LoadingButton } from "./components/LoadingButton";

const Home = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [inputState, setInputState] = useState({
    name: "",
    code: "",
  });

  const joinRoom = trpc.room.join.useMutation({
    onSuccess: (code) => {
      router.push(`/player/waiting-room/${code}`);
    },
    onError: (err) => {
      toast({
        title: "Error",
        variant: "destructive",
        description: err.message,
      });
    },
  });

  const createRoom = trpc.room.create.useMutation({
    onSuccess: (code) => {
      toast({
        title: "Room Created!",
        description: `Your room code is ${code}`,
      });
      router.push(`/host/waiting-room/${code}`);
    },
  });

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-10">
      <div className="flex-col gap-10 hidden lg:flex justify-center items-center">
        <h1 className="text-2xl font-bold">Uno</h1>
        <h2 className="text-xl">Let&apos;s get ready to rumble!</h2>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Host</CardTitle>
            <CardDescription>Host a game to play with others!</CardDescription>
          </CardHeader>
          <CardContent>
            <LoadingButton
              className="flex gap-2"
              isLoading={createRoom.isLoading}
              onClick={() => {
                createRoom.mutate();
              }}
            >
              Select
            </LoadingButton>
          </CardContent>
        </Card>
        <div className="w-full h-full flex justify-center items-center text-xl font-normal py-4">
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
            <LoadingButton
              isLoading={joinRoom.isLoading}
              onClick={() => {
                if (!inputState.name || !inputState.code)
                  return toast({
                    title: "You are a Moron!",
                    variant: "destructive",
                    description: "Hey Moron! You have to fill out a name and a code to play 🤦‍♂️",
                  });

                joinRoom.mutate({ name: inputState.name, code: inputState.code });
              }}
            >
              Select
            </LoadingButton>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Home;
