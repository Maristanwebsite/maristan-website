'use client';
import Image from 'next/image';
import Slider from 'react-slick';

const MeetAtMaristan = () => {
	const data = [
		{
			img: '/images/SliderImage.png',
			description:
				'"Thank you Dr Rania & Maristan, for such initiatives! Stigma kills!! And we love and appreciate you very much for destigmatizing issues surrounding mental health and suicide. It means so much for people with lived experience ❤️❤️❤️. Let us support Maristan everyone, the funding would really help in these efforts. We too, are supporting all the way from Malaysia"',
			name: 'SARAH LEE',
			tagline: 'Yoga Instructor and Wellness Coach',
		},
		{
			img: '/images/SliderImage.png',
			description:
				'"Great circle to address imminent issue in the Muslim community, thank you for your efforts."',
			name: 'SARAH LEE',
			tagline: 'Yoga Instructor and Wellness Coach',
		},
		{
			img: '/images/SliderImage.png',
			description:
				'"The presentation was concise and topic explained quite well. I look forward to attending the training on the east coast in NY!"',
			name: 'SARAH LEE',
			tagline: 'Yoga Instructor and Wellness Coach',
		},
		{
			img: '/images/SliderImage.png',
			description:
				'"One of the most professionally put together and organised Muslim training resources I have attended on a contemporaneous and relevant subject matter. The fact it was free was a bonus. Will be looking to book in to the full-day session, and will be donating some of those hard-earned dollars personally."',
			name: 'SARAH LEE',
			tagline: 'Yoga Instructor and Wellness Coach',
		},
		{
			img: '/images/SliderImage.png',
			description:
				'"Per my question in the session, I thought the content both general education and practical advice were invaluable. There were almost throwaway comments made that each was like a little gem!"',
			name: 'SARAH LEE',
			tagline: 'Yoga Instructor and Wellness Coach',
		},
	];
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		// prevArrow: <></>,
		// nextArrow: <></>,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<div
				className="max-w-[1440px] mx-auto bg-[#F7F3F0] relative px-4  mb-[50px]"
				style={{
					backgroundImage: 'url("/images/Graphics.png" )',

					backgroundPosition: 'top 0px right 0px',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div>
					<Slider {...settings}>
						{data.map((testimonial, index) => (
							<>
								<div
									key={index}
									className={`flex ${
										index % 2 === 0
											? 'flex-col-reverse lg:flex-row'
											: 'lg:flex-row'
									} justify-center px-[10px] lg:px-[150px] py-[65px] lg:py-[75px]`}
								>
									<div className="py-[75px] max-w-[1023px]">
										<p className="font-[400] text-[20px] lg:text-[30px] leading-[53px] lg:leading-[53px] mb-[26px] lg:mb-[36px] pl-[40px] lg:pl-[0]">
											{testimonial.description}
										</p>
										{/* <h2 className="font-[500 text-[21px] text-[#8F1A1D] mb-[4px]">
											{testimonial.name}
										</h2>
										<h3 className="font-[400] text-[12px] lg:text-[18px] leading-[22px]">
											{testimonial.tagline}
										</h3> */}
									</div>
									{/* <div className="max-w-[349px]">
										<Image
											src={testimonial.img}
											width={349}
											height={349}
											alt={`Testimonial by ${testimonial.name}`}
										/>
									</div> */}
								</div>
							</>
						))}
					</Slider>
				</div>
				<div className="absolute bottom-0 right-0 left-0 mx-auto max-w-[262px]">
					<Image
						src="/images/GraphicVector.png"
						alt="GraphicVector-Image"
						width={262}
						height={262}
					/>
				</div>
			</div>
		</div>
	);
};
export default MeetAtMaristan;
