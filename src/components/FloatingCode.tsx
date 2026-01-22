import { motion } from 'framer-motion';

const codeSnippets = [
    'const hack = () => innovate();',
    'while(true) { build(); }',
    'import { genius } from "you";',
    'async function win() {}',
    'git commit -m "victory"',
    '<Code quality="excellent" />',
    'npm run dominate',
    'export default Champion;',
    '// TODO: Change the world',
    'let dreams = await reality;',
    'function solve(problem) {}',
    'const future = build(now);',
];

export function FloatingCode() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
            {codeSnippets.map((code, index) => (
                <motion.div
                    key={index}
                    initial={{
                        x: `${(index * 17) % 100}%`,
                        y: '110%',
                        opacity: 0,
                    }}
                    animate={{
                        y: '-10%',
                        opacity: [0, 0.15, 0.15, 0],
                    }}
                    transition={{
                        duration: 20 + Math.random() * 15,
                        repeat: Infinity,
                        delay: index * 2.5,
                        ease: 'linear',
                    }}
                    className="absolute whitespace-nowrap font-mono text-sm md:text-base"
                    style={{
                        left: `${5 + (index * 17) % 85}%`,
                        color: index % 2 === 0 ? 'rgba(249, 115, 22, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                    }}
                >
                    {code}
                </motion.div>
            ))}
        </div>
    );
}
