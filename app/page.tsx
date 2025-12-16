import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-400">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pexels-vahapdmr-19708914.jpg"
          alt="Christmas Lights Background"
          fill
          className="object-cover brightness-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="text-center px-4 max-w-3xl mx-auto relative z-10">
        
        {/* Header using your custom festive font */}
        <h1 className="text-5xl md:text-6xl font-dancer text-amber-400 mb-6 drop-shadow-lg">
          DJ Lights | Bay Area, CA
        </h1>
        
        <p className="text-xl text-slate-100 mb-8 leading-relaxed drop-shadow-md">
          The premier all-inclusive Christmas light service. 
          We <strong>design</strong>, <strong>install</strong>, <strong>maintain</strong>, and <strong>store</strong> your display. 
          <br className="hidden md:block" />
          You handle the hot cocoa, we handle the heights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg shadow-red-900/20"
          >
            Get a Free Quote
          </Link>
          
          <Link 
            href="/gallery" 
            className="border-2 border-slate-200 hover:border-amber-400 text-slate-100 hover:text-amber-400 font-semibold py-3 px-8 rounded-full transition-colors backdrop-blur-sm"
          >
            View Our Work
          </Link>
        </div>

      </div>
    </div>
  );
}