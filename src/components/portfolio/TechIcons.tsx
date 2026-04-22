// Lightweight inline SVG brand glyphs for the floating tech icons.
// All use currentColor so they inherit the neon-glow tint.

type IconProps = { className?: string; size?: number };

const wrap = (children: React.ReactNode, size = 28, className = "") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden
  >
    {children}
  </svg>
);

export const ReactIcon = ({ className, size = 28 }: IconProps) => (
  <svg viewBox="-11.5 -10.23 23 20.46" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth={1} aria-hidden>
    <circle r="2.05" fill="currentColor" stroke="none" />
    <g>
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <>
      <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.12" />
      <path d="M9 7v10M9 7l7 10M16 7v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </>,
    size,
    className,
  );

export const VueIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <path d="M2 4h4l6 10 6-10h4L12 22 2 4Zm6 0h3l1 2 1-2h3l-4 7-4-7Z" />,
    size,
    className,
  );

export const NodeIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 7 3.9v7.6l-7 3.9-7-3.9V8.2l7-3.9Z" />
      <path d="M12 8.5c-1.7 0-3 .8-3 2.1 0 1.1.7 1.6 2.4 2 .9.2 1.3.4 1.3.8 0 .4-.4.7-1.2.7-.8 0-1.3-.3-1.4-.9H8.5c.1 1.4 1.2 2.2 2.9 2.2 1.7 0 2.9-.8 2.9-2.2 0-1.1-.7-1.7-2.6-2.1-.7-.1-1.1-.3-1.1-.7 0-.4.3-.6 1-.6.7 0 1.1.3 1.2.8h1.6c-.1-1.3-1.2-2.1-2.8-2.1Z" />
    </>,
    size,
    className,
  );

export const ExpressIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <path d="M2 8h3l2.4 3.7L9.7 8h2.7l-3.6 5L13 18h-2.8L7.5 14 4.7 18H2l3.7-5L2 8Zm12 4.6c0-2.7 1.7-4.7 4.2-4.7 2.3 0 3.8 1.7 3.8 4.4v.6h-6c.1 1.5 1 2.4 2.4 2.4 1 0 1.7-.4 2-1.2h1.6c-.4 1.6-1.7 2.6-3.6 2.6-2.5 0-4.4-1.9-4.4-4.1Zm6.4-1c-.1-1.2-1-2-2.2-2-1.3 0-2.1.8-2.3 2h4.5Z" />,
    size,
    className,
  );

export const TypeScriptIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <>
      <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.18" />
      <path d="M6 10h7v1.6H10.5V18H8.8v-6.4H6V10Zm12.6 1.7c-.4-.6-1-.9-1.9-.9-1.5 0-2.6 1-2.6 2.3 0 1.1.6 1.7 2.1 2.1 1.1.3 1.4.5 1.4 1 0 .5-.4.8-1.1.8-.8 0-1.3-.4-1.5-1.1l-1.4.6c.4 1.3 1.5 2 3 2 1.7 0 2.8-.9 2.8-2.4 0-1.2-.7-1.8-2.4-2.2-1-.2-1.3-.5-1.3-.9 0-.4.4-.7 1-.7.6 0 1 .3 1.2.7l1.3-.7Z" />
    </>,
    size,
    className,
  );

export const TailwindIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 2 1.4 1 1 2.2 2.3 4.7 2.3 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-2-1.4-1-1-2.2-2.3-4.7-2.3Zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 2 1.4 1 1 2.2 2.3 4.7 2.3 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-2-1.4-1-1-2.2-2.3-4.7-2.3Z" />,
    size,
    className,
  );

export const HtmlIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <path d="M3 2 4.6 21 12 23l7.4-2L21 2H3Zm14.4 5.6H8.2l.2 2.3h8.8l-.6 6.7-4.6 1.3-4.6-1.3-.3-3.6h2.2l.2 1.8 2.5.7 2.5-.7.3-3H7.5L7 5.4h10.6l-.2 2.2Z" />,
    size,
    className,
  );

export const CssIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <path d="M3 2 4.6 21 12 23l7.4-2L21 2H3Zm13 7.6H8.4l.2 2.2h7.1l-.6 6.6-4.1 1.2-4.2-1.2-.3-3.2h2.2l.1 1.6 2.2.6 2.2-.6.3-2.4H7.6L7 5.5h9.4l-.4 4.1Z" />,
    size,
    className,
  );

export const MongoIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <path d="M12 2c1.4 4 5.5 6.5 5.5 11.5S14.5 21 12 22c-2.5-1-5.5-3.5-5.5-8.5S10.6 6 12 2Zm0 4.5c-.7 1.7-2.5 3.6-2.5 7s1.4 5.3 2.5 6.2V6.5Z" />,
    size,
    className,
  );

export const MysqlIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <path d="M3 16c1.5-1 3.6-1 5 .2.6.5 1 1.2 1.6 1.7 1 .9 2.3 1.1 3.5.6L11.7 17 9 14.3c-.9-1-1.4-2.2-2-3.4-.6-1-1-2-1.8-2.9-.6-.7-1.5-1-2.2-.6.5.7 1 1.3 1.4 2 .8 1.4 1.4 3 2.5 4.2.6.7 1.3 1.3 1.8 2.1.3.5.5 1 .8 1.5-1.1.4-2.4.4-3.6.2-1-.2-1.9-.6-2.9-1.4Zm14.9-2c.6 0 1 .1 1.5.4-.4.1-.8.3-1.1.6-.2.2-.3.6 0 .8.1.1.3.1.4.2.4.2.8.4 1.1.7.7.7.8 1.7.5 2.5-.5-.6-1-1-1.7-1.2-.4-.1-.9 0-1.2-.3-.3-.3-.3-.7-.2-1.1.3-.8.4-1.6.7-2.6Zm-4.8-7c1 1.6 2.6 2.8 3.8 4.3.6.8 1.2 1.7 1.6 2.7.4 1 .6 2 .8 3l.1.4-.4-.1c-.6-.1-1.1-.4-1.5-.8-.6-.6-1-1.5-1.4-2.3-.5-.9-1-1.8-1.6-2.7-.6-1-1.2-1.9-1.4-3.1-.1-.5-.1-1 0-1.4Z" />,
    size,
    className,
  );

export const PrismaIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <path d="M13 2 4 18l8 4 8-3L13 2Zm-.4 3 5.2 13.2-7.2 2.7L7 17l5.6-12Z" />,
    size,
    className,
  );

export const FirebaseIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <path d="M5 18 9 4l3 5 1.5-2L19 18l-7 4-7-4Zm3-1.4 4 2.4 4-2.4-3.5-7-1.5 2L8 16.6Z" />,
    size,
    className,
  );

export const GitIcon = ({ className, size = 28 }: IconProps) =>
  wrap(
    <path d="m22 12-10 10L2 12 12 2l10 10ZM12 4.4 4.4 12 12 19.6 19.6 12 12 4.4Zm-1 5.6h2v2.6l1.7 1.7-1.4 1.4L11 13V10Z" />,
    size,
    className,
  );

export type TechName =
  | "react"
  | "next"
  | "vue"
  | "node"
  | "express"
  | "typescript"
  | "tailwind"
  | "html"
  | "css"
  | "mongo"
  | "mysql"
  | "prisma"
  | "firebase"
  | "git";

export const TechIcon = ({ name, ...props }: IconProps & { name: TechName }) => {
  switch (name) {
    case "react": return <ReactIcon {...props} />;
    case "next": return <NextIcon {...props} />;
    case "vue": return <VueIcon {...props} />;
    case "node": return <NodeIcon {...props} />;
    case "express": return <ExpressIcon {...props} />;
    case "typescript": return <TypeScriptIcon {...props} />;
    case "tailwind": return <TailwindIcon {...props} />;
    case "html": return <HtmlIcon {...props} />;
    case "css": return <CssIcon {...props} />;
    case "mongo": return <MongoIcon {...props} />;
    case "mysql": return <MysqlIcon {...props} />;
    case "prisma": return <PrismaIcon {...props} />;
    case "firebase": return <FirebaseIcon {...props} />;
    case "git": return <GitIcon {...props} />;
  }
};
