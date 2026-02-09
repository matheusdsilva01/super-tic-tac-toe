import React, { SVGProps } from "react";

interface PlayXProps extends SVGProps<SVGSVGElement> {
  withAnimation?: boolean;
}

export const PlayX = ({ withAnimation = true, ...props }: PlayXProps) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={withAnimation ? "path second" : ""}
        d="M17.9632 6C13.5 11.5 7.09888 15.2439 5.9632 18"
        stroke="#00DCD5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={withAnimation ? "path" : ""}
        d="M5.99999 6C5.97741 8.52241 12.9703 12.9273 18 18"
        stroke="#00DCD5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
