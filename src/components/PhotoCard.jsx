export default function PhotoCard({ photo, isFavourite, onPreviewOpen, onToggleFavourite }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <button
          type="button"
          onClick={() => onPreviewOpen(photo)}
          className="block h-full w-full text-left"
          aria-label={`Open larger preview for ${photo.author}`}
        >
          <img
            src={`https://picsum.photos/id/${photo.id}/600/450`}
            alt={`Photo by ${photo.author}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </button>
        <button
          type="button"
          onClick={() => onToggleFavourite(photo)}
          aria-pressed={isFavourite}
          aria-label={isFavourite ? `Remove ${photo.author} from favourites` : `Add ${photo.author} to favourites`}
          className={`absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition ${
            isFavourite
              ? "border-rose-300/50 bg-rose-500 text-white"
              : "border-white/20 bg-stone-950/60 text-stone-100 hover:border-rose-300/40 hover:bg-rose-500/20"
          }`}
        >
          <svg viewBox="0 0 24 24" fill={isFavourite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c-4.97-3.16-8.25-6.13-8.25-10.13A4.88 4.88 0 018.63 5.25c1.46 0 2.87.66 3.77 1.79a4.87 4.87 0 013.77-1.79 4.88 4.88 0 014.88 4.87c0 4-3.28 6.97-8.25 10.13z" />
          </svg>
          Favourite
        </button>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Author</p>
            <h2 className="mt-2 text-lg font-semibold text-white">{photo.author}</h2>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-300">
            #{photo.id}
          </span>
        </div>

        <p className="text-sm text-stone-300">
          {photo.width} x {photo.height}
        </p>
      </div>
    </article>
  );
}