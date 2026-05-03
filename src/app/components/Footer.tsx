
export function Footer() {
  return (
    <footer className="bg-primary text-white/80 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/papirus-logo.svg" alt="Papirus AI" className="w-6 h-6 brightness-0 invert" />
              <span className="text-lg text-white">Papirus AI</span>
            </div>
            <p className="text-sm leading-relaxed">
              Yapay zeka destekli sınav değerlendirme platformu
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Ürün</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Özellikler</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fiyatlandırma</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SSS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Kurumsal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Yasal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</a></li>
              <li><a href="#guvenlik-politikasi" className="hover:text-white transition-colors">Güvenlik Politikası</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-sm text-center">
          © 2026 Papirus AI. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
