export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="w-full max-w-xl">
      <label htmlFor="author-search" className="mb-3 block text-sm font-medium text-stone-200">
        Search by author name
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
          </svg>
        </span>
        <input
          id="author-search"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Type an author name, for example Alejandro"
          className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-24 text-sm text-white outline-none transition placeholder:text-stone-500 focus:border-amber-300/60 focus:bg-white/10 focus:ring-2 focus:ring-amber-300/20"
        />
        {value ? (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-stone-200 transition hover:border-amber-300/40 hover:bg-amber-300/10 hover:text-white"
            aria-label="Clear search"
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}