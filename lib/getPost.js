const getPost = async (postId) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Newblogpost/singalepost/${postId}`,{
        next:{
            revalidate:10
        }
    });
    return response.json();
  } catch (error) {
    console.error("Failed to fetch post", error);
    return null;
  }
};

export default getPost;
