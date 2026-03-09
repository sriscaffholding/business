import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Home | Sri Vari Scaffolding Works – Professional Scaffolding Services',
  description:
    'Browse our complete gallery of scaffolding projects – wheel ladders, single scaffolding, double scaffolding. Trusted by construction professionals across Tamil Nadu. Call 8681995581.',
};

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center scaffold-bg overflow-hidden">
        {/* Structural pipe lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Vertical pipe left */}
          <div className="absolute left-[8%] top-0 bottom-0 w-0.5 bg-amber-500/10" />
          {/* Vertical pipe right */}
          <div className="absolute right-[8%] top-0 bottom-0 w-0.5 bg-amber-500/10" />
          {/* Horizontal crossbar top */}
          <div className="absolute top-[25%] left-[8%] right-[8%] h-0.5 bg-amber-500/10" />
          {/* Horizontal crossbar bottom */}
          <div className="absolute top-[75%] left-[8%] right-[8%] h-0.5 bg-amber-500/10" />
          {/* Junction bolts */}
          {[
            { top: '25%', left: '8%' }, { top: '25%', right: '8%' },
            { top: '75%', left: '8%' }, { top: '75%', right: '8%' },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 border-2 border-amber-500/30 bg-amber-500/10 -translate-x-1/2 -translate-y-1/2"
              style={pos as React.CSSProperties}
            />
          ))}
          {/* Diagonal brace */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line x1="8%" y1="25%" x2="92%" y2="75%" stroke="rgba(245,158,11,0.06)" strokeWidth="1" />
          </svg>
          {/* Amber glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6 animate-fade-in">
              <div className="h-0.5 w-8 bg-amber-500" />
              <span className="text-amber-500 font-display tracking-[0.4em] text-sm">TRUSTED SINCE INCEPTION</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display leading-none mb-6 animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wide">
                
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-500 tracking-widest mt-1">
                SRI VARI SCAFFOLDING WORKS
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl text-gray-400 tracking-[0.3em] mt-1">
                
              </span>
            </h1>

            {/* Divider bar */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
              <div className="h-1 w-16 bg-amber-500" />
              <div className="h-1 w-6 bg-amber-500/40" />
              <div className="h-1 w-2 bg-amber-500/20" />
            </div>

            {/* Subtitle */}
            <p
              className="text-gray-400 text-lg md:text-xl font-body font-light max-w-xl leading-relaxed mb-8 animate-slide-up"
              style={{ animationDelay: '250ms', animationFillMode: 'backwards' }}
            >
              Professional scaffolding solutions — wheel ladders, single and double scaffolding — built for safety, precision, and speed on every construction site.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: '350ms', animationFillMode: 'backwards' }}
            >
              <a
                href="#gallery"
                className="bg-amber-500 hover:bg-amber-400 text-black font-display text-xl tracking-widest px-8 py-4 transition-colors duration-200 flex items-center gap-2"
              >
                VIEW GALLERY
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="https://wa.me/918681995581"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-amber-500/50 hover:border-amber-500 text-amber-400 hover:text-amber-300 font-display text-xl tracking-widest px-8 py-4 transition-all duration-200 flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WHATSAPP
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-dark-500 animate-fade-in"
              style={{ animationDelay: '450ms', animationFillMode: 'backwards' }}
            >
              {[
                { val: '500+', label: 'Projects Completed' },
                { val: '15+', label: 'Years Experience' },
                { val: '24/7', label: 'Support Available' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-amber-500 leading-none">{stat.val}</p>
                  <p className="text-gray-500 text-xs tracking-widest uppercase font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
      </section>

      {/* ─── Services Strip ────────────────────────────────── */}
      <section className="bg-amber-500 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-black">
            {['Wheel Ladder', 'Single Scaffolding', 'Double Scaffolding', 'Industrial Projects', 'Construction Safety'].map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                {i > 0 && <span className="hidden md:block w-1 h-1 bg-black/30 rounded-full" />}
                <span className="font-display tracking-widest text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery ─────────────────────────────────────────── */}
      <div id="gallery" className="scroll-mt-20">
        <GalleryGrid />
      </div>

      {/* ─── Address / About ─────────────────────────────────── */}
      <section className="bg-dark-800 border-t border-dark-500 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Address */}
            <div>
              <p className="text-amber-500 font-display tracking-[0.3em] text-sm mb-2">FIND US</p>
              <h2 className="font-display text-4xl text-white tracking-wide mb-5">OUR LOCATION</h2>
              <div className="h-0.5 w-12 bg-amber-500 mb-6" />
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-gray-300 leading-relaxed">
                    {/* EDITABLE PLACEHOLDER – Update with real address */}
                    <p className="font-medium text-white">Sri Vari Scaffolding Works</p>
<p>78, Kanniamman Nagar Road,</p>
<p>Samuel Nagar, Vadaperumbakkam,</p>
<p>Chennai – 600060,</p>
<p>Tamil Nadu, India.</p>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Why us */}
            <div>
              <p className="text-amber-500 font-display tracking-[0.3em] text-sm mb-2">WHY CHOOSE US</p>
              <h2 className="font-display text-4xl text-white tracking-wide mb-5">OUR PROMISE</h2>
              <div className="h-0.5 w-12 bg-amber-500 mb-6" />
              <div className="space-y-4">
                {[
                  { icon: '🔩', title: 'Quality Materials', desc: 'Heavy-duty steel and aluminium scaffolding components that meet IS standards.' },
                  { icon: '👷', title: 'Trained Workforce', desc: 'Our crew is fully trained in safety protocols and efficient installation.' },
                  { icon: '⏱', title: 'On-Time Delivery', desc: 'We understand construction timelines. We show up on schedule, every time.' },
                  { icon: '🛡', title: 'Safety First', desc: 'Every structure is inspected and certified before handover to your team.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-white font-medium text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─────────────────────────────────────── */}
      <section className="bg-amber-500 py-14 px-4 text-center">
        <p className="font-display text-4xl md:text-5xl text-black tracking-wide mb-2">
          NEED A QUOTE?
        </p>
        <p className="text-black/70 mb-8 text-lg">
          Talk directly with Founder &amp; Chairman Saravanan
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+918681995581"
            className="bg-black text-amber-500 font-display text-xl tracking-widest px-8 py-4 hover:bg-dark-700 transition-colors duration-200"
          >
            CALL NOW
          </a>
          <a
            href="https://wa.me/918681995581"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black text-black font-display text-xl tracking-widest px-8 py-4 hover:bg-black hover:text-amber-500 transition-colors duration-200"
          >
            WHATSAPP
          </a>
        </div>
      </section>
    </>
  );
}
