export default async function getJobsdata(page=1){
    // fetch data from blog API
    // return the fetched data
    let url= `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/jobs`;
    console.log(url);
    let results = await fetch(url,{
        next:{
            revalidate:10
        }
    });

    return results.json();
}