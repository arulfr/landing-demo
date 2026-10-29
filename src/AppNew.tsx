import { CheckIcon, PlayCircleIcon } from '@heroicons/react/24/solid'

const navLinks = ['Fitur', 'Harga', 'Tentang Kami', 'Blog', 'Kontak'];
const AppNew = () => {
  return (
    <div className="h-min-screen bg-white text-slate-900 font-sans">
      
      {/* Nav bar */}
      <nav className="flex items-center justify-between max-w-7xl px-8 py-5 mx-auto">
        <div className="flex item-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-purple-400"></div>
          </div>
          <span className="font-bold text-xl">CollabHub</span>
        </div>
        <ul className="hidden lg:flex items-center text-sm font-medium text-gray-600 gap-8">
          {navLinks.map((item)=>(
            <li key={item} className="hover:text-blue-600 cursor-pointer transition-colors">{item}</li>
          ))}
        </ul>
       <div className="flex items-center gap-2">
          <button className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium mr-3">
            Masuk
          </button>
          <button className="px-6 py-2.5 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors text-sm text-white font-medium">
            Coba Gratis
          </button>
       </div>

      </nav>
      
      {/* Header */}
      <section className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 px-8 pt-16 pb-24 gap-12 mx-auto items-center">
          <div className="flex flex-col space-y-6 pr-4">
            <h1 className="text-5xl font-extrabold leading-14">
              Satu Platform untuk Kolaborasi Tim Tanpa Batas
            </h1>
            <p className="text-lg text-slate-700 max-w-md">
              Kelola proyek, komunikasi real-time, dan bagikan file dalam satu workspace yang cepat dan terintegrasi. Tanpa ribet, tanpa hambatan.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-8 py-3.5 bg-blue-600 rounded-full text-white shadow-lg shadow-blue-200 hover:bg-blue-700">
                Mulai Gratis Sekarang
              </button>
              <button className="flex flex-center gap-2 hover:text-blue-600 font-medium transition-colors">
                < PlayCircleIcon className="w-5 h-5"/>
                <span className="text-md">Tonton Demo</span>
              </button>
            </div>
          </div>
          <div className="relative w-full h-96 bg-linear-to-r from-blue-50 to-violet-50 rounded-2xl shadow-xl flex items-center justify-center ">
            <div className="flex absolute inset-4 border-white bg-white/60 rounded-2xl">
              <div className="w-1/4 border-r border-gray-200/50 p-4 space-y-3">
                <div className="h-4 bg-blue-400/20 w-full rounded"></div>
                <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
                <div className="h-4 bg-gray-200 w-5/6 rounded"></div>
              </div>
              <div className="w-3/4 flex flex-col gap-4 p-4 ">
                <div className="w-full h-32 bg-blue-50 rounded-lg"></div>
                <div className="flex space-x-2">
                  <div className="w-1/2 h-24 bg-red-50 rounded-lg"></div>
                  <div className="w-1/2 h-24 bg-purple-50 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
      
      </section>
      
      {/* SECTION Sponsor */}
      <section className="border-y border-gray-100 py-10">
          <div className="max-w-7xl px-8 justify-between flex mx-auto grayscale opacity-60">
            <span className="text-2xl font-bold font-serif">#Slack</span>
            <span className="text-2xl font-bold font-serif"> airbnb</span>
            <span className="text-2xl font-bold font-serif">Spotify</span>
            <span className="text-2xl font-bold font-serif">stripe</span>
            <span className="text-2xl font-bold font-serif">HubSpot</span>
          </div>
      </section>

      {/* Fitur Unggulan */}
      <section className="max-w-7xl px-8 py-24">
            <div className="mb-12">
              <span className="bg-blue-600 px-2 py-1 5 font-bold text-white rounded">
                Fitur Ungglan
              </span>
              <h2 className="text-2xl font-bold mt-4">
                Semua yang Anda Butuhkan untuk Kerja Cepat
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Card Fitur */}
              {/* Card 1 */}
              <div className="border border-gray-200 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6">
                  <CheckIcon className=" w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Manajemen Proyek
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Kelola proyek, komunikasi real-time, dan bagikan file dalam satu workspace yang cepat dan terintegrasi.
                </p>
              </div>
              {/* card 2 */}
              <div className="border border-gray-200 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <CheckIcon className=" w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Obrolan Real-time
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Obrolan & komunikasi real-time, bagikan file yang ada di dalam workspace tanpa hambatan.
                </p>
              </div>
              {/* card 3 */}
              <div className="border border-gray-200 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <CheckIcon className=" w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Analitik & Laporan
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Analitik & laporan & perkalian harian analisis & pengukuran performa tim Anda.
                </p>
              </div>
            </div>            
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 pt-16 pb-12">
        <div className="max-w-7xl px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-500">
            {/* Item 1 logo */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="h-4 w-4 bg-purple-600 rounded-full"></div>
                </div>
                <span className="text-xl font-bold text-white">
                  CollabHub
                </span>
              </div>
              <p className="text-md text-gray-500 leading-6">
                Platform kolaborasi all-in-one untuk manajemen proyek dan komunikasi tim yang lebih produktif.
              </p>
            </div>
            {/* ====end==== */}
            {/* Item 2 */}
            <div>
              <h2 className="font-semibold text-sm text-white uppercase mb-4">Produk</h2>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white hover:pointer transition-colors">Fitur Utama</li>
                <li className="hover:text-white hover:pointer transition-colors">Integrasi</li>
                <li className="hover:text-white hover:pointer transition-colors">Paket Harga</li>
                <li className="hover:text-white hover:pointer transition-colors">Pembaruan</li>
              </ul>
            </div>
            {/* Item 2 */}
            <div>
              <h2 className="font-semibold text-sm text-white uppercase mb-4">Perusahaan</h2>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white hover:pointer transition-colors">Tentang Kami</li>
                <li className="hover:text-white hover:pointer transition-colors">Karir</li>
                <li className="hover:text-white hover:pointer transition-colors">Blog</li>
                <li className="hover:text-white hover:pointer transition-colors">Blog</li>
              </ul>
            </div>
            {/* Item 3 */}
            <div>
              <h2 className="font-semibold text-sm text-white uppercase mb-4">Bantuan</h2>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white hover:pointer transition-colors">Pusat Bantuan</li>
                <li className="hover:text-white hover:pointer transition-colors">Dokumentasi</li>
                <li className="hover:text-white hover:pointer transition-colors">Kebijakan Privasi</li>
                <li className="hover:text-white hover:pointer transition-colors">Syarat & Ketentuan</li>
              </ul>
            </div>
            {/* ======================== */}
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 text-gray-500">
            <p className="text-gray-500 text-sm">
              © 2026 CollabHub. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex gap-6">
              <span className="hover:text-gray-300 hover:pointer transition-colors">Twitter</span>
              <span className="hover:text-gray-300 hover:pointer transition-colors">Github</span>
              <span className="hover:text-gray-300 hover:pointer transition-colors">Linkedin</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default AppNew