'use client'

import Tag from '@/components/Tag';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '../../locales/client';

// Définir un type pour les clés de traduction spécifiques
type FaqKey = "landing.faq.faqs.question" | "landing.faq.faqs.answer" |
    "landing.faq.faqs2.question" | "landing.faq.faqs2.answer" |
    "landing.faq.faqs3.question" | "landing.faq.faqs3.answer" |
    "landing.faq.faqs4.question" | "landing.faq.faqs4.answer" |
    "landing.faq.faqs5.question" | "landing.faq.faqs5.answer" |
    "questionss" | "answerss";

const faqs = [
    {
        questionKey: "landing.faq.faqs.question" as FaqKey,
        answerKey: "landing.faq.faqs.answer" as FaqKey,
    },
    {
        questionKey: "landing.faq.faqs2.question" as FaqKey,
        answerKey: "landing.faq.faqs2.answer" as FaqKey,
    },
    {
        questionKey: "landing.faq.faqs3.question" as FaqKey,
        answerKey: "landing.faq.faqs3.answer" as FaqKey,
    },
    {
        questionKey: "landing.faq.faqs4.question" as FaqKey,
        answerKey: "landing.faq.faqs4.answer" as FaqKey,
    },
    {
        questionKey: "landing.faq.faqs5.question" as FaqKey,
        answerKey: "landing.faq.faqs5.answer" as FaqKey,
    },
];

export default function Faqs() {
    const t = useI18n();
    const [SelectedIndex, setSelectedIndex] = useState(0);
    
    return (
        <section className='py-24'>
            <div className='container'>
                <div className='flex justify-center'>
                    <Tag>FAQS</Tag> 
                </div>
                <h2 className='text-6xl font-medium mt-6 text-center max-w-xl mx-auto'>
                  {t("questionss" as FaqKey)} <span className='bg-gradient-to-t from-violet-vif to-jaune-orange bg-clip-text text-transparent'> {t("answerss" as FaqKey)} </span>
                </h2>
                <div className='mt-12 flex flex-col gap-6 max-w-xl mx-auto'>
                    {faqs.map((faq, faqIndex) => (
                        <div key={faq.questionKey} className='bg-blanc-pur rounded-2xl border border-dark-purple/10 p-6'>
                            <div className='flex justify-between items-center' 
                            onClick={() => setSelectedIndex(faqIndex)}>
                                <h3 className='font-medium'>{t(faq.questionKey)}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="24" 
                                 height="24" 
                                 viewBox="0 0 24 24" 
                                 fill="none" 
                                 stroke="currentColor" 
                                 strokeWidth="2" 
                                 strokeLinecap="round" 
                                 strokeLinejoin="round" 
                                 className={twMerge("feather feather-plus text-jaune-orange flex-shrink-0 transition duration-300",
                                     SelectedIndex === faqIndex && 'rotate-45')}
                                 >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                 </svg>
                            </div>
                            <div>
                                <AnimatePresence>
                                    {SelectedIndex === faqIndex && (
                                        <motion.div initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }} animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }} exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }} className={twMerge(
                                            'mt-6 overflow-hidden')}>
                                          <p className='text-dark-purple/50'>
                                               {t(faq.answerKey)}
                                          </p>
                                       </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
