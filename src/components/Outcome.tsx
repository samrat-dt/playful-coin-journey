import { motion } from "framer-motion";
import { useState, useCallback } from "react";

interface OutcomeProps {
  result: "heads" | "tails" | null;
}

// Define outcomes as a constant
const OUTCOMES = {
  heads: [
    "Smile for 10 seconds.",
    "Say 'I'm proud of myself.'",
    "Drink a glass of water.",
    "Look at a happy photo from your past.",
    "Compliment yourself in the mirror.",
    "Say 'I am enough.'",
    "Stretch your arms and take a deep breath.",
    "Pet a dog or imagine one.",
    "Write down one thing you're grateful for.",
    "Take a sip of your favorite drink.",
  ],
  tails: [
    "Reflect on why you avoid addressing your biggest fear.",
    "Think about how fleeting your happiest memory is.",
    "Question if you're living or just existing.",
    "Think about a regret you'd erase if you could.",
    "Consider what part of your personality you hide from others.",
    "Contemplate the last time you truly felt alive.",
    "Ponder why you hold onto grudges.",
    "Wonder if you've peaked already in life.",
    "Imagine the legacy you'd leave if today were your last day.",
    "Ask yourself what you fear losing the most.",
  ],
} as const;

export const Outcome = ({ result }: OutcomeProps) => {
  const [usedOutcomes, setUsedOutcomes] = useState<{
    heads: Set<number>;
    tails: Set<number>;
  }>({
    heads: new Set(),
    tails: new Set(),
  });

  const getUniqueRandomOutcome = useCallback((type: "heads" | "tails") => {
    const outcomes = OUTCOMES[type];
    const used = usedOutcomes[type];
    
    // If all outcomes have been used, reset the set
    if (used.size === outcomes.length) {
      setUsedOutcomes(prev => ({
        ...prev,
        [type]: new Set(),
      }));
      return outcomes[Math.floor(Math.random() * outcomes.length)];
    }
    
    // Get a random unused index
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * outcomes.length);
    } while (used.has(randomIndex));
    
    // Update used indices
    setUsedOutcomes(prev => ({
      ...prev,
      [type]: new Set([...prev[type], randomIndex]),
    }));
    
    return outcomes[randomIndex];
  }, [usedOutcomes]);

  if (!result) return null;

  const outcome = getUniqueRandomOutcome(result);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={`mt-8 p-6 rounded-lg ${
        result === "heads"
          ? "bg-heads-gradient text-gray-800"
          : "bg-tails-gradient text-white"
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-2">
        {result.toUpperCase()}
      </h2>
      <p className="text-lg opacity-80 mb-4">
        {result === "heads"
          ? "Time for something uplifting!"
          : "Time for deep reflection..."}
      </p>
      <p className="text-xl font-medium mt-4">{outcome}</p>
    </motion.div>
  );
};