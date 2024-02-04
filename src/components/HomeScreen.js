import { AnimatePresence, motion } from 'framer-motion';
import Card from './Card';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Repeat } from 'react-feather';
import card1Image from '../assets/digital-art.jpg';
import card2Image1 from '../assets/Aina1_Slide3.jpg';
import card2Image2 from '../assets/Aina2_Slide3.jpg';
import card2Image3 from '../assets/Aina3_Slide3.jpg';
import card2Image4 from '../assets/Aina4_Slide3.jpg';
import card3Image from '../assets/texts.png';
import card4Image1 from '../assets/Me1_slide5.jpg';
import card4Image2 from '../assets/Me2_slide5.jpg';
import mem1 from '../assets/mem1_slide6.jpg';
import mem2 from '../assets/mem2_slide6.jpg';
import mem3 from '../assets/mem3_slide6.jpg';
import mem4 from '../assets/mem4_slide6.jpg';
import mem5 from '../assets/mem5_slide6.jpg';
import mem6 from '../assets/mem6_slide6.jpg';
import mem7 from '../assets/mem7_slide6.jpg';
import mem8 from '../assets/mem8_slide6.jpg';
import mem9 from '../assets/mem9_slide6.jpg';
import mem10 from '../assets/mem10_slide6.jpg';
import mem11 from '../assets/mem11_slide6.jpg';
import marr1 from '../assets/marr1.JPEG';
import marr2 from '../assets/marr2.JPEG';
import marr3 from '../assets/marr3.JPEG';
import vac1 from '../assets/vac1.JPEG';
import vac2 from '../assets/vac2.JPEG';
import vac3 from '../assets/vac3.JPEG';
import vac4 from '../assets/vac4.JPEG';
import vac5 from '../assets/vac5.JPEG';
import vac6 from '../assets/vac6.JPEG';
import vac7 from '../assets/vac7.JPEG';
import vac8 from '../assets/vac8.JPEG';
import vac9 from '../assets/vac9.JPEG';
import fin1 from '../assets/fin1.jpg';
import fin2 from '../assets/fin2.jpg';
import fin3 from '../assets/fin3.jpg';

const currentCard = {
	0: (
		<Card
			title='Welcome Message'
			content="Hello, my love. This website is my special gift for our 2nd anniversary on February 6th, 2024. It marks the day when I promised your dad to take care of you with all the love and respect in the world. It's hard to believe it's been two years because it feels like we've been together for a lifetime. This website is simple to use, with easy navigation and fun interactive pictures of us that you can move around as you like. I made this in a day, focusing more on sharing our story than fixing every little bug. So, let's dive in and reminisce about our journey together by clicking 'Next'."
		/>
	),
	1: (
		<Card
			title='The Beginning'
			content="Our story began with a glance. I still remember seeing you for the first time near the computer science block, your legs swinging, dressed in a white hijab and a light blue top. That image is forever etched in my memory. I've tried to capture that moment with a digital art piece here, though it's not perfect, it brings back all the feelings of that day."
			images={[card1Image]}
		/>
	),
	2: (
		<Card
			title='A Name Misunderstood'
			content="After that first sight, I couldn't rest until I knew your name. Through a mix-up, I first learned it as 'Kulshuma' from Afraa, a name unfamiliar yet intriguing. The puzzle of your identity only deepened with time until a photo from Shazia revealed the truth. That moment of recognition was unforgettable, leading me to search for you on Facebook, eager to know more about you."
			images={[card2Image1, card2Image2, card2Image3, card2Image4]}
		/>
	),
	3: (
		<Card
			title='Our First Conversation'
			content='Months later, a text from you changed everything. You reached out for help with a subject, believing I had connections. Our initial conversation, based on a misunderstanding, slowly turned into frequent chats, covering everything and anything. Those messages became the highlight of my days, drawing me closer to you with each word.'
			images={[card3Image]}
		/>
	),
	4: (
		<Card
			title='The First Date'
			content="Admitting my feelings to Shazia was a turning point. She helped bridge the gap between us, encouraging me to take the leap and ask you out. Despite my nerves, our coffee date at 'Friends Cafe' was a moment I'll never forget. It was a simple outing, but sharing that time with you was everything I had hoped for."
			images={[card4Image1, card4Image2]}
		/>
	),
	5: (
		<Card
			title='The Turning Point: 20th September 2017'
			content="Our relationship took time to blossom. Despite my repeated confessions of love, you needed time. After a particularly tough conversation, I thought all was lost, but the following day, with Shazia's help, you agreed to start our journey together. That day, our love story truly began, marking the start of countless shared moments and memories."
		/>
	),
	6: (
		<Card
			title='Creating Memories Together'
			content="Reflecting on our journey brings a smile to my face. From the early days of our acquaintance to the life we've built together, every memory is a treasure. It's been more than six years of love, growth, and shared dreams, officially two, but every moment feels significant in the tapestry of our life together."
			images={[
				mem1,
				mem2,
				mem3,
				mem4,
				mem5,
				mem6,
				mem7,
				mem8,
				mem9,
				mem10,
				mem11,
			]}
		/>
	),
	7: (
		<Card
			title='Our Wedding Day: 6th February 2022'
			content="Our marriage was a dream come true, a day when all our hopes and promises were woven into reality. Despite the ups and downs, we've grown stronger together, embarking on a journey filled with love, understanding, and mutual respect."
			images={[marr1, marr2, marr3]}
		/>
	),
	8: (
		<Card
			title='Adventures and Vacations'
			content="Our life is more than just the moments we spend at home; it's about the adventures we've shared across the globe. From the serene beaches of Maldives to the bustling streets of Dubai, each trip has been a chapter in our ongoing story, filled with laughter, discovery, and the joy of being together."
			images={[vac1, vac2, vac3, vac4, vac5, vac6, vac7, vac8, vac9]}
		/>
	),
	9: (
		<Card
			title='Gratitude and Love'
			content="Looking back, I'm overwhelmed with gratitude for every moment we've shared. This website, a digital diary of our love, is just a small token of my appreciation for you. You've illuminated my life in ways I could never have imagined. Here's to continuing to write our story, to be an inspiration for our child, and to cherish each moment we're given. Thank you for being my partner, my love, and my best friend. Happy 2nd Anniversary, my love. Here's to many more years of happiness and love together. Love, Minhaaj. ❤️"
			images={[fin1, fin2, fin3]}
		/>
	),
};

const HomeScreen = () => {
	const [currentCardNumber, setCurrentCardNumber] = useState(0);
	const reachedEnd =
		Object.keys(currentCard).length === currentCardNumber + 1;

	return (
		<AnimatePresence mode='wait'>
			<motion.section
				key={`card-${currentCardNumber}`}
				className='basis-full relative'
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}>
				{currentCard[currentCardNumber]}
				<button
					onClick={() => {
						setCurrentCardNumber((prev) =>
							reachedEnd ? 0 : prev + 1
						);
					}}
					type='button'
					title={reachedEnd ? 'Replay' : 'Next'}
					className='absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex gap-2 items-center justify-center rounded-full px-4 py-2 font-extrabold text-xl bg-fuchsia-200 ring-0'>
					{reachedEnd ? (
						<Repeat className='flex-none' />
					) : (
						<ArrowRight className='flex-none' />
					)}
				</button>
				{currentCardNumber !== 0 && (
					<button
						onClick={() => {
							setCurrentCardNumber((prev) => prev - 1);
						}}
						type='button'
						title='Previous'
						className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center justify-center rounded-full px-4 py-2 font-extrabold text-xl bg-fuchsia-300 ring-0'>
						<ArrowLeft className='flex-none' />
					</button>
				)}
			</motion.section>
		</AnimatePresence>
	);
};

export default HomeScreen;
