function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <ul className="flex gap-4 items-center text-sm">
        <li className="pr-4">
          <a href="/">
            <img src="/CamWall.svg" />
          </a>
        </li>
        {/* <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Docs</a>
        </li>
        <li>
          <a href="/">Download</a>
        </li> */}
      </ul>
      <div>
        <a
          href="/"
          className="text-white text-sm font-normal bg-linear-to-b from-sky-400 to-sky-500 shadow-[0px_0px_1px_1px_rgba(255,255,255,0.06)_inset,0px_1.5px_2px_0px_rgba(0,0,0,0.1),0px_0px_0px_1px_var(--color-sky-500)] rounded-full px-3 py-1 relative z-10 w-fit whitespace-nowrap"
        >
          Donate
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
