import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                {/* <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                  
                </div> */}
                <img className="w-20 h-20 ml-[-20px]" src="/logo.png" alt="" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">SEMOLIAGRI</span>
                  <span className="text-sm text-primary-foreground/80 uppercase tracking-wider">Private Limited</span>
                </div>
              </Link>
              <p className="text-primary-foreground/90 mb-6 max-w-md">
                Leading innovation in agriculture through sustainable solutions, modern technology, and trusted expertise. Empowering farmers for a better tomorrow.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/90 text-sm">
                    Office N 404 NRK Bizz Park,<br />
                    Indore, Madhya Pradesh, India, 452010
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                  <a 
                    href="mailto:contact@semoliagri.com" 
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    contact@semoliagri.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <nav className="space-y-3">
                <Link 
                  to="/" 
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  to="/services" 
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
                <Link 
                  to="/products" 
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-primary-foreground/90">Business Hours</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm text-center md:text-left">
              © {currentYear} SEMOLIAGRI Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-primary-foreground/50">•</span>
              <span className="text-primary-foreground/70">semoliagri.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;