export default async function getallblogs(page=1,parpage=6){
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
        
        // Return empty data if no base URL is configured
        if (!baseUrl || baseUrl === 'undefined') {
            console.warn('NEXT_PUBLIC_BACKEND_BASE_URL not configured, returning empty blog data');
            return { success: true, blogPosts: [], totalPages: 0, currentPage: page };
        }

        // Ensure page is a number
        const pageNum = Number(page) || 1;
        const perPage = Number(parpage) || 6;

        const url = `${baseUrl}/Newblogpost/${pageNum}?perPage=${perPage}`;
        console.log('Fetching blogs from:', url);
        
        const results = await fetch(url, {
            cache: 'no-store' // Disable cache to ensure fresh data for each page
        });

        if (!results.ok) {
            throw new Error(`HTTP error! status: ${results.status}`);
        }

        const data = await results.json();
        
        // Handle different API response structures
        // If API returns { data: [...], totalPages: ... }, map it to { blogPosts: [...], totalPages: ... }
        if (data.data && Array.isArray(data.data)) {
            return {
                blogPosts: data.data,
                totalPages: data.totalPages || 1,
                currentPage: pageNum
            };
        }
        
        // If API already returns blogPosts, use it as is
        if (data.blogPosts && Array.isArray(data.blogPosts)) {
            return {
                blogPosts: data.blogPosts,
                totalPages: data.totalPages || 1,
                currentPage: pageNum
            };
        }

        // Fallback: return empty structure
        return { success: true, blogPosts: [], totalPages: 0, currentPage: pageNum };
    } catch (error) {
        console.error('Error fetching blog data:', error);
        // Return fallback data structure
        return { success: true, blogPosts: [], totalPages: 0, currentPage: Number(page) || 1 };
    }
}