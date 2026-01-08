"use client";

import { useState, useRef, useEffect, TouchEvent, MouseEvent } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const interactionStart = () => setIsDragging(true);
    const interactionEnd = () => setIsDragging(false);

    // Allow clicking to jump
    const handleClick = (e: MouseEvent) => {
        handleMove(e.clientX);
    }

    return (
        <div
            className="relative w-full aspect-4/5 md:aspect-square overflow-hidden rounded-2xl select-none group cursor-ew-resize border-4 border-white shadow-2xl"
            ref={containerRef}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onMouseDown={interactionStart}
            onTouchStart={interactionStart}
            onMouseUp={interactionEnd}
            onTouchEnd={interactionEnd}
            onMouseLeave={interactionEnd}
            onClick={handleClick}
        >
            {/* After Image (Background/Underneath - or we can layer them differently) */}
            {/* Actually, it's easier to have After on bottom, Before on top clipped */}

            <img
                src={afterImage}
                alt={`${alt} After`}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
            />

            {/* Badge: AFTER */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 z-10">
                <span className="text-white text-xs font-bold tracking-wider">AFTER</span>
            </div>


            {/* Before Image (Top Layer, Clipped) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={`${alt} Before`}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                />
                {/* Badge: BEFORE */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="text-white text-xs font-bold tracking-wider">BEFORE</span>
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center text-primary">
                    <MoveHorizontal className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}
