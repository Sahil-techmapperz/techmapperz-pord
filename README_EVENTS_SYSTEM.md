# Techmapperz Events System - Complete API Documentation

## 📋 Table of Contents

1. [Overview](#overview)
2. [API Endpoints](#api-endpoints)
3. [Data Models](#data-models)
4. [Frontend Integration](#frontend-integration)
5. [Error Handling](#error-handling)
6. [Testing](#testing)
7. [Future Roadmap](#future-roadmap)

---

## 📖 Overview

The Techmapperz Events System manages company events, culture highlights, and workspace galleries through RESTful APIs, supporting the "Life @ Techmapperz" initiative.

### Key Features

- 🎉 **Event Management** - Company events with filtering and categorization
- 🏢 **Culture Management** - Company values and culture highlights  
- 🖼️ **Workspace Gallery** - Office images with bento box layout
- 🔍 **Advanced Filtering** - By category, status, date range
- ⚡ **Performance Optimized** - Caching with Next.js ISR

---

## 🚀 API Endpoints

### Base URLs
```
Development: http://localhost:3000/api
Production: https://techmapperz.com/api
```

### 1. Main Events API

**Endpoint:** `GET /api/events`

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | string | `events` | Data type: `events`, `culture`, `workspace` |
| `limit` | number | - | Maximum records to return |
| `status` | string | `all` | Event status: `completed`, `upcoming`, `all` |
| `category` | string | - | Event category filter |

**Examples:**

```bash
# Get all events
GET /api/events?type=events

# Get recent completed events (limit 6)
GET /api/events?type=events&status=completed&limit=6

# Get upcoming conferences
GET /api/events?type=events&status=upcoming&category=conference

# Get company culture data
GET /api/events?type=culture

# Get workspace images
GET /api/events?type=workspace
```

**Response Format:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Annual Tech Conference 2024",
      "date": "2024-03-15",
      "category": "Conference",
      "image": "/lifeatTechmapperz/img_1.webp",
      "description": "Our annual technology conference...",
      "featured": true,
      "status": "completed"
    }
  ],
  "total": 8
}
```

---

## 📊 Data Models

### Event Object

```typescript
interface Event {
  id: number;
  title: string;
  description: string;
  date: string; // ISO format (YYYY-MM-DD)
  category: string;
  image: string;
  featured: boolean;
  status: 'completed' | 'upcoming';
}
```

### Culture Object

```typescript
interface Culture {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}
```

### Workspace Image Object

```typescript
interface WorkspaceImage {
  id: number;
  src: string;
  alt: string;
  type: 'featured' | 'tall' | 'wide' | 'wide2' | 'square';
  width: number;
  height: number;
}
```

---

## 🔧 Frontend Integration

### Utility Functions

```javascript
import { 
  getEvents, 
  getCultureData, 
  getWorkspaceImages,
  getEventsByCategory,
  getUpcomingEvents,
  getFeaturedEvents
} from '@/lib/getEventsData';

// Get recent events
const events = await getEvents(6, 'completed');

// Get company culture
const culture = await getCultureData();

// Get workspace images
const workspace = await getWorkspaceImages();

// Get events by category
const conferences = await getEventsByCategory('Conference', 5);

// Get upcoming events
const upcoming = await getUpcomingEvents();

// Get featured events
const featured = await getFeaturedEvents(3);
```

### React Components

```jsx
// components/EventCard.jsx
const EventCard = ({ event }) => {
  return (
    <div className="event-card bg-black/20 backdrop-blur-sm rounded-xl">
      <img src={event.image} alt={event.title} />
      <div className="p-6">
        <span className="category bg-gradient-to-r from-[#376bab] to-[#d2292b]">
          {event.category}
        </span>
        <h3 className="text-white font-bold">{event.title}</h3>
        <p className="text-gray-300">{event.description}</p>
        <time className="text-gray-400">{formatDate(event.date)}</time>
      </div>
    </div>
  );
};
```

---

## ⚠️ Error Handling

### Error Response Format

```json
{
  "success": false,
  "error": "Failed to fetch events data",
  "message": "Detailed error description"
}
```

### Frontend Error Handling

```javascript
try {
  const events = await getEvents(10);
  // Use events data
} catch (error) {
  // Error is already logged, empty array is returned as fallback
  console.log('Using fallback data');
}
```

---

## 🧪 Testing

### API Testing

```bash
# Test events endpoint
curl "http://localhost:3000/api/events?type=events&limit=3"

# Test culture endpoint  
curl "http://localhost:3000/api/events?type=culture"

# Test workspace endpoint
curl "http://localhost:3000/api/events?type=workspace"

# Test filtered events
curl "http://localhost:3000/api/events?type=events&status=upcoming&category=training"
```

### Unit Tests

```javascript
// __tests__/api/events.test.js
describe('/api/events', () => {
  it('should return events with default parameters', async () => {
    const request = new Request('http://localhost:3000/api/events?type=events');
    const response = await GET(request);
    const data = await response.json();
    
    expect(data.success).toBe(true);
    expect(Array.isArray(data.data)).toBe(true);
  });
});
```

---

## 🎯 Current Event Categories

- **Conference** - Company conferences and tech talks
- **Team Building** - Team bonding activities  
- **Hackathon** - Coding competitions and innovation events
- **Meeting** - Company meetings and all-hands
- **Celebration** - Holiday and milestone celebrations
- **Training** - Professional development workshops

---

## 🖼️ Workspace Image Types

For bento box layout:

- **featured** - Large 2x2 grid span
- **tall** - Vertical 1x2 grid span  
- **wide** - Horizontal 3x1 grid span
- **wide2** - Horizontal 2x1 grid span
- **square** - Standard 1x1 grid span

---

## 🗺️ Future Roadmap

### Phase 1: Core Features (Completed ✅)
- [x] Basic events API
- [x] Culture and workspace APIs
- [x] Frontend integration
- [x] Caching implementation

### Phase 2: Enhanced Features (Planned 📋)
- [ ] Event management (CRUD operations)
- [ ] Image upload functionality
- [ ] Advanced search and filtering
- [ ] Event registration system
- [ ] Real-time updates
- [ ] Analytics dashboard

---

## 📞 Support

For questions about the Events API:
- 📧 Email: dev@techmapperz.com
- 📚 Documentation: Internal Wiki

---

## 📝 Changelog

### v1.0.0 (Current)
- Initial events API implementation
- Culture and workspace endpoints  
- Frontend integration with Next.js
- Basic caching with ISR

---

**Last Updated**: January 2024  
**API Version**: 1.0.0 