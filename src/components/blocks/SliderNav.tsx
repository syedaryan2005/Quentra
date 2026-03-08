// components/SliderNav.tsx
"use client";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type Props = {
  canPrev: boolean;  
  canNext: boolean;       
  onPrev: () => void;      
  onNext: () => void;      
  className?: string;      
};

export default function SliderNav({ canPrev, canNext, onPrev, onNext, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <RoundButton dir="left"  disabled={!canPrev} onClick={onPrev} />
      <RoundButton dir="right" disabled={!canNext} onClick={onNext} />
    </div>
  );
}

function RoundButton({
  dir,
  disabled,
  onClick,
}: {
  dir: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  const base =
    "inline-flex h-12 w-12 items-center justify-center rounded-full border transition";
  const active =
    "bg-black text-white border-black hover:opacity-90 active:opacity-80";
  const inactive =
    "bg-white text-black border-black/30"; // disabled look like your screenshots

  return (
    <button
      type="button"
      aria-label={dir === "left" ? "Previous" : "Next"}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${disabled ? inactive : active}`}
    >
      {dir === "left" ? <FiArrowLeft size={20} /> : <FiArrowRight size={20} />}
    </button>
  );
}
