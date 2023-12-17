import { ReactNode } from "react";

interface propsPostContainer {
  children: ReactNode;
}
export function PostContainer({ children }: propsPostContainer) {
  return (
    <div className="h-auto w-screen  flex justify-center pt-20 flex-col items-center	  ">
      {children}
    </div>
  );
}
