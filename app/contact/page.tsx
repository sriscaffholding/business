import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Sri Vari Scaffolding Works',
  description:
    'Contact Sri Vari Scaffolding Works. Reach Founder & Chairman Saravanan at 8681995581 or 9840481409. WhatsApp or email us for scaffolding project inquiries in Tamil Nadu.',
  openGraph: {
    title: 'Contact Sri Vari Scaffolding Works',
    description: 'Call, WhatsApp or email us for scaffolding solutions across Tamil Nadu.',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="scaffold-bg pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-500 font-display tracking-[0.4em] text-sm mb-2 animate-fade-in">GET IN TOUCH</p>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wide leading-none mb-4 animate-slide-up">
            CONTACT<br />
            <span className="text-amber-500">US</span>
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-1 w-12 bg-amber-500" />
            <div className="h-1 w-4 bg-amber-500/40" />
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-900">
        <div className="max-w-4xl mx-auto">
          {/* Founder Card */}
          <div className="bg-dark-700 border border-dark-500 p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
            <div className="absolute top-4 right-4 font-display text-6xl text-amber-500/5 tracking-widest pointer-events-none">
              FOUNDER
            </div>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-amber-500 flex items-center justify-center font-display text-black text-3xl shrink-0">
                S
              </div>
              <div>
                <p className="text-amber-500 font-display tracking-[0.3em] text-sm mb-1">FOUNDER &amp; CHAIRMAN</p>
                <h2 className="font-display text-4xl text-white tracking-wide">SARAVANAN</h2>
                <p className="text-gray-500 mt-1 text-sm">Sri Vari Scaffolding Works</p>
              </div>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {/* Phone 1 */}
            <a
              href="tel:+918681995581"
              className="group bg-dark-700 hover:bg-dark-600 border border-dark-500 hover:border-amber-500/40 p-6 transition-all duration-200 flex items-center gap-5"
            >
              <div className="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500 flex items-center justify-center transition-colors duration-200">
                <svg className="w-6 h-6 text-amber-500 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-amber-500 text-xs font-display tracking-widest mb-0.5">PRIMARY</p>
                <p className="text-white font-body font-medium text-lg">+91 86819 95581</p>
                <p className="text-gray-500 text-xs">Tap to call</p>
              </div>
            </a>

            {/* Phone 2 */}
            <a
              href="tel:+919840481409"
              className="group bg-dark-700 hover:bg-dark-600 border border-dark-500 hover:border-amber-500/40 p-6 transition-all duration-200 flex items-center gap-5"
            >
              <div className="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500 flex items-center justify-center transition-colors duration-200">
                <svg className="w-6 h-6 text-amber-500 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-amber-500 text-xs font-display tracking-widest mb-0.5">ALTERNATE</p>
                <p className="text-white font-body font-medium text-lg">+91 98404 81409</p>
                <p className="text-gray-500 text-xs">Tap to call</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:sriscaffholding@gmail.com"
              className="group bg-dark-700 hover:bg-dark-600 border border-dark-500 hover:border-amber-500/40 p-6 transition-all duration-200 flex items-center gap-5"
            >
              <div className="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500 flex items-center justify-center transition-colors duration-200">
                <svg className="w-6 h-6 text-amber-500 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-amber-500 text-xs font-display tracking-widest mb-0.5">EMAIL</p>
                <p className="text-white font-body font-medium break-all">sriscaffholding@gmail.com</p>
                <p className="text-gray-500 text-xs">Tap to email</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918681995581"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark-700 hover:bg-dark-600 border border-dark-500 hover:border-amber-500/40 p-6 transition-all duration-200 flex items-center gap-5"
            >
              <div className="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500 flex items-center justify-center transition-colors duration-200">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-amber-500 group-hover:fill-black transition-colors" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-amber-500 text-xs font-display tracking-widest mb-0.5">WHATSAPP</p>
                <p className="text-white font-body font-medium">Chat with us</p>
                <p className="text-gray-500 text-xs">Fast response guaranteed</p>
              </div>
            </a>
          </div>

          {/* Address */}
          <div className="bg-dark-700 border border-dark-500 p-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-amber-500 font-display tracking-[0.3em] text-sm mb-1">OUR ADDRESS</p>
                <div className="text-gray-300 leading-loose">
                  {/* EDITABLE PLACEHOLDER – Replace with real address */}
                  <p className="font-medium text-white">Sri Vari Scaffolding Works</p>
<p>78, Kanniamman Nagar Road,</p>
<p>Samuel Nagar, Vadaperumbakkam,</p>
<p>Chennai – 600060,</p>
<p>Tamil Nadu, India.</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-amber-500 py-14 px-4 text-center">
        <p className="font-display text-4xl md:text-5xl text-black tracking-wide mb-3">
          REACH US INSTANTLY
        </p>
        <p className="text-black/70 mb-8 text-lg max-w-md mx-auto">
          Click the button below to start a WhatsApp conversation directly with our team.
        </p>
        <a
          href="https://wa.me/918681995581"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-amber-500 font-display text-xl tracking-widest px-10 py-4 hover:bg-dark-700 transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          OPEN WHATSAPP CHAT
        </a>
      </section>
    </>
  );
}
