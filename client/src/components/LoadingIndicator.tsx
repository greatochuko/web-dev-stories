export default function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center flex-1 w-full gap-2">
      <div className="w-3 h-5 bg-black animate-grow-shrink"></div>
      <div className="w-3 h-5 delay-300 bg-black animate-grow-shrink-2"></div>
      <div className="w-3 h-5 delay-500 bg-black animate-grow-shrink-3"></div>
    </div>
  );
}
