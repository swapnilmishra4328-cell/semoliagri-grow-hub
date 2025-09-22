import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Sprout, 
  Droplets, 
  Cpu, 
  Truck,
  ArrowRight,
  Star,
  CheckCircle,
  Leaf
} from 'lucide-react';

const Products = () => {
  const categories = [
    {
      title: "Seeds & Seedlings",
      icon: <Sprout className="h-8 w-8" />,
      description: "High-quality seeds and seedlings for maximum yields"
    },
    {
      title: "Fertilizers & Nutrients", 
      icon: <Droplets className="h-8 w-8" />,
      description: "Premium fertilizers and plant nutrition solutions"
    },
    {
      title: "Smart Equipment",
      icon: <Cpu className="h-8 w-8" />,
      description: "Modern agricultural equipment and IoT devices"
    },
    {
      title: "Farm Supplies",
      icon: <Truck className="h-8 w-8" />,
      description: "Essential farming supplies and tools"
    }
  ];

  const featuredProducts = [
    {
      name: "Premium Hybrid Seeds",
      category: "Seeds",
      price: "Contact for Pricing",
      rating: 4.9,
      image: "🌱",
      features: [
        "High germination rate (95%+)",
        "Disease resistant varieties",
        "Climate adaptable strains",
        "Certified organic options"
      ],
      description: "Superior quality hybrid seeds selected for optimal growth and maximum yield in Indian agricultural conditions."
    },
    {
      name: "Bio-Organic Fertilizer",
      category: "Fertilizers",
      price: "₹850/bag",
      rating: 4.8,
      image: "🍃",
      features: [
        "100% organic composition",
        "Slow-release formula",
        "Improves soil health",
        "Eco-friendly production"
      ],
      description: "Environmentally sustainable fertilizer that enhances soil fertility while promoting healthy crop growth."
    },
    {
      name: "Smart Irrigation Controller",
      category: "Equipment", 
      price: "₹12,500",
      rating: 4.7,
      image: "💧",
      features: [
        "IoT-enabled monitoring",
        "Water usage optimization",
        "Remote control capability",
        "Weather integration"
      ],
      description: "Advanced irrigation management system that optimizes water usage through intelligent automation and monitoring."
    },
    {
      name: "Precision Soil Tester",
      category: "Equipment",
      price: "₹8,900",
      rating: 4.6,
      image: "🧪",
      features: [
        "Multi-parameter testing",
        "Digital display results",
        "Portable design",
        "Quick analysis (2 minutes)"
      ],
      description: "Professional-grade soil testing device providing instant analysis of pH, nutrients, and moisture levels."
    },
    {
      name: "Organic Pesticide Kit",
      category: "Supplies",
      price: "₹1,200/kit",
      rating: 4.8,
      image: "🛡️",
      features: [
        "Natural pest control",
        "Safe for beneficial insects",
        "Multiple application methods",
        "Residue-free harvest"
      ],
      description: "Comprehensive organic pest management solution that protects crops without harmful chemical residues."
    },
    {
      name: "Weather Monitoring Station",
      category: "Equipment",
      price: "₹18,500",
      rating: 4.9,
      image: "🌡️",
      features: [
        "Real-time weather data",
        "Mobile app connectivity",
        "Historical data logging",
        "Alert notifications"
      ],
      description: "Professional weather monitoring system providing crucial agricultural weather data and forecasts."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Agricultural Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our comprehensive range of high-quality agricultural products designed 
              to enhance productivity, sustainability, and profitability for modern farming operations.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="btn-hero text-lg px-8 py-4 rounded-lg"
            >
              <Link to="/contact">
                Request Product Catalog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse range of agricultural products across multiple categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="service-card text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and trusted agricultural products chosen by farmers nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="p-6">
                  {/* Product Image/Icon */}
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{product.image}</div>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-accent fill-current'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({product.rating})</span>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Info */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                    </div>
                    <Button 
                      asChild 
                      size="sm" 
                      className="btn-hero text-sm px-4 py-2 rounded-lg"
                    >
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quality, reliability, and performance you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Quality Assured</h3>
              <p className="text-muted-foreground text-sm">
                Rigorous testing and quality control for every product
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Sustainable</h3>
              <p className="text-muted-foreground text-sm">
                Environmentally responsible products for sustainable farming
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Quick and reliable delivery across India
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Expert Support</h3>
              <p className="text-muted-foreground text-sm">
                Technical support and guidance from agricultural experts
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
              Ready to Enhance Your Farm's Productivity?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Browse our complete product catalog and find the perfect solutions for your agricultural needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4 rounded-lg"
              >
                <Link to="/contact">Request Pricing</Link>
              </Button>
              <Button 
                asChild  
                size="lg"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 rounded-lg"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;