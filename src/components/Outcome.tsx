import { motion } from "framer-motion";

interface OutcomeProps {
  result: "heads" | "tails" | null;
}

export const Outcome = ({ result }: OutcomeProps) => {
  if (!result) return null;

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
      <p className="text-lg opacity-80">
        {result === "heads"
          ? "Fortune favors the bold!"
          : "Better luck next time!"}
      </p>
    </motion.div>
  );
};