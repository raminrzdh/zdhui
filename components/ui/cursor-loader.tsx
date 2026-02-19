// ZDH-UI Cursor Loader v0.0.0

"use client";

import { cn } from "@/utils/cn";

interface CursorLoaderProps {
    className?: string;
}

export function CursorLoader({ className }: CursorLoaderProps) {
    return (
        <span
            className={cn(
                "inline-block h-[1.5em] w-[0.75em] animate-[pulse_1s_steps(1)_infinite] rounded-[3px] align-middle ml-1",
                "bg-text-sub-600",
                className
            )}
        />
    );
}
