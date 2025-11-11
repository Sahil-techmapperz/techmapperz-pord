// Utility function to fetch events data
export async function getEventsData(options = {}) {
  const { 
    type = 'events', 
    limit, 
    status = 'all', 
    category,
    revalidate = 300 // 5 minutes cache 
  } = options;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || 'http://localhost:8000';

    // Build query parameters
    const params = new URLSearchParams();
    params.append('type', type);
    
    if (limit) params.append('limit', limit.toString());
    if (status) params.append('status', status);
    if (category) params.append('category', category);

    const url = `${baseUrl}/events?${params.toString()}`;
    
    const response = await fetch(url, {
      next: { revalidate },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to fetch events data');
    }

    

    return result.data;
  } catch (error) {
    console.error('Error fetching events data:', error);
    // Return empty array as fallback
    return [];
  }
}

// Specific helper functions
export async function getEvents(limit, status = 'completed', revalidate = 600) {
  return getEventsData({ type: 'events', limit, status, revalidate });
}

export async function getCultureData() {
  return getEventsData({ type: 'culture' });
}

export async function getWorkspaceImages() {
  return getEventsData({ type: 'workspace' });
}

export async function getEventsByCategory(category, limit) {
  return getEventsData({ type: 'events', category, limit });
}

export async function getUpcomingEvents(limit = 5) {
  return getEventsData({ type: 'events', status: 'upcoming', limit });
}

export async function getFeaturedEvents(limit = 3) {
  const events = await getEventsData({ type: 'events' });
  return events.filter(event => event.featured).slice(0, limit);
} 