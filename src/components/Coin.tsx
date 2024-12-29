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
    const newRotation = rotation + 1800 + (Math.random() > 0.5 ? 180 : 0);
    setRotation(newRotation);
    
    setTimeout(() => {
      const result = Math.round(newRotation / 180) % 2 === 0 ? "heads" : "tails";
      onFlipComplete(result);
      setIsFlipping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 relative cursor-pointer perspective-1000"
        animate={{ rotateY: rotation }}
        transition={{ duration: 2, ease: [0.68, -0.55, 0.27, 1.55] }}
        onClick={flipCoin}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Heads Side */}
        <div className={cn(
          "absolute inset-0 rounded-full bg-heads-gradient flex items-center justify-center backface-hidden",
          "text-3xl font-bold shadow-lg transition-transform duration-500"
        )}>
          <div className="flex flex-col items-center">
            <span className="text-4xl">HEADS</span>
            <div className="w-12 h-12 border-4 border-black rounded-full mt-2" />
          </div>
        </div>

        {/* Tails Side */}
        <div className={cn(
          "absolute inset-0 rounded-full bg-tails-gradient flex items-center justify-center backface-hidden",
          "text-3xl font-bold shadow-lg text-white transition-transform duration-500"
        )}
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl">TAILS</span>
            <div className="w-12 h-12 border-4 border-white rounded-full mt-2" />
          </div>
        </div>
      </motion.div>
      
      <motion.button
        onClick={flipCoin}
        disabled={isFlipping}
        className={cn(
          "w-20 h-20 rounded-full text-white font-semibold shadow-lg",
          isFlipping ? "bg-gray-400" : "bg-gradient-to-r from-orange-400 to-pink-500",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Flip
      </motion.button>
    </div>
  );
};