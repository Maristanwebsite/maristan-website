import { HeadingBar } from '@/common/ui/heading-bar';
import Image from 'next/image';
import { ResearchCard } from './research-card';

export const Palestine = ({ card, card2 }) => {
	const headingBar = {
		title: 'For Those Concerned About Palestine',
	};
	return (
		<section className="relative">
			<div className="max-w-[1440px] mx-auto px-4">
				<HeadingBar data={headingBar} />
				<div>
					<ResearchCard data={card} />
				</div>
			</div>
			<Image
				src="/images/Compound Path.png"
				width={205}
				height={112}
				alt="Vector1"
				className="absolute top-[-5px] left-[-35px] hidden md:block"
			/>
		</section>
	);
};
