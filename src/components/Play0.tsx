import React, { SVGProps } from "react";

interface Play0Props extends SVGProps<SVGSVGElement> {
  withAnimation?: boolean;
}

export const Play0 = ({ withAnimation = true, ...props }: Play0Props) => {
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
        className={withAnimation ? "path" : ""}
        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
        stroke="#B0142B"
        strokeWidth="1.5"
      />
    </svg>
  );
};
