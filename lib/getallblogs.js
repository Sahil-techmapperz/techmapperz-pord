export default async function getallblogs(page=1,parpage=6){
    // fetch data from blog API
    // return the fetched data
    let url= `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Newblogpost/${page}?perPage=${parpage}`;
    let results = await fetch(url,{
        next:{
            revalidate:10
        }
    });

    return results.json();
}