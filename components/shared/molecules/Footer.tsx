import Image from "next/image";

export default function Footer() {
  const inquiryLinks = [
    {
      id: 1,
      title: "Become a Client",
      address: "marketing@kathmandustudio.com",
    },
    { id: 2, title: "Join Our Team", address: "jobs@kathmandustudio.com" },
  ];

  const socialLinks = [
    {
      id: 1,
      handle: "Instagram",
      address: "https://www.instagram.com/kathmandu.studio/",
    },
    {
      id: 2,
      handle: "YouTube",
      address: "https://www.youtube.com/@kathmandustudio/",
    },
    {
      id: 3,
      handle: "Tiktok",
      address: "https://www.tiktok.com/@kathmandustudio/",
    },
    {
      id: 4,
      handle: "LinkedIn",
      address: "https://www.linkedin.com/company/kathmandustudio/",
    },
  ];

  return (
    <footer className="bg-primary text-secondary px-4 py-8 xl:p-12 w-full">
      <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-16">
        <div className="flex flex-col gap-12 w-full lg:w-1/2">
          {/* Left: Logo */}
          <div>
            <Image
              src="/assets/images/png/kathmandu-studio-logo-large.png"
              alt="Company Logo"
              width={800}
              height={20}
            />
          </div>

          {/* Middle: Links */}
          <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-4 text-gray-400 lg:px-3">
            {inquiryLinks.map((link) => (
              <div key={link.id} className="flex flex-col gap-2">
                <span className="text-xl">{link.title}</span>
                <a
                  href={`mailto:${link.address}`}
                  className="hover:text-secondary transition underline"
                >
                  {link.address}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact */}
        <div className="flex flex-col justify-center gap-2 lg:w-1/2">
          <p className="text-[48px]">
            Have an idea in mind? <br /> Let&apos;s talk.
          </p>
          <div className="border-b-4 border-gray-600 w-full"></div>
          <div className="flex flex-col gap-2 text-gray-400 pt-10">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                target="_blank"
                href={link.address}
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
              >
                {link.handle}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
