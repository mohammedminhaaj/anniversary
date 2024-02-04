const Background = (props) => (
	<div className='animate-gradient bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex justify-center items-center p-10'>
		{props.children}
	</div>
);

export default Background;
