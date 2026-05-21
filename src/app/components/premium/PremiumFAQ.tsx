const faqItems = [
  {
    question: "Papirus AI sınav kağıdını tamamen otomatik mi puanlar?",
    answer:
      "Papirus AI değerlendirme taslağı üretir; son karar ve kontrol her zaman öğretim elemanında kalır. Amaç akademik denetimi kaldırmak değil, rutin okuma yükünü azaltmaktır.",
  },
  {
    question: "El yazısı ve çözüm adımları nasıl ele alınır?",
    answer:
      "Sistem yanıt alanlarını soru düzeyinde ayrıştırır, çözüm akışını referans rubrikle karşılaştırır ve kontrol gerektiren noktaları görünür hale getirir.",
  },
  {
    question: "Öğrenci verileri ve sınav içerikleri nerede işlenir?",
    answer:
      "Oturum ve dosya akışları güvenli konsol üzerinden yürür. KVKK, gizlilik ve güvenlik metinleri footer bağlantıları altında yayınlanacak şekilde hazırlandı.",
  },
  {
    question: "Kurumsal kullanım ve toplu sınav senaryoları destekleniyor mu?",
    answer:
      "Evet. Bölüm, fakülte veya kurum bazlı kullanım için kullanıcı yönetimi, kredi/paket takibi ve sınav geçmişi akışları konsol tarafında planlanmıştır.",
  },
];

export function PremiumFAQ() {
  return (
    <section className="premium-faq" id="faq" aria-labelledby="faq-title">
      <div className="premium-section-heading">
        <span>SSS</span>
        <h2 id="faq-title">Sık sorulan sorulara net yanıtlar.</h2>
        <p>Satın alma, güvenlik ve akademik kontrol tarafında ilk bakışta bilinmesi gerekenleri sade tuttuk.</p>
      </div>

      <div className="premium-faq-list">
        {faqItems.map((item, index) => (
          <details name="papirus-faq" open={index === 0} key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
