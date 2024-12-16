import { motion } from "motion/react";
import team1 from "../../assets/Banner/team1.jpg";
import team2 from "../../assets/Banner/team2.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 justify-items-end">
          <motion.img
            animate={{ y: [50, 80, 50] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            src={team1}
            className="max-w-sm w-72 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 130, 100] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            src={team2}
            className="max-w-sm w-72 rounded-t-3xl rounded-bl-3xl border-r-4 border-b-4 border-blue-500 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50, color: ["blue"] }}
            transition={{
              duration: 3,
              delay: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest Job For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
