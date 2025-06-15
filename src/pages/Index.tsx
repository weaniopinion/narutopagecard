import { AnimeSpecificCard } from "@/components/AnimeSpecificCard";

const Index = () => {
  const handleGenreClick = () => {
    console.log("Genre button clicked!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-zinc-900 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-12">
          Anime Collection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
          <AnimeSpecificCard
            title="Naruto"
            description="From underdog to Hokage — did Naruto earn it all? Dive into the legacy of Naruto Uzumaki, the bonds that defined him, and the choices that split the fandom to this day"
            genre="Shonen"
            voteCount="100K Vote"
            onGenreClick={handleGenreClick}
          />

          <AnimeSpecificCard
            title="Attack on Titan"
            description="In a world where humanity lives behind walls to protect themselves from giant humanoid creatures, young Eren Yeager vows to reclaim the world for humanity."
            genre="Action"
            voteCount="250K Vote"
            onGenreClick={handleGenreClick}
          />

          <AnimeSpecificCard
            title="One Piece"
            description="Follow Monkey D. Luffy and his Straw Hat Pirates as they search for the ultimate treasure known as One Piece in order to become the next Pirate King."
            genre="Adventure"
            voteCount="300K Vote"
            onGenreClick={handleGenreClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
