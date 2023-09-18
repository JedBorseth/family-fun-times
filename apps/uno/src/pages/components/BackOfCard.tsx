export const BackOfCard = () => {
  return (
    <div className="rounded-md bg-black border-2 border-black w-56 h-80 relative p-1">
      <div className="border-2 relative border-white h-full w-full p-1">
        <div className="text-white font-bold text-7xl -rotate-12 -ml-2 -mt-6 uppercase flex flex-col h-full justify-center items-center w-full">
          <p className="ml-4 -mb-1">Uno</p>
          <div className="w-full h-1 bg-red-500" />
          <div className="w-full h-1 bg-yellow-500" />
          <div className="w-full h-1 bg-blue-500" />
          <div className="w-full h-1 bg-green-500" />
        </div>
        <p className="absolute bottom-0 left-0 p-1 text-sm font-light text-white">&copy;JB</p>
      </div>
    </div>
  );
};