/** Visually hidden until focused — the first stop for keyboard/screen-reader users, skipping the nav. */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="focus-visible:ring-accent-500 fixed top-4 left-4 z-[100] -translate-y-24 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white opacity-0 transition-all duration-200 focus:translate-y-0 focus:opacity-100 focus-visible:ring-2 focus-visible:outline-none dark:bg-zinc-50 dark:text-zinc-900"
    >
      Pular para o conteúdo principal
    </a>
  );
}
