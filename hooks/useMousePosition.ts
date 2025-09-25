// hooks/useMousePosition.ts
import { useEffect, RefObject } from "react";

export function useMousePosition(
  ref: RefObject<HTMLElement | null>, // 👈 accept nulls too
  callback?: ({ x, y }: { x: number; y: number }) => void,
) {
  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { top, left } = ref.current!.getBoundingClientRect();
      callback?.({ x: clientX - left, y: clientY - top });
    };

    const handleTouchMove = (event: TouchEvent) => {
      const { clientX, clientY } = event.touches[0];
      const { top, left } = ref.current!.getBoundingClientRect();
      callback?.({ x: clientX - left, y: clientY - top });
    };

    ref.current.addEventListener("mousemove", handleMouseMove);
    ref.current.addEventListener("touchmove", handleTouchMove);

    const nodeRef = ref.current;
    return () => {
      nodeRef?.removeEventListener("mousemove", handleMouseMove);
      nodeRef?.removeEventListener("touchmove", handleTouchMove);
    };
  }, [ref, callback]);
}
