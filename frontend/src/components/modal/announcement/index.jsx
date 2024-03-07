'use client';
import { useEffect, useState } from 'react';
import { User } from '@/common/icons/users.svg';

export default function Modal(data) {
	const [showModal, setShowModal] = useState(false);
	useEffect(() => {
		// Check if the modal has been shown during the current session
		const hasModalBeenShownThisSession = sessionStorage.getItem(
			'hasModalBeenShownThisSession',
		);

		if (!hasModalBeenShownThisSession) {
			// If not, set the flag and show the modal
			sessionStorage.setItem('hasModalBeenShownThisSession', 'true');
			setShowModal(true);
		}
	}, []); // Empty dependency array ensures this effect runs only once on mount

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			{showModal ? (
				<>
					<div className="overflow-x-hidden overflow-y-auto scrollbar-hide fixed inset-0 z-50 outline-none focus:outline-none w-4/5 mx-auto mt-[50px] max-h-[90vh] rounded-lg xl:max-w-[1240px]">
						<div className="relative w-auto">
							<div className="shadow-lg relative w-full bg-white opacity-100 outline-none focus:outline-none">								
								<div className="p-6 lg:flex gap-[30px] items-center xl:p-10">
									<button
										className="absolute top-5 right-0 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
										type="button"
										onClick={closeModal}
									>
										<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M20 20L4 4.00003M20 4L4.00002 20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
										</svg>
									</button>
									<div className="mb-5 xl:w-[600px] mx-auto max-w-[600px] lg:w-1/2">
										<img
											src="/images/announcement.jpg"
											alt="image"
										/>
									</div>
									<div className="lg:w-1/2 mt-7 md:mt-0 xl:max-w-[570px]">
									<p className="text-[14px] text-blueGray-500 lg:text-[16px] xl:text-lg leading-relaxed mb-5">
										📆 Assalamu Alaykum,
										<br/>
										On behalf of Maristan, it is our pleasure to invite you to spend an evening with us on Saturday, March 2, 2024 at our upcoming event Honoring Our Legacy: A Gala Evening and Fundraiser.
										This exclusive event is set to acknowledge and honor our team’s passion and commitment to advancing holistic wellbeing for our communities. The evening will feature our guest speakers, Shaykh Mikaeel Smith and Shaykh Tariq Musleh, who both work to diligently improve the lives of our Muslim brothers and sisters. Maristan is dedicated to advancing holistic, mental, and spiritual wellness for Muslim communities through professional clinical care, education, and research.
										Since founded in 2021, we worked to make an impact through our Maristan Clinic, Suicide Response Trainings, Muslim Mental Health Initiatives, and Educational Programs.
										At Maristan, we are honored to carry forward the legacy of bimaristans, or institutions of healing, and foundational figures like Dr. Malik Badri, with the support of our community and generous contributors. Our clinicians strive to provide services that help heal the wounds of our community and our program teams work tirelessly to provide beneficial and influential programs and training.
										We look forward to sharing this special evening with you all and hope to receive your support in continuing to build the Maristan legacy.
										<br />
										Sincerely, The Maristan Team
									</p>
									<div className='flex gap-3 font-[600] text-[16px] leading-[20px]'>
										<button className="py-[16px] px-[28px]  rounded-[10px] border border-1px uppercase border-[#FFFFFF] bg-[#8F1A1D] text-[#fff]">
											<a href="https://givebutter.com/MaristanGala2024" target="_blank">
												Register Here
											</a>
										</button>
										<button className="shadow-md py-[16px]  px-[24px] text-[#8F1A1D] uppercase rounded-[10px] border border-1px border-[#8F1A1D] ff-overpass hover:bg-[#e5dad1] duration-300 transition-all">
											<a href="https://forms.gle/zgtEDWsVsPQB5tbSA" target="_blank">
												Volunteer (16+) Here
											</a>
										</button>
									</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
}
