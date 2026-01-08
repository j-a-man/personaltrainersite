"use client";

import { Clock, Repeat } from "lucide-react";

const exercises = [
    {
        name: "Cat-Cow Stretch",
        duration: "1 min",
        type: "Spinal Health",
        description: "Inhale arching back, exhale rounding spine. Move slowly."
    },
    {
        name: "World's Greatest Stretch",
        duration: "5 reps/side",
        type: "Hips & Thoracic",
        description: "Lunge forward, rotate arm to sky. Open up the hips."
    },
    {
        name: "Deep Squat Hold",
        duration: "30-60 sec",
        type: "Ankle & Hip Mobility",
        description: "Sit deep, chest up, use elbows to push knees out."
    },
    {
        name: "Thoracic Extensions",
        duration: "10 reps",
        type: "Posture",
        description: "Foam roller mid-back, extend backwards. Don't arch lower back."
    }
];

export function MobilityRoutine() {
    return (
        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 h-full">
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-primary/20 rounded-lg text-primary">🧘‍♂️</span>
                3-Day Mobility Routine
            </h3>

            <div className="space-y-4">
                {exercises.map((exercise, index) => (
                    <div key={index} className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-white text-lg">{exercise.name}</h4>
                            <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-2 py-1 rounded text-gray-300">
                                {exercise.type}
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">
                            {exercise.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs font-medium text-primary">
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {exercise.duration}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-gray-400 text-sm italic">
                    "Do this every morning before your coffee."
                </p>
            </div>
        </div>
    );
}
