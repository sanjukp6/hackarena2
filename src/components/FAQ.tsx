import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: 'Who can participate in HackArena 1.0?',
        answer: 'Any undergraduate student from any recognized institution can participate. Teams can have 2-4 members from the same or different institutions.',
    },
    {
        question: 'Is there a registration fee?',
        answer: 'Initial idea submission is completely free! Teams selected for the offline round will need to pay ₹1200 as registration fee. We believe in making innovation accessible to everyone.',
    },
    {
        question: 'What should I bring to the hackathon?',
        answer: 'Bring your laptop, charger, student ID, and any hardware you plan to use. We will provide food, snacks, and workspace throughout the event.',
    },

    {
        question: 'What are the judging criteria?',
        answer: 'Projects will be judged on Innovation (30%), Technical Complexity (25%), Design & UX (20%), Impact & Scalability (15%), and Presentation (10%).',
    },
    {
        question: 'Will there be mentors available?',
        answer: 'Yes! Industry experts and faculty mentors will be available throughout the event to guide teams and provide technical support.',
    },
];

function FAQAccordion({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
        >
            <button
                onClick={onClick}
                className={`w-full p-3 md:p-5 rounded-xl md:rounded-2xl flex items-center justify-between gap-3 md:gap-4 transition-all duration-300 ${isOpen
                    ? 'bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30'
                    : 'bg-gray-900/50 border border-gray-800 hover:border-gray-700'
                    }`}
            >
                <span className={`text-left text-sm md:text-base font-medium ${isOpen ? 'text-orange-400' : 'text-white'}`}>
                    {item.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 ${isOpen ? 'text-orange-400' : 'text-gray-500'}`}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>

            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="px-3 py-3 md:p-5 text-gray-400 text-sm md:text-base leading-relaxed">
                    {item.answer}
                </div>
            </motion.div>
        </motion.div>
    );
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative py-12 md:py-20 bg-black overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
                    >
                        <HelpCircle className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
                            Got Questions?
                        </span>
                    </motion.div>

                    <h2 className="font-display text-2xl md:text-5xl font-black text-white mb-3 md:mb-4">
                        Frequently Asked{' '}
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>

                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                        Everything you need to know about HackArena 1.0
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqItems.map((item, index) => (
                        <FAQAccordion
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 mb-4">Still have questions?</p>
                    <a
                        href="mailto:biet.hackarena@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 hover:border-cyan-400 transition-colors"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
