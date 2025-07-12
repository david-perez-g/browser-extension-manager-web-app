# Browser Extensions Manager UI

![Design preview for the Browser extensions manager UI](./preview.jpg)

## Overview

This is a learning project to practice building a modern, responsive UI for managing browser extensions. The goal is to create an interactive interface with React, TypeScript, and Tailwind CSS, following best practices for code quality and maintainability.

---

## Features

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select color theme (light/dark)
- Responsive layout for all device sizes
- Accessible hover and focus states for all interactive elements
- Data-driven UI using a local `data.json` file

---

## Tech Stack

- **React** (with TypeScript) for UI development
- **Vite** for fast development and build tooling
- **Tailwind CSS** for utility-first styling
- **ESLint** for linting and code quality
- **Prettier** (with `prettier-plugin-tailwindcss`) for code formatting

### Prettier Configuration

Prettier is configured with the Tailwind CSS plugin to ensure class order consistency. See `.prettierrc`:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Preview the production build:**
   ```sh
   npm run preview
   ```
5. **Lint your code:**
   ```sh
   npm run lint
   ```

---

## Folder Structure

- `src/` - Main source code (components, styles, data)
- `public/` - Static assets
- `.prettierrc` - Prettier config
- `eslint.config.js` - ESLint config
- `vite.config.ts` - Vite config

---

## License

This project is licensed under the GPLv3 License.
