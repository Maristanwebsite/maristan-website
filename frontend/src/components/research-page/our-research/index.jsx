import { HeadingBar } from '@/common/ui/heading-bar';
import Image from 'next/image';
import { ResearchCards } from './research-cards';

export const OurResearch = ({ card, card2, headingBar }) => {
	return (
		<section className="relative">
			<div className="max-w-[1440px] mx-auto px-4">
				<HeadingBar data={headingBar} />
				<div>
					<ResearchCards data={card} />
				</div>
				<div>
					<ResearchCards data={card2} />
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
