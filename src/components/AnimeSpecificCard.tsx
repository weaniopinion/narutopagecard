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
        className="relative w-full max-w-sm"
        data-component="AnimeCardContainer"
      >
        {/* Character Overlay Layer */}
        <div
          className="absolute -top-24 -left-20 z-20 w-80 h-80 sm:w-96 sm:h-96 md:w-[26rem] md:h-[26rem] pointer-events-none"
          data-layer="CharacterOverlay"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F0b991d2b44e54dd8b9b06304908d1fe2%2Fed04e3fc01b6414986348004cc292e65?format=webp&width=800"
            alt="Naruto character"
            className="w-full h-full object-contain drop-shadow-2xl pr-[138px] pb-[104px]"
            data-element="CharacterImage"
          />
        </div>

        {/* Main Card Container */}
        <div
          ref={ref}
          className={cn(
            "relative w-full bg-zinc-900 rounded-3xl overflow-hidden",
            "flex flex-col",
            "shadow-lg",
            className,
          )}
          data-component="AnimeCard"
          {...props}
        >
          {/* Background Image Section */}
          <div
            className="relative w-full aspect-[16/9] bg-zinc-800"
            data-layer="BackgroundImageContainer"
          >
            <img
              src={
                imageUrl ||
                "https://cdn.builder.io/api/v1/image/assets%2F0b991d2b44e54dd8b9b06304908d1fe2%2F2613360569db4ddf8e5e7b735f2a2313?format=webp&width=800"
              }
              alt={imageAlt || title}
              className="w-full h-full object-cover"
              data-element="BackgroundImage"
            />
          </div>

          {/* Content Section */}
          <div
            className="px-6 py-5 sm:px-7 sm:py-6 flex-1"
            data-layer="ContentSection"
          >
            {/* Title Header */}
            <h2
              className="text-white text-2xl sm:text-3xl font-bold font-['Montserrat'] leading-tight mb-4"
              data-element="AnimeTitle"
            >
              {title}
            </h2>

            {/* Description Text */}
            <p
              className="text-zinc-300 text-sm leading-relaxed mb-6 font-['DM_Sans']"
              data-element="AnimeDescription"
            >
              {description}
            </p>

            {/* Action Bar */}
            <div
              className="flex items-center justify-between"
              data-layer="ActionBar"
            >
              {/* Genre Button */}
              <button
                onClick={onGenreClick}
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-3 rounded-full",
                  "bg-white/10 hover:bg-white/15 transition-colors",
                  "text-white text-xs font-semibold",
                  "focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-900",
                )}
                data-element="GenreButton"
              >
                <span data-element="GenreText">{genre}</span>
                <ChevronRight className="w-4 h-4" data-element="GenreIcon" />
              </button>

              {/* Vote Statistics */}
              <div className="flex items-center gap-2" data-element="VoteStats">
                <BarChart3
                  className="w-6 h-6 text-zinc-300"
                  data-element="VoteIcon"
                />
                <span
                  className="text-white text-xs font-semibold"
                  data-element="VoteText"
                >
                  {voteCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

AnimeSpecificCard.displayName = "AnimeSpecificCard";

export { AnimeSpecificCard };
