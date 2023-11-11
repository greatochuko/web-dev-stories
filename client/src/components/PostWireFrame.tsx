export default function PostWireFrame() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full aspect-[1.5] rounded-lg bg-zinc-400  animate-slowpulse"></div>
      <div className="flex flex-col gap-2 mt-1">
        <div className="flex items-center gap-2 text-base">
          <p className="bg-zinc-400 animate-slowpulse rounded-full w-10 py-3"></p>
          <p className="bg-zinc-400 animate-slowpulse rounded-full w-16 py-3"></p>
        </div>

        <p className="bg-zinc-400 animate-slowpulse rounded-full w-full py-3"></p>
        <p className="text-base">
          <div className="w-full p-3 rounded-full bg-zinc-400 animate-slowpulse"></div>
          <div className="flex gap-2 items-center">
            <div className="w-[60%] p-3 rounded-full mt-1 bg-zinc-400 animate-slowpulse"></div>
            <span className="text-sm w-10 bg-zinc-400 animate-slowpulse py-3 rounded-full"></span>
          </div>
        </p>
      </div>
    </div>
  );
}
