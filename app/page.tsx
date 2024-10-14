import foto from "./foto.png"; 
import "./insho-style.css";

function Profile() {
  return (
    <img
      src={foto.src}
      alt="Kariman Septiana Profile"
      className="fotoku max-w-full h-auto mx-auto rounded-full"
    />
  );
}

export default function Gallery() {
  return (
    <section className="p-4 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-gray-300 font-bold text-4xl sm:text-5xl">CV Online</h1>
        <h2 className="text-3xl sm:text-4xl mt-2">Ryan Maulana</h2>
        <Profile />
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          adalah pemain sepak bola profesional Argentina yang bermain sebagai
          penyerang untuk klub Major League Soccer, Inter Miami CF dan merupakan
          kapten timnas Argentina. Dianggap luas sebagai pemain terhebat
          sepanjang masa, Messi telah memenangkan delapan penghargaan Ballon
          d'Or dan enam Sepatu Emas Eropa.
        </p>
      </div>

      {/* Riwayat Pendidikan */}
      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl sm:text-3xl mb-8">Riwayat Pendidikan</h2>
        
        {/* SD Section */}
        <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-4 mb-6">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-3 font-bold text-lg">SD</div>
            <div className="col-span-12 md:col-span-6">SDN Cangkuang 2</div>
            <div className="col-span-12 md:col-span-3">2010 - 2016</div>
          </div>
        </div>

        {/* SMP Section */}
        <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-4 mb-6">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-3 font-bold text-lg">SMP</div>
            <div className="col-span-12 md:col-span-6">SMPN 1 Cicalengka</div>
            <div className="col-span-12 md:col-span-3">2016 - 2019</div>
          </div>
        </div>

        {/* SMA Section */}
        <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-4 mb-6">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-3 font-bold text-lg">SMA</div>
            <div className="col-span-12 md:col-span-6">SMA Bina Muda Cicalengka</div>
            <div className="col-span-12 md:col-span-3">2019 - 2022</div>
          </div>
        </div>
      </div>
    </section>
  );
}
