'use client';
import { Arrow } from '@/common/icons/arrow.svg';
import Image from 'next/image';

export const ResearchCard = ({ data }) => {
	return (
		<section>
			<div className="grid md:grid-cols-2 gap-x-[50px] lg:gap-x-[60px] xl:gap-x-[75px] my-[40px] sm:my-[50px] md:my-[60px] lg:my-[75px] items-center">
				<div className={'md:order-2 pl-[45px] md:pl-[0]'}>
					<h2 className="text-[#111827] text-[24px] lg:text-[26px] leading-[32px] font-[400] ff-convergence">
						{/* {data?.title} */}
						Article Release in Time Magazine
					</h2>
					<p className="mt-[16px] text-[#3B3731] leading-[20px] ff-overpass opacity-[0.8] lg:text-[18px]">
						{/* {data?.description} */}
						Dr. Rania Awaad, President of Maristan, discusses the alarming rise
						of Islamophobia and the “modern media machine’s” messaging that
						enforces the othering of Muslim communities. The surge in hate
						incidents, notably in the United States and across the West, has
						been enabled by anti-Palestinian and anti-Muslim rhetoric. This has
						profound repercussions for the health and wellness of the Muslim
						community…<br></br>
						<br></br>“By diminishing the complexity of individuals and
						essentializing Islam, these colonial powers created a seedbed for
						the dehumanization and generalization of people today perceived to
						be Muslim or Muslim-adjacent. And perhaps most importantly, these
						kinds of hate crimes and the rise of Islamophobia have extensive,
						negative mental health impacts on Muslim communities in the U.S. and
						around the world.”
					</p>
					<div className="text-[#8F1A1D] cursor-pointer text-[16px] leading-[20px] font-[600] ff-overpass uppercase pt-[46px] inline-flex items-center gap-x-[10px]">
						{' '}
						<a href={'http://tinyurl.com/TIMEislamophobia'} target="_blank">
							Read More
						</a>
						<Arrow />
					</div>
				</div>
				<div className={'md:order-1  mt-[54px] md:mt-0 '}>
					<Image
						loader={() =>
							'https://maristanweb.blob.core.windows.net/media/assets/Time_article_release_1_1f235bc4e4.png?updated_at=2023-11-27T23:59:40.205Z'
						}
						src={
							'https://maristanweb.blob.core.windows.net/media/assets/Time_article_release_1_1f235bc4e4.png?updated_at=2023-11-27T23:59:40.205Z'
						}
						width={650}
						// className="w-full h-full"
						height={650}
						alt={data?.img?.data?.attributes?.alternativeText}
					/>
				</div>
			</div>
		</section>
	);
};
