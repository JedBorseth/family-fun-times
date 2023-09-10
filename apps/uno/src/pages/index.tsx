import { ModeToggle } from "@/components/ui/modeToggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Home = () => {
  const { toast } = useToast();

  const [inputState, setInputState] = useState({
    name: "",
    code: "",
  });
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-10">
      <div className="flex-col gap-10 hidden lg:flex justify-center items-center">
        <h1 className="text-2xl font-bold">Lets get ready to rumble!</h1>
        <ModeToggle />
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Host</CardTitle>
            <CardDescription>Host a game to play with others!</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Select</Button>
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
            <Input onChange={(e) => setInputState({ ...inputState, name: e.target.value })} id="name" />
            <Label htmlFor="code">Game Code:</Label>
            <Input onChange={(e) => setInputState({ ...inputState, code: e.target.value })} id="code" />
            <Button
              onClick={() => {
                if (!inputState.name || !inputState.code)
                  toast({
                    variant: "destructive",
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
