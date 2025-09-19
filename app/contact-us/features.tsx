import React from "react";
import { useId } from "react";
import Link from "next/link";

export default function FeaturesSectionDemo() {
  return (
    <div className="pb-20 px-14 sm:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-2 max-w-5xl mx-auto">
        {grid.map((feature) => (
          <Link href={feature.link} target="_blank">
            <div
              key={feature.title}
              className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
            >
              <Grid size={20} />
              <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
                {feature.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                {feature.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "+91.9815.95.1565",
    link: "tel:+919815951565",
    description:
      "Speak directly with our team for quick guidance on projects, collaborations, or services — real people, real solutions.",
  },
  {
    title: "contact@atmnc.in",
    link: "mailto:contact@atmnc.in",
    description:
      "Drop us an email anytime to discuss ideas, request proposals, or share requirements. We respond fast, with clarity.",
  },
  {
    title: "Bhopal, India 🇮🇳",
    link: "https://www.google.com/maps?sca_esv=8555f25f11312303&rlz=1C5CHFA_enIN1024IN1024&output=search&q=bhopal+india&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZMLQ4RPdPjLPmOakFCN7X8EE7njRrb2FMGWExx-5ARS2dDjUqH8P7GJI3gXZTNa1e_7m91tt3PtU62rTp6nl-Pm1Hz-Ike-6iODwXZAR4qkdAefymRsK8-aywfdi6MpAoW01fUOoTMccdwszVom5wcBZmb7Y68TZBQ-eJeW3TjxE8O6uyH1H8wv1LgSVc_8WT5cgf8g&entry=mc&ved=1t:200715&ictx=111",
    description:
      "Visit our workspace to explore strategies, brainstorm campaigns, or simply meet the minds shaping your brand’s future.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
