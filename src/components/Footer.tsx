export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 text-[0.85rem] text-gray-500 dark:text-gray-400 sm:flex-row">
        <a href="#top" className="font-extrabold text-lg tracking-tight text-ink">
          NexGrid<span className="text-accent">Digital</span>
        </a>
        <p>&copy; {year} NexGrid Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}
