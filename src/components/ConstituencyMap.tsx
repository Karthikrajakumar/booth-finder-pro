import { useState } from "react";
import mapImage from "@/assets/kamaraj-map.jpg";
import { booths } from "@/data/booths";
import BoothMarker from "./BoothMarker";

const ConstituencyMap = () => {
  const [activeBoothId, setActiveBoothId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-5 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Kamaraj Nagar Constituency
          </h1>
          <p className="text-primary-foreground/70 text-sm mt-1">
            Oulgaret Municipality — 39 Polling Booths
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 md:p-6 flex flex-col lg:flex-row gap-6">
        {/* Map */}
        <div className="flex-1 min-w-0">
          <div className="relative rounded-xl overflow-hidden border border-border shadow-md bg-muted">
            <img
              src={mapImage}
              alt="Kamaraj Nagar Constituency Map"
              className="w-full h-auto block"
              draggable={false}
            />
            {booths.map((booth) => (
              <BoothMarker
                key={booth.id}
                booth={booth}
                isActive={activeBoothId === booth.id}
                onHover={setActiveBoothId}
              />
            ))}
          </div>
        </div>

        {/* Booth List Sidebar */}
        <aside className="lg:w-80 shrink-0">
          <div className="sticky top-4 rounded-xl border border-border bg-card shadow-md overflow-hidden">
            <div className="bg-primary px-4 py-3">
              <h2 className="text-primary-foreground font-semibold text-sm">
                All Booths ({booths.length})
              </h2>
            </div>
            <div className="max-h-[70vh] overflow-y-auto">
              {booths.map((booth) => (
                <div
                  key={booth.id}
                  className={`px-4 py-2.5 border-b border-border/50 cursor-pointer transition-colors duration-150 ${
                    activeBoothId === booth.id
                      ? "bg-map-highlight/20 border-l-4 border-l-map-booth-hover"
                      : "hover:bg-muted border-l-4 border-l-transparent"
                  }`}
                  onMouseEnter={() => setActiveBoothId(booth.id)}
                  onMouseLeave={() => setActiveBoothId(null)}
                >
                  <p className="text-xs font-bold text-map-booth">
                    Booth {booth.id}
                  </p>
                  <p className="text-sm font-medium text-foreground leading-tight mt-0.5">
                    {booth.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {booth.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ConstituencyMap;
