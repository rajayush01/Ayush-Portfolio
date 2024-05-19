// components/Moon.js
import { motion } from 'framer-motion';

const Moon = () => {
  return (
    <motion.div
      className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-60"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      style={{ zIndex: -1, transform: 'translate(-50%, -50%)' }}
    >
      <div className="w-48 h-48 bg-gray-900 rounded-full overflow-hidden mx-auto">
  <div className="w-44 h-44 bg-gray-800 rounded-full overflow-hidden mx-auto">
    <div className="w-40 h-40 bg-gray-700 rounded-full overflow-hidden mx-auto">
      <div className="w-36 h-36 bg-gray-600 rounded-full overflow-hidden mx-auto">
        <div className="w-32 h-32 bg-gray-500 rounded-full overflow-hidden mx-auto">
          <div className="w-24 h-24 bg-gray-400 rounded-full overflow-hidden mx-auto" />
        </div>
      </div>
    </div>
  </div>
</div>
    </motion.div>
  );
};

export default Moon;
