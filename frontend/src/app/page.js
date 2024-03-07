import DiscoverStory from '@/components/discover-story';
import EmpoweringMinds from '@/components/empowering-minds';
import EnrichKnowledge from '@/components/enrich-knowledge';
import GetInTouch from '@/components/get-in-touch';
import { HomeHero } from '@/components/homehero';
import MeetAtMaristan from '@/components/meet-at-maristan';
import Modal from '@/components/modal/announcement';
import Newsletter from '@/components/news-letter';
import OurMission from '@/components/our-mission';
import OurTeam from '@/components/our-team';
import { Palestine } from '@/components/palestine';
import RamzanSeries from '@/components/ramzan-series';
import { TimesArticle } from '@/components/times-article';
import UpcomingEvents from '@/components/upcomming-events';
import { adminPath } from '@/utils/constants';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const DynamicFundraiseUpWidget = dynamic(
	() => import('@/components/fundraiseup'),
	{ ssr: false }, // This ensures the component only renders on the client side
);

const getData = async () => {
	const res = await fetch(`${adminPath}/home?populate=deep`);
	return res.json();
};
const getVidoesData = async () => {
	const res = await fetch(`${adminPath}/education-and-resource?populate=deep`);
	return res.json();
};
export const metadata = {
	title: 'HOME | MARISTAN',
	description: 'Maristan by vigorant',
};
export default async function HomePage() {
	const data = await getData();
	const pageData = data?.data?.attributes;
	const order = 'order';
	const educationRes = await getVidoesData();
	const educationData = educationRes?.data?.attributes;
	return (
		<>
			<HomeHero data={pageData?.home_page[0]} home />
			<TimesArticle />
			<Palestine />
			<UpcomingEvents data={pageData?.home_page[1]} />
			{/* <OurJourney data={pageData?.home_page[2]} /> */}
			<DiscoverStory data={pageData?.home_page[2]} />
			<OurMission data={pageData?.home_page[3]} home />
			<RamzanSeries />
			{/* <EmpoweringMinds data={pageData?.home_page[5]} />  */}
			<EmpoweringMinds data={pageData?.home_page[5]} />
			<EnrichKnowledge
				data={pageData?.home_page[4]}
				cardsData={educationData?.ResourcesCard?.EducationalResourcesCards}
			/>
			<GetInTouch data={pageData?.home_page[10]} />
			{/* <OurJourney order={order} data={pageData?.home_page[6]} /> */}
			<OurTeam data={pageData?.home_page[8]} />
			<MeetAtMaristan data={pageData?.home_page[8]} />
			{/* <DynamicFundraiseUpWidget /> */}
			{/* <ClinicFAQ /> */}
			<Newsletter data={pageData?.home_page[9]} />
			<Modal data={pageData?.home_page[11]}/>
		</>
	);
}
