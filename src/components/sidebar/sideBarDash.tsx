'use client';
import { Sidebar } from '.';

const SideBarDash = () => {
  return (
    <Sidebar.Root className="justify-between">
      <div className="flex flex-col gap-8">
        <Sidebar.User userName="Codepit" />
        <Sidebar.Navs />
      </div>
      <Sidebar.Footer>
        <Sidebar.Logo>
          <h1 className="font-extrabold text-[1.2rem] max-sm:text-[1rem]">
            {'</> Codepit'}
          </h1>
        </Sidebar.Logo>
      </Sidebar.Footer>
    </Sidebar.Root>
  );
};

export default SideBarDash;
