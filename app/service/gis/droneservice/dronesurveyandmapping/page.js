import GisServicesIntroduction from '@/app/_Components/GisServicesIntroduction'
import OurGISService from '@/app/_Components/OurGISService'
import ScrollToTop from '@/app/_Components/ScrollToTop'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com"; // Fallback URL


export const metadata = {
    title: "Modern Drone & GIS Expertise | geospatial data | Techmapperz | India",
    description: "Techampperz is one the leading organisation which uses highly advanced drone technology and GIS expertise which assists in the generation of mapping solution that are detailed and high in precision.",
    alternates: {
        canonical: `${BASE_URL}/service/gis/droneservice/dronesurveyandmapping`,
    },
};

const DroneSurveyandMapping = () => {
    const GisMappingIntrouctiondata = [{
        title:
            "Techampperz is one the leading organisation which uses drone technology that is highly advanced and GIS expertise which assists in the generation of mapping solution that are detailed and high in precision. In order to provide accurate and useful geospatial data which can be utilized in environmental monitoring,land management, infrastructural planning, asset management and also in energy and telecommunication sector. We use high-resolution sensors and advanced technology UAV’s. Using drone technology as a bridge between clients and will allow slow and expensive procedures, i.e., conventional surveying are slow so they are used less, since our drone-based solutions can be delivered quickly, economically and with high quality to a wide range of clients, who will be served by a variety of information and data, i.e., topographic surveys to corridor mapping.",
        // img: 
        // ""
    }];

    const OurGISServices = [
        {
            title:
                "Our Drone Survey & Mapping Services",
            desc:
                "",

            Services: [{
                id: 1,
                servicetitle:
                    "Topographic Mapping ",
                servicedescription:
                    "We create a high-accuracy topographical lookup that displays elevation changes, terrain and landscape features, and land contours. We provide accurate data for urban planning, civil engineering, and land development, ensuring the success of your projects.",
                serviceimg:
                    "/gis_images/drone_services/drone_surveying_mapping/Topographic_map.webp"

            },
            {
                id: 2,
                servicetitle:
                    "Orthophoto Generation ",
                servicedescription:
                    "Geometric corrections transform raw aerial images into orthophotos with true-scale resolution for each pixel, removing distortion effects from topographical variations and camera tilt. The high-resolution images can be used to make inspections, run local and agricultural plans, geospatial insights in agriculture, environmental monitoring or land surveying.",
                serviceimg:
                    "/gis_images/drone_services/drone_surveying_mapping/ortrhophoto_generation.webp"
            },
            {
                id: 3,
                servicetitle:
                    "3D Terrain Modelling",
                servicedescription:
                    "We help in environmental studies and also industries like infrastructure development, mining by creating detailed 3D models of terrain based on data captured by our drones. The ability to model vegetation critically improves project feasibility and risk assessment through detailed terrain models, drainage analysis, and land-use optimization.",
                serviceimg:
                    "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp"
            },

            {
                id: 4,
                servicetitle:
                    "Corridor Mapping",
                servicedescription:
                    "We provide High resolution data for all your linear infrastructure projects including roads, pipelines and power lines. In aiding route planning, environmental analysis, and construction management through highly continuous and precise spatial data acquisition, we facilitate smooth project execution and regulatory compliance.",
                serviceimg:
                    "/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp"

            }
            ]
        }
    ]
    return (
        <div className="bg-black text-white">
            <ScrollToTop />
            <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/gis_images/Drone_Survey_and_Mapping_Banner.webp")' }}>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-black/80'>
                    <h1 className="text-4xl font-bold max-sm:text-2xl">Drone Survey & Mapping</h1>
                    <p className="text-xl text-center max-sm:text-[16px]  text-gray-400">
                        <Link href="/">Home</Link> / <Link href="/service">Services</Link>/<Link href="/service/gis/droneservice"> Drone Services</Link> / Drone Survey & Mapping
                    </p>
                    <div className="flex gap-4">
                        <Link href="/contact">
                            <button
                                className="py-3 px-6 rounded-full bg-gradient-to-r from-[#2d5689] to-[#a82123] transition-all duration-300 flex items-center gap-2"
                            >
                                Get A Free Quote
                                <FaArrowRightLong />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="p-4 sm:p-6 md:p-8 lg:p-20 max-w-[1600px] mx-auto">
                <GisServicesIntroduction GisMappingIntrouctiondata={GisMappingIntrouctiondata} />
                <OurGISService OurGISServices={OurGISServices} />

            </section>
        </div>
    )
}
export default DroneSurveyandMapping 