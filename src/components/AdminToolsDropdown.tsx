import React, { useState } from 'react';
import { Activity, Terminal, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Agent3Widget from './Agent3Widget';
import { NetworkStatus } from './NetworkStatus';
import { AutoRefreshBadge } from './AutoRefreshBadge';

export const AdminToolsDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNetwork, setShowNetwork] = useState(false);
    const [showAgent3, setShowAgent3] = useState(false);

    return (
        <div className="fixed bottom-24 right-4 md:bottom-6 md:right-24 z-[9000] flex flex-col items-end gap-2">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-2xl backdrop-blur-md flex flex-col gap-2 w-48 mb-2"
                    >
                        <div className="text-xs font-bold text-zinc-500 mb-1 uppercase tracking-wider">Admin Tools</div>
                        <button 
                            className={`flex items-center gap-2 p-2 rounded-lg text-sm transition-colors ${showNetwork ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400' : 'hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300'}`}
                            onClick={() => setShowNetwork(!showNetwork)}
                        >
                            <Activity className="w-4 h-4" />
                            API Health
                        </button>
                        <button 
                            className={`flex items-center gap-2 p-2 rounded-lg text-sm transition-colors ${showAgent3 ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400' : 'hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300'}`}
                            onClick={() => setShowAgent3(!showAgent3)}
                        >
                            <Terminal className="w-4 h-4" />
                            Prompt Editor
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 rounded-full border shadow-lg backdrop-blur transition-colors ${isOpen ? 'bg-orange-500 text-white border-orange-600' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}
                title="Admin Tools"
            >
                <ShieldAlert className="w-5 h-5" />
            </button>

            {showNetwork && (
                <div className="fixed top-20 right-4 z-[9999] flex flex-col gap-2 items-end pointer-events-none *:pointer-events-auto">
                    <NetworkStatus />
                    <AutoRefreshBadge />
                </div>
            )}
            
            {showAgent3 && (
                <div className="fixed bottom-24 left-4 md:bottom-20 md:left-20 z-[9999] w-96 md:w-[450px]">
                    <Agent3Widget />
                </div>
            )}
        </div>
    );
};
