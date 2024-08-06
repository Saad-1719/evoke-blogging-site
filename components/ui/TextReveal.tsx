// "use client";

// import { FC, ReactNode, useRef,useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// import { cn } from "@/components/lib/util";

// interface TextRevealByWordProps {
// 	text: string;
// 	className?: string;
// }

// export const TextRevealByWord: FC<TextRevealByWordProps> = ({
// 	text,
// 	className,
// }) => {
// 	const targetRef = useRef<HTMLDivElement | null>(null);

// 	const { scrollYProgress } = useScroll({
// 		target: targetRef,
// 		offset: ["start end", "end start"],
// 	});
// 	const words = text.split(" ");

// 	return (
// 		<div ref={targetRef} className={cn("relative z-0", className)}>
// 			<div
// 				className={
// 					"sticky top-0 mx-auto flex  max-w-5xl items-center bg-transparent px-[1rem] pb-10"
// 				}
// 			>
// 				<p
// 					ref={targetRef}
// 					className={
// 						"flex flex-wrap p-5 text-lg leading-loose text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
// 					}
// 				>
// 					{words.map((word, i) => {
// 						const start = i / words.length;
// 						const end = start + 1 / words.length;
// 						return (
// 							<Word key={i} progress={scrollYProgress} range={[start, end]}>
// 								{word}
// 							</Word>
// 						);
// 					})}
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// interface WordProps {
// 	children: ReactNode;
// 	progress: any;
// 	range: [number, number];
// }

// const Word: FC<WordProps> = ({ children, progress, range }) => {
// 	const opacity = useTransform(progress, range, [0, 1], { clamp: false });

	
// 	return (
// 		<span className="xl:lg-3 relative mx-1 lg:mx-2.5">
// 			<span className={"absolute opacity-30"}>{children}</span>
// 			<motion.span
// 				style={{ opacity: opacity }}
// 				className={"text-black dark:text-white"}
// 			>
// 				{children}
// 			</motion.span>
// 		</span>
// 	);
// };

// export default TextRevealByWord;


// "use client";

// import { FC, ReactNode, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { cn } from "@/components/lib/util";

// interface TextRevealByWordProps {
// 	text: string;
// 	className?: string;
// }

// export const TextRevealByWord: FC<TextRevealByWordProps> = ({
// 	text,
// 	className,
// }) => {
// 	const targetRef = useRef<HTMLDivElement | null>(null);

// 	const { scrollYProgress } = useScroll({
// 		target: targetRef,
// 		offset: ["start end", "end start"],
// 	});
// 	const words = text.split(" ");
// 	const totalWords = words.length;

// 	return (
// 		<div ref={targetRef} className={cn("z-0 py-10", className)}>
// 			<div
// 				className={
// 					"sticky top-0 mx-auto flex max-w-5xl items-center bg-transparent px-[1rem] pb-10"
// 				}
// 			>
// 				<p
// 					className={
// 						"flex flex-wrap p-5 text-lg leading-loose text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
// 					}
// 				>
// 					{words.map((word, i) => {
// 						const start = i / totalWords;
// 						const end = (i + 1) / totalWords;
// 						return (
// 							<Word key={i} progress={scrollYProgress} range={[start, end]}>
// 								{word}
// 							</Word>
// 						);
// 					})}
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// interface WordProps {
// 	children: ReactNode;
// 	progress: any;
// 	range: [number, number];
// }

// const Word: FC<WordProps> = ({ children, progress, range }) => {
// 	const opacity = useTransform(progress, range, [0, 1], { clamp: false });

// 	return (
// 		<span className="xl:lg-3 relative mx-1 lg:mx-2.5">
// 			<span className={"absolute opacity-30"}>{children}</span>
// 			<motion.span
// 				style={{ opacity: opacity }}
// 				className={"text-black dark:text-white"}
// 			>
// 				{children}
// 			</motion.span>
// 		</span>
// 	);
// };

// export default TextRevealByWord;


// "use client";

// import { FC, ReactNode, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { cn } from "@/components/lib/util";

// interface TextRevealByWordProps {
// 	text: string;
// 	className?: string;
// }

// export const TextRevealByWord: FC<TextRevealByWordProps> = ({
// 	text,
// 	className,
// }) => {
// 	const targetRef = useRef<HTMLDivElement | null>(null);

// 	const { scrollYProgress } = useScroll({
// 		target: targetRef,
// 		offset: ["start end", "end start"],
// 	});
// 	const words = text.split(" ");
// 	const totalWords = words.length;

// 	return (
// 		<div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
// 			<div
// 				className={
// 					"sticky top-0 mx-auto flex max-w-5xl items-center bg-transparent px-[1rem] pb-10"
// 				}
// 			>
// 				<p
// 					className={
// 						"flex flex-wrap p-5 text-lg leading-loose text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
// 					}
// 				>
// 					{words.map((word, i) => {
// 						const start = i / totalWords;
// 						const end = (i + 1) / totalWords;
// 						return (
// 							<Word key={i} progress={scrollYProgress} range={[start, end]}>
// 								{word}
// 							</Word>
// 						);
// 					})}
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// interface WordProps {
// 	children: ReactNode;
// 	progress: any;
// 	range: [number, number];
// }

// const Word: FC<WordProps> = ({ children, progress, range }) => {
// 	const opacity = useTransform(progress, range, [0, 1], { clamp: false });

// 	return (
// 		<span className="xl:lg-3 relative mx-1 lg:mx-2.5">
// 			<span className={"absolute opacity-30"}>{children}</span>
// 			<motion.span
// 				style={{ opacity: opacity }}
// 				className={"text-black dark:text-white"}
// 			>
// 				{children}
// 			</motion.span>
// 		</span>
// 	);
// };

// export default TextRevealByWord;


"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/components/lib/util";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[70%] max-w-4xl items-center bg-transparent px-[1rem] pt-16"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap text-xl  text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
