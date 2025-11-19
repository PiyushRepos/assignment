# Job Posting Application

A modern job posting application built with Next.js 16, featuring a clean dark-themed UI for displaying job listings and applicant information.

## Features

- 🎨 Modern dark-themed UI with Tailwind CSS
- 📱 Responsive design
- 🚀 Next.js 16 with App Router
- 🎯 TypeScript for type safety
- 💾 MongoDB integration with Mongoose
- 🎭 Shadcn/ui components
- 🔧 Biome for linting and formatting

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Shadcn/ui with Radix UI primitives
- **Database:** MongoDB with Mongoose
- **HTTP Client:** Axios
- **Code Quality:** Biome

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 20.x or higher
- pnpm (recommended) or npm
- MongoDB (local or cloud instance)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd assignment
```

### 2. Install Dependencies

Using pnpm (recommended):

```bash
pnpm install
```

Or using npm:

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```bash
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

### 4. Run the Development Server

```bash
pnpm dev
```

Or with npm:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run Biome linter to check code quality
- `pnpm format` - Format code with Biome

## Project Structure

```
assignment/
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page with job card component
│   ├── components/
│   │   └── ui/            # Reusable UI components
│   └── lib/
│       ├── db.ts          # Database configuration
│       └── utils.ts       # Utility functions
├── public/                # Static assets
├── biome.json            # Biome configuration
├── components.json       # Shadcn/ui configuration
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Component Architecture

The application uses a component-based architecture with all components defined in `src/app/page.tsx`:

- **Header** - Navigation bar with tabs and contact button
- **JobCard** - Main container for job posting information
- **JobHeader** - Job title and applicant count
- **JobDetails** - Experience, company, location, and availability
- **DetailItem** - Reusable component for job details
- **AvailabilityBadge** - Status indicator for immediate availability

## Database Configuration

The MongoDB connection is configured in `src/lib/db.ts`. Ensure your MongoDB instance is running and the connection string in `.env.local` is correct.

## Building for Production

1. Build the application:

```bash
pnpm build
```

2. Start the production server:

```bash
pnpm start
```

## Troubleshooting

### MongoDB Connection Issues

- Verify your MongoDB connection string in `.env.local`
- Ensure MongoDB is running (for local installations)
- Check network access settings for cloud MongoDB instances

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
pnpm dev -p 3001
```
