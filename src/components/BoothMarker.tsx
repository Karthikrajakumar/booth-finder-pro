import { useState } from "react";
import type { Booth } from "@/data/booths";

interface BoothMarkerProps {
  booth: Booth;
  isActive: boolean;
  onHover: (id: number | null) => void;
}

const BoothMarker = ({ booth, isActive, onHover }: BoothMarkerProps) => {
  const [tooltipSide, setTooltipSide] = useState<"left" | "right">("right");

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const parentRect = (e.target as HTMLElement).offsetParent?.getBoundingClientRect();
    if (parentRect) {
      setTooltipSide(rect.left - parentRect.left > parentRect.width / 2 ? "left" : "right");
    }
    onHover(booth.id);
  };

  return (
    <div
      className="absolute z-10 group"
      style={{ left: `${booth.x}%`, top: `${booth.y}%`, transform: "translate(-50%, -50%)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => onHover(null)}
    >
      {/* Pulse ring */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isActive ? "animate-ping bg-map-booth-hover opacity-40" : ""
        }`}
        style={{ width: 24, height: 24, margin: "auto", top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* Marker dot */}
      <div
        className={`relative w-6 h-6 rounded-full border-2 flex items-center justify-center text-[8px] font-bold cursor-pointer transition-all duration-200 ${
          isActive
            ? "bg-map-booth-hover border-map-tooltip-bg text-map-tooltip-bg scale-125 shadow-lg"
            : "bg-map-booth border-foreground/30 text-primary-foreground hover:scale-110"
        }`}
      >
        {booth.id}
      </div>

      {/* Tooltip */}
      {isActive && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 z-50 w-64 p-3 rounded-lg bg-map-tooltip-bg shadow-2xl border border-map-booth-hover/30 pointer-events-none ${
            tooltipSide === "right" ? "left-8" : "right-8"
          }`}
        >
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-map-tooltip-bg rotate-45 ${
              tooltipSide === "right" ? "-left-1" : "-right-1"
            }`}
          />
          <p className="text-map-tooltip-fg font-semibold text-sm leading-tight">
            Booth {booth.id}
          </p>
          <p className="text-map-tooltip-fg/90 text-xs mt-1 leading-snug">{booth.name}</p>
          <p className="text-map-tooltip-fg/60 text-[10px] mt-1">{booth.address}</p>
        </div>
      )}
    </div>
  );
};

export default BoothMarker;
