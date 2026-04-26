# Amazon Clone

A React-based e-commerce frontend clone of Amazon, built with Vite, Redux Toolkit, and Clerk authentication.

## Features

- Product listing with category filter and search
- Add to cart with Redux state management
- User authentication via Clerk
- Light/Dark theme toggle
- Toast notifications
- Loading, error, and empty states for product fetch
- 404 Not Found page

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite | UI framework & build tool |
| Redux Toolkit | Cart state management |
| React Router v6 | Client-side routing |
| Clerk | Authentication |
| React Toastify | Notifications |
| PropTypes | Runtime type checking |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/gokulsenthilkumar3/amazon-clone.git
cd amazon-clone/my-app
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
VITE_API_URL=https://your-api-url-here
```

Get your Clerk publishable key from [https://dashboard.clerk.com](https://dashboard.clerk.com).

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
my-app/
  src/
    components/       # UI components (Header, Footer, ProductCard, etc.)
    contexts/         # React contexts (ThemeContext)
    reducers/         # Redux slices (cartSlice)
    App.jsx           # Root layout component
    main.jsx          # App entry point & router setup
    store.js          # Redux store
```

## Routes

| Path | Component | Description |
|---|---|---|
| `/` | App | Root layout |
| `/products` | Products | Product listing page |
| `/cart` | Cart | Shopping cart |
| `/about` | About | About page |
| `*` | NotFound | 404 catch-all |

## License

MIT
