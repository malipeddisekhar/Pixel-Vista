import { useEffect } from "react";

export default function PreviewModal({ photo, onClose }) {
  useEffect(() => {
    if (!photo) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/85 px-4 py-8 backdrop-blur-md"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-stone-900 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.95)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-preview-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-stone-950/70 px-3 py-2 text-sm text-white transition hover:border-white/20 hover:bg-stone-900"
          aria-label="Close image preview"
        >
          Close
        </button>

        <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="bg-black">
            <img
              src={photo.download_url}
              alt={`Preview of ${photo.author}`}
              className="max-h-[78vh] w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-between gap-6 p-6">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Image preview</p>
              <div>
                <p className="text-sm text-stone-400">Author</p>
                <h2 id="photo-preview-title" className="mt-2 text-3xl font-semibold text-white">
                  {photo.author}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-stone-300">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-stone-400">Photo ID</p>
                  <p className="mt-1 font-medium text-white">#{photo.id}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-stone-400">Resolution</p>
                  <p className="mt-1 font-medium text-white">{photo.width} x {photo.height}</p>
                </div>
              </div>
            </div>

            <a
              href={photo.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-amber-300/40 bg-amber-300/10 px-4 py-3 text-sm font-medium text-amber-100 transition hover:border-amber-200/70 hover:bg-amber-300/20"
            >
              Open source page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}