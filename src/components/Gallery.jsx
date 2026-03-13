import PhotoCard from "./PhotoCard";

function LoadingState() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-5 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-16 text-center">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/10 border-t-amber-300" />
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-white">Loading photos</h2>
        <p className="text-sm text-stone-300">Fetching 30 images from the API.</p>
      </div>
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 rounded-3xl border border-rose-400/20 bg-rose-500/10 px-6 py-16 text-center">
      <div className="rounded-full border border-rose-300/20 bg-rose-500/20 p-4 text-rose-200">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86l-7.5 13A1 1 0 003.66 18h16.68a1 1 0 00.87-1.5l-7.5-13a1 1 0 00-1.74 0z" />
        </svg>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-white">Photos could not be loaded</h2>
        <p className="text-sm text-rose-100">{message}</p>
      </div>
    </div>
  );
}

function EmptyState({ searchTerm }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-16 text-center text-stone-300">
      <h2 className="text-xl font-semibold text-white">No matching authors</h2>
      <p className="mt-2 text-sm">
        No photos matched "{searchTerm}". Try a different author name.
      </p>
    </div>
  );
}

export default function Gallery({
  photos,
  loading,
  error,
  searchTerm,
  favourites,
  onPreviewOpen,
  onToggleFavourite,
}) {
  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (photos.length === 0) {
    return <EmptyState searchTerm={searchTerm} />;
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Photo gallery</h2>
          <p className="mt-1 text-sm text-stone-300">
            Responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop.
          </p>
        </div>
        <p className="text-sm text-stone-400">Showing {photos.length} result{photos.length === 1 ? "" : "s"}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo) => {
          const isFavourite = favourites.some((item) => item.id === photo.id);

          return (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={isFavourite}
              onPreviewOpen={onPreviewOpen}
              onToggleFavourite={onToggleFavourite}
            />
          );
        })}
      </div>
    </section>
  );
}