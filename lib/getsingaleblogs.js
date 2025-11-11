export default async function getRecentblogs(page=1){
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
        
        // Return empty data if no base URL is configured
        if (!baseUrl || baseUrl === 'undefined') {
            console.warn('NEXT_PUBLIC_BACKEND_BASE_URL not configured, returning empty recent blog data');
            return { success: true, data: [] };
        }

        const url = `${baseUrl}/Newblogpost/recent`;
        console.log('Fetching recent blogs from:', url);
        
        const results = await fetch(url, {
            next: {
                revalidate: 10
            }
        });

        if (!results.ok) {
            throw new Error(`HTTP error! status: ${results.status}`);
        }

        return await results.json();
    } catch (error) {
        console.error('Error fetching recent blog data:', error);
        // Return fallback data structure
        return { success: true, data: [] };
    }
}