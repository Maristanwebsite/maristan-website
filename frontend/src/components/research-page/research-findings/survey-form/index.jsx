'use client';
import { imageResolver } from '@/utils/image-resolver';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SurveyForm = ({ data }) => {
	const [dis, setDis] = useState({
		firstname: '',
		lastname: '',
		email: '',
	});
	const [btnDis, setBtnDis] = useState(false);
	const fileURL =
		'https://maristanweb.blob.core.windows.net/media/assets/Khutba_Suicide_Prevention_77ec52d55e.pdf';

	useEffect(() => {
		if (dis.email.length && dis.firstname.length && dis.lastname.length) {
			setBtnDis(true);
			document.getElementById('mySubmit').disabled = false;
		} else {
			setBtnDis(false);
			document.getElementById('mySubmit').disabled = true;
		}
	}, [dis]);

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		if (data.email.length > 30) {
			toast('Please Enter a correct email address');
		} else {
			axios
				.post('/api/contact-form', {
					body: data,
				})
				.then((res) => {
					console.log(res);
					if (res.status === 200) {
						toast('Thank you for contacting us!');
						window.open(fileURL, '_blank');
					} else {
						toast('Mail is not sent.');
					}
					setBtnDis(false);
					document.getElementById('mySubmit').disabled = true;
				})
				.catch((error) => {
					console.error(error);
					toast('Something went wrong. Please try again later.');
				});
			reset();
		}
	};

	return (
		<section className="cus-background">
			<div className="max-w-[1440px] mx-auto px-4 py-[40px] sm:py-[50px] md:py-[60px] lg:py-[75px]">
				<div className="grid lg:grid-cols-2 gap-x-[75px] items-center">
					<div>
						<div className='pl-[40px] xl:pl-0'>
						<h4 className="text-[14px] text-[#8F1A1D] leading-[16px] font-[400] uppercase ff-convergence ">
							{data?.tagline}
						</h4>
						<h2 className="text-[32px] sm:text-[36px] lg:text-[40px] leading-[38px] sm:leading-[44px] lg:leading-[47px] font-[400] text-[#2C2C2C] ff-convergence pt-[15px]">
							{data?.title}
						</h2>
						<p className="leading-[20px] text-[#3B3731] ff-overpass opacity-[0.8] pt-[24px]">
							{data?.description}
							</p>
						</div>	
						<div className="mt-[40px] lg:mt-[51px] bg-[#ffff] p-[30px] rounded-[12px] pl-[45px] md:pl-[30px] max-w-[600px] mx-auto" >
							<h2 className="text-[28px] leading-[36px] font-[400] text-[#2C2C2C] tracking-[0.2px] ff-convergence">
								{data?.subheading}
							</h2>
							<form
								onSubmit={handleSubmit(onSubmit)}
								method="POST"
								className="mt-[22px]"
							>
								<div>
									<div className="grid sm:grid-cols-2 gap-x-[15px]">
										<div>
											<label
												className="text-[#2C2C2C] text-[14px] font-[500] leading-[24px] ff-overpass"
												htmlFor="name"
											>
												First Name
											</label>{' '}
											<br />
											<input
												{...register('firstname', { required: true })}
												name="firstname"
												id="firstname"
												type="text"
												tabIndex={0}
												onChange={(e) =>
													setDis({ ...dis, firstname: e.target.value })
												}
												placeholder="First Name"
												className="ff-overpass border-[1px] border-[#E5E7EB] placeholder:text-[#6B7280] w-full placeholder:text-[14px] outline-none rounded-[4px] p-[8px] mt-[8px] mb-2"
											/>
										</div>
										<div>
											<label
												className="text-[#2C2C2C] text-[14px] font-[500] leading-[24px] ff-overpass"
												htmlFor="name"
											>
												Last Name
											</label>{' '}
											<br />
											<input
												{...register('lastname', { required: true })}
												name="lastname"
												id="lastname"
												type="text"
												tabIndex={0}
												placeholder="Last Name"
												onChange={(e) =>
													setDis({ ...dis, lastname: e.target.value })
												}
												className="ff-overpass border-[1px] border-[#E5E7EB] placeholder:text-[#6B7280] w-full placeholder:text-[14px] outline-none rounded-[4px] p-[8px] mt-[8px] mb-2"
											/>
										</div>
									</div>
									<div>
										<label
											className="text-[#2C2C2C] text-[14px] font-[500] leading-[24px] ff-overpass"
											htmlFor="name"
										>
											Email
										</label>{' '}
										<br />
										<input
											{...register('email', { required: true })}
											name="email"
											id="email"
											type="email"
											tabIndex={0}
											placeholder="Email"
											onChange={(e) =>
												setDis({ ...dis, email: e.target.value })
											}
											className="ff-overpass border-[1px] border-[#E5E7EB] placeholder:text-[#6B7280] w-full placeholder:text-[14px] outline-none rounded-[4px] p-[8px] mt-[8px]"
										/>
									</div>
									<button
										id="mySubmit"
										type="submit"
										className={`mt-[12px] z-20 relative bg-[#8F1A1D] text-[16px] font-[600] leading-[20px] ff-overpass uppercase transition-all duration-300 text-[#ffff] hover:bg-[#6d1906] py-[18px] rounded-[8px] w-full ${
											!btnDis && 'cursor-not-allowed'
										}`}
									>
										{data?.ctaname || 'Download'}
									</button>
								</div>
							</form>
							<ToastContainer />
							{/* <p className="text-[12px] leading-[15px] font-[400] ff-overpass text-[#605C57] pt-[22px]">
                By filling out this form, you are agreeing to receive the
                specific publication as well as receiving email communication
                from Maristan.
              </p> */}
						</div>
					</div>
					<div className="mt-[40px] lg:mt-0 mx-auto">
						{data?.img?.data && (
							<Image
								src={imageResolver(data?.img)?.path}
								loader={() => imageResolver(data?.img)?.path}
								width={663}
								height={572}
								alt={data?.img?.data?.attributes?.alternativeText}
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
