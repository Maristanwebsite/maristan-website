import { HeadingBar } from '@/common/ui/heading-bar';
import Cards from './cards';
const UpcomingEvents = ({ data }) => {
	return (
		<>
			{data ? (
				<section className="max-w-[1440px] mx-auto px-4 my-[60px] md:my-[85px]">
					<div className="">
						<div className="flex flex-col items-center  ">
							<HeadingBar data={data?.heading} />
						</div>

						<Cards btn={data?.cta} data={data?.card} />
					</div>
					{/* <div className="text-center ff-convergence">
						<h2 className="text-[32px] sm:text-[34px] md:text-[37px] lg:text-[40px] leading-[37px] sm:leading-[43px] md:leading-[47px] font-[400] text-[#1D121C] mt-[12px]">
							Stay Tuned for Upcoming Events
						</h2>
					</div> */}
				</section>
			) : (
				''
			)}
		</>
	);
};

export default UpcomingEvents;
