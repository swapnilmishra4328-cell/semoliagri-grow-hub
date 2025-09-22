import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Tractor, 
  Sprout, 
  BarChart3, 
  Users, 
  Leaf, 
  Wrench,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Tractor className="h-12 w-12" />,
      title: "Farm Consulting",
      description: "Expert agricultural consulting services to optimize your farming operations, improve yields, and maximize profitability.",
      features: [
        "Crop planning and rotation strategies",
        "Soil health assessment and improvement",
        "Irrigation system design and optimization", 
        "Pest and disease management solutions"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Agri-Tech Solutions",
      description: "Cutting-edge technology solutions including precision agriculture, IoT sensors, and data analytics for smart farming.",
      features: [
        "Precision agriculture implementation",
        "IoT-based monitoring systems",
        "Farm management software",
        "Drone-based crop monitoring"
      ]
    },
    {
      icon: <Sprout className="h-12 w-12" />,
      title: "Sustainable Farming",
      description: "Comprehensive sustainable farming solutions that protect the environment while maintaining high productivity.",
      features: [
        "Organic farming transition support",
        "Integrated pest management",
        "Water conservation techniques",
        "Carbon footprint reduction strategies"
      ]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Training & Education",
      description: "Educational programs and training sessions to empower farmers with modern agricultural knowledge and techniques.",
      features: [
        "Hands-on farming workshops",
        "Technology adoption training",
        "Best practices seminars",
        "Ongoing technical support"
      ]
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Crop Management",
      description: "End-to-end crop management services from seed selection to harvest, ensuring optimal growth and maximum yields.",
      features: [
        "Seed variety selection",
        "Fertilizer application planning",
        "Growth monitoring and analysis",
        "Harvest optimization strategies"
      ]
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Equipment Support",
      description: "Agricultural equipment procurement, maintenance, and support services to keep your operations running smoothly.",
      features: [
        "Equipment selection and procurement",
        "Maintenance and repair services",
        "Equipment financing solutions",
        "Technical support and training"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Agricultural Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive agricultural solutions designed to enhance productivity, sustainability, 
              and profitability for farmers across India. From consultation to implementation, 
              we're your trusted partner in agricultural success.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="btn-hero text-lg px-8 py-4 rounded-lg"
            >
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose SEMOLIAGRI Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach combines experience, innovation, and dedication 
              to deliver exceptional results for your agricultural operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Experienced agricultural professionals with deep industry knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                Track record of improving yields and profitability for our clients
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-10 w-10 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Sustainable</h3>
              <p className="text-muted-foreground">
                Environmentally responsible solutions for long-term success
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Full Support</h3>
              <p className="text-muted-foreground">
                Ongoing support and maintenance for all implemented solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Contact us today to discuss your specific needs and learn how our services 
              can help you achieve greater agricultural success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4 rounded-lg"
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button 
                asChild 
                 
                size="lg"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 rounded-lg"
              >
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;