import VideoPlayer from "@/components/VideoPlayer";
import VideoPlaylist from "@/components/VideoPlaylist";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-104px)]">
      <div className="grid grid-cols-3 gap-8">
        <div className="xl:col-span-2 col-span-3">
          <div>
            <VideoPlayer />
          </div>
        </div>
        <div className="xl:col-span-1 col-span-3">
          <div>
            <VideoPlaylist />
          </div>
        </div>
      </div>
    </div>
  );
}
