import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

const FeedbackButtons = () => {
  return (
    <div>
      {/* Thumbs Up */}
      <div className="flex gap-1 items-center ">
        <button className="h-8 w-8 flex items-center justify-center text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 cursor-pointer">
          <ThumbsUpIcon size={20} strokeWidth={1.5} />
        </button>
        <p className="text-xs">126</p>
      </div>

      {/* Thumbs Down */}
      <div className="flex gap-1 items-center ">
        <button className="h-8 w-8 flex items-center justify-center text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 cursor-pointer">
          <ThumbsDownIcon size={20} strokeWidth={1.5} />
        </button>
        <p className="text-xs">126</p>
      </div>
    </div>
  );
};

export default FeedbackButtons;
