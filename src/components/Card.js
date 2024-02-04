import { motion } from 'framer-motion';
import { useRef } from 'react';

const Card = (props) => {
	const parentRef = useRef();
	return (
		<div
			ref={parentRef}
			className='bg-pink-100 p-10 overflow-y-auto h-[85svh] rounded-3xl bg-opacity-30 backdrop-filter backdrop-blur-sm shadow-2xl relative'>
			<h1 className='font-extrabold text-3xl mb-4'>{props.title}</h1>
			<p>{props.content}</p>
			{props.images &&
				props.images.map((value, index) => {
					let topValue = Math.floor(Math.random() * 100) + 1;
					let rightValue = Math.floor(Math.random() * 100) + 1;
					let degreeValue = Math.floor(Math.random() * 25) + 1;

					return (
						<picture key={`image-${index}`}>
							<motion.img
								className={`absolute top-${topValue} right-${rightValue} object-cover rounded-lg`}
								initial={{
									rotate: `${
										index % 2 === 0 ? '-' : ''
									}${degreeValue}deg`,
									opacity: 0,
								}}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								whileTap={{ scale: 2.0, rotate: '0deg' }}
								whileDrag={{ scale: 1.1 }}
								src={value}
								height={100}
								width={100}
								drag
								dragConstraints={parentRef}
							/>
						</picture>
					);
				})}
		</div>
	);
};

export default Card;
