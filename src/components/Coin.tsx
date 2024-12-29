import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CoinProps {
  onFlipComplete: (result: "heads" | "tails") => void;
}

export const Coin = ({ onFlipComplete }: CoinProps) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [rotation, setRotation] = useState(0);

  const flipCoin = () => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    // Random number of rotations (between 5-7 full rotations)
    const randomRotations = 5 + Math.floor(Math.random() * 3);
    const newRotation = rotation + (randomRotations * 360) + (Math.random() > 0.5 ? 180 : 0);
    setRotation(newRotation);
    
    // Calculate result based on final rotation
    setTimeout(() => {
      const result = Math.round(newRotation / 360) % 2 === 0 ? "heads" : "tails";
      onFlipComplete(result);
      setIsFlipping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 relative cursor-pointer perspective-1000"
        animate={{ 
          rotateY: rotation,
        }}
        transition={{ 
          duration: 2,
          ease: [0.68, -0.55, 0.27, 1.55]
        }}
        onClick={flipCoin}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Heads Side */}
        <div className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-white",
          "flex items-center justify-center backface-hidden border-4 border-gray-300",
          "text-4xl font-bold text-gray-800 shadow-lg"
        )}>
          HEADS
        </div>

        {/* Tails Side */}
        <div className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-900",
          "flex items-center justify-center backface-hidden border-4 border-gray-600",
          "text-4xl font-bold text-white shadow-lg transform rotate-y-180"
        )}>
          TAILS
        </div>
      </motion.div>
      
      <motion.button
        onClick={flipCoin}
        disabled={isFlipping}
        className={cn(
          "px-8 py-3 rounded-full text-white font-semibold shadow-lg",
          "bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isFlipping ? "Flipping..." : "Flip Coin"}
      </motion.button>
    </div>
  );
};