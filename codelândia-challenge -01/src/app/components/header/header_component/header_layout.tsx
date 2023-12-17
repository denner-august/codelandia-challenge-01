import { ReactNode } from "react";

interface propsHeader_layout {
  children: ReactNode;
}

export default function Header_layout({ children }: propsHeader_layout) {
  return (
    <div className="w-screen bg-layout h-60 flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
