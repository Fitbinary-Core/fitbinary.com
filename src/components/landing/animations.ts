export const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
};

export const stagger = {
    transition: { staggerChildren: 0.1 }
};
