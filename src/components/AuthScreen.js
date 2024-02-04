import { AnimatePresence, motion } from 'framer-motion';
import { Check, Info, Unlock } from 'react-feather';
import { useRef, useState } from 'react';

const USERNAME = 'Aina';
const PASSWORD = 'Aina1234';

const AuthScreen = (props) => {
	const [hasError, setHasError] = useState(false);

	const usernameField = useRef();
	const passwordField = useRef();

	return (
		<motion.div
			layout
			className='flex flex-col gap-3 bg-pink-100 p-10 rounded-3xl bg-opacity-30 backdrop-filter backdrop-blur-sm shadow-2xl text-center'>
			<h1 className='font-extrabold text-3xl'>Hello there,</h1>
			<h2 className='text-xl'>
				Could you please fill out the details below
			</h2>
			<form className='flex flex-col gap-3'>
				<motion.input
					ref={usernameField}
					whileFocus={{ scaleX: 1.05 }}
					placeholder='Username'
					className='rounded-lg bg-purple-100 h-8 px-5 focus:outline-pink-300'
					type='text'
				/>
				<motion.input
					ref={passwordField}
					whileFocus={{ scaleX: 1.05 }}
					placeholder='Password'
					className='rounded-lg h-8 px-5 bg-purple-100 focus:outline-pink-300'
					type='password'
				/>
				<motion.button
					onClick={() => {
						if (usernameField.current.value === USERNAME && passwordField.current.value === PASSWORD) {
							props.setAuthenticated(true);
							hasError && setHasError(false);
						} else {
							!hasError && setHasError(true);
							props.authenticated &&
								props.setAuthenticated(false);
						}
					}}
					whileFocus={{ scaleX: 1.05 }}
					whileTap={{ scale: 0.95 }}
					type='button'
					className='focus:outline-pink-300 ring-0 p-1 rounded-lg bg-gradient-to-r text-white font-extrabold text-lg from-violet-500 to-fuchsia-500 flex gap-3 justify-center items-center'>
					{props.authenticated ? (
						<Check size={15} />
					) : (
						<Unlock size={15} />
					)}
					<span>Unlock</span>
				</motion.button>
			</form>
			<AnimatePresence>
				{hasError && (
					<motion.section
						key='error'
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						exit={{ opacity: 0, scale: 0.5 }}
						className='flex gap-3 justify-between items-center rounded-xl bg-white p-5 bg-opacity-50'>
						<Info className='flex-none' />
						<h2 className='text-xl text-left'>
							Looks like I don't have you in my records. Could you
							please try using a different username?
						</h2>
					</motion.section>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default AuthScreen;
