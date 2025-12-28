import { DerivLogo } from '@deriv-com/ui';
import { motion } from 'framer-motion';
import './initial-loader.scss';

export default function InitialLoader() {
    return (
        <div className='initial-loader-container'>
            <motion.div
                className='prominent-logo-container'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="profithub-logo-wrapper">
                    <DerivLogo variant='wallets' className="prominent-logo" />
                    <span className="brand-name">Profithub</span>
                </div>
            </motion.div>

            <motion.div
                className='loader-content'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="loading-bar-container">
                    <motion.div
                        className="loading-bar"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
                <p className="loading-text">Initializing application...</p>
            </motion.div>

            <motion.div
                className='footer-branding'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <span className="powered-by-text">Powered by</span>
                <DerivLogo variant='wallets' className="deriv-logo-small" />
            </motion.div>
        </div>
    );
}

