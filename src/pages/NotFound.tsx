import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import FloatingButtons from "@/components/ui/FloatingButtons";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
        <div className="relative max-w-lg w-full text-center">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 text-[20rem] font-bold text-gray-100 select-none z-0">
            404
          </div>
          
          <div className="relative z-10 glass-card p-10 md:p-12 shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Page Not Found
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <Link 
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-masslawry-blue text-white rounded-md hover:bg-masslawry-darkblue transition-colors shadow-md"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
      <FloatingButtons />
    </div>
  );
};

export default NotFound;
