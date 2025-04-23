import React, { FunctionComponent, SVGProps } from "react";

type Props = {
  size?: number;
  pathProps?: SVGProps<SVGPathElement>;
} & SVGProps<SVGSVGElement>;

const ArrowRight: FunctionComponent<Props> = ({
  size,
  pathProps,
  ...props
}) => {
  return (
    <svg
      width={size || 8}
      height={size || 16}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.24902 1.50195L8.74902 9.00195L1.24902 16.502"
        stroke="#919297"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
