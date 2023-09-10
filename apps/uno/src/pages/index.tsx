import { ModeToggle } from "@/components/ui/modeToggle";
import { useEffect } from "react";
import Pusher from "pusher-js";

const Home = () => {
  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    });

    const channel = pusher.subscribe("test");

    channel.bind("test-event", (data: any) => {
      console.log(data);
    });

    return () => pusher.unsubscribe("test");
  }, []);

  return (
    <main className="min-h-screen">
      <div className="flex justify-center items-center gap-10">
        <ModeToggle />

        <button
          onClick={async () => {
            await fetch("/api/thing", {
              method: "POST",
            });
          }}
        >
          mutate
        </button>
      </div>
    </main>
  );
};

export default Home;
