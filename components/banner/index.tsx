import { metadata } from "@/lib/config";
import { XMarkIcon } from "@heroicons/react/20/solid";

export function Banner() {
  return (
    <div className="fixed w-full flex items-center justify-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 z-10">
      <p className="text-sm leading-6 text-white">
        <a href="#">
          <strong className="font-semibold">{metadata.title}</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          {metadata.phone}
        </a>
      </p>
      {/* <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-white" />
        </button>
      </div> */}
    </div>
  );
}
