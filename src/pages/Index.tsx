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
      className={`min-h-screen flex flex-col items-center justify-between p-4 transition-colors duration-500 ${
        result === "heads"
          ? "bg-gradient-to-br from-yellow-100 to-blue-200"
          : result === "tails"
          ? "bg-gradient-to-br from-purple-900 to-gray-900"
          : "bg-gradient-to-br from-gray-100 to-gray-200"
      }`}
    >
      <div className="max-w-2xl mx-auto text-center mb-4">
        <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${
          result === "tails" ? "text-white" : "text-gray-900"
        }`}>
          Coin Flip Extremes
        </h1>
        <p className={`text-base md:text-lg opacity-80 ${
          result === "tails" ? "text-white" : "text-gray-900"
        }`}>
          Elevating the classic coin flip to absurd extremes.
        </p>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <Coin onFlipComplete={handleFlipComplete} />
        <Outcome result={result} />
      </div>

      <footer className={`w-full text-center py-2 ${
        result === "tails" ? "text-white" : "text-gray-900"
      }`}>
        <p className="text-sm opacity-75">"Play series" by Samrat Talukder</p>
      </footer>
    </motion.div>
  );
};

export default Index;