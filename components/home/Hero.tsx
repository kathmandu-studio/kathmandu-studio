import Link from "next/link";
import data from "data/home.json";
import { HiChevronRight } from "react-icons/hi";

export default function Hero() {
  const hero = data.hero;

  if (!hero) return null;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="mb-0">{hero.h1}</h1>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 lg:gap-28">
        <div className="sm:w-1/2">
          <h3>{hero.services.h3}</h3>
          <p className="m-0">{hero.services.p}</p>
        </div>
        <div className="flex flex-col sm:w-1/2">
          {hero.services.list.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="text-lg sm:text-xl border-b-2 py-3 sm:py-4 group"
            >
              <div className="flex justify-between items-center">
                <span className="transform transition-transform duration-500 group-hover:translate-x-8">
                  {service.name}
                </span>
                <span className="transform transition-transform duration-500 group-hover:-translate-x-8">
                  <HiChevronRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
