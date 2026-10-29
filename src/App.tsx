// --- Tipe Data TypeScript ---
interface Feature {
  id: number;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

// --- Data Mockup ---
const featuresData: Feature[] = [
  {
    id: 1,
    title: 'Manajemen Proyek',
    description: 'Kelola proyek, komunikasi real-time, dan bagikan file dalam satu workspace yang cepat dan terintegrasi.',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    id: 2,
    title: 'Obrolan Real-time',
    description: 'Obrolan & komunikasi real-time, bagikan file yang ada di dalam workspace tanpa hambatan.',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 3,
    title: 'Analitik & Laporan',
    description: 'Analitik & laporan & perkalian harian analisis & pengukuran performa tim Anda.',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
];

const navLinks = ['Fitur', 'Harga', 'Tentang Kami', 'Blog', 'Kontak'];

// --- Komponen Utama ---
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* 1. NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-purple-400 rounded-full" />
          </div>
          <span className="text-xl font-bold">CollabHub</span>
        </div>

        <ul className="hidden lg:flex gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <li key={link} className="hover:text-blue-600 cursor-pointer transition-colors">
              {link}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <button className="text-sm font-medium hover:text-blue-600 transition-colors">Masuk</button>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Coba Gratis
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="max-w-7xl mx-auto px-8 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 pr-4">
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight">
            Satu Platform untuk <br /> Kolaborasi Tim Tanpa Batas
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            Kelola proyek, komunikasi real-time, dan bagikan file dalam satu workspace yang cepat dan terintegrasi. Tanpa ribet, tanpa hambatan.
          </p>
          
          <div className="flex items-center gap-6 mt-4">
            <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
              Mulai Gratis Sekarang
            </button>
            <button className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Tonton Demo
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
            <span>Dipercaya oleh 10,000+ tim di seluruh dunia</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
          </div>
        </div>

        {/* Mockup Image Area */}
        <div className="relative w-full h-[400px] bg-gradient-to-tr from-blue-100 via-purple-50 to-blue-50 rounded-2xl border border-gray-100 shadow-2xl flex items-center justify-center overflow-hidden">
          <div className="absolute inset-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 flex">
             <div className="w-1/4 border-r border-gray-200/50 p-4 space-y-3">
               <div className="h-4 bg-blue-600/20 rounded w-full"></div>
               <div className="h-4 bg-gray-200 rounded w-3/4"></div>
               <div className="h-4 bg-gray-200 rounded w-5/6"></div>
             </div>
             <div className="w-3/4 p-4 flex flex-col gap-4">
                <div className="h-32 bg-blue-50 rounded-lg w-full"></div>
                <div className="flex gap-4">
                  <div className="h-24 bg-purple-50 rounded-lg w-1/2"></div>
                  <div className="h-24 bg-gray-50 rounded-lg w-1/2 border border-gray-100"></div>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* 3. PARTNER LOGOS */}
      <section className="border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-8 grayscale opacity-60">
          <span className="text-2xl font-bold font-serif">#slack</span>
          <span className="text-2xl font-bold font-serif">airbnb</span>
          <span className="text-2xl font-bold font-serif">Spotify</span>
          <span className="text-2xl font-bold font-serif">stripe</span>
          <span className="text-2xl font-bold font-serif">HubSpot</span>
        </div>
      </section>

      {/* 4. FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-12">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
            Fitur Unggulan
          </span>
          <h2 className="text-3xl font-bold mt-4">
            Semua yang Anda Butuhkan untuk Kerja Cepat
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature) => (
            <div 
              key={feature.id} 
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div className={`w-12 h-12 rounded-full ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-6`}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
            {/* Kolom 1: Brand & Bio */}
            <div className="md:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-400 rounded-full" />
                </div>
                <span className="text-xl font-bold text-white">CollabHub</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Platform kolaborasi all-in-one untuk manajemen proyek dan komunikasi tim yang lebih produktif.
              </p>
            </div>

            {/* Kolom 2: Produk */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Produk</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Fitur Utama</li>
                <li className="hover:text-white cursor-pointer transition-colors">Integrasi</li>
                <li className="hover:text-white cursor-pointer transition-colors">Paket Harga</li>
                <li className="hover:text-white cursor-pointer transition-colors">Pembaruan</li>
              </ul>
            </div>

            {/* Kolom 3: Perusahaan */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Perusahaan</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Tentang Kami</li>
                <li className="hover:text-white cursor-pointer transition-colors">Karir</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-white cursor-pointer transition-colors">Kontak</li>
              </ul>
            </div>

            {/* Kolom 4: Bantuan & Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Bantuan</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Pusat Bantuan</li>
                <li className="hover:text-white cursor-pointer transition-colors">Dokumentasi</li>
                <li className="hover:text-white cursor-pointer transition-colors">Kebijakan Privasi</li>
                <li className="hover:text-white cursor-pointer transition-colors">Syarat & Ketentuan</li>
              </ul>
            </div>
          </div>

          {/* Baris Bawah: Copyright & Sosmed */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2026 CollabHub. Seluruh hak cipta dilindungi.</p>
            <div className="flex gap-6">
              <span className="hover:text-gray-300 cursor-pointer transition-colors">Twitter</span>
              <span className="hover:text-gray-300 cursor-pointer transition-colors">GitHub</span>
              <span className="hover:text-gray-300 cursor-pointer transition-colors">LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}