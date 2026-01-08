import { QuizForm } from "../components/quiz/QuizForm";

export default function QuizPage() {
    return (
        <main className="min-h-screen bg-black flex flex-col relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-orange-900/20 via-black to-black -z-10" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 -z-10" />

            {/* Minimal Header */}
            <header className="p-6 md:p-8 flex justify-center">
                <div className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">B</span>
                    <span className="font-display font-bold text-xl text-white tracking-widest">BEREAL</span>
                </div>
            </header>

            <div className="flex-1 flex flex-col justify-center px-6 pb-20">
                <QuizForm />
            </div>
        </main>
    );
}
