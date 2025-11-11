import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import { createOptimizedLoader, ISR_CONFIGS } from '@/app/lib/utils/performanceOptimizer';

import Drone_data_processing from "@/public/gis_images/drone_services/Drone_Main_Page/Drone_data_processing.webp";
import Drone_Survey_and_Mapping from "@/public/gis_images/drone_services/Drone_Main_Page/Drone_Survey_and_Mapping.webp";
import Inspection_and_Analysis from "@/public/gis_images/drone_services/Drone_Main_Page/Inspection_and_Analysis.webp";
import Drone_ServiceintroImg from "@/public/gis_images/Drone_ServiceintroImg.webp";

// Critical above-the-fold components
const WebsiteBanner = dynamic(() => import('@/app/_Components/WebsiteBanner'), {
  ssr: true,
  ...createOptimizedLoader("500px", "bg-gradient-to-br from-gray-900 to-black")
});

const WebsiteIntroduction = dynamic(() => import('@/app/_Components/WebsiteIntroduction'), {
  ssr: true,
  ...createOptimizedLoader("400px", "bg-black")
});

// Below-the-fold components - lazy load
const GisServices_Services_We_Offer = dynamic(() => import('@/app/_Components/GisServices_Services_We_Offer'), {
  ssr: false,
  ...createOptimizedLoader("500px", "bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900")
});

const WhyChooseTechmapperz = dynamic(() => import('@/app/_Components/WhyChooseTechmapperz'), {
  ssr: false,
  ...createOptimizedLoader("400px", "bg-gray-800")
});

const FAQ = dynamic(() => import('@/app/_Components/FAQ'), {
  ssr: false,
  ...createOptimizedLoader("500px", "bg-black")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

// Add ISR for page caching
export const revalidate = ISR_CONFIGS.service;


export const metadata = {
    title: "Drone Survey & Mapping | Drone Data Processing | Drone Services | Techmapperz",
    description: "Techmapperz is India’s leading drone survey and mapping company, delivering high-accuracy data and solutions for infrastructure, agriculture, construction, utilities, and environmental management.",
    alternates: {
        canonical: `${BASE_URL}/service/gis/droneservice`,
    },
};

export const categoryData = [
    {
        name: 'Drone Survey & Mapping',
        image: Drone_Survey_and_Mapping,
        link: '/service/gis/droneservice/dronesurveyandmapping'
    },
    {
        name: 'Inspection & Analysis',
        image: Inspection_and_Analysis,
        link: '/service/gis/droneservice/inspectionandanalysis'
    },
    {
        name: 'Drone Data Processing',
        image: Drone_data_processing,
        link: '/service/gis/droneservice/dronedataprocessing'
    },

];

const count = categoryData.length;

const features = [
    {
        img: '/gis_images/why_choose_gis_icons/High_Accuracy_Data.svg',
        title: 'High Accuracy Data',
        description: 'We deliver accurate and error-free project results with our advanced tools and skilled team helping analysis and decision-making.'
    },
    {
        img: '/gis_images/why_choose_gis_icons/End_To_End_Solutions.svg',
        title: 'End To End Solutions',
        description: 'Techmapperz provide end-to-end solutions as per project requirements whether it is urban planning or environmental monitoring.'
    },
    {
        img: '/gis_images/why_choose_gis_icons/cost_effective.svg',
        title: 'Cost-Effective',
        description: 'We provide affordable prices while maintaining quality, delivering high-value services to businesses and organizations of any size.'
    },
    {
        img: '/gis_images/why_choose_gis_icons/fast_turnaround.svg',
        title: 'Fast Turnarounds',
        description: 'With effective workflows, skilled team, and without compromising on accuracy we ensure your projects remain on schedule.'
    }
];

const faqData = [
    {
        question: "1.	How accurate are your drone surveys and maps?",
        answer: "The data processing system at Techmapperz achieves survey results with accuracy within centimeter level through its combination of drone sensors and processing approaches.",
    },
    {
        question: "2.	What is an orthophoto, and why is it important?",
        answer: "The orthophoto presents geometrically corrected images that free distorted shapes while delivering detailed and precise imaging for surveying land and agricultural assessment and environmental management operations.",
    },
    {
        question: "3.	What is a 3D terrain model, and how is it used?",
        answer: "The 3D terrain model presents an exact three-dimensional display of land topography. This technology helps professionals inspect locations to evaluate risk potentials while selecting land uses and investigating terrain properties during infrastructure planning.",
    },
    {
        question: "4.	What is a LiDAR sensor, and how does it work with drones?",
        answer: "The technology leverages laser light to detect distance ranges which produces highly precise point cloud data of surface features and manmade constructions. Mapping operations require their use for dependable results in forestry operations and environmental and mining applications.",
    },
    {
        question: "5.	Why should I choose drone surveys over traditional land surveys?",
        answer: "Drone surveys complete their tasks swiftly while being budget-friendly and producing exact results. These methods provide surveying operations without having to send personnel to the site thus shortening the duration of work while reducing workplace hazards.",
    },
    {
        question: "6.	What is the benefit of using drone data processing?",
        answer: "Through drone data processing companies convert unprocessed aerial images into useful end results such as 3D models and maps together with point clouds which generate important information for construction sites and agricultural applications.",
    },
    {
        question: "7.	Can drones be used for corridor mapping?",
        answer: "Drones serve as an effective solution to acquire high-resolution data about roads, pipelines along with power lines therefore supporting route planning and environmental assessment programs and compliance activities.",
    },
    {
        question: "8.	What are Digital Elevation Models (DEM), and how are they useful?",
        answer: "Land development projects together with flood risk assessments and hydrological modeling rely on DEMs which show actual ground surface information.",
    },
    {
        question: "9.	Are Techmapperz's drone services cost-effective?",
        answer: "The drone services we offer manage costs effectively by delivering both swift accurate data as well as eliminating surveying expenses and manual inspection expenses.",
    },
    {
        question: "10.	What is the advantage of 3D Mesh Modeling in construction?",
        answer: "Digital representations created through 3D Mesh Modeling enhance construction planning as well as project monitoring and anticipate problems that later develop into cost-intensive situations.",
    }
];

const bannerData = {
    title: (
        <>
            Upgrading Your Survey & <span className="text-gradient">Mapping</span> with Cutting-Edge{" "}
            <span className="text-gradient"> Drone Technology!</span>
        </>
    ),
    subtitle: "Survey Smarter, Faster, and More Efficiently!",
    description: "",
    buttonText: "Get In Touch",
    imageSrc: "/gis_images/DroneServiceBanner.webp",
    imageAlt: "Drone Services Mockup"
};

const introData = {
    imageSrc: Drone_ServiceintroImg,
    imageAlt: "Drone Services",
    paragraphs: [
        "Techmapperz uses current drone technology to deliver accurate, effective, and affordable aerial solutions. The drone services we provide can help in revolutionizing the data collection, analysis and presentation across sectors (infrastructure, agriculture, construction, utilities, environmental management etc.). The synergy of drones and GIS technology produces accurate and high resolution data that not only makes better decisions but also minimizes risk and maximizes efficiency."
    ],
    services: [
        { text: "High Resolution", highlight: "Data Acqisition" },
        { text: "Tailored", highlight: "Drone Solutions" },
        { text: "Efficient and", highlight: "Cost Effective" },
        { text: "Expert Analysis and", highlight: "Insights" }
    ],
    backgroundText: "Drone Services"
};


const DroneService = () => {
    return (
        <>
            <div className="bg-black overflow-hidden text-white">
                <ScrollToTop />
                <WebsiteBanner {...bannerData} />
                <section>

                    <WebsiteIntroduction
                        imageSrc={introData.imageSrc}
                        imageAlt={introData.imageAlt}
                        paragraphs={introData.paragraphs}
                        services={introData.services}
                        backgroundText={introData.backgroundText}
                    />

                    <GisServices_Services_We_Offer
                        categoryData={categoryData}
                        count={count}
                    />
                    <WhyChooseTechmapperz
                        features={features}
                        heading={'Why Choose Techmapperz for Drone Services'}
                    />
                    <FAQ
                        faqData={faqData}
                    />

                </section>
            </div>
        </>
    );
}

export default DroneService;
