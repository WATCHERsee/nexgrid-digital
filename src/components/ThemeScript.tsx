const THEME_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark =
      stored === "dark" ||
      (stored !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

export default function ThemeScript() {
  // Runs before hydration/paint so the correct theme applies with zero flash,
  // and stays in sync with the OS setting until the user picks one explicitly.
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
