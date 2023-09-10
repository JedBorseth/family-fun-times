import { ModeToggle } from "@/components/ui/modeToggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-2xl font-bold">Lets get ready to rumble!</h1>
      <ModeToggle />

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
            <Input id="name" />
            <Label htmlFor="code">Game Code:</Label>
            <Input id="code" />
            <Button>Select</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Home;
