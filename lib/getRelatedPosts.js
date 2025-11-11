

const getRelatedPosts = async (postId) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Newblogpost/related/${postId}`,{
        next:{
            revalidate:10
        }
    });
    return response.json();
  } catch (error) {
    console.error("Failed to fetch related posts", error);
    return [];
  }
};

export default getRelatedPosts;
