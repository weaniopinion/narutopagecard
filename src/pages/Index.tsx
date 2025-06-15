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

        <div className="flex justify-center">
          <AnimeSpecificCard
            title="Naruto"
            description="From underdog to Hokage — did Naruto earn it all? Dive into the legacy of Naruto Uzumaki, the bonds that defined him, and the choices that split the fandom to this day"
            genre="Shonen"
            voteCount="100K Vote"
            imageUrl="https://cdn.builder.io/api/v1/image/assets%2F0b991d2b44e54dd8b9b06304908d1fe2%2F2613360569db4ddf8e5e7b735f2a2313?format=webp&width=800"
            imageAlt="Naruto anime scene"
            onGenreClick={handleGenreClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
