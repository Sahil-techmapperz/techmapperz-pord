export default async function getTestimonial(){
    // fetch data from blog API
    // return the fetched data
    let results = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Testimonial`,{
        next:{
            revalidate:10
        }
    });

    return results.json();
}