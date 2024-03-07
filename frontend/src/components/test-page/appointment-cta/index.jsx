import { Dial } from '@/common/icons/dial.svg';
import Link from 'next/link';
export const AppointmentCta = ({ data }) => {
	return (
		<section className="py-[75px]">
			<div className="max-w-[1440px] mx-auto px-4 rounded-[32px] cus-background">
				<div className="sm:flex items-center justify-between py-[40px] px-4 lg:py-[48px] lg:px-[75px] gap-x-[75px] pl-[43px]">
					<div className="mb-[24px] lg:mb-0 max-w-[600px]">
						<p className="text-[#8F1A1D] text-[14px] leading-[16px] uppercase ff-convergence">
							{data?.tagline}
						</p>
						<h1 className="text-[#2C2C2C] ff-convergence mb-[8px] font-[400] text-[30px] sm lg:text-[42px]  sm:text-[32px] md:text-[36px] leading-[24px] sm:leading-[26px] md:leading-[30px] lg:leading-[50px] tracking-[-0.01em] lg:tracking-[0.2px]">
							{data?.title}
						</h1>
						<p className="max-w-[487px]  leading-[20px] text-[#3B3731] opacity-[0.8] ff-overpass">
							{data?.description}
						</p>
					</div>

					<div className="flex flex-col items-start">
						<div className="flex">
							<Link href={`${data?.cta?.link}`} legacyBehavior>
								<a className=" flex justify-center items-center gap-[16px] lg:w-[320px]  bg-[#8F1A1D] transition-all duration-300 hover:bg-[#741e0b] rounded-[8px] py-[16px] px-[24px] font-[600] text-[#ffff]  text-[16px]  uppercase">
									{data?.cta?.name}
								</a>
							</Link>
							<a href="tel:+988">
								<button className="w-full ml-[12px] sm:w-auto flex items-center hover:bg-[#e5dad1] transition-all duration-300 justify-center sm:justify-start gap-x-[18px] py-[18px] border border-1 border-[#901C01] border-opacity-[80%] px-[24px] text-[#901C01] opacity-[80%] font-[600] text-[16px] leading-[20px] uppercase rounded-[8px]">
									<Dial className="color fill-[#901C01] group-hover:text-[#901C01] width-[20px] height-[20px]" />
									DIAL 988
								</button>
							</a>
						</div>

						<p className="leading-[20px] text-[#3B3731] opacity-[0.8] ff-overpass max-w-[400px] mt-[24px]">
							24/7 support is available for the nationwide mental health crisis and suicide prevention.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
