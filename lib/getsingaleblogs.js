export default async function getRecentblogs(page=1){
    // fetch data from blog API
    // return the fetched data
    let results = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Newblogpost/recent`,{
        next:{
            revalidate:10
        }
    });

    return results.json();
}