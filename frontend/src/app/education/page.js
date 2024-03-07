import CommonHero from '@/common/ui/common-hero';
import ResourcesTabs from '@/components/education/resources-tabs';
import { adminPath } from '@/utils/constants';

const getData = async () => {
	const res = await fetch(`${adminPath}/education-and-resource?populate=deep`);
	return res.json();
};
export const metadata = {
	title: 'EDUCATION & RESOURCES | MARISTAN',
	description: 'Maristan by vigorant',
};

async function page() {
	const data = await getData();
	const pageData = data?.data?.attributes;
		// console.log(pageData)

	return (
		<section className="tab-content">
			<CommonHero pageData={pageData} data={pageData?.educationResources[3]} />
			<ResourcesTabs
				data={pageData}
				clinicalData={pageData?.educationResources[2]}
				educationData={pageData?.ResourcesCard?.EducationalResourcesCards}
			/>
		</section>
	);
}

export default page;
