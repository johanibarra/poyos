import { motion } from 'framer-motion'
import CountUp from 'react-countup';

interface NumberCounterProps {
    end: number;
    suffix?: string;
    label: string;
}

export const NumberCounter = ({ end, suffix = '', label }: NumberCounterProps) => {
    return (
        <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.p className="text-6xl text-orange-100 font-bold mb-2">
                <CountUp 
                end={end} 
                duration={3}
                separator='.'
                enableScrollSpy
                />
                {suffix}
            </motion.p>
            <p className="text-base font-bold text-orange-100 uppercase">{label}</p>
        </motion.div>
    );
};