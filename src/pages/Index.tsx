import { useState } from "react";
import { Coin } from "@/components/Coin";
import { Outcome } from "@/components/Outcome";
import { motion } from "framer-motion";

const Index = () => {
  const [result, setResult] = useState<"heads" | "tails" | null>(null);

  const handleFlipComplete = (newResult: "heads" | "tails") => {
    setResult(newResult);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-500 ${
        result === "heads"
          ? "bg-gradient-to-br from-yellow-100 to-blue-200"
          : result === "tails"
          ? "bg-gradient-to-br from-purple-900 to-gray-900"
          : "bg-gradient-to-br from-gray-100 to-gray-200"
      }`}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Coin Flip Extremes
      </h1>
      
      <Coin onFlipComplete={handleFlipComplete} />
      <Outcome result={result} />
    </motion.div>
  );
};

export default Index;