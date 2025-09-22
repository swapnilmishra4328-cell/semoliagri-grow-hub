import { Target, Eye, Users, Award, CheckCircle, Sprout } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About SEMOLIAGRI Private Limited
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Pioneering agricultural innovation in India with sustainable solutions, 
              cutting-edge technology, and unwavering commitment to farmer success since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SEMOLIAGRI Private Limited was founded with a vision to revolutionize agriculture in India 
                through innovative solutions and sustainable practices. Based in Indore, Madhya Pradesh, 
                we have established ourselves as a trusted partner for farmers across the region.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our journey began with a simple yet powerful belief: that modern technology and traditional 
                agricultural wisdom can work hand in hand to create more productive, sustainable, and 
                profitable farming operations. Today, we continue to lead the industry with innovative 
                products and services that empower farmers to achieve greater success.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Leading agricultural innovation in Central India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Committed to sustainable farming practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Trusted by thousands of farmers nationwide</span>
                </div>
              </div>
            </div>
            <div className="bg-field-gradient rounded-2xl p-8 text-center">
              <Sprout className="h-24 w-24 text-primary-foreground mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Growing Together</h3>
              <p className="text-primary-foreground/90">
                Every success story of our farmers is a testament to our shared commitment 
                to agricultural excellence and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower farmers with innovative agricultural solutions that enhance productivity, 
                ensure sustainability, and improve livelihoods. We are committed to bridging the gap 
                between traditional farming and modern technology, making agriculture more efficient, 
                profitable, and environmentally responsible.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be India's leading agricultural innovation company, recognized for transforming 
                farming communities through cutting-edge technology, sustainable practices, and 
                exceptional service. We envision a future where every farmer has access to the 
                tools and knowledge needed for sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of agricultural expertise, 
              business acumen, and innovative thinking to drive SEMOLIAGRI's mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-16 w-16 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Executive Leadership</h3>
              <p className="text-muted-foreground">
                Experienced professionals leading strategic initiatives and operational excellence 
                in agricultural innovation and sustainable farming solutions.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-16 w-16 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Technical Expertise</h3>
              <p className="text-muted-foreground">
                Agricultural scientists, engineers, and technology specialists dedicated to 
                developing innovative solutions for modern farming challenges.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-secondary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="h-16 w-16 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Field Operations</h3>
              <p className="text-muted-foreground">
                Dedicated field teams working directly with farmers to ensure successful 
                implementation of agricultural solutions and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 lg:py-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              The principles that guide everything we do at SEMOLIAGRI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-primary-foreground mb-2">Innovation</h3>
              <p className="text-primary-foreground/80 text-sm">
                Continuously advancing agricultural technology for better outcomes
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-primary-foreground mb-2">Integrity</h3>
              <p className="text-primary-foreground/80 text-sm">
                Building trust through honest, transparent, and ethical practices
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-primary-foreground mb-2">Sustainability</h3>
              <p className="text-primary-foreground/80 text-sm">
                Protecting our environment for future generations
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-primary-foreground mb-2">Excellence</h3>
              <p className="text-primary-foreground/80 text-sm">
                Delivering superior quality in every product and service
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;