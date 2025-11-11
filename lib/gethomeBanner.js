export default async function gethomeBanner(){
    // fetch data from blog API
    // return the fetched data
    let url= `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/banner`;
    console.log(url);
    let results = await fetch(url,{
        next:{
            revalidate:10
        }
    });

    return results.json();
}