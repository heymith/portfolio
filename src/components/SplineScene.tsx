import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const SplineScene = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  const handleSplineError = () => {
    setError('Failed to load 3D scene');
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 w-full h-full z-0"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <Loader2 className="w-8 h-8 text-purple-400 animate-spin" />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      <video
        src="https://mylivewallpapers.com/wp-content/uploads/Sci-Fi/PREVIEW-Black-Hole-Flares.mp4"
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover z-0"
      />

      <Spline
        className="w-full h-full relative z-10"
        scene="https://prod.spline.design/yy7ponW7USPK53HQ/scene.splinecode"
        onLoad={handleSplineLoad}
        onError={handleSplineError}
      />
    </motion.div>
  );
};

export default SplineScene;
