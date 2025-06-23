import Image from 'next/image';
import Link from 'next/link';


export default function SYT() {
  return (
    <div className="portfolio-detail-page">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="text-3xl font-bold mb-4">Start Your Tour</h1>
            <p className="text-lg text-gray-600">AI-Powered Travel Experience Platform</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="row mb-8">
          <div className="col-12">
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <Image
                src="/img/syt-portfolio.png"
                alt="Start Your Tour Platform"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="row mb-8">
          <div className="col-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Start Your Tour is an innovative travel platform that leverages artificial intelligence to create personalized travel experiences. The platform provides smart itineraries, real-time updates, and seamless journey planning for travelers worldwide.
              </p>
              <p>
                Our team developed a responsive web application that helps users discover, plan, and book their perfect trips with intelligent recommendations based on their preferences and past behavior.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="row mb-8">
          <div className="col-12">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">AI-Powered Itineraries</h3>
                <p>Smart trip planning with customized recommendations based on user preferences and behavior.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Real-time Updates</h3>
                <p>Instant notifications for flight changes, weather updates, and local events.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Interactive Maps</h3>
                <p>Seamless integration with mapping services for easy navigation and discovery.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Multi-platform Access</h3>
                <p>Responsive design that works perfectly across all devices and screen sizes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="row mb-8">
          <div className="col-12">
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium">Frontend</h3>
                <p className="text-gray-600">React.js, Next.js, TypeScript</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium">Backend</h3>
                <p className="text-gray-600">Node.js, Express</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium">Database</h3>
                <p className="text-gray-600">MongoDB, Redis</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium">AI/ML</h3>
                <p className="text-gray-600">TensorFlow, Python</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row">
          <div className="col-12 text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Ready to experience the future of travel?</h2>
            <Link 
              href="http://startyourtour.com" 
              target="_blank" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Visit Live Site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}