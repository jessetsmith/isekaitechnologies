export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logos/mark.png" className="w-7 h-7 rounded-md" alt="Isekai"/>
          <span className="text-sm text-zinc-400">© 2025 Isekai Technologies</span>
        </div>
        <div className="text-sm text-zinc-400 flex gap-6">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
