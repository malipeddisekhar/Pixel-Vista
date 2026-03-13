import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import PreviewModal from "./components/PreviewModal";
import SearchBar from "./components/SearchBar";
import { ACTION_TYPES, favouritesReducer, loadFavourites } from "./reducer/favouritesReducer";
import useFetchPhotos from "./hooks/useFetchPhotos";

const STORAGE_KEY = "photo-gallery-favourites";

export default function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favourites, dispatch] = useReducer(favouritesReducer, STORAGE_KEY, loadFavourites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  }, [favourites]);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleSearchClear = useCallback(() => {
    setSearchTerm("");
  }, []);

  const filteredPhotos = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return photos;
    }

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(normalizedSearch)
    );
  }, [photos, searchTerm]);

  const handleToggleFavourite = useCallback(
    (photo) => {
      const isFavourite = favourites.some((item) => item.id === photo.id);

      dispatch({
        type: isFavourite ? ACTION_TYPES.REMOVE_FAVOURITE : ACTION_TYPES.ADD_FAVOURITE,
        payload: photo,
      });
    },
    [favourites]
  );

  const handlePreviewOpen = useCallback((photo) => {
    setSelectedPhoto(photo);
  }, []);

  const handlePreviewClose = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-stone-950 text-stone-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),_transparent_32%),linear-gradient(180deg,_#0c0a09_0%,_#1c1917_100%)]" />

      <header className="border-b border-white/10 bg-stone-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/pixelvista-logo.png"
                alt="PixelVista logo"
                className="h-10 w-10 rounded-xl border border-white/20 object-cover"
              />
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300">PixelVista</p>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Responsive photo gallery with live search and persistent favourites.
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-stone-300 sm:text-base">
              Photos load from the Picsum API once on startup, search filters authors in real time,
              and favourites stay saved after refresh with localStorage.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SearchBar value={searchTerm} onChange={handleSearchChange} onClear={handleSearchClear} />
            <div className="flex items-center gap-3 text-sm text-stone-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {photos.length} loaded
              </span>
              <span className="rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-2 text-rose-200">
                {favourites.length} favourite{favourites.length === 1 ? "" : "s"}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <Gallery
          photos={filteredPhotos}
          loading={loading}
          error={error}
          searchTerm={searchTerm}
          favourites={favourites}
          onPreviewOpen={handlePreviewOpen}
          onToggleFavourite={handleToggleFavourite}
        />
      </main>

      <Footer />

      <PreviewModal photo={selectedPhoto} onClose={handlePreviewClose} />
    </div>
  );
}