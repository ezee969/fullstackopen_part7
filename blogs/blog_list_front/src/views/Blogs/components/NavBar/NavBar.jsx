//components/ui
import { ConfigButton, HomeButton, AddButton, LogoButton } from './components';

export default function NavBar() {
  return (
    <header
      className=" flex items-center justify-between px-4 py-2 lg:py-3 lg:px-8 xl:px-10 2xl:px-12
                  gap-1 mb-4 shadow h-full 
                  bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 "
    >
      <div className="h-auto w-24 xl:w-28">
        <LogoButton />
      </div>
      <div className="flex gap-4 xl:gap-6">
        <HomeButton />
        <AddButton />
        <ConfigButton />
      </div>
    </header>
  );
}
