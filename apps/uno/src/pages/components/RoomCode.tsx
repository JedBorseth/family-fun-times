import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const RoomCode = ({ roomCode }: { roomCode: string }) => {
  return (
    <Alert className="shadow-xl">
      <AlertTitle className="text-2xl">Room Code:</AlertTitle>
      <AlertDescription className="text-xl">{roomCode} </AlertDescription>
    </Alert>
  );
};
