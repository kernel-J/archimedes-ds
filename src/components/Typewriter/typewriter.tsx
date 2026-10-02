import React, { useEffect, useMemo, useState } from "react";

export interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  onComplete?: () => void;
  className?: string;
}

const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export const Typewriter: React.FC<TypewriterProps> = (props)  => {
  const { text, speed = 50, delay = 0, cursor = true, onComplete, className } = props;
  const chars = useMemo(() => Array.from(text), [text]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCount(chars.length);
      onComplete?.();
      return;
    }

    setCount(0);
    let index = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const tick = () => {
      index += 1;
      setCount(index);
      if (index < chars.length) {
        timer = setTimeout(tick, speed);
      } else {
        onComplete?.();
      }
    };

    if (chars.length > 0) {
      timer = setTimeout(tick, delay + speed);
    }

    return () => clearTimeout(timer);

  }, [chars, speed, delay]);

  const done = count >= chars.length;

  return (
    <span className={className}>
      {/* <span
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span> */}

      <span aria-hidden="true">
        {chars.slice(0, count).join("")}
        {cursor && (
          <span
            style={{
              display: "inline-block",
              width: "0.08em",
              height: "1em",
              marginLeft: "0.05em",
              verticalAlign: "text-bottom",
              background: "currentColor",
              animation: done ? "tw-blink 1s steps(1) infinite" : undefined,
            }}
          />
        )}
      </span>

      <style>{`@keyframes tw-blink { 50% { opacity: 0 } }`}</style>
    </span>
  );
}
