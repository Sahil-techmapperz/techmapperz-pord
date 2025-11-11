export default async function getJobsdata(page=1){
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
        
        // Return empty data if no base URL is configured
        if (!baseUrl || baseUrl === 'undefined') {
            console.warn('NEXT_PUBLIC_BACKEND_BASE_URL not configured, returning empty jobs data');
            return { success: true, data: [] };
        }

        const url = `${baseUrl}/jobs`;
        console.log('Fetching jobs from:', url);
        
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
        console.error('Error fetching jobs data:', error);
        // Return fallback data structure
        return { success: true, data: [] };
    }
}