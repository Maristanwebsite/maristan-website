// Example usage in a page
import dynamic from 'next/dynamic';

const DynamicFundraiseUpWidget = dynamic(
	() => import('../fundraiseup'),
	{ ssr: false }, // This ensures the component only renders on the client side
);

const YourPage = () => {
	return (
		<div>
			{/* Other content */}
			<DynamicFundraiseUpWidget />
		</div>
	);
};

export default YourPage;
