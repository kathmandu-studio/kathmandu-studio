export default function Footer() {
  return (
    <footer className="bg-primary text-secondary px-4 py-8 xl:p-12 w-full">
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-16">
        <div className="flex flex-col">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-[90px] md:text-[130px] lg:text-[194px] font-bold">
              LOGO
            </h1>
          </div>

          {/* Middle: Links */}
          <div className="flex justify-between gap-4 text-gray-400 lg:px-3">
            <a href="#" className="hover:text-secondary transition">
              Become a Client
            </a>
            <a href="#" className="hover:text-secondary transition">
              Work at Habitat
            </a>
          </div>
        </div>

        {/* Right: Contact */}
        <div className="flex flex-col justify-center gap-2 lg:py-14">
          <p className="text-[48px]">
            Have an idea in mind? <br /> Let&apos;s talk.
          </p>
          <div className="border-b-4 border-gray-600 w-full"></div>
          <div className="flex flex-col gap-2 text-gray-400 pt-10">
            <a href="#" className="hover:text-secondary transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-secondary transition">
              Instagram
            </a>
            <a href="#" className="hover:text-secondary transition">
              Clutch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
