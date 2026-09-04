"use client";
import { containerVariants, itemVariants } from "@/src/utils/motion";
import { motion } from "framer-motion";
import MoltenMetal from "../ui/MoltenMetal";
import TextType from "../ui/TypeText";

const StrokedText = ({
  children,
  className = "",
  fillColor = "transparent",
  strokeColor = "var(--color-primary)",
}: {
  children: React.ReactNode;
  className?: string;
  fillColor?: string;
  strokeColor?: string;
}) => (
  <span
    className={className}
    style={{
      color: fillColor,
      WebkitTextStroke: `4px ${strokeColor}`,
      textShadow: `
        -3px -3px 0 ${strokeColor},
        3px -3px 0 ${strokeColor},
        -3px 3px 0 ${strokeColor},
        3px 3px 0 ${strokeColor},
        0 -3px 0 ${strokeColor},
        0 3px 0 ${strokeColor},
        -3px 0 0 ${strokeColor},
        3px 0 0 ${strokeColor}
      `,
    }}
  >
    {children}
  </span>
);
const Hero = () => {
  return (
    <section
      id="home"
      
      className="relative min-h-[85vh] sm:min-h-screen bg-surface overflow-hidden flex items-start sm:items-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-0"
    >
      {/* MoltenMetal background */}
      <div className="absolute inset-0 z-0">
        <MoltenMetal
          color1="#FDB913"
          color2="#FDD873"
          color3="#FFFFFF"
          speed={0.35}
          scale={4}
          detail={3}
          glow={1.6}
          coreSize={0.1}
          swirl={1}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.3}
          colorMode="molten"
          grain
          grainIntensity={0.05}
          mouseInteraction
          mouseStrength={0.3}
          opacity={0.85}
        />
      </div>
      <div className="absolute inset-0 bg-dark/40 z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        {/* Three-row staggered headline, aligned start / center / end */}
        <div className="relative flex flex-col">
          <motion.div variants={itemVariants} className="self-start">
            <motion.h1
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-wide"
            >
              <StrokedText strokeColor="var(--color-light)">
                DIGITAL
              </StrokedText>
            </motion.h1>
          </motion.div>

          <div className="relative flex items-center justify-center mt-2 sm:mt-4 md:mt-6 self-center">
            <div className="absolute -left-4 sm:left-4 md:left-10 -bottom-6 sm:-bottom-10 z-0 opacity-95"></div>

            <motion.div variants={itemVariants} className="relative z-10">
              <motion.h1
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-wide"
              >
                <StrokedText
                  fillColor="transparent"
                  strokeColor="var(--color-primary)"
                >
                  STRATEGY
                </StrokedText>
              </motion.h1>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-2 sm:mt-4 md:mt-12 self-end"
          >
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-wide">
              <StrokedText strokeColor="var(--color-light)">
                <TextType
                  as="span"
                  text={["GROWTH"]}
                  typingSpeed={150}
                  initialDelay={1200}
                  pauseDuration={2000}
                  loop={true}
                  showCursor
                  cursorCharacter="."
                  cursorBlinkDuration={0.5}
                />
              </StrokedText>
            </h1>
          </motion.div>
        </div>
        ``
        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-2xl mt-7 sm:mt-10 ml-1"
        >
          We help brands grow through social media, SEO, and performance
          marketing. From content to conversions — impact across every digital
          touchpoint.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
