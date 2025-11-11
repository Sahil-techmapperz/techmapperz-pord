const getRecentPosts = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    
    // Return empty data if no base URL is configured
    if (!baseUrl || baseUrl === 'undefined') {
      console.warn('NEXT_PUBLIC_BACKEND_BASE_URL not configured, returning empty recent posts');
      return [];
    }

    const url = `${baseUrl}/Newblogpost/recent`;
    console.log('Fetching recent posts from:', url);
    
    const response = await fetch(url, {
      next: {
        revalidate: 10
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch recent posts", error);
    return [];
  }
};

export default getRecentPosts;
