import Link from 'next/link';
import Image from 'next/image'

export default function Gallery() {
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
        <h1 className="text-5xl md:text-6xl font-dancer text-amber-400 mb-6 drop-shadow-lg">
          Gallery
        </h1>

        <p className="text-xl text-slate-100 mb-8 leading-relaxed drop-shadow-md">
          Here's a sample of our work. Click on a photo to see a larger version.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Add your gallery items here */}
          <Link href="/gallery/photo1">
            <Image
              src="/images/photo1.jpg"
              alt="Sample Gallery Photo"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </Link>
          <Link href="/gallery/photo2">
            <Image
              src="/images/photo2.jpg"
              alt="Sample Gallery Photo"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </Link>
          <Link href="/gallery/photo3">
            <Image
              src="/images/photo3.jpg"
              alt="Sample Gallery Photo"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </Link>
          {/* Add more gallery items as needed */}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/"
            className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}