import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Users, Award, TrendingUp } from 'lucide-react';
import agricultureHero from '@/assets/agriculture-hero.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
     <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src={agricultureHero} 
      alt="Modern agriculture fields with farming technology" 
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl pb-12 sm:pb-0">   {/* ⬅ Added padding bottom only on mobile */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Innovating Agriculture
        <span className="block text-accent">for a Sustainable Future</span>
      </h1>
      <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
        SEMOLIAGRI Private Limited leads agricultural innovation through cutting-edge solutions, 
        sustainable practices, and unwavering commitment to farmer success.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          asChild 
          size="lg" 
          className="btn-outline-primary text-lg px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
        >
          <Link to="/services">
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button 
          asChild 
          variant="outline" 
          size="lg"
          className="btn-outline-primary text-lg px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
        >
          <Link to="/contact">Get Quote</Link>
        </Button>
      </div>
    </div>
  </div>
</section>


      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empowering Agriculture Through Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With deep-rooted expertise and modern technology, SEMOLIAGRI transforms traditional farming 
              into sustainable, profitable enterprises that benefit farmers and communities alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Sustainable</h3>
              <p className="text-muted-foreground">Eco-friendly agricultural solutions that protect our planet</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Trusted</h3>
              <p className="text-muted-foreground">Reliable partnerships with farmers across India</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground">Award-winning quality in products and services</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Growth</h3>
              <p className="text-muted-foreground">Driving agricultural productivity and profitability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Agricultural Operations?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of farmers who trust SEMOLIAGRI for innovative agricultural solutions. 
              Let's build a sustainable future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4 rounded-lg shadow-lg"
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button 
                asChild  
                size="lg"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 rounded-lg"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;