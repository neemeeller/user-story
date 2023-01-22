import SearchIcon from 'icons/search-icon.svg';

export const SearchBox = ({ onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <label className="relative block">
    <span className="sr-only">Search</span>
    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
      <div className="h-5 w-5 fill-slate-300">
        <img src={SearchIcon} className="h-5 w-5 fill-light-300" alt="Search here" />
      </div>
    </span>
    <input
      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-900 focus:border-gray-900 focus:ring-1 sm:text-sm"
      placeholder="Search for anything..."
      type="text"
      name="search"
      onChange={onChange}
    />
  </label>
);
