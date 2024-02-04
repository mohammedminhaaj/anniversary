import AuthScreen from './components/AuthScreen';
import Background from './components/Background';
import { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import { AnimatePresence } from 'framer-motion';
import AnimatedSection from './components/AnimatedSection';

function App() {
	const [authenticated, setAuthenticated] = useState(false);

	return (
		<Background>
			<AnimatePresence mode='wait'>
				{!authenticated ? (
					<AnimatedSection key='auth'>
						<AuthScreen
							authenticated={authenticated}
							setAuthenticated={setAuthenticated}
						/>
					</AnimatedSection>
				) : (
					<AnimatePresence key='home'>
						<HomeScreen />
					</AnimatePresence>
				)}
			</AnimatePresence>
		</Background>
	);
}

export default App;
