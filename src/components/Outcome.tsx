import { motion } from "framer-motion";

interface OutcomeProps {
  result: "heads" | "tails" | null;
}

const outcomes = {
  heads: [
    "Compliment yourself in the mirror.",
    "Smile for 10 seconds.",
    "Pet a dog or imagine one.",
    "Drink a glass of water.",
    "Say \"I'm proud of myself.\"",
  ],
  tails: [
    "Reflect on why you avoid addressing your biggest fear.",
    "Contemplate the last time you truly felt alive.",
    "Question if you're living or just existing.",
    "Think about how fleeting your happiest memory is.",
    "Wonder if you've peaked already in life.",
  ],
};

export const Outcome = ({ result }: OutcomeProps) => {
  if (!result) return null;

  const getRandomOutcome = (type: "heads" | "tails") => {
    const options = outcomes[type];
    return options[Math.floor(Math.random() * options.length)];
  };

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
        {result.toUpperCase()}!
      </h2>
      <p className="text-lg opacity-80 mb-4">
        {result === "heads"
          ? "Time for something uplifting!"
          : "Time for deep reflection..."}
      </p>
      <p className="text-xl font-medium mt-4">
        {getRandomOutcome(result)}
      </p>
    </motion.div>
  );
};