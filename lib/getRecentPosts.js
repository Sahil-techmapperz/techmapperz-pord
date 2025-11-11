const getRecentPosts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Newblogpost/recent`,{
        next:{
            revalidate:10
        }
    });
    return response.json();
  } catch (error) {
    console.error("Failed to fetch recent posts", error);
    return [];
  }
};

export default getRecentPosts;
