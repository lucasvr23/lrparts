/**
 * Der Schriftzug als Text nachgebaut – skaliert scharf auf allen Displays
 * und lädt schneller als eine Bilddatei.
 */
export function Wordmark({ invers = false }: { invers?: boolean }) {
  return (
    <span className="flex flex-col leading-none tracking-tight">
      <span
        className={`text-xl font-extrabold sm:text-2xl ${
          invers ? "text-white" : "text-pine-500"
        }`}
      >
        LR PARTS
      </span>
      <span className="text-[0.7rem] font-bold tracking-[0.22em] text-gold-500 sm:text-xs">
        WESTERWALD
      </span>
    </span>
  );
}
