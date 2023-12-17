import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div initial={{opacity:0, scale:0}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.4, type: "spring"}} style={{ width: "100%" }}>
      <h3 className={`text-center navText`}>Welcome</h3>
      <p className="text-center">Hang in there, still under development.</p>
    </motion.div>
  )
}

export default Home;
