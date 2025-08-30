# Product Dashboard

A responsive Product Dashboard built with React, TailwindCSS, shadcn/ui, and TanStack Query using the DummyJSON API.

## 🚀 Features

### Layout & UI
- **Responsive Design**: Mobile-first approach with sidebar navigation
- **Modern UI**: Built with TailwindCSS and shadcn/ui components
- **Clean Interface**: Professional dashboard layout with header, sidebar, and main content area

### Data Management
- **Product Listing**: Displays products in a clean table format with images
- **Pagination**: Navigate through products with Previous/Next buttons
- **Search**: Real-time search functionality with debouncing
- **Category Filter**: Filter products by category with dropdown selection
- **Loading States**: Skeleton loaders for better UX
- **Error Handling**: Graceful error states and user feedback

### CRUD Operations
- **Add Product**: Modal form to create new products
- **Edit Product**: Pre-filled modal form for updating existing products
- **Delete Product**: Confirmation dialog before deletion
- **Auto Refresh**: Automatic list refresh after mutations

### Advanced Features
- **React Query Integration**: Caching, background updates, and optimistic updates
- **Debounced Search**: Prevents excessive API calls while typing
- **Responsive Tables**: Mobile-friendly table design
- **Stock Status**: Visual indicators for stock levels
- **Category Badges**: Color-coded category labels

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Modern React component library
- **TanStack Query** - Data fetching and state management
- **Lucide React** - Icon library
- **DummyJSON API** - Mock REST API for products

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/1234-ad/product-dashboard-react.git
   cd product-dashboard-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Top navigation bar
│   │   └── Sidebar.jsx         # Side navigation menu
│   ├── products/
│   │   ├── ProductTable.jsx    # Product data table
│   │   ├── ProductForm.jsx     # Add/Edit product modal
│   │   ├── ProductFilters.jsx  # Search and category filters
│   │   └── Pagination.jsx      # Pagination controls
│   ├── ui/                     # shadcn/ui components
│   └── ProductDashboard.jsx    # Main dashboard component
├── hooks/
│   └── useProducts.js          # React Query hooks
├── services/
│   └── api.js                  # API service layer
├── lib/
│   └── utils.js                # Utility functions
└── main.jsx                    # Application entry point
```

## 🎯 Key Implementation Details

### State Management
- **TanStack Query** for server state management
- **React useState** for local component state
- **Debounced search** to optimize API calls
- **Optimistic updates** for better UX

### API Integration
- **DummyJSON API** endpoints for CRUD operations
- **Error handling** with try-catch blocks
- **Loading states** during API calls
- **Artificial delay** parameter for demonstrating loading states

### Responsive Design
- **Mobile-first** approach
- **Collapsible sidebar** for mobile devices
- **Responsive tables** with horizontal scroll
- **Flexible grid layouts** for different screen sizes

### Component Architecture
- **Separation of concerns** with dedicated components
- **Reusable UI components** from shadcn/ui
- **Custom hooks** for data fetching logic
- **Clean prop interfaces** for component communication

## 🌐 API Endpoints Used

- `GET /products` - Fetch products with pagination
- `GET /products/search` - Search products by query
- `GET /products/categories` - Fetch all categories
- `GET /products/category/{category}` - Fetch products by category
- `POST /products/add` - Add new product
- `PUT /products/{id}` - Update existing product
- `DELETE /products/{id}` - Delete product

## 🎨 UI Components Used

### shadcn/ui Components
- **Card** - Container components for sections
- **Table** - Data display with proper styling
- **Dialog** - Modal forms for add/edit operations
- **Button** - Various button variants and sizes
- **Input** - Form input fields
- **Skeleton** - Loading state placeholders

### Custom Components
- **ProductTable** - Enhanced table with actions
- **ProductForm** - Modal form with validation
- **ProductFilters** - Search and filter controls
- **Pagination** - Navigation controls
- **Sidebar** - Responsive navigation menu
- **Header** - Top navigation bar

## 🚀 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables
No environment variables required - uses public DummyJSON API.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, TailwindCSS, and shadcn/ui