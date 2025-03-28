import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative">
        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Modern Email for
                  <span className="text-indigo-500"> Modern Teams</span>
                </h1>
                <p className="mt-6 text-xl text-gray-300">
                  Experience email reimagined. Streamlined communication,
                  powerful organization, and seamless collaboration all in one
                  beautiful interface.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/signup"
                    className="flex items-center justify-center space-x-2 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    to="/login"
                    className="flex items-center justify-center space-x-2 px-8 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <span>Sign In</span>
                  </Link>
                </div>
                <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start text-gray-400">
                  <a href="#" className="hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>

              {/* Preview */}
              <div className="flex-1 w-full max-w-2xl">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10" />
                  <img
                    src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80"
                    alt="Email Interface Preview"
                    className="w-full h-auto opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <Mail className="text-indigo-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Smart Inbox</h3>
            <p className="text-gray-400">
              Intelligent email organization that automatically prioritizes your
              most important messages.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <Lock className="text-indigo-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
            <p className="text-gray-400">
              Advanced encryption and security features to keep your
              communications safe and private.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <ArrowRight className="text-indigo-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-400">
              Works perfectly with your favorite tools and platforms for maximum
              productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
