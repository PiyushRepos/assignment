interface CircleProgressProps {
  percentage: number;
  radius?: number;
}

export function CircleProgress({
  percentage,
  radius = 25,
}: CircleProgressProps) {
  const circumference = 2 * Math.PI * (radius - 4);
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <svg
        style={{ width: radius * 2, height: radius * 2 }}
        className="-rotate-90"
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - 4}
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          className="text-zinc-800"
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - 4}
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-300 text-emerald-400"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute font-bold" style={{ fontSize: radius / 2.5 }}>
        {percentage}%
      </div>
    </div>
  );
}
