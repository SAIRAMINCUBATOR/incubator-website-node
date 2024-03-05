"use client";

import { cn } from "@/lib/utils";

interface Props {
  total: Number;
  current: Number;
}

export const Pagination = ({ total, current }: Props) => {
  return (
    <div className="w-full flex justify-center gap-3 p-2 bg-inherit">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300 ease-in",
            {
              "bg-gray-500": index === current,
              "bg-gray-300": index !== current,
              "transform scale-120": index === current,
              "opacity-50": index !== current,
            }
          )}
        ></div>
      ))}
    </div>
  );
};
