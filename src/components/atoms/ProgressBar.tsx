export function ProgressBar({
  title,
  progress = 0,
}: {
  title?: string;
  progress: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden relative">
        <div
          className="h-full bg-primary "
          style={{ width: `${progress}%`, transition: "width 1s ease-in-out" }}
        ></div>
        <span className="absolute inset-y-0 left-0 pr-2 flex items-center mx-24 text-background">
          {title}
        </span>
      </div>
    </div>
  );
}
