import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SafeRoad – Moose Warning App",
  description: "React Native + Firebase app to improve traffic safety.",
};

export default function SafeRoadPage() {
  return (
    <main className="text-white px-4 md:px-8 lg:px-12 py-12 max-w-5xl mx-auto">
      {/* Hero */}
      <section className="mb-10">
        <h2 className="text-3xl md:text-xl font-bold text-red-500">! Pages are in development !</h2>
        <h1 className="text-3xl md:text-5xl font-bold">SafeRoad – Moose Warning App</h1>
        <p className="mt-4 text-lg text-gray-300">
          React Native + Firebase -pohjainen sovellus, joka yhdistää geopaikannuksen,
          push-ilmoitukset ja yhteisön ilmoitukset parantamaan liikenneturvallisuutta.
        </p>
      </section>

      {/* Kuvakaruselli / hero-kuvat */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111]">
          <Image src="/images/saferoad/hero1.png" alt="SafeRoad map" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111]">
          <Image src="/images/saferoad/hero2.png" alt="SafeRoad report" fill className="object-cover" />
        </div>
      </section>

      {/* Yhteenveto */}
      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-gray-300">
          Sovellus näyttää lähialueen hirvihavainnot kartalla ja lähettää älykkäitä push-ilmoituksia
          käyttäjän sijainnin ja riskialueiden perusteella. Käyttäjät voivat raportoida havaintoja,
          nähdä omat raportit ja tarkastella metsästysalueiden aikarajattuja päällekkäisiä varoituksia.
        </p>
      </section>

      {/* Ominaisuudet */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Reaaliaikaiset hirvihavainnot kartalla</li>
          <li>Älykkäät push-ilmoitukset (FCM) sijainnin ja riskialueiden mukaan</li>
          <li>Raportointi: eläinlaji, sijainti, kuvaus, aikaleima</li>
          <li>Hunting zone -overlayt ajastuksella (näkyvät vain voimassa ollessaan)</li>
          <li>Oma profiili &amp; omat raportit (Firebase Auth + Firestore)</li>
        </ul>
      </section>

      {/* Teknologiat */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>React Native (Expo, Expo Router)</li>
            <li>Firebase Auth, Firestore, Cloud Functions</li>
            <li>Firebase Cloud Messaging (push)</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>Geolocation &amp; react-native-maps</li>
            <li>TypeScript</li>
            <li>EAS builds (iOS/Android)</li>
          </ul>
        </div>
      </section>

      {/* Kuvagalleria */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["s1.png","s2.png","s3.png","s4.png","s5.png","s6.png"].map((f) => (
            <div key={f} className="relative aspect-[9/16] rounded-xl overflow-hidden bg-[#111]">
              <Image src={`/images/saferoad/${f}`} alt={f} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-wrap gap-3">
        {/* Jos repo on julkinen, lisää linkki */}
        <Link
          href="https://github.com/torpeforsten" // halutessa suora repo
          className="px-4 py-2 rounded-lg border border-gray-400 text-gray-200 hover:bg-white hover:text-black transition"
        >
          View on GitHub
        </Link>
        <Link
          href="/#contact"
          className="px-4 py-2 rounded-lg bg-white text-black hover:opacity-90 transition"
        >
          Contact me
        </Link>
      </section>
    </main>
  );
}
