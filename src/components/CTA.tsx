
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-masslawry-blue to-masslawry-darkblue opacity-90 -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djYuMDEzaC0yVjM0SDI4di0yaDZWMjZoMnY2aDZ2MmgtNnpNMjAgNDZ2MmgtMjB2LTJoMjB6TTM4IDIwdjJIMjB2LTJoMTh6TTQwIDhWNkg4djJoMzJ6TTUwIDI2djJIMzh2LTJoMTJ6TTYwIDEydjJINDh2LTJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to bring your creative vision to life?
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with Masslawry for all your multimedia and creative needs. Our team is ready to deliver exceptional quality and service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-md bg-white text-masslawry-blue font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              to="/portfolio"
              className="px-8 py-3 rounded-md border border-white/30 text-white font-medium flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
