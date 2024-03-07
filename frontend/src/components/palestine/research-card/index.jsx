'use client';
import { Arrow } from '@/common/icons/arrow.svg';
import Image from 'next/image';

export const ResearchCard = ({ data }) => {
	return (
		<section>
			<div className="grid md:grid-cols-2 gap-x-[50px] lg:gap-x-[55px] xl:gap-x-[75px] my-[40px] sm:my-[50px] md:my-[60px] lg:my-[75px] items-center">
				<div className={'md:order-1 pl-[45px]'}>
					<h2 className="text-[#111827] text-[24px] lg:text-[26px] leading-[32px] font-[400] ff-convergence">
						{/* {data?.title} */}
						‼️**NOW AVAILABLE: **A Mental Health Guidebook for Those Concerned
						About Palestine 🇵🇸
					</h2>
					<p className="mt-[16px] text-[#3B3731] leading-[20px] ff-overpass opacity-[0.8] lg:text-[18px]">
						{/* {data?.description} */}
						بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ <br></br>
						<br></br>*What You Will Learn: * 📖 Authored by members of the
						Stanford Muslim Mental Health & Islamic Psychology Lab, this guide
						provides a resource for understanding the historical and
						geopolitical contexts surrounding the ongoing genocide against
						Palestinians.<br></br>
						<br></br> 🧠 Further, it delves into the multiple layers of trauma
						experienced by both generations of Palestinians and Muslims
						currently witnessing the unfolding tragedies. <br></br>
						<br></br> 📝 Read more for resources to take action, educational
						materials, and recommendations for safeguarding your mental health.
					</p>
					<div className="text-[#8F1A1D] cursor-pointer text-[16px] leading-[20px] font-[600] ff-overpass uppercase pt-[46px] inline-flex items-center gap-x-[10px]">
						{' '}
						<a
							href={
								'https://maristanweb.blob.core.windows.net/media/assets/A_mental_health_guidebook_for_those_concerned_about_Palestine_2_1fd064443b.pdf'
							}
							target="_blank"
						>
							Download the Guidebook here
						</a>
						<Arrow />
					</div>
				</div>
				<div className={'md:order-1 mt-[54px] mx-auto md:mt-0 '}>
					<Image
						loader={() =>
							'https://maristanweb.blob.core.windows.net/media/assets/A_mental_health_guidebook_for_those_concerned_about_Palestine_0126689eda.png?updated_at=2023-11-27T23:27:36.979Z'
						}
						src={
							'https://maristanweb.blob.core.windows.net/media/assets/A_mental_health_guidebook_for_those_concerned_about_Palestine_0126689eda.png?updated_at=2023-11-27T23:27:36.979Z'
						}
						width={512}
						// className="w-full h-full"
						height={500}
						alt="Mental health notebook"
					/>
				</div>
			</div>
		</section>
	);
};
