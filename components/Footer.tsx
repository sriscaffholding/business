import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 flex items-center justify-center font-display text-black text-xl">
                SVS
              </div>
              <p className="font-display text-xl text-white leading-none tracking-widest">
  SRI VARI SCAFFOLDING WORKS
</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional scaffolding solutions for construction projects across Tamil Nadu.
              Safety, precision, and reliability in every build.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://wa.me/918681995581"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-600 hover:bg-amber-500 flex items-center justify-center transition-colors duration-200 group"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-400 group-hover:fill-black transition-colors" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="mailto:sriscaffholding@gmail.com"
                className="w-9 h-9 bg-dark-600 hover:bg-amber-500 flex items-center justify-center transition-colors duration-200 group"
                aria-label="Email"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg text-amber-500 tracking-widest mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home Gallery' },
                { href: '/?filter=wheel-ladder', label: 'Wheel Ladders' },
                { href: '/?filter=single-scaffolding', label: 'Single Scaffolding' },
                { href: '/?filter=double-scaffolding', label: 'Double Scaffolding' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-amber-600">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-amber-500 tracking-widest mb-4">CONTACT</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:+918681995581" className="text-gray-300 hover:text-amber-400 text-sm transition-colors block">
                    +91 86819 95581
                  </a>
                  <a href="tel:+919840481409" className="text-gray-300 hover:text-amber-400 text-sm transition-colors block">
                    +91 98404 81409
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sriscaffholding@gmail.com" className="text-gray-300 hover:text-amber-400 text-sm transition-colors break-all">
                  sriscaffholding@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 text-sm">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-500 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Sri Vari Scaffolding Works.<span className="text-amber-600">All rights reserved</span> 
          </p>
          <p className="text-gray-600 text-xs">
            Proudly developed by <span className="text-amber-600">Hariharan</span>
          </p>
          <p className="text-gray-600 text-xs">
            Founder &amp; Chairman:{' '}
            <span className="text-amber-600">Saravanan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
