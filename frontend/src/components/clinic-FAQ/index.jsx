'use client';
import { useState } from 'react';

const ClinicFAQ = () => {
	const [showText, setShowText] = useState(false);
	const [isPlus, setIsPlus] = useState(true);
	const [showText2, setShowText2] = useState(false);
	const [isPlus2, setIsPlus2] = useState(true);
	const [showText3, setShowText3] = useState(false);
	const [isPlus3, setIsPlus3] = useState(true);
	const [showText4, setShowText4] = useState(false);
	const [isPlus4, setIsPlus4] = useState(true);
	const [isPlus8, setIsPlus8] = useState(true);
	const [isPlus6, setIsPlus6] = useState(true);
	const [isPlus7, setIsPlus7] = useState(true);
	const [isPlus9, setIsPlus9] = useState(true);
	const [isPlus10, setIsPlus10] = useState(true);
	const [isPlus11, setIsPlus11] = useState(true);

	const [showText5, setShowText5] = useState(false);
	const [showText6, setShowText6] = useState(false);
	const [showText7, setShowText7] = useState(false);
	const [showText8, setShowText8] = useState(false);
	const [showText9, setShowText9] = useState(false);
	const [showText10, setShowText10] = useState(false);
	const [showText11, setShowText11] = useState(false);

	const [isPlus5, setIsPlus5] = useState(true);
	const handleText = () => {
		if (isPlus === true) {
			setShowText(true);
			setIsPlus(false)
		} else {
			setShowText(false);
			setIsPlus(true)
		}
	};
	const handleText2 = () => {
		if (isPlus2 === true) {
			setShowText2(true);
			setIsPlus2(false)
		} else {
			setShowText2(false);
			setIsPlus2(true)
		}
	};
	const handleText3 = () => {
		if (isPlus3 === true) {
			setShowText3(true);
			setIsPlus3(false)
		} else {
			setShowText3(false);
			setIsPlus3(true)
		}
	};
	const handleText4 = () => {
		if (isPlus4 === true) {
			setShowText4(true);
			setIsPlus4(false)
		} else {
			setShowText4(false);
			setIsPlus4(true)
		}
	};
	const handleText6 = () => {
		if (isPlus6 === true) {
			setShowText6(true);
			setIsPlus6(false)
		} else {
			setShowText6(false);
			setIsPlus6(true)
		}
	};
	const handleText7 = () => {
		if (isPlus7 === true) {
			setShowText7(true);
			setIsPlus7(false)
		} else {
			setShowText7(false);
			setIsPlus7(true)
		}
	};
	const handleText8 = () => {
		if (isPlus8 === true) {
			setShowText8(true);
			setIsPlus8(false)
		} else {
			setShowText8(false);
			setIsPlus8(true)
		}
	};
	const handleText9 = () => {
		if (isPlus9 === true) {
			setShowText9(true);
			setIsPlus9(false)
		} else {
			setShowText9(false);
			setIsPlus9(true)
		}
	};
	const handleText10 = () => {
		if (isPlus10 === true) {
			setShowText10(true);
			setIsPlus10(false)
		} else {
			setShowText10(false);
			setIsPlus10(true)
		}
	};
	const handleText11 = () => {
		if (isPlus11 === true) {
			setShowText11(true);
			setIsPlus11(false)
		} else {
			setShowText11(false);
			setIsPlus11(true)
		}
	};
	const handleText5 = () => {
		if (isPlus5 === true) {
			setShowText5(true);
			setIsPlus5(false)
		} else {
			setShowText5(false);
			setIsPlus5(true)
		}
	};

	return (
		<div className="max-w-[1440px] mx-auto xl:px-[150px] xl:py-[75px] py-[60px] font-custom">
			<div className="1140px max-auto bg-[url('/images/CompoundPath(3).png')]  xl:bg-[url('/images/CompoundPath(3).png')] bg-[left_top] via-slate-900  bg-no-repeat ">
				<div className="max-w-[626px]    mx-auto flex flex-col gap-[12px] justify-center items-center  ">
					<h2 className="text-[#0F172A] lg:text-[38px] md:text-[33px] text-[28px]  font-[600] text-center ">
						Clinic FAQs
					</h2>
				</div>
				<div className="max-w-[1140px] lg:mx-[100px] md:mx-[80px] sm:mx-[50px] mx-[25px] xL:mx-auto mt-[56px] flex flex-col gap-[16px] pl-[40px] sm:pl-0">
					<div onClick={handleText} className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
						<div className="flex justify-between items-center">
							<p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
								How can I start therapy sessions?
							</p>{' '}
							<span
								className="text-[#183B56] text-[14px] font-[900] cursor-pointer"
								onClick={handleText}
							>
								{' '}
								{isPlus ? '+' : '-'}
							</span>{' '}
						</div>
						{showText && (
							<div className="pt-[10px] growText ">
								{' '}
								Please take a few minutes to fill out our appointment request
								form{' '}
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLScc4FdJj_8-QHHKWw9JBKxJZl47ZwyX3UOM3x7p2SBqWfVroA/viewform"
									target="_blank"
									className='font-semibold border-b-[1px] border-transparent hover:border-black'
								>
									here
								</a>{' '}
								and a member of our team will reach out to you shortly!{' '}
							</div>
						)}
					</div>
					<div onClick={handleText2} className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
						<div className="flex justify-between items-center">
							<p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
								How long do therapy sessions last?
							</p>{' '}
							<span
								className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
								onClick={handleText2}
							>
								{' '}
								{isPlus2 ? '+' : '-'}
							</span>{' '}
						</div>
						{showText2 && (
							<div className="pt-[10px] growText ">
								{' '}
								Your first session will be 60 minutes while each following
								session will be 45-50 minutes
							</div>
						)}
					</div>
					<div onClick={handleText3} className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
						<div className="flex justify-between items-center">
							<p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
								How often will I be seen?
							</p>{' '}
							<span
								className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
								onClick={handleText3}
							>
								{' '}
								{isPlus3 ? '+' : '-'}
							</span>{' '}
						</div>
						{showText3 && (
							<div className="pt-[10px] growText  ">
								{' '}
								Most clients are seen once a week, depending on the needs of the
								client.{' '}
							</div>
						)}
					</div>
					<div onClick={handleText4} className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
						<div className="flex justify-between items-center">
							<p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
								How long will I be in therapy?
							</p>{' '}
							<span
								className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
								onClick={handleText4}
							>
								{' '}
								{isPlus4 ? '+' : '-'}
							</span>{' '}
						</div>
						{showText4 && (
							<div className="pt-[10px] growText  ">
								{' '}
								This differs greatly by person and will be determined by you and
								your therapist. Some come to therapy for a few weeks, months, or
								even years. Your therapist will work with you to develop a
								timeline and treatment plan that you are comfortable with, but
								you are always welcome to terminate sessions whenever you feel
								ready.{' '}
							</div>
						)}
					</div>
					<div onClick={handleText5} className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
						<div className="flex justify-between items-center">
							<p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
								How much do sessions cost?
							</p>{' '}
							<span
								className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
								onClick={handleText5}
							>
								{' '}
								{isPlus5 ? '+' : '-'}
							</span>{' '}
						</div>
						{showText5 && (
							<div className="pt-[10px] growText  ">
								Our sessions are currently priced at $150 per session
							</div>
						)}
					</div>
					<div onClick={handleText6} className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
						<div className="flex justify-between items-center">
							<p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
								What payment plans are available?
							</p>{' '}
							<span
								className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
								onClick={handleText6}
							>
								{' '}
								{isPlus6 ? '+' : '-'}
							</span>{' '}
						</div>
						{showText6 && (
							<div className="pt-[10px] growText  ">
								We offer sliding scale rates and financial aid by request and
								upon application. The funding for these services comes from our
								zakat donations and community partnerships.
							</div>
						)}
					</div>
					<div onClick={handleText7} className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
						<div className="flex justify-between items-center">
							<p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
								What if I can’t afford therapy?
							</p>{' '}
							<span
								className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
								onClick={handleText7}
							>
								{' '}
								{isPlus7 ? '+' : '-'}
							</span>{' '}
						</div>
						{showText7 && (
							<div className="pt-[10px] growText  ">
								Maristan will never turn anyone away due to lack of funds. We
								have several payment plans available in order to ensure that our
								services are made available to everyone.
							</div>
						)}
					</div>
					<div onClick={handleText8} className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
						<div className="flex justify-between items-center">
							<p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
								Do you accept insurance?
							</p>{' '}
							<span
								className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
								onClick={handleText8}
							>
								{' '}
								{isPlus8 ? '+' : '-'}
							</span>{' '}
						</div>
						{showText8 && (
							<div className="pt-[10px] growText  ">
								Yes! We currently have 2 clinicians who are contracted with
								Aetna, Cigna, United Healthcare, and Magellan. We are also able
								to provide superbills for out of network providers- please
								contact your insurance provider to inquire about this option as
								not all plans allow for this.
							</div>
						)}
					</div>
					<div onClick={handleText9} className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
						<div className="flex justify-between items-center">
							<p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
								How will I know if my therapist is right for me?
							</p>{' '}
							<span
								className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
								onClick={handleText9}
							>
								{' '}
								{isPlus9 ? '+' : '-'}
							</span>{' '}
						</div>
						{showText9 && (
							<div className="pt-[10px] growText  ">
								Developing a therapeutic relationship with your therapist is
								crucial to a beneficial and effective therapy experience. For
								this reason, we offer complimentary 15 minute consultations
								during which you can ask any questions you may have for your
								potential provider and decide if they will be the right fit for
								you. If not, you are welcome to consult with other providers
								until you find the right one.
							</div>
						)}
					</div>
					<div onClick={handleText10} className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
						<div className="flex justify-between items-center">
							<p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
								Can I bring my child/spouse/family member/friend to therapy?
							</p>{' '}
							<span
								className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
								onClick={handleText10}
							>
								{' '}
								{isPlus10 ? '+' : '-'}
							</span>{' '}
						</div>
						{showText10 && (
							<div className="pt-[10px] growText  ">
								We offer couples (including premarital) and family counseling
								during which you can be seen in session with whomever you would
								like. Please note that due to state regulations, individuals are
								only able to request therapy services for themselves or those
								whom they have legal guardianship over. If you know someone who
								would benefit from therapy, or would like to be seen with a
								family member, please have them fill out our appointment request
								form or contact us.
							</div>
						)}
					</div>
					<div onClick={handleText11} className="w-[100%] lg:px-[38px] xl:px-[38px] px-[24px] border rounded-[8px] bg-white shadow-md shadow-[#E5E7EB] border-[#E5E7EB]  lg:py-[35px] xl:py-[35px] py-[24px]  ">
						<div className="flex justify-between items-center">
							<p className="text-[#333] xl:text-[22px] lg:text-[22px] text-[20px] font-[600] tracking-[0.33px]  ">
								How do I know what I share in my sessions will remain
								confidential?
							</p>{' '}
							<span
								className="text-[#183B56] text-[14px] font-[900] cursor-pointer  "
								onClick={handleText11}
							>
								{' '}
								{isPlus11 ? '+' : '-'}
							</span>{' '}
						</div>
						{showText11 && (
							<div className="pt-[10px] growText  ">
								All of our staff and providers are trained in and held to HIPAA
								confidentiality laws which mandate us to maintain complete
								confidentiality with all client information. You can be assured
								that any information shared with anyone within Maristan is kept
								strictly confidential and will never be shared outside of the
								organization.
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClinicFAQ;
