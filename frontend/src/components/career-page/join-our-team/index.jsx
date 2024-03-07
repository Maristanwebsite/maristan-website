'use client';
import { Location } from '@/common/icons/location.svg';
import { imageResolver } from '@/utils/image-resolver';
import Image from 'next/image';

export const JoinOurTeam = ({ data }) => {
	return (
		<section className="pb-[75px] pt-[60px]  relative">
			<div className="max-w-[1440px] mx-auto px-4">
				<div className="w-full pl-[50px] 2xl:pl-0">
					<h4 className="text-[#8F1A1D] text-[14px] leading-[16px] font-[400] ff-convergence uppercase">
						{data?.heading?.tagline}
					</h4>
					<h2 className="text-[32px] sm:text-[36px] md:text-[38px] lg:text-[40px] text-[#2C2C2C] leading-[37px] sm:leading-[44px] md:leading-[47px] font-[400] ff-convergence pt-[8px]">
						{data?.heading?.title}
					</h2>
					<p className="text-[16px] leading-[20px] text-[#3B3731] font-[400] ff-overpass opacity-[0.8] pt-[24px]">
						{data?.heading?.description}
					</p>
				</div>
				<div className="w-full mt-[40px] lg:mt-[60px] bg-[#F7F3F0] rounded-[16px] p-[32px] relative lg:bg-transparent 2xl:p-0">
					<div>
						<Image
							src={imageResolver(data?.heading?.img)?.path}
							loader={() => imageResolver(data?.heading?.img)?.path}
							width={120}
							height={75}
							alt={data?.img?.data?.attributes?.alternativeText}
							className="absolute top-[-50px] left-[275px] hidden lg:block"
						/>
					</div>
					<div className='lg:grid grid-cols-2 grid-rows-2 gap-8 '>
					{data?.card?.map((item, index) => {
						return (
							<div key={index} className='pl-[15px] 2xl-pl-0 bg-[#F7F3F0] p-6 lg:rounded-[16px] lg:py-8 lg:px-6'>
								{/* <div
									className={`${
										index == 0 && 'hidden'
									} bg-[#E3DFDC] h-[2px] w-full my-[24px] lg:hidden`}
								/> */}
								<div>
									<h2 className="text-[#524940] text-[24px] leading-[28px] font-[400] ff-convergence">
										{item.title}
									</h2>{' '}
									<div className="pt-[13px] text-[#8F1A1D] inline-flex gap-x-[11px] items-center ff-overpass">
										<Location fill="#8F1A1D" /> {item.location}
									</div>
								</div>
								<p className="text-[#3B3731] ff-overpass opacity-[0.8] pt-[24px]">
									{item.description}
								</p>
								<div className="mt-[24px] border-[1px] border-[#8F1A1D] rounded-[8px] transition-all duration-300 hover:bg-[#e8e8e8] inline-flex">
									<a
										target="_blank"
										href={item?.ctaLink}
										className="px-[30px] py-[16px] text-[#8F1A1D] leading-[20px] font-[600] ff-overpass uppercase"
									>
										{item?.ctaName || 'Apply now'}
									</a>
								</div>
								<div
									className={`${
										index == 3 && 'hidden'
									} bg-[#E3DFDC] h-[2px] w-full mt-[40px] lg:hidden`}
								/>
							</div>
						);
					})}
					</div>
				</div>
			</div>
		</section>
	);
};
