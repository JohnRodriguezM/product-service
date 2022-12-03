import type { FC } from "react";
import type { IconProps } from "./type";

export const InstagramIcon: FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={64}
      height={64}
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="#9c34c2"
        d="M54 20v24c0 2.25-.74 4.32-2 5.99V50a10.007 10.007 0 01-8 4H20c-5.52 0-10-4.48-10-10V20a10.007 10.007 0 014-8h.01c1.67-1.26 3.74-2 5.99-2h24c5.52 0 10 4.48 10 10z"
      />
      <path
        fill="#bc379c"
        d="M54 29.36V44c0 2.25-.74 4.32-2 5.99V50a10.007 10.007 0 01-8 4H20c-5.52 0-10-4.48-10-10V20a10.007 10.007 0 014-8h.01c1.67-1.26 3.74-2 5.99-2h14.64A45.232 45.232 0 0154 29.36z"
      />
      <path
        fill="#dd3975"
        d="M52 49.99V50a10.007 10.007 0 01-8 4H20c-5.52 0-10-4.48-10-10V20a10.007 10.007 0 014-8h.01c20.98.01 37.98 17.01 37.99 37.99z"
      />
      <path
        fill="#fd3c4f"
        d="M45 50c0 1.34-.09 2.67-.25 3.97-.24.02-.5.03-.75.03H20c-5.52 0-10-4.48-10-10V20c0-.25.01-.51.03-.75 1.3-.16 2.63-.25 3.97-.25 17.12 0 31 13.88 31 31z"
      />
      <path
        fill="#fe6d42"
        d="M38 50c0 1.36-.11 2.7-.34 4H20c-5.52 0-10-4.48-10-10V26.34c1.3-.23 2.64-.34 4-.34 13.25 0 24 10.75 24 24z"
      />
      <path
        fill="#fe9d36"
        d="M32 50c0 1.37-.15 2.71-.46 4H20c-5.52 0-10-4.48-10-10V32.46a17.1 17.1 0 014-.46c9.94 0 18 8.06 18 18z"
      />
      <path
        fill="#ffce29"
        d="M25 50c0 1.41-.27 2.76-.75 4H20c-5.52 0-10-4.48-10-10v-4.25c1.24-.48 2.59-.75 4-.75 6.08 0 11 4.92 11 11z"
      />
      <ellipse cx={32} cy={61} opacity={0.3} rx={20} ry={3} />
      <path
        fill="#fff"
        d="M31 15a5 5 0 005-5H20c-5.523 0-10 4.477-10 10v22a5 5 0 005-5V20c0-2.757 2.243-5 5-5h11z"
        opacity={0.3}
      />
      <path
        d="M54 44V22a5 5 0 00-5 5v17c0 2.757-2.243 5-5 5H33a5 5 0 00-5 5h16c5.523 0 10-4.477 10-10z"
        opacity={0.15}
      />
      <path
        fill="#fff"
        d="M14 21.5a1.5 1.5 0 01-1.5-1.5c0-4.136 3.364-7.5 7.5-7.5a1.5 1.5 0 110 3 4.505 4.505 0 00-4.5 4.5 1.5 1.5 0 01-1.5 1.5z"
      />
      <path
        fill="#fff"
        d="M39.5 48h-15c-4.687 0-8.5-3.813-8.5-8.5v-15c0-4.687 3.813-8.5 8.5-8.5h15c4.687 0 8.5 3.813 8.5 8.5v15c0 4.687-3.813 8.5-8.5 8.5zm-15-29a5.506 5.506 0 00-5.5 5.5v15c0 3.033 2.467 5.5 5.5 5.5h15c3.033 0 5.5-2.467 5.5-5.5v-15c0-3.033-2.467-5.5-5.5-5.5h-15z"
      />
      <path
        fill="#fff"
        d="M32 40c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-13c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      />
      <circle cx={40.5} cy={23.5} r={2} fill="#fff" />
    </svg>
  );
};
