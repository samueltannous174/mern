# Copilot Instructions for MERN Client

This is a React 19 + Vite frontend application with React Router v7 and Tailwind CSS v4. This document guides AI agents on project conventions and patterns.

## Tech Stack & Build

- **Runtime**: React 19.2.0, React Router v7.10.1
- **Build Tool**: Vite with Rolldown (npm:rolldown-vite@7.2.5)
- **Styling**: Tailwind CSS v4.1.18 (via @tailwindcss/vite plugin)
- **Linting**: ESLint 9 with React Hooks and React Refresh plugins
- **Module System**: ES modules (type: "module" in package.json)

**Key Build Commands:**
- `npm run dev` - Start dev server with HMR (hot module replacement)
- `npm run build` - Production build to `dist/`
- `npm run lint` - Run ESLint across .js and .jsx files
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── main.jsx           # App entry point with React 19 createRoot
├── App.jsx            # Root component with BrowserRouter setup
├── index.css          # Global Tailwind imports
├── App.css            # Tailwind imports (component-scoped)
└── components/
    └── Fix.jsx        # Example component (named "Jsx" - FIXME in export)
```

## Critical Patterns & Conventions

### 1. Component Structure
- **Naming**: Use `PascalCase` for component files and exports
- **Template**: Functional components with no class components
- **Example**: [Fix.jsx](src/components/Fix.jsx) shows the pattern
- **Note**: Fix.jsx exports as `Jsx` but is named `Fix` - maintain consistency in exports

### 2. Routing Architecture
- **Setup**: BrowserRouter wraps Routes in [App.jsx](App.jsx)
- **Current Route**: `/fix` → `<Fix/>` component
- **Pattern**: Add new routes as additional `<Route>` elements
- **Missing Import**: Fix component is used but not imported in App.jsx - will cause runtime error

### 3. Styling with Tailwind CSS v4
- **Global Setup**: CSS files import `@tailwindcss` at top (see [index.css](src/index.css) and [App.css](src/App.css))
- **Framework**: No custom CSS classes beyond Tailwind utilities expected
- **Utilities Only**: Apply styles directly to JSX elements using Tailwind class names

### 4. ESLint Rules
- **No Unused Vars**: `varsIgnorePattern: '^[A-Z_]'` - capital-letter vars allowed (React components, constants)
- **React Hooks**: Enforced via react-hooks plugin - hooks must be at top level, no conditional calls
- **React Refresh**: Fast refresh enabled for dev HMR; avoid exporting default functions as unnamed exports

## Critical Issues to Address

1. **App.jsx Missing Import**: `Fix` component used in Route but not imported - add `import Fix from './components/Fix'`
2. **Inconsistent Export**: Fix.jsx exports as `Jsx` not `Fix` - align export name with file purpose
3. **Navigate Route**: App.jsx has unused `Navigate` import - remove if not used

## Development Workflow for AI Agents

- **When adding components**: Create in `src/components/`, export with PascalCase name matching file
- **When adding routes**: Import component at top of App.jsx, add `<Route>` in BrowserRouter
- **When styling**: Use Tailwind utility classes; avoid writing custom CSS except in rare cases
- **Before committing**: Run `npm run lint` to catch unused vars and React hook issues
- **Testing changes**: Use `npm run dev` and verify HMR updates appear (file save triggers instant reload)

## Known Limitations

- No state management library (Redux, Zustand) - use React hooks (useState, useContext) for now
- No TypeScript - .jsx files only, rely on JSDoc or test carefully for type safety
- No configured API base URL - backend integration will need environment variables or hardcoded URL
