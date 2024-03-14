import VideoPlayer from "@/components/VideoPlayer";
import VideoPlaylist from "@/components/VideoPlaylist";

export default function Home() {
  return (
    <div className="container min-h-[calc(100vh-104px)]">
      {/* make me grid with gap-8 that has 2/3 for video container and 1/3 for video list also have a max width so while scrolling it dont shrink and make it each in row if it below lg screen*/}
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

      {/* <div className="grid grid-cols-3 gap-8">
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
      </div> */}
    </div>
  );
}
