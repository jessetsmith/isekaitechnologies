export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/35">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logos/logo-brand.png" alt="Isekai logo" className="w-8 h-8 rounded-md" />
          <span className="text-lg font-bold hidden sm:block">Isekai Technologies</span>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-300">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="btn text-sm">Start a project</a>
      </div>
    </header>
  );
}
