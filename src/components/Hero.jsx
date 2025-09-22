import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section id='home' className="flex  items-center pt-[120px] bg-radial-ellipse justify-left text-left">
     <div className="flex flex-col md:flex-row">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-8xl w-2/3 font-customFont-100 mb-6 tracking-[0.1em] ms-5 text-black"
      >
        ONE STOP DESTINATION FOR YOUR BUSINESS SOLUTIONS
      </motion.h1>

      <div className="flex flex-col justify-center items-center">
      <motion.img src="/images/N_Logo.png" alt="Nobi Logo" 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-[300px] h-[250px] object-contain mb-4 md:w-1/3"/>
         <p>
          A dedicated team of professionals working together on every brand.<br/>
          Gaining a 360-degree understanding to ensure there is no part of the brand’s story<br/>
          that’s left untold, brainstorming extensively and filter every idea<br/>
          that comes our way and choosing what best aligns with the brand and its story.
         </p> 
      </div> 
      </div>
    </section>
  );
}