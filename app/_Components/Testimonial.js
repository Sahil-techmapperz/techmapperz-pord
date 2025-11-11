import axios from "axios";
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import CarouselWrapper from './CarouselWrapper';

async function getTestimonials() {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Testimonial`;
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

const Testimonial = async () => {
  const testimonials = await getTestimonials();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="bg-gray-700 py-8 px-4 text-center ">
      <h1 className="text-3xl max-sm:text-xl mb-6 text-white text-center font-semibold tracking-wide drop-shadow-md leading-snug">
        Hear From Our Happy Clients
      </h1>

      <div className="w-full max-w-[1600px] mx-auto p-12 max-sm:px-2">
        <CarouselWrapper responsive={responsive}>
          {testimonials.map((data, index) => (
            <div
              key={index}
              className="bg-[#1C1C1C] text-white p-8 rounded-lg shadow-lg mx-4 min-h-[300px] flex flex-col"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold mr-2">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-pink-500 text-xl" />
                  ))}
                </div>
              </div>

              <div className="tooltip w-full flex-grow">
                <p className="text-base text-start leading-relaxed"  >
                  {data.message.length > 200
                    ? `${data.message.substring(0, 200)}...`
                    : data.message}
                </p>
                
              </div>

              <div className="mt-6">
                <div className="mb-4 text-start">
                  <p className="font-semibold text-lg">{data.name}</p>
                  <p className="text-gray-400">{data.Companyname}</p>
                </div>

                <div className="flex items-center text-green-500">
                  <FaCheckCircle className="mr-2" />
                  <span className="text-sm">Verified Review</span>
                </div>
              </div>
            </div>
          ))}
        </CarouselWrapper>
      </div>
    </div>
  );
};

export default Testimonial;


