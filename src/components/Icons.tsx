import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function IconWrench(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M14.7 6.3a4.2 4.2 0 0 0-5.9 5.9L3 17.7V21h3.3l5.5-5.8a4.2 4.2 0 0 0 5.9-5.9l-2.5 2.5-2.5-2.5 2.5-2.5Z" />
    </svg>
  );
}

export function IconScan(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M7 3H4v3M17 3h3v3M7 21H4v-3M17 21h3v-3M8 12h8" />
    </svg>
  );
}

export function IconKey(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <circle cx="8" cy="15" r="4" />
      <path d="M11.5 12.5 21 3M17 3h4v4" />
    </svg>
  );
}

export function IconBattery(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <rect x="2" y="7" width="18" height="10" rx="2" />
      <path d="M20 10h2v4h-2M7 11v2M11 11v2" />
    </svg>
  );
}

export function IconBrake(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
    </svg>
  );
}

export function IconEngine(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M6 9h3l2-2h4l2 2h3v5h-2l-2 3H8l-2-3H4V9h2Z" />
      <path d="M9 9V6h6" />
    </svg>
  );
}

export function IconBolt(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function IconService(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M12 8v4l2.5 1.5M12 3a9 9 0 1 0 9 9" />
      <path d="M21 3v5h-5" />
    </svg>
  );
}

export function IconAlert(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M12 9v4M12 17h.01M10.3 4.3 2.8 17.2A2 2 0 0 0 4.5 20h15a2 2 0 0 0 1.7-2.8L13.7 4.3a2 2 0 0 0-3.4 0Z" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.3 6-5.5-3.1-5.5 3.1 1.3-6-4.5-4.2 6.1-.7L12 3Z" />
    </svg>
  );
}

export function IconZap(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3A2 2 0 0 1 18 19 15 15 0 0 1 3.5 4.5a2 2 0 0 1 3-1Z" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.87 11.87 0 0 0 5.74 1.46h.01c6.54 0 11.88-5.34 11.88-11.9 0-3.18-1.24-6.16-3.41-8.43ZM12.05 21.75h-.01a9.84 9.84 0 0 1-5.01-1.37l-.36-.21-3.74.98 1-3.65-.24-.37a9.82 9.82 0 0 1-1.5-5.23c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.8 9.8 0 0 1 2.89 6.97c0 5.43-4.42 9.84-9.85 9.84Z" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const serviceIcons: Record<string, (p: IconProps) => ReactNode> = {
  mecanica: (p) => <IconWrench {...p} />,
  diagnostico: (p) => <IconScan {...p} />,
  arranque: (p) => <IconKey {...p} />,
  bateria: (p) => <IconBattery {...p} />,
  frenos: (p) => <IconBrake {...p} />,
  motor: (p) => <IconEngine {...p} />,
  electrica: (p) => <IconBolt {...p} />,
  mantenimiento: (p) => <IconService {...p} />,
  emergencias: (p) => <IconAlert {...p} />,
};

export function ServiceIcon({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const Icon = serviceIcons[id] ?? ((p: IconProps) => <IconWrench {...p} />);
  return <>{Icon({ className: className ?? "h-6 w-6" })}</>;
}
