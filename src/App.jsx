import logo from "./assets/AmpereLabs.png"

export default function AdvaitLabs() {
  const services = [
    "Website Development",
    "AI Automation",
    "Landing Pages",
    "UI/UX Design",
    "Shopify Development",
    "Business Websites",
  ];

  const projects = [
    {
      name: "Nova Dental",
      desc: "Modern website for a dental clinic with online booking.",
    },
    {
      name: "Urban Brew",
      desc: "Cafe website with premium branding and menu showcase.",
    },
    {
      name: "FitCore Gym",
      desc: "Landing page focused on lead generation and conversions.",
    },
    {
      name: "Aether AI",
      desc: "AI startup portfolio with futuristic UI and animations.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Advait Labs Logo"
    className="h-10 w-10"
  />

  <h1 className="text-2xl font-bold">
    Advait <span className="text-blue-500">Labs</span>
  </h1>
</div>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
            Web • AI • Automation
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We Build Websites <br />
            That Grow Businesses.
          </h1>

          <p className="text-gray-400 text-lg mb-10">
            Advait Labs creates modern websites, AI automations,
            and digital systems for businesses worldwide.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 rounded-2xl hover:bg-blue-500 transition">
              Book a Call
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/10 transition">
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400">
            Solutions built for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {service}
              </h3>

              <p className="text-gray-400">
                Premium digital solutions tailored for growth.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="bg-white/5 py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Selected Work
            </h2>

            <p className="text-gray-400">
              A few client-style projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-black border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="h-56 bg-gradient-to-br from-blue-500/20 to-cyan-500/10"></div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {project.desc}
                  </p>

                  <button className="px-5 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition">
                    Live Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let’s Build Something Great
          </h2>

          <p className="text-gray-400">
            Tell us about your project.
          </p>
        </div>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4"
          />

          <textarea
            rows="5"
            placeholder="Project Details"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4"
          ></textarea>

          <button className="w-full py-4 bg-blue-600 rounded-2xl hover:bg-blue-500 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}