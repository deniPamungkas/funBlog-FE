import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { QueryClient, QueryClientProvider } from "react-query";

const Layout = () => {
  const queryClient = new QueryClient();
  return (
    <div className="dark:bg-gray-800 relative overflow-x-hidden">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default Layout;
