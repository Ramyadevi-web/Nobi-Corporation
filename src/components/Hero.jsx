import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section id='home' className="flex items-center pt-[100px] bg-radial-ellipse justify-left text-left">
     <div className="flex md:flex-row">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-8xl w-2/3 font-customFont-100 mb-6 tracking-[0.1em] ms-5 text-black"
      >
        ONE STOP DESTINATION FOR ALL YOUR BUSINESS SOLUTION
      </motion.h1>

      <div className="flex flex-col justify-center items-center">
      <motion.img src="/images/N_Logo.png" alt="Nobi Logo" 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-[300px] h-[250px] object-contain mb-4 md:w-1/3"/>
         <p>
          Lorem Ipsum is simply dummy text of<br/>
          the printing and typesetting industry.<br/>
          Lorem Ipsum is simply dummy text of the <br/>
          printing and typesetting industry
        </p> 
      </div> 
      </div>
    </section>
  );
}