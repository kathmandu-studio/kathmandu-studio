interface INavigation {
  href: string;
  name: string;
}

interface INavigationProps {
  previous: INavigation;
  next: INavigation;
  isFirstNavigation: boolean;
  isLastNavigation: boolean;
}

export default function Navigation({
  previous,
  next,
  isFirstNavigation,
  isLastNavigation,
}: INavigationProps) {
  return (
    <div className="bg-backgroundGray flex justify-center items-center py-4 h-[160px]">
      <div className="w-full max-w-4xl px-4 xl:px-8 flex flex-col sm:flex-row justify-between gap-4">
        <p className="font-semibold">Other Clients</p>
        <div className="flex gap-28">
          <div className="flex flex-col gap-4">
            <span className="font-semibold">PREVIOUS</span>
            {!isFirstNavigation && (
              <a
                href={previous.href}
                className="hover:text-gray-400 transition underline w-max font-semibold cursor-pointer"
              >
                {previous.name}
              </a>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-semibold">NEXT</span>
            {!isLastNavigation && (
              <a
                href={next.href}
                className="hover:text-gray-400 transition underline w-max font-semibold cursor-pointer"
              >
                {next.name}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
