# AI Coding Guidelines for Portfolio Project

## Project Overview
This is a React portfolio website built with Create React App, featuring sections for Home, About, Projects, and Resume. It uses lazy loading, modal routing, and a dark/light theme system.

## Architecture
- **Scenes**: Main pages in `src/scenes/` (Home, About, Projects, Resume) - lazy-loaded in `src/routes/BaseRoutes.jsx`
- **Layouts**: `BaseLayout` and `HomeLayout` wrap scenes with Header, Footer, and Particles background
- **Components**: Reusable UI in `src/components/`, organized by feature (e.g., Navigation, UIElements)
- **Data**: Static project data in `src/data/projects.js` as an array of objects with id, title, description, image, links, technologies

## Routing & Navigation
- Uses `react-router-dom` with BrowserRouter
- Modal projects use background location state: `<Link to="/project/:id" state={{ background: location }}>`
- Responsive navigation: desktop nav vs mobile burger menu with `react-media` (maxWidth: 768)
- SideDrawer for mobile navigation

## Styling
- **SCSS Modules**: Each component has a `.module.scss` file, imported as `s` (e.g., `import s from './Component.module.scss'`)
- **Theme System**: CSS custom properties in `src/styles/theme.scss` for light/dark modes
- **Theme Hook**: `useThemeContext()` from `src/hooks/themeHook/`, persists to localStorage, toggles body classes
- **Fonts**: Raleway from Google Fonts
- **Animations**: CSS transitions in `src/styles/transitions.scss`, keyframes in `keyframes.scss`

## Components Patterns
- **Icons**: Use `react-icons` (e.g., `DiJavascript1` from 'react-icons/di')
- **Images**: `LazyLoadImage` from 'react-lazy-load-image-component' with blur effect and placeholder
- **Buttons**: Custom `Button` component with className props (e.g., "primary")
- **Modals**: `Modal` component with `CSSTransition`, `Backdrop`, and `useModal` hook (useReducer toggle)
- **Particles**: Background effect using `react-tsparticles`

## State Management
- **Theme**: Context provider in `src/hooks/themeHook/themeContext.js`
- **Modal Visibility**: `useModal` hook with useReducer for toggle
- No global state library; props drilling for simple cases

## Development Workflow
- **Start Dev Server**: `npm start` (react-scripts start)
- **Build**: `npm run build` (react-scripts build)
- **Serve Build**: `npm run serve` (uses serve -s build)
- **PWA**: Service worker registered in production via `src/serviceWorkerRegistration.js`
- **Linting**: ESLint with react-app config

## Key Files to Reference
- `src/App.jsx`: Main app with Router and Suspense
- `src/routes/BaseRoutes.jsx`: Route definitions and modal background handling
- `src/layouts/BaseLayout/BaseLayout.jsx`: Common layout structure
- `src/components/Navigation/MainNavigation/MainNavigation.jsx`: Responsive nav logic
- `src/scenes/Projects/Projects.jsx`: Maps projects data to ProjectCard components
- `src/styles/theme.scss`: Theme variables for light/dark modes

## Conventions
- Component folders contain `.jsx` and `.module.scss`
- Hooks in `src/hooks/` with context files
- Data files in `src/data/`
- Use functional components with hooks
- Default to dark theme, toggle with `BtnToggleTheme` component</content>
<parameter name="filePath">/Users/chaitanyabatole/Downloads/Portfolio-main/.github/copilot-instructions.md