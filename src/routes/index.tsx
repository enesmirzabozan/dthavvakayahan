import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import clinicInterior from "@/assets/clinic-interior.asset.json";
import clinicTreatment from "@/assets/clinic-treatment.asset.json";
import clinicExterior from "@/assets/clinic-exterior.asset.json";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const PHONE = "0532 699 41 66";
const PHONE_TEL = "+905326994166";
const WHATSAPP_URL = "https://wa.me/905326994166?text=Merhaba%2C%20randevu%20almak%20istiyorum.";
const ADDRESS = "Topçular, Devran Cd. 62/A, 41300 İzmit/Kocaeli";
const MAPS_URL = "https://maps.app.goo.gl/tyse45ZLoYtkHsYG9";

const services = [
  { icon: "🦷", title: "Genel Diş Hekimliği", desc: "Rutin muayene, dolgu ve koruyucu diş hekimliği uygulamaları." },
  { icon: "✨", title: "Diş Beyazlatma", desc: "Güvenli ve etkili beyazlatma yöntemleriyle parlak bir gülüş." },
  { icon: "🪥", title: "İmplant", desc: "Eksik dişleriniz için kalıcı, doğal görünümlü implant çözümleri." },
  { icon: "😁", title: "Ortodonti", desc: "Tel ve şeffaf plak tedavileriyle düzgün diş dizilimi." },
  { icon: "🩺", title: "Kanal Tedavisi", desc: "Ağrısız ve modern tekniklerle diş kurtarıcı tedaviler." },
  { icon: "🧒", title: "Çocuk Diş Hekimliği", desc: "Çocuklarınız için sevecen ve özenli pediatrik diş bakımı." },
];

const hours = [
  { day: "Pazartesi", time: "09:00 – 20:00" },
  { day: "Salı", time: "09:00 – 20:00" },
  { day: "Çarşamba", time: "09:00 – 20:00" },
  { day: "Perşembe", time: "09:00 – 20:00" },
  { day: "Cuma", time: "09:00 – 20:00" },
  { day: "Cumartesi", time: "09:00 – 20:00" },
  { day: "Pazar", time: "Kapalı", closed: true },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Hours />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#hakkinda", label: "Hakkında" },
    { href: "#hizmetler", label: "Hizmetler" },
    { href: "#saatler", label: "Çalışma Saatleri" },
    { href: "#iletisim", label: "İletişim" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-9 h-9 rounded-full bg-gradient-hero flex items-center justify-center text-lg">🦷</span>
          <span className="hidden sm:block">Dt. Havva Burla Kayahan</span>
          <span className="sm:hidden">Dt. H.B. Kayahan</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-foreground/70 hover:text-primary transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:bg-primary/90 shadow-soft transition">
          💬 Randevu Al
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menü">
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 py-2">{l.label}</a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold text-center">💬 Randevu Al</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft"></div>
      <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl"></div>
      <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            İzmit / Kocaeli
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Sağlıklı Gülüşler<br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">İçin Buradayız</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Diş Hekimi Havva Burla Kayahan kliniğinde modern teknoloji ve özenli bir yaklaşımla, her yaşa uygun diş sağlığı hizmetleri sunuyoruz.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:bg-primary/90 shadow-soft transition hover:-translate-y-0.5">
              📞 Randevu Al
            </a>
            <a href="#hizmetler" className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 px-7 py-3.5 font-semibold hover:bg-primary-soft transition">
              Hizmetlerimiz
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Yıl Tecrübe</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-primary">2K+</div>
              <div className="text-sm text-muted-foreground">Mutlu Hasta</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Uzmanlık</div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-4 bg-gradient-hero rounded-3xl blur-2xl opacity-20"></div>
          <img src={clinicInterior.url} alt="Modern diş kliniği iç mekan" className="relative rounded-3xl shadow-soft w-full aspect-[4/5] object-cover" />
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3 animate-float">
            <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center text-2xl">✨</div>
            <div>
              <div className="font-semibold text-sm">Modern Klinik</div>
              <div className="text-xs text-muted-foreground">Steril & Güvenli</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="hakkinda" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <img src={clinicTreatment.url} alt="Hasta tedavisi" className="rounded-3xl shadow-card w-full aspect-square object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Hakkımızda</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Güvenle Emanet Edilen Gülüşler
          </h2>
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            Diş Hekimi <strong className="text-foreground">Havva Burla Kayahan</strong>, yılların verdiği tecrübe ve sürekli güncellenen mesleki bilgisiyle hastalarına en yüksek standartlarda hizmet sunmaktadır.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Kliniğimizde her hastayı kendine özgü ihtiyaçlarıyla değerlendirir, modern teknoloji ve hijyenik bir ortamda ağrısız ve konforlu tedavi süreçleri planlarız. Önceliğimiz; sağlıklı dişler, doğal gülüşler ve uzun ömürlü çözümlerdir.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { t: "Hijyenik Ortam", d: "Steril ekipman" },
              { t: "Modern Teknoloji", d: "Güncel cihazlar" },
              { t: "Uzman Yaklaşım", d: "Kişiye özel plan" },
              { t: "Konforlu Tedavi", d: "Ağrısız uygulama" },
            ].map(f => (
              <div key={f.t} className="rounded-xl bg-card p-4 border border-border">
                <div className="font-semibold">{f.t}</div>
                <div className="text-sm text-muted-foreground">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Hizmetlerimiz</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Sunduğumuz Tedaviler</h2>
          <p className="text-muted-foreground text-lg">Her yaşa uygun, kapsamlı diş sağlığı hizmetlerimizle yanınızdayız.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="group relative bg-card rounded-2xl p-7 border border-border hover:border-primary/40 hover:shadow-soft transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <div className="absolute top-6 right-6 text-xs text-muted-foreground/40 font-mono">0{i+1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hours() {
  return (
    <section id="saatler" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Çalışma Saatleri</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">Sizi Beklemeden Karşılıyoruz</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card">
            <img src={clinicExterior.url} alt="Klinik dış görünüm" className="w-full aspect-[4/3] object-cover" />
          </div>
          <div className="rounded-3xl bg-card shadow-card border border-border overflow-hidden">
            {hours.map((h, i) => (
              <div key={h.day} className={`flex items-center justify-between px-6 py-4 ${i !== hours.length - 1 ? 'border-b border-border' : ''} ${h.closed ? 'bg-destructive/5' : ''}`}>
                <span className="font-medium">{h.day}</span>
                <span className={`font-semibold ${h.closed ? 'text-destructive' : 'text-primary'}`}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    const msg = `Merhaba, ben ${form.name}. ${form.message}`.trim();
    window.location.href = `tel:${PHONE_TEL}`;
    setSent(true);
    console.log("Form:", form, msg);
  };

  return (
    <section id="iletisim" className="py-20 md:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">İletişim</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Bize Ulaşın</h2>
          <p className="text-muted-foreground text-lg">Randevu ve sorularınız için bize ulaşmaktan çekinmeyin.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center text-2xl shrink-0">📍</div>
              <div>
                <div className="font-semibold mb-1">Adres</div>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                  {ADDRESS}
                </a>
              </div>
            </div>
            <a href={`tel:${PHONE_TEL}`} className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4 hover:border-primary/40 hover:shadow-card transition block">
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center text-2xl shrink-0">📞</div>
              <div>
                <div className="font-semibold mb-1">Telefon</div>
                <div className="text-primary text-lg font-semibold">{PHONE}</div>
              </div>
            </a>
            <div className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center text-2xl shrink-0">🕐</div>
              <div>
                <div className="font-semibold mb-1">Çalışma Saatleri</div>
                <div className="text-muted-foreground text-sm">Hafta içi & Cumartesi: 09:00 – 20:00</div>
                <div className="text-muted-foreground text-sm">Pazar: Kapalı</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                title="Klinik Konumu"
                src="https://www.google.com/maps?q=Top%C3%A7ular%2C+Devran+Cd.+62%2FA%2C+41300+%C4%B0zmit%2FKocaeli&output=embed"
                width="100%" height="100%" style={{ border: 0 }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-card h-fit">
            <h3 className="text-2xl font-semibold mb-6">Randevu Talebi</h3>
            {sent && (
              <div className="mb-4 p-4 rounded-xl bg-accent/20 text-sm">Teşekkürler! Sizi telefonla aramaya yönlendiriyoruz.</div>
            )}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Adınız Soyadınız</label>
                <input
                  type="text" required maxLength={100}
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefon</label>
                <input
                  type="tel" required maxLength={20}
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="0532 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mesajınız</label>
                <textarea
                  rows={4} maxLength={500}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                  placeholder="Ne için randevu almak istiyorsunuz?"
                />
              </div>
              <button type="submit" className="w-full rounded-xl bg-primary text-primary-foreground py-3.5 font-semibold hover:bg-primary/90 shadow-soft transition">
                Randevu Talep Et
              </button>
              <p className="text-xs text-muted-foreground text-center">Form gönderildiğinde sizi telefonumuza yönlendireceğiz.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/90 py-14">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg mb-4">
            <span className="w-9 h-9 rounded-full bg-gradient-hero flex items-center justify-center">🦷</span>
            <span>Dt. Havva Burla Kayahan</span>
          </div>
          <p className="text-background/60 text-sm leading-relaxed">
            Sağlıklı gülüşler için modern ve güvenilir diş kliniği — İzmit Kocaeli.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-background">Hızlı Bağlantılar</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><a href="#hakkinda" className="hover:text-background transition">Hakkında</a></li>
            <li><a href="#hizmetler" className="hover:text-background transition">Hizmetler</a></li>
            <li><a href="#saatler" className="hover:text-background transition">Çalışma Saatleri</a></li>
            <li><a href="#iletisim" className="hover:text-background transition">İletişim</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-background">İletişim</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><a href={`tel:${PHONE_TEL}`} className="hover:text-background transition">📞 {PHONE}</a></li>
            <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-background transition">📍 {ADDRESS}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-background/10 text-sm text-background/50 text-center">
        © {new Date().getFullYear()} Diş Hekimi Havva Burla Kayahan. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
