import * as React from "react";
import { ChevronRight, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnimeSpecificCardProps {
  title: string;
  description: string;
  genre: string;
  voteCount: string;
  imageUrl?: string;
  imageAlt?: string;
  onGenreClick?: () => void;
  className?: string;
}

const AnimeSpecificCard = React.forwardRef<
  HTMLDivElement,
  AnimeSpecificCardProps
>(
  (
    {
      title,
      description,
      genre,
      voteCount,
      imageUrl,
      imageAlt,
      onGenreClick,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-sm bg-zinc-900 rounded-3xl overflow-hidden",
          "flex flex-col",
          "shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Image Section */}
        <div className="relative w-full aspect-[16/9] bg-zinc-800 overflow-visible">
          <img
            src={
              imageUrl ||
              "https://cdn.builder.io/api/v1/image/assets%2F0b991d2b44e54dd8b9b06304908d1fe2%2F2613360569db4ddf8e5e7b735f2a2313?format=webp&width=800"
            }
            alt={imageAlt || title}
            className="w-full h-full object-cover"
          />

          {/* Naruto Character Overlay */}
          <div className="absolute -top-4 -left-4 z-10 w-32 h-32 sm:w-40 sm:h-40">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0b991d2b44e54dd8b9b06304908d1fe2%2Fed04e3fc01b6414986348004cc292e65?format=webp&width=800"
              alt="Naruto character"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="px-6 py-5 sm:px-7 sm:py-6 flex-1">
          {/* Title */}
          <h2 className="text-white text-2xl sm:text-3xl font-bold font-['Montserrat'] leading-tight mb-4">
            {title}
          </h2>

          {/* Description */}
          <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-['DM_Sans']">
            {description}
          </p>

          {/* Genre and Vote Stats Row */}
          <div className="flex items-center justify-between">
            {/* Genre Button */}
            <button
              onClick={onGenreClick}
              className={cn(
                "inline-flex items-center gap-2 px-5 py-3 rounded-full",
                "bg-white/10 hover:bg-white/15 transition-colors",
                "text-white text-xs font-semibold",
                "focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-900",
              )}
            >
              <span>{genre}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Vote Stats */}
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-zinc-300" />
              <span className="text-white text-xs font-semibold">
                {voteCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

AnimeSpecificCard.displayName = "AnimeSpecificCard";

export { AnimeSpecificCard };
