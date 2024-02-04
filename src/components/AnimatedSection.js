import { motion } from 'framer-motion';

const AnimatedSection = (props) => (
	<motion.section
		initial={{ opacity: 0, scale: 0.5 }}
		exit={{ opacity: 0, scale: 0.5 }}
		animate={{ opacity: 1, scale: 1 }}
		transition={{ duration: 0.5 }}>
		{props.children}
	</motion.section>
);

export default AnimatedSection;
