type BreakdownItem = {
  label: string;
  percent: number;
};

type BudgetChartProps = {
  items: readonly BreakdownItem[];
};

const SLICE_COLORS = [
  "#d21f1f",
  "#d4a23c",
  "#f04a4a",
  "#a07828",
  "#c8c8c8",
];

function polarToCartesian(cx: number, cy: number, radius: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  };
}

function describeSlice(
  cx: number,
  cy: number,
  outerRadius: number,
  innerRadius: number,
  startAngle: number,
  endAngle: number,
) {
  const sweep = endAngle - startAngle;
  if (sweep <= 0) return "";

  const largeArc = sweep > 180 ? 1 : 0;
  const outerStart = polarToCartesian(cx, cy, outerRadius, endAngle);
  const outerEnd = polarToCartesian(cx, cy, outerRadius, startAngle);
  const innerStart = polarToCartesian(cx, cy, innerRadius, startAngle);
  const innerEnd = polarToCartesian(cx, cy, innerRadius, endAngle);

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArc} 0 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArc} 1 ${innerEnd.x} ${innerEnd.y}`,
    "Z",
  ].join(" ");
}

function wrapLabel(label: string): string[] {
  if (label.includes(" & ")) {
    const [left, right] = label.split(" & ");
    return [left, `& ${right}`];
  }
  if (label.length > 22) {
    const words = label.split(" ");
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
  }
  return [label];
}

export function BudgetChart({ items }: BudgetChartProps) {
  const width = 720;
  const height = 420;
  const cx = width / 2;
  const cy = height / 2;
  const outerRadius = 118;
  const innerRadius = 68;
  const percentRadius = (outerRadius + innerRadius) / 2;
  const leaderInner = outerRadius + 10;
  const leaderOuter = outerRadius + 28;
  const labelRadius = outerRadius + 58;
  const gap = 1.5;

  let angle = 0;
  const slices = items.map((item, index) => {
    const sweep = (item.percent / 100) * 360;
    const startAngle = angle + gap / 2;
    const endAngle = angle + sweep - gap / 2;
    const midAngle = angle + sweep / 2;
    angle += sweep;

    const percentPoint = polarToCartesian(cx, cy, percentRadius, midAngle);
    const leaderStart = polarToCartesian(cx, cy, leaderInner, midAngle);
    const leaderEnd = polarToCartesian(cx, cy, leaderOuter, midAngle);
    const labelPoint = polarToCartesian(cx, cy, labelRadius, midAngle);
    const isRight = labelPoint.x >= cx;
    const lines = wrapLabel(item.label);

    return {
      ...item,
      color: SLICE_COLORS[index % SLICE_COLORS.length],
      path: describeSlice(cx, cy, outerRadius, innerRadius, startAngle, endAngle),
      percentX: percentPoint.x,
      percentY: percentPoint.y,
      leaderStart,
      leaderEnd,
      labelX: labelPoint.x,
      labelY: labelPoint.y,
      textAnchor: (isRight ? "start" : "end") as "start" | "end",
      percentTextColor: index === 4 ? "#111111" : "#ffffff",
      lines,
    };
  });

  return (
    <div className="budget-chart flex w-full justify-center">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full max-w-[720px] max-h-[min(420px,58vh)] drop-shadow-[0_0_28px_rgba(210,31,31,0.14)]"
        role="img"
        aria-label="Budget breakdown chart with labeled slices"
      >
        <circle
          cx={cx}
          cy={cy}
          r={outerRadius + 6}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />

        {slices.map((slice) => (
          <path key={`${slice.label}-slice`} d={slice.path} fill={slice.color}>
            <title>
              {slice.label}: {slice.percent}%
            </title>
          </path>
        ))}

        {slices.map((slice) => (
          <g key={`${slice.label}-callout`}>
            <line
              x1={slice.leaderStart.x}
              y1={slice.leaderStart.y}
              x2={slice.leaderEnd.x}
              y2={slice.leaderEnd.y}
              stroke={slice.color}
              strokeWidth="1.5"
              opacity="0.85"
            />
            <circle
              cx={slice.leaderEnd.x}
              cy={slice.leaderEnd.y}
              r="2.5"
              fill={slice.color}
            />
            <text
              x={slice.labelX}
              y={slice.labelY - (slice.lines.length > 1 ? 6 : 0)}
              textAnchor={slice.textAnchor}
              fill="#ffffff"
              fontSize="12"
              fontWeight="700"
              style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
            >
              {slice.lines.map((line, lineIndex) => (
                <tspan
                  key={`${slice.label}-${lineIndex}`}
                  x={slice.labelX}
                  dy={lineIndex === 0 ? 0 : 15}
                >
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        ))}

        {slices.map((slice) => (
          <text
            key={`${slice.label}-pct`}
            x={slice.percentX}
            y={slice.percentY + 4}
            textAnchor="middle"
            fill={slice.percentTextColor}
            fontSize={slice.percent <= 5 ? "11" : "13"}
            fontWeight="800"
            style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
          >
            {slice.percent}%
          </text>
        ))}

        <circle cx={cx} cy={cy} r={innerRadius - 2} fill="#050505" />
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          fill="#ffffff"
          fontSize="24"
          fontWeight="900"
          style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
        >
          100%
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          fill="#d4a23c"
          fontSize="9"
          fontWeight="700"
          letterSpacing="1.4"
          style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
        >
          ALLOCATED
        </text>
      </svg>
    </div>
  );
}
