import React from "react";
import type { SVGProps } from "react";

export function ConstructionArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="120"
      viewBox="0 0 48 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0H36C42.6274 0 48 5.37258 48 12V108C48 114.627 42.6274 120 36 120H0V0Z"
        fill="#161203"
        fill-opacity="0.8"
      />
      <mask
        id="mask0_2619_3679"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x="6"
        y="42"
        width="36"
        height="36"
      >
        <rect x="6" y="42" width="36" height="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2619_3679)">
        <path
          d="M30.0002 73.9616L16.0386 60L30.0002 46.0384L31.5954 47.6336L19.2291 60L31.5954 72.3664L30.0002 73.9616Z"
          fill="#FFF9E3"
        />
      </g>
    </svg>
  );
}
