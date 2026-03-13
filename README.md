# PixelVista

Clean photo gallery assignment project built with React, Vite, and Tailwind CSS.

## Clean Project Structure

```text
photo-gallery-app/
  public/
    pixelvista-logo.png
  src/
    components/
      Footer.jsx
      Gallery.jsx
      PhotoCard.jsx
      PreviewModal.jsx
      SearchBar.jsx
    hooks/
      useFetchPhotos.js
    reducer/
      favouritesReducer.js
    App.jsx
    index.css
    main.jsx
  .gitignore
  index.html
  package.json
  package-lock.json
  postcss.config.js
  README.md
  tailwind.config.js
  vite.config.js
```

## Features

- Fetches 30 photos from `https://picsum.photos/v2/list?limit=30`
- Loading and error states
- Responsive grid (1 mobile, 2 tablet, 4 desktop)
- Real-time author search
- Favourites with `useReducer`
- `localStorage` persistence
- Image preview modal

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
# Pixel-Vista
