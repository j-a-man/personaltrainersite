"use client";

import { Check } from "lucide-react";

const categories = [
    {
        name: "Proteins",
        items: ["Chicken Breast", "Lean Ground Beef (93/7)", "Salmon / White Fish", "Greek Yogurt", "Eggs", "Protein Powder"],
        color: "bg-red-500/10 text-red-400 border-red-500/20"
    },
    {
        name: "Carbohydrates",
        items: ["Oats", "Rice (Jasmine/Basmati)", "Sweet Potatoes", "Quinoa", "Berries (Blueberries/Strawberries)", "Bananas"],
        color: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
        name: "Fats",
        items: ["Avocado", "Extra Virgin Olive Oil", "Almonds / Walnuts", "Chia Seeds", "Natural Peanut Butter"],
        color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
        name: "Vegetables",
        items: ["Spinach / Kale", "Broccoli", "Asparagus", "Bell Peppers", "Zucchini"],
        color: "bg-green-500/10 text-green-400 border-green-500/20"
    }
];

export function GroceryList() {
    return (
        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 h-full">
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-primary/20 rounded-lg text-primary">🛒</span>
                The Perfect Grocery List
            </h3>

            <div className="space-y-6">
                {categories.map((category) => (
                    <div key={category.name} className={`p-4 rounded-2xl border ${category.color} border-opacity-30`}>
                        <h4 className="font-bold text-lg mb-3 uppercase tracking-wider opacity-90">{category.name}</h4>
                        <ul className="grid grid-cols-2 gap-2">
                            {category.items.map((item) => (
                                <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                                    <Check className="w-4 h-4 opacity-50 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-gray-400 text-sm italic">
                    "Success starts in the kitchen. Keep it simple."
                </p>
            </div>
        </div>
    );
}
