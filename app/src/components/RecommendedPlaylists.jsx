import { showingPlaylistData } from "../utils/showingPlaylists";

export function RecommendedPlaylists({ inversionResult }) {
  const playlistData = showingPlaylistData(inversionResult);
  return (
    inversionResult && (
      <div className="mt-10">
        {playlistData.map((data, index) => {
          return (
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer noopener"
              key={index}
              className="w-80 h-48 bg-[#1b1b1b] rounded-xl flex items-center justify-center p-5 space-x-4 group hover:bg-[#242424] transition-all ease-linear"
            >
              <img
                className="h-full max-h-[150px] rounded-md"
                src={data.image}
                alt="Description"
              />
              <div className="flex flex-col justify-evenly h-full">
                <p className="font-bold text-3xl group-hover:underline">{data.name}</p>
                <p className="opacity-60 text-base">{data.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    )
  );
}
