# Techmapperz Events System - Complete API Documentation

## 📋 Table of Contents

1. [Overview](#overview)
2. [System Architecture](#system-architecture)
3. [API Endpoints](#api-endpoints)
4. [Data Models](#data-models)
5. [Frontend Integration](#frontend-integration)
6. [Authentication & Security](#authentication--security)
7. [Error Handling](#error-handling)
8. [Caching Strategy](#caching-strategy)
9. [Database Schema](#database-schema)
10. [Deployment Guide](#deployment-guide)
11. [Testing](#testing)
12. [Future Roadmap](#future-roadmap)

---

## 📖 Overview

The Techmapperz Events System is a comprehensive solution for managing company events, culture highlights, and workspace galleries. It provides both read and write capabilities through RESTful APIs, supporting the company's "Life @ Techmapperz" initiative.

### Key Features

- 🎉 **Event Management** - Full CRUD operations for company events
- 🏢 **Culture Management** - Company values and culture highlights
- 🖼️ **Workspace Gallery** - Office images with bento box layout support
- 🔍 **Advanced Filtering** - By category, status, date range, and more
- 📱 **Responsive Design** - Mobile-first approach with dynamic layouts
- ⚡ **Performance Optimized** - Caching, ISR, and image optimization

---

## 🏗️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   API Layer     │    │   Data Layer    │
│                 │    │                 │    │                 │
│ • Events Page   │◄──►│ • /api/events   │◄──►│ • Events DB     │
│ • Components    │    │ • /api/culture  │    │ • Images Store  │
│ • Utils         │    │ • /api/workspace│    │ • Cache Layer   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Caching**: Next.js ISR (Incremental Static Regeneration)
- **Images**: Next.js Image Optimization, ImageKit CDN
- **Validation**: Built-in TypeScript interfaces

---

## 🚀 API Endpoints

### Base URLs

```
Development: http://localhost:3000/api
Production: https://techmapperz.com/api
```

### 1. Events API

#### **GET /api/events**

Main endpoint for retrieving events, culture, and workspace data.

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `type` | string | No | `events` | Data type: `events`, `culture`, `workspace` |
| `limit` | number | No | - | Maximum records to return |
| `status` | string | No | `all` | Event status: `completed`, `upcoming`, `all` |
| `category` | string | No | - | Event category filter |
| `featured` | boolean | No | - | Filter featured events only |
| `search` | string | No | - | Search in titles and descriptions |
| `date_from` | string | No | - | Filter events from date (YYYY-MM-DD) |
| `date_to` | string | No | - | Filter events to date (YYYY-MM-DD) |

**Examples:**

```bash
# Get all events
GET /api/events?type=events

# Get recent completed events (limit 6)
GET /api/events?type=events&status=completed&limit=6

# Get upcoming conferences
GET /api/events?type=events&status=upcoming&category=conference

# Get featured events
GET /api/events?type=events&featured=true

# Search events
GET /api/events?type=events&search=hackathon

# Get events in date range
GET /api/events?type=events&date_from=2024-01-01&date_to=2024-12-31
```

**Response:**

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
      "status": "completed",
      "location": "New Delhi Office",
      "attendees": 150,
      "tags": ["technology", "innovation", "networking"]
    }
  ],
  "total": 8,
  "page": 1,
  "per_page": 10
}
```

### 2. Culture API

#### **GET /api/events?type=culture**

Retrieve company culture highlights and values.

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Innovation First",
      "description": "We encourage creative thinking and innovative solutions.",
      "icon": "💡",
      "order": 1,
      "color": "#376bab",
      "active": true
    }
  ]
}
```

### 3. Workspace API

#### **GET /api/events?type=workspace**

Retrieve workspace images for the bento box gallery.

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "src": "/lifeatTechmapperz/img_1.webp",
      "alt": "Office featured image",
      "type": "featured",
      "width": 600,
      "height": 600,
      "caption": "Our modern workspace",
      "location": "Delhi Office"
    }
  ]
}
```

### 4. Event Categories API

#### **GET /api/events/categories**

Get all available event categories with counts.

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "name": "Conference",
      "count": 5,
      "description": "Company conferences and tech talks",
      "color": "#376bab"
    },
    {
      "name": "Team Building",
      "count": 8,
      "description": "Team bonding activities",
      "color": "#d2292b"
    }
  ]
}
```

### 5. Event Statistics API

#### **GET /api/events/stats**

Get event statistics and analytics.

**Response:**

```json
{
  "success": true,
  "data": {
    "total_events": 25,
    "completed_events": 20,
    "upcoming_events": 5,
    "events_this_year": 15,
    "most_popular_category": "Team Building",
    "average_attendees": 75,
    "monthly_breakdown": [
      { "month": "January", "count": 2 },
      { "month": "February", "count": 3 }
    ]
  }
}
```

---

## 🎯 Future API Endpoints (Roadmap)

### 6. Event Management APIs (Admin)

#### **POST /api/events**

Create a new event.

**Request Body:**

```json
{
  "title": "New Event Title",
  "description": "Event description",
  "date": "2024-06-15",
  "category": "Training",
  "image": "/path/to/image.webp",
  "location": "Office Location",
  "featured": false,
  "status": "upcoming",
  "tags": ["training", "skills"]
}
```

#### **PUT /api/events/{id}**

Update an existing event.

#### **DELETE /api/events/{id}**

Delete an event.

### 7. Image Management APIs

#### **POST /api/events/images**

Upload event or workspace images.

#### **GET /api/events/images**

Get image gallery with filtering.

### 8. User Interaction APIs

#### **POST /api/events/{id}/register**

Register for an upcoming event.

#### **GET /api/events/{id}/attendees**

Get event attendees list.

#### **POST /api/events/{id}/feedback**

Submit event feedback.

---

## 📊 Data Models

### Event Model

```typescript
interface Event {
  id: number;
  title: string;
  description: string;
  date: string; // ISO format (YYYY-MM-DD)
  category: string;
  image: string;
  featured: boolean;
  status: 'completed' | 'upcoming' | 'cancelled';
  location?: string;
  attendees?: number;
  max_attendees?: number;
  tags: string[];
  created_at: string;
  updated_at: string;
}
```

### Culture Model

```typescript
interface Culture {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
  color?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}
```

### Workspace Image Model

```typescript
interface WorkspaceImage {
  id: number;
  src: string;
  alt: string;
  type: 'featured' | 'tall' | 'wide' | 'wide2' | 'square';
  width: number;
  height: number;
  caption?: string;
  location?: string;
  order?: number;
  active: boolean;
  created_at: string;
}
```

### API Response Model

```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  total?: number;
  page?: number;
  per_page?: number;
  error?: string;
  message?: string;
}
```

---

## 🔧 Frontend Integration

### Utility Functions

```javascript
// lib/getEventsData.js
import { getEventsData } from '@/lib/getEventsData';

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

// Search events
const searchResults = await searchEvents('hackathon');
```

### React Components

```jsx
// components/EventCard.jsx
import { formatDate } from '@/utils/dateUtils';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} />
      <div className="content">
        <span className="category">{event.category}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <time>{formatDate(event.date)}</time>
      </div>
    </div>
  );
};
```

### Custom Hooks

```javascript
// hooks/useEvents.js
import { useState, useEffect } from 'react';
import { getEvents } from '@/lib/getEventsData';

export const useEvents = (limit = 10, status = 'all') => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getEvents(limit, status);
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [limit, status]);

  return { events, loading, error };
};
```

---

## 🔐 Authentication & Security

### Current Implementation

- **Read Operations**: Public access (no authentication required)
- **Write Operations**: Protected (future implementation)

### Future Security Features

```javascript
// Middleware for protected routes
export async function authMiddleware(request) {
  const token = request.headers.get('authorization');
  
  if (!token) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  // Verify JWT token
  const user = await verifyToken(token);
  if (!user || !user.isAdmin) {
    return new Response('Forbidden', { status: 403 });
  }
  
  return null; // Continue to route handler
}
```

### API Key Authentication

```bash
# For external integrations
curl -H "X-API-Key: your-api-key" \
     -H "Content-Type: application/json" \
     "https://techmapperz.com/api/events"
```

---

## ⚠️ Error Handling

### Standard Error Responses

```json
{
  "success": false,
  "error": "VALIDATION_ERROR",
  "message": "Invalid date format. Expected YYYY-MM-DD.",
  "details": {
    "field": "date",
    "received": "2024/03/15",
    "expected": "2024-03-15"
  }
}
```

### Error Codes

| Code | Description | HTTP Status |
|------|-------------|-------------|
| `VALIDATION_ERROR` | Invalid input parameters | 400 |
| `NOT_FOUND` | Resource not found | 404 |
| `UNAUTHORIZED` | Authentication required | 401 |
| `FORBIDDEN` | Insufficient permissions | 403 |
| `RATE_LIMITED` | Too many requests | 429 |
| `SERVER_ERROR` | Internal server error | 500 |

### Frontend Error Handling

```javascript
try {
  const events = await getEvents(10);
} catch (error) {
  if (error.code === 'RATE_LIMITED') {
    // Show rate limit message
    showNotification('Please wait before making another request');
  } else {
    // Show generic error
    showNotification('Failed to load events');
  }
}
```

---

## ⚡ Caching Strategy

### Next.js ISR (Incremental Static Regeneration)

```javascript
// API routes with caching
export async function GET(request) {
  const response = await fetch(url, {
    next: { revalidate: 300 } // 5 minutes
  });
  
  return response;
}
```

### Cache Invalidation

```javascript
// Manual cache invalidation
import { revalidateTag } from 'next/cache';

export async function POST(request) {
  // Update data
  await updateEvent(eventData);
  
  // Invalidate cache
  revalidateTag('events');
  
  return Response.json({ success: true });
}
```

### Client-side Caching

```javascript
// React Query implementation
import { useQuery } from '@tanstack/react-query';

const { data: events } = useQuery({
  queryKey: ['events', { status, category }],
  queryFn: () => getEvents(10, status, category),
  staleTime: 5 * 60 * 1000, // 5 minutes
  cacheTime: 10 * 60 * 1000, // 10 minutes
});
```

---

## 🗄️ Database Schema

### Events Table

```sql
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  category VARCHAR(100) NOT NULL,
  image VARCHAR(500),
  featured BOOLEAN DEFAULT FALSE,
  status VARCHAR(20) CHECK (status IN ('completed', 'upcoming', 'cancelled')),
  location VARCHAR(255),
  attendees INTEGER DEFAULT 0,
  max_attendees INTEGER,
  tags TEXT[], -- PostgreSQL array
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_events_date ON events(date DESC);
CREATE INDEX idx_events_category ON events(category);
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_featured ON events(featured) WHERE featured = true;
```

### Culture Table

```sql
CREATE TABLE culture (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(10),
  order_position INTEGER UNIQUE,
  color VARCHAR(7), -- Hex color code
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Workspace Images Table

```sql
CREATE TABLE workspace_images (
  id SERIAL PRIMARY KEY,
  src VARCHAR(500) NOT NULL,
  alt VARCHAR(255),
  type VARCHAR(20) CHECK (type IN ('featured', 'tall', 'wide', 'wide2', 'square')),
  width INTEGER,
  height INTEGER,
  caption VARCHAR(500),
  location VARCHAR(255),
  order_position INTEGER,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🚀 Deployment Guide

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_BASE_URL=https://techmapperz.com
NEXT_PUBLIC_BACKEND_BASE_URL=https://api.techmapperz.com
DATABASE_URL=postgresql://user:pass@localhost:5432/techmapperz
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
JWT_SECRET=your_jwt_secret
API_RATE_LIMIT=100 # requests per minute
```

### Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Run development server
npm run dev
```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🧪 Testing

### API Testing with curl

```bash
# Test events endpoint
curl -X GET "http://localhost:3000/api/events?type=events&limit=5" \
     -H "Content-Type: application/json"

# Test with authentication (future)
curl -X POST "http://localhost:3000/api/events" \
     -H "Authorization: Bearer your-jwt-token" \
     -H "Content-Type: application/json" \
     -d '{"title": "New Event", "date": "2024-06-15"}'
```

### Unit Tests

```javascript
// __tests__/api/events.test.js
import { GET } from '@/app/api/events/route';

describe('/api/events', () => {
  it('should return events with default parameters', async () => {
    const request = new Request('http://localhost:3000/api/events?type=events');
    const response = await GET(request);
    const data = await response.json();
    
    expect(data.success).toBe(true);
    expect(Array.isArray(data.data)).toBe(true);
  });

  it('should filter events by status', async () => {
    const request = new Request('http://localhost:3000/api/events?type=events&status=upcoming');
    const response = await GET(request);
    const data = await response.json();
    
    expect(data.data.every(event => event.status === 'upcoming')).toBe(true);
  });
});
```

### Integration Tests

```javascript
// __tests__/integration/events-page.test.js
import { render, screen } from '@testing-library/react';
import EventsPage from '@/app/events/page';

describe('Events Page', () => {
  it('should render events from API', async () => {
    render(await EventsPage());
    
    expect(screen.getByText('Life @ Techmapperz')).toBeInTheDocument();
    expect(screen.getByText('Our Culture')).toBeInTheDocument();
    expect(screen.getByText('Recent Events')).toBeInTheDocument();
  });
});
```

### Performance Testing

```bash
# Load testing with Artillery
artillery run load-test.yml

# Memory usage monitoring
node --inspect app.js
```

---

## 🗺️ Future Roadmap

### Phase 1: Core Features (Completed ✅)
- [x] Basic events API
- [x] Culture and workspace APIs
- [x] Frontend integration
- [x] Caching implementation

### Phase 2: Enhanced Features (In Progress 🚧)
- [ ] Event management (CRUD operations)
- [ ] Image upload functionality
- [ ] Advanced search and filtering
- [ ] Event registration system

### Phase 3: Advanced Features (Planned 📋)
- [ ] Real-time updates (WebSocket)
- [ ] Event notifications
- [ ] Analytics dashboard
- [ ] Mobile app integration
- [ ] Calendar integration
- [ ] Email notifications

### Phase 4: Enterprise Features (Future 🚀)
- [ ] Multi-tenant support
- [ ] Advanced permissions
- [ ] Audit logging
- [ ] Data export/import
- [ ] Third-party integrations
- [ ] AI-powered event recommendations

---

## 📞 Support & Contributing

### API Support

For questions about the Events API:
- 📧 Email: dev@techmapperz.com
- 💬 Slack: #events-api-support
- 📚 Documentation: [Internal Wiki](https://wiki.techmapperz.com/events-api)

### Contributing Guidelines

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- Use **TypeScript** for type safety
- Follow **ESLint** configuration
- Write **unit tests** for new features
- Update **documentation** for API changes

---

## 📝 Changelog

### v1.0.0 (Current)
- Initial events API implementation
- Culture and workspace endpoints
- Frontend integration with Next.js
- Basic caching with ISR

### v1.1.0 (Planned)
- Event management (CRUD)
- Image upload functionality
- Advanced filtering options
- Performance improvements

---

## 📄 License

This project is proprietary to Techmapperz. All rights reserved.

---

**Last Updated**: January 2024  
**API Version**: 1.0.0  
**Documentation Version**: 1.0.0 