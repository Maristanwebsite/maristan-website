'use client';
import useModal from '@/components/use-modal';
import SetModal from '@/components/use-state';
import { imageResolver } from '@/utils/image-resolver';
import Image from 'next/image';
import Slider from 'react-slick';
import Modal from './modal';
import TeamCards from './team-cards';
const TeamsSlider = ({ data }) => {
	const { isShowing, toggle } = useModal();
	const { modalData, setData } = SetModal();
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const handleClick = (data) => {
		toggle();
		setData(data);
	};

	return (
		<section className="relative w-full mt-[40px] sm:mt-[75px] sm:pb-[75px]">
			<div className="text-center ff-convergence pl-[50px] xl:pl-0">
				<p className="text-[14] leading-[16px] font-[400] uppercase text-[#8F1A1D] ">
					{data?.heading?.tagline}
				</p>
				<h2 className="text-[40px] leading-[47px] font-[400] text-[#1D121C] mt-[12px]">
					{data?.heading?.title}
				</h2>
				<div className="w-[72px] h-[24px] mx-auto mt-[12px]">
					<Image
						src="/images/about-us/Vector.png"
						width={72}
						height={24}
						alt="vector image"
					/>
				</div>
			</div>
			<div className="hidden md:block">
				<Image
					src="/images/about-us/Vector2.png"
					width={284}
					height={142}
					alt="vector two image"
					className="absolute bottom-0 right-[50%] translate-x-1/2"
				/>
			</div>
			<div>
				<Image
					src={imageResolver(data?.heading?.img)?.path}
					loader={() => imageResolver(data?.heading?.img)?.path}
					width={205}
					height={112}
					alt={data?.heading?.img?.data?.attributes?.alternativeText}
					className="absolute top-8 sm:top-[-20px] left-[-145px] hidden sm:block"
				/>
			</div>

			<div className=" mt-[60px] max-w-[1440px] px-4 mx-auto overflow-hidden pl-[60px] xl:pl-0">
				<Slider {...settings}>
					{data?.card?.map((item, index) => {
						return (
							<>
								<div className="md:max-w-[400px]  sm:px-4 mx-auto" key={index}>
									<TeamCards data={item} />
									<button
										onClick={() => {
											handleClick(item);
										}}
										className="w-full ml-0 sm:w-auto hover:bg-[#F9FAFB] duration-500 transition-all  text-[#2C2C2C]  text-[16px] leading-[20.26px] font-[600] flex items-center bg-[#FFFFFF] rounded-[8px] mt-[10px] py-[20px] justify-center uppercase focus:outline-none ff-overpass"
									>
										Read More
									</button>
								</div>
							</>
						);
					})}
				</Slider>
			</div>
			<Modal
				isShowing={isShowing}
				hide={toggle}
				data={modalData}
				// index={index}
			/>
		</section>
	);
};

export default TeamsSlider;
