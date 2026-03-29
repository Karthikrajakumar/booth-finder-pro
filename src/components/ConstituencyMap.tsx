import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { booths } from "@/data/booths";
import { Link } from "react-router-dom";

// Fix default marker icon issue in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;

const createBoothIcon = (id: number, isActive: boolean) => {
  const size = isActive ? 28 : 22;
  const bg = isActive ? "hsl(45, 100%, 50%)" : "hsl(0, 80%, 55%)";
  const border = isActive ? "hsl(215, 75%, 20%)" : "rgba(0,0,0,0.3)";
  const textColor = isActive ? "hsl(215, 75%, 20%)" : "white";
  const shadow = isActive ? "0 0 10px rgba(255,200,0,0.6)" : "0 2px 4px rgba(0,0,0,0.3)";

  return L.divIcon({
    className: "custom-booth-icon",
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:50%;
      background:${bg};border:2px solid ${border};
      display:flex;align-items:center;justify-content:center;
      font-size:${isActive ? 10 : 8}px;font-weight:700;color:${textColor};
      box-shadow:${shadow};transition:all 0.2s;
      cursor:pointer;
    ">${id}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

const FlyToActive = ({ activeBoothId }: { activeBoothId: number | null }) => {
  const map = useMap();
  useEffect(() => {
    if (activeBoothId !== null) {
      const booth = booths.find((b) => b.id === activeBoothId);
      if (booth) {
        map.flyTo([booth.lat, booth.lng], map.getZoom(), { duration: 0.5 });
      }
    }
  }, [activeBoothId, map]);
  return null;
};

const ConstituencyMap = () => {
  const [activeBoothId, setActiveBoothId] = useState<number | null>(null);

  // Center of constituency
  const center: [number, number] = [11.9520, 79.8080];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-5 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Kamaraj Nagar Constituency
          </h1>
          <p className="text-primary-foreground/70 text-sm mt-1">
            Oulgaret Municipality — 39 Polling Booths
          </p>
          <Link to="/nellithope" className="inline-block mt-2 text-xs bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground px-3 py-1 rounded-full transition-colors">
            → View Nellithope Constituency
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 md:p-6 flex flex-col lg:flex-row gap-6">
        {/* Map */}
        <div className="flex-1 min-w-0">
          <div className="rounded-xl overflow-hidden border border-border shadow-md" style={{ height: "75vh" }}>
            <MapContainer
              center={center}
              zoom={16}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%" }}
              zoomControl={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <FlyToActive activeBoothId={activeBoothId} />
              {booths.map((booth) => (
                <Marker
                  key={booth.id}
                  position={[booth.lat, booth.lng]}
                  icon={createBoothIcon(booth.id, activeBoothId === booth.id)}
                  eventHandlers={{
                    mouseover: () => setActiveBoothId(booth.id),
                    mouseout: () => setActiveBoothId(null),
                  }}
                >
                  <Popup>
                    <div className="text-sm">
                      <p className="font-bold text-primary">Booth {booth.id}</p>
                      <p className="font-medium mt-1">{booth.name}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{booth.address}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
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
