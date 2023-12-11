import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-green-600 justify-center items-center">
      <Outlet />
    </div>
  );
};

export default RootLayout;
