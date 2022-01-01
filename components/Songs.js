import { useRecoilValue } from "recoil";
import { playlistState } from "../atom/playlistAtom";
import Song from "./Song";

const Songs = () => {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className="px-8 flex flex-col space-y-1 pb-28 text-white">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
      <div className="flex items-center justify-center space-x-2">
        <h1 className="">Made with ❤️ |</h1>
        <p className="text-green-500">
          <a href="https://vijayraj.netlify.app/">Vijay⚡</a>
        </p>
      </div>
    </div>
  );
};

export default Songs;
