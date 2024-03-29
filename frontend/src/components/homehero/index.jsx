/* eslint-disable @next/next/no-img-element */
'use client';
import BookOpen from '@/common/icons/book-open';
import Calender from '@/common/icons/calender';
import { Clipboard } from '@/common/icons/clipboard';
import { Heart } from '@/common/icons/heart';
import { Button } from '@/common/ui/btn';
import { imageResolver } from '@/utils/image-resolver';
import Image from 'next/image';
import Link from 'next/link';

const myData = [
	{
		svg: <Calender height={20} width={20} fill="#ffff" />,
		name: 'book a clinic appointment',
		link: 'https://docs.google.com/forms/d/1cy44xFObNl0B96mzPQ52RI4jApmsmnhtSHfALxZ0gsc/viewform?edit_requested=true',
	},
	{
		svg: <Clipboard height={20} width={20} />,
		name: 'suicide Response training',
		link: 'https://docs.google.com/forms/d/e/1FAIpQLSewCGf_hMUAy4hxlLCRFu1i1nwLF59GbXTdLgqtd-bicD36AQ/viewform?pli=1',
	},
	{
		svg: <BookOpen height={20} width={20} stroke="#ffff" />,
		name: 'ReSOURCES',
		link: '/education',
	},
];

export const HomeHero = ({ data, home }) => {
	return (
		<>
			{!data ? (
				''
			) : (
				<section className=" relative w-full pb-[45px] sm:pb-[70px] md:pb-[120px] lg:pb-[160px] xl:pb-[175px] bg-[#EFE8E2]">
					<div className="max-w-[1440px] mx-auto sm:px-[75px] px-[16px]  grid lg:grid-cols-2 relative">
							<div className="hidden sm:block absolute top-[152px] left-[10px] sm:top-[70px] lg:top-[152px] lg:left-[0]">
						<Image
							src="/images/Vector (4).png"
							width={20}
							height={20}
							alt="dots svg"
							className=""
						/>
					</div>
						<div className="lg:pt-[144px] py-[40px] mb-[24px] lg:mb-0">
							<div className=" ">
								<h1 className="text-[#2C2C2C] mb-5 font-[400] text-[42px] sm:text-[46px] md:text-[50px] lg:text-[64px] leading-[44.65px]  sm:leading-[47px] md:leading-[49px] lg:leading-[68px] tracking-[-1%] ff-convergence">
									{data.title}
								</h1>
								<p className="max-w-[567px] text-[#2C2C2C] ff-overpass font-[400] text-[16px] leading-[24px]">
									{data?.description}
								</p>
							</div>
							<div className="mt-[31px] mb-[40px] flex sm:flex-row flex-col sm:gap-x-[10px] gap-y-[10px] sm:gap-y-0 ff-overpass">
								<a href={`${data?.cta && data?.cta[0]?.link}`} target="_blank">
									<button className="w-full sm:w-auto py-[16px] px-[24px] flex items-center justify-center sm:justify-start bg-[#8F1A1D] text-[#FFFFFF] font-[600] text-[16px] leading-[20px] uppercase rounded-[8px] hover:bg-[#a1261b] duration-200 transition-all ff-overpass">
										{data?.cta && data?.cta[0]?.name}
									</button>
								</a>
								{/* <a href={`tel:+${data?.cta?.[1]?.link}`}>
									<button className="w-full sm:w-auto  flex items-center hover:bg-[#e5dad1] transition-all duration-300 justify-center sm:justify-start gap-x-[18px] py-[16px] border border-1 border-[#901C01] border-opacity-[80%] px-[24px] text-[#901C01] opacity-[80%] font-[600] text-[16px] leading-[20px] uppercase rounded-[8px]">
										<Dial className="color fill-[#901C01] group-hover:text-[#ffffff]" />
										{data?.cta && data?.cta[1]?.name}
									</button>
								</a> */}
							</div>
							<p className="max-w-[414px] ff-overpass text-[#2C2C2C] text-[16px] leading-[24px] font-[400] pl-[44px] sm:pl-0">
								{data?.tagline}
							</p>
						</div>
						<div className="w-ful mb-[-40px] md:mb-[-93px] md:ml-[-50px] flex flex-col justify-end">
							<Image
								className=" w-full"
								src={imageResolver(data?.image)?.path}
								loader={() => imageResolver(data?.image)?.path}
								alt={data?.image?.data?.attributes?.alternativeText}
								quality={100}
								width={645}
								height={605}
							/>
						</div>
						<div className="absolute flex flex-col items-end right-4 top-0">
							<div className="hidden lg:block">
								<Link
									href={`?form=FUNBFXDFWXS`}
									className="flex items-center gap-x-[15px] px-[16px] py-[14.05px] bg-[#8F1A1D] rounded-[10px] font-[600] transition-all duration-300 hover:bg-[#7c220e] uppercase ff-overpass text-[#FFFFFF] text-[16px] leading-[20px] "
								>
									<Heart stroke="#FFFFFF" />
									Zakat
								</Link>
							</div>
							<div className="hidden lg:flex flex-col items-end gap-y-[23px] mt-[23px] ">
								{(data?.cardsButton?.length > 0
									? data?.cardsButton
									: myData
								)?.map((item, index) => (
									<div key={index}>
										<Button data={item} />
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="absolute left-0 bottom-0 right-0 z-50">
						<Image
							src="/images/wave.svg"
							width={0}
							height={0}
							alt="wave svg"
							className="w-full "
						/>
					</div>
				</section>
			)}
		</>
	);
};
