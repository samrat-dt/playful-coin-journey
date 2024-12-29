import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";

interface OutcomeProps {
  result: "heads" | "tails" | null;
}

const OUTCOMES = {
  heads: [
    "Take a deep breath and smile.",
    "Share a kind word with someone.",
    "Dance to your favorite song.",
    "Write down three things you're grateful for.",
    "Give yourself a compliment.",
    "Do a random act of kindness.",
    "Take a moment to stretch and relax.",
    "Call someone you care about.",
    "Try something new today.",
    "Make someone laugh.",
  ],
  tails: [
    "Reflect on your biggest fear and why it holds you back.",
    "Consider a time you disappointed yourself - what did you learn?",
    "Think about the path not taken in your life.",
    "Contemplate your legacy - what will you leave behind?",
    "Examine a relationship you've let slip away.",
    "Question your current life direction.",
    "Consider what you'd do differently if you could start over.",
    "Reflect on a moment that changed everything.",
    "Think about what truly matters in your life.",
    "Contemplate your deepest regret.",
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

  const [currentOutcome, setCurrentOutcome] = useState<string | null>(null);

  const getUniqueRandomOutcome = useCallback((type: "heads" | "tails") => {
    const outcomes = OUTCOMES[type];
    const used = usedOutcomes[type];
    
    if (used.size === outcomes.length) {
      setUsedOutcomes(prev => ({
        ...prev,
        [type]: new Set(),
      }));
      return outcomes[Math.floor(Math.random() * outcomes.length)];
    }
    
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * outcomes.length);
    } while (used.has(randomIndex));
    
    setUsedOutcomes(prev => ({
      ...prev,
      [type]: new Set([...prev[type], randomIndex]),
    }));
    
    return outcomes[randomIndex];
  }, [usedOutcomes]);

  useEffect(() => {
    if (result && !currentOutcome) {
      const outcome = getUniqueRandomOutcome(result);
      setCurrentOutcome(outcome);
    } else if (!result) {
      setCurrentOutcome(null);
    }
  }, [result, getUniqueRandomOutcome, currentOutcome]);

  if (!result || !currentOutcome) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={`mt-6 p-4 rounded-lg max-w-md ${
        result === "heads"
          ? "bg-gradient-to-br from-gray-200 to-white text-gray-800"
          : "bg-gradient-to-br from-gray-700 to-gray-900 text-white"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        {result === "heads" ? "Time for joy!" : "Time for reflection..."}
      </h2>
      <p className="text-lg opacity-90">{currentOutcome}</p>
    </motion.div>
  );
};