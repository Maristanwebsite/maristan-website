'use client';
import { Facebook } from '@/common/icons/facebook.svg';
import { Heart } from '@/common/icons/heart';
import { Instagram } from '@/common/icons/instagram.svg';
import { Mail } from '@/common/icons/mail.svg';
import { Twitter } from '@/common/icons/twitter.svg';
import { Youtube } from '@/common/icons/youtube.svg';
import { imageResolver } from '@/utils/image-resolver';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ data }) => {
	let currentYear = new Date().getFullYear();
	const socialLinks = [
		{
			icon: <Instagram fill="#BCA692" />,
			Link: 'https://www.instagram.com/maristan_org/',
		},
		{
			icon: <Facebook fill="#BCA692" />,
			Link: 'https://www.facebook.com/maristan_org/',
		},
		{
			icon: <Twitter fill="#BCA692" />,
			Link: 'https://twitter.com/maristan_org',
		},
		{
			icon: <Youtube fill="#BCA692" />,
			Link: 'https://www.youtube.com/channel/UCitimhmbu395HNhgW7YFWbg',
		},
	];

	return (
		<section className={` z-10 "bg-[#ffff] `}>
			<div className="max-w-[1440px]  mx-auto px-4 py-[75px] sm:py-[80px] pl-[60px]">
				<div className=" grid sm:grid-cols-2 gap-x-[29px] sm:mb-[39px]">
					<div className="mt-[24px] sm:mb-0 order-last sm:order-first mr-2">
						<Link href={`/`}>
							<Image
								src={imageResolver(data?.Footer?.logo)?.path}
								loader={() => imageResolver(data?.Footer?.logo)?.path}
								alt={data?.Footer?.logo?.data?.attributes?.alternativeText}
								loading="lazy"
								className="mx-0 lg:ml-[115px]"
								width={65}
								height={100}
							/>
						</Link>
						<p className="ff-overpass py-[22px] text-[16px] leading-[28px] text-[#4B4B4B] max-w-[355px]">
							{data?.Footer?.description}{' '}
							<span className="font-[700]">{data?.Footer?.tagline}</span>
						</p>
						<Link href={`mailto:${data?.Footer?.email}`}>
							<div className="flex items-center gap-x-[10px] mb-[10px] max-w-[357px]">
								<Mail fill="#BCA692" />
								<span className="ff-overpass text-[#4B4B4B] font-[400] text-[16px] leading-[24px]">
									{data?.Footer?.email}
								</span>
							</div>
						</Link>
						{/* <a
							target="_blank"
							rel="noopener noreferrer"
							href={`${data?.Footer?.locationLink}`}
						>
							<div className="flex items-center gap-x-[10px]  max-w-[357px]">
								<Location fill="#BCA692" />
								<span className="ff-overpass text-[#4B4B4B] font-[400] text-[16px] leading-[24px]">
									{data?.Footer?.locationName}
								</span>
							</div>
						</a> */}
					</div>
					<div className="">
						<div className=" ">
							<div className="flex flex-wrap justify-between gap-x-[30px] ">
								{data?.FooterItems?.map((item, idx) => {
									return (
										<div key={idx} className='mt-[26px]'>
											<h6 className="mb-[26px] text-[18px] ff-convergence leading-[21.11px] font-[400] text-[#2C2C2C]">
												{item?.title}
											</h6>
											<ul className="">
												{item?.items?.map((item, idx) => (
													<Link key={idx} href={`${item.link}`}>
														<li className="hover:text-[#111827] mb-[26px] ff-overpass duration-500 transition-all font-[400] text-[16px]  leading-[20.26px] text-[#4B4B4B] capitalize max-w-max cursor-pointer">
															{item?.name}
														</li>
													</Link>
												))}
											</ul>

											<div
												className={`flex flex-col ${
													data?.FooterItems.length - 1 === idx ? '' : 'hidden'
												}`}
											>
												<div className="hidden sm:block">
													<div className="flex gap-x-7">
														{socialLinks?.map((item, index) => (
															<a
																key={index}
																className="w-[40px] h-[40px] flex items-center justify-center bg-[#EFE8E2] hover:bg-[#e0dcd9] transition-all duration-300 rounded-full sm:mb-24 cursor-pointer"
																href={`${item?.Link}`}
																target="_blank"
																rel="noopener noreferrer"
															>
																{item.icon}
															</a>
														))}
													</div>
												</div>
												<div>
													{data?.Footer?.donateBtnName != null ? (
														<div className="shadow-md inline-flex rounded-[8px] border border-1px hover:bg-[#7e230f] bg-[#8F1A1D] border-[#802A22] ff-overpass  duration-200 transition-all ">
															<Link
																href="?form=FUNBFXDFWXS"
																target="_blank"
																className="flex items-center py-[14px] px-[32px] justify-center font-[600] text-[16px] text-[#ffff]  leading-[20px] gap-x-[8px] uppercase "
															>
																<Heart stroke="#ffff" />
																<p className="ff-overpass">
																	{data?.Footer?.donateBtnName}
																</p>
															</Link>
														</div>
													) : (
														''
													)}
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="hidden sm:block">
					<div className="flex flex-col items-center">
						<div className="w-14 h-14 flex items-center box justify-center bg-red-900 p-[16px] rounded-full mb-[24px]">
							<Heart stroke="#FFFFFF" fill="#FFFFFF" />
						</div>
						<p className="font-[600] text-[16px] leading-[21.79px] text-[#999999]">
							{' '}
							{currentYear} Maristan, org. All rights reserved. Powered by{' '}
							<a href="https://vigorant.com/">Vigorant, Inc.</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
