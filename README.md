# CA Monk - Blog Application

> A modern, feature-rich blog application built with React, TanStack Query, Tailwind CSS, and shadcn/ui.

![Blog Application](./ui.jpeg)

## 🎯 Project Overview

This is a complete blog application developed as part of the CA Monk Frontend Interview Assignment. The application demonstrates proficiency in modern React development, state management, and UI/UX design.

### ✨ Key Features

- **📝 Blog Management**
  - View all blogs with beautiful card layouts
  - Read detailed blog posts with cover images
  - Create new blogs with rich form validation
  - Category-based organization

- **🎨 Premium UI/UX**
  - Dark mode theme with glassmorphism effects
  - Smooth animations and transitions
  - Fully responsive design (mobile, tablet, desktop)
  - Intuitive navigation system

- **🧭 Navigation**
  - Home page with blog list and details
  - About page with mission and features
  - Profile page with user stats and activity
  - Mobile-friendly navigation menu

- **⚡ Performance**
  - Optimized data fetching with TanStack Query
  - Automatic caching and background updates
  - Loading skeletons for better UX
  - Error handling with retry mechanisms

## 🛠️ Tech Stack

### Required Technologies (Assignment)

- **React 19.2.0** - UI framework
- **TypeScript** - Type safety
- **TanStack Query v5** - Server state management
- **Tailwind CSS v3** - Utility-first styling
- **shadcn/ui** - Accessible component library

### Additional Technologies

- **Vite** - Build tool and dev server
- **JSON Server** - Mock REST API
- **Lucide React** - Icon library
- **Radix UI** - Headless UI primitives
- **class-variance-authority** - Component variants

## � Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   ├── label.tsx
│   │   └── skeleton.tsx
│   ├── Navbar.tsx             # Navigation bar
│   ├── BlogCard.tsx           # Blog preview card
│   ├── BlogList.tsx           # Blog list with states
│   ├── BlogDetail.tsx         # Full blog view
│   ├── CreateBlogForm.tsx     # Blog creation form
│   ├── CreateBlogDialog.tsx   # Modal wrapper
│   ├── AboutPage.tsx          # About page
│   └── ProfilePage.tsx        # Profile page
├── hooks/
│   ├── useBlogs.ts            # Fetch all blogs
│   ├── useBlog.ts             # Fetch single blog
│   └── useCreateBlog.ts       # Create blog mutation
├── lib/
│   ├── api.ts                 # API client
│   └── utils.ts               # Utility functions
├── types/
│   └── blog.ts                # TypeScript interfaces
├── App.tsx                    # Main application
├── main.tsx                   # Entry point
└── index.css                  # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-forked-repo-url>
   cd camonk-interview
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend API)**

   ```bash
   npm run server
   ```

   The API will run on `http://localhost:3001`

4. **Start the Development Server (in a new terminal)**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📋 API Endpoints

The JSON Server provides the following endpoints:

| Method | Endpoint     | Description               |
| ------ | ------------ | ------------------------- |
| GET    | `/blogs`     | Get all blogs             |
| GET    | `/blogs/:id` | Get a specific blog by ID |
| POST   | `/blogs`     | Create a new blog         |

### Sample Blog Object

```json
{
  "id": 1,
  "title": "Future of Fintech",
  "category": ["FINANCE", "TECH"],
  "description": "Exploring how AI and blockchain are reshaping financial services",
  "date": "2026-01-11T09:12:45.120Z",
  "coverImage": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
  "content": "Full blog content..."
}
```

## 🎨 Features Implemented

### 1. Get All Blogs (GET /blogs)

- ✅ Displays all blogs in card format
- ✅ Shows title, categories, description, and date
- ✅ Loading skeleton states
- ✅ Error handling with retry
- ✅ Empty state messaging

### 2. Get Blog by ID (GET /blogs/:id)

- ✅ Detailed blog view with cover image
- ✅ Category badges
- ✅ Formatted date display
- ✅ Full content rendering
- ✅ Smooth transitions

### 3. Create New Blog (POST /blogs)

- ✅ Comprehensive form with validation
- ✅ Multi-category support (add/remove)
- ✅ Cover image URL input
- ✅ Success feedback animation
- ✅ Automatic query invalidation
- ✅ Form reset after creation

### 4. Navigation System

- ✅ Home page with blog list and details
- ✅ About page with mission and features
- ✅ Profile page with user information
- ✅ Responsive mobile navigation

## 🎯 Evaluation Criteria Met

| Criteria          | Status | Implementation                         |
| ----------------- | ------ | -------------------------------------- |
| TanStack Query    | ✅     | Custom hooks for queries and mutations |
| Tailwind CSS      | ✅     | Premium dark theme with glassmorphism  |
| shadcn/ui         | ✅     | 8 components integrated                |
| Code Organization | ✅     | Clean folder structure                 |
| Error Handling    | ✅     | Comprehensive error states             |
| Loading States    | ✅     | Skeleton loaders throughout            |
| Responsive Design | ✅     | Mobile-first approach                  |
| User Experience   | ✅     | Smooth animations and interactions     |
| TypeScript        | ✅     | Full type safety                       |

## 🎬 Screenshots

### Home Page

![Home Page](./image.png)

### About Page

Comprehensive information about the platform, mission, and features.

### Profile Page

User profile with stats, interests, and recent activity.

### Create Blog

Modal dialog with form validation and category management.

## 🐛 Known Issues & Solutions

### Issue: Blank White Screen

**Cause:** Tailwind CSS v4 compatibility issue  
**Solution:** Downgraded to Tailwind CSS v3

```bash
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@3 postcss@8 autoprefixer@10
```

## 📝 Development Notes

### TanStack Query Configuration

- Stale time: 5 minutes
- Refetch on window focus: disabled
- Automatic query invalidation after mutations

### Styling Approach

- Utility-first with Tailwind CSS
- Custom glassmorphism utilities
- CSS variables for theming
- Responsive breakpoints: sm, md, lg

### Component Philosophy

- Reusable and composable
- Single responsibility principle
- Proper TypeScript typing
- Accessible by default (shadcn/ui)

## 🚀 Deployment

This application can be deployed to:

- Vercel (recommended for Vite apps)
- Netlify
- GitHub Pages
- Any static hosting service

**Note:** You'll need to deploy the JSON Server separately or replace it with a real backend API.

## 📚 Learning Resources

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Documentation](https://react.dev/)

## 👨‍💻 Author

**Mohit Kadu**

## 📄 License

This project is created for the CA Monk Frontend Interview Assignment and is not intended for commercial use.

## 🙏 Acknowledgments

- CA Monk for the assignment opportunity
- shadcn for the amazing component library
- The React and TanStack teams for excellent tools

---

**Built with ❤️ using React, TanStack Query, Tailwind CSS, and shadcn/ui**
