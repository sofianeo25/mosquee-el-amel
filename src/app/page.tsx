import Image from "next/image";
import { Clock, MapPin, VolumeX, Car, Droplets, BookOpen, Send, Mail, Phone, Facebook } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-mosque-50 dark:bg-mosque-950 scroll-smooth">
      {/* Navbar Simple */}
      <header className="absolute top-0 w-full z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass-panel px-6 py-4 rounded-2xl">
          <div className="flex items-center gap-3 border-b-2 border-mosque-gold-500 pb-1">
            <Image 
              src="/logo.jpg" 
              alt="Logo Al Amal" 
              width={40} 
              height={40} 
              className="rounded-full object-cover border border-mosque-200 dark:border-mosque-800"
            />
            <div className="text-xl font-bold tracking-wider text-mosque-900 dark:text-white">
              Mosquée Al Amal
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-mosque-900 dark:text-white font-medium">
            <a href="#horaires" className="hover:text-mosque-600 dark:hover:text-mosque-300 transition">Horaires</a>
            <a href="#regles" className="hover:text-mosque-600 dark:hover:text-mosque-300 transition">Règles</a>
            <a href="#cours" className="hover:text-mosque-600 dark:hover:text-mosque-300 transition">Cours</a>
            <a href="#contact" className="hover:text-mosque-600 dark:hover:text-mosque-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2670&auto=format&fit=crop"
            alt="Intérieur de mosquée magnifique"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mosque-950/80 via-mosque-900/60 to-mosque-50 dark:to-mosque-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight">
            Bienvenue à la <br />
            <span className="text-mosque-gold-400">Mosquée El Amel</span>
          </h1>
          <p className="text-lg md:text-2xl text-mosque-50 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            Un lieu de paix, de prière et d'apprentissage au cœur de Valserhône.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#horaires" className="px-8 py-4 bg-mosque-500 hover:bg-mosque-600 text-white rounded-full font-semibold transition shadow-lg shadow-mosque-500/30 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              Horaires des prières
            </a>
            <a href="#cours" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold transition flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              Cours d'Arabe
            </a>
          </div>
        </div>
      </section>

      {/* Section Horaires Mawaqit */}
      <section id="horaires" className="py-24 relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white dark:bg-mosque-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-mosque-100 dark:border-mosque-800 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-mosque-900 dark:text-white mb-2 text-center">Horaires de Prière</h2>
            <div className="w-24 h-1 bg-mosque-gold-500 mb-10 rounded-full"></div>

            <p className="text-mosque-600 dark:text-mosque-400 mb-8 max-w-xl text-center">
              Les horaires sont mis à jour en temps réel. Rejoignez-nous pour les prières en congrégation au Masjid.
            </p>

            {/* Mawaqit Widget */}
            <div className="w-full max-w-lg h-[500px] overflow-hidden bg-mosque-50 dark:bg-mosque-950 rounded-2xl flex justify-center border border-mosque-100 dark:border-mosque-800 shadow-inner">
              <iframe
                src="https://mawaqit.net/fr/w/mosquee-el-amel-valserhone?showMessage=0"
                className="w-full h-full border-none"
                title="Horaires de prière Mawaqit"
                loading="lazy"
                allowTransparency={true}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section Règles et Bienséance */}
      <section id="regles" className="py-20 bg-mosque-50 dark:bg-mosque-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mosque-900 dark:text-white mb-2">Votre Mosquée vous informe</h2>
            <div className="w-24 h-1 bg-mosque-gold-500 mx-auto rounded-full mb-6"></div>
            <p className="text-mosque-600 dark:text-mosque-400 max-w-2xl mx-auto">
              Afin de préserver ce lieu de culte et ses environs, nous vous prions de respecter ces quelques règles de bienséance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Règle 1 */}
            <div className="bg-white dark:bg-mosque-900 border border-mosque-100 dark:border-mosque-800 p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition duration-300 shadow-xl shadow-mosque-100/50 dark:shadow-none">
              <div className="w-16 h-16 bg-mosque-100 dark:bg-mosque-800 rounded-full flex items-center justify-center mb-6 text-mosque-600 dark:text-mosque-400">
                <VolumeX className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-mosque-900 dark:text-white mb-3">Le respect du voisinage</h3>
              <p className="text-mosque-600 dark:text-mosque-400 leading-relaxed">
                Veillons à préserver la tranquillité de nos voisins à proximité du Masjid.
              </p>
            </div>

            {/* Règle 2 */}
            <div className="bg-white dark:bg-mosque-900 border border-mosque-100 dark:border-mosque-800 p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition duration-300 shadow-xl shadow-mosque-100/50 dark:shadow-none">
              <div className="w-16 h-16 bg-mosque-100 dark:bg-mosque-800 rounded-full flex items-center justify-center mb-6 text-mosque-600 dark:text-mosque-400">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-mosque-900 dark:text-white mb-3">Le stationnement</h3>
              <p className="text-mosque-600 dark:text-mosque-400 leading-relaxed">
                Des places de parking sont disponibles aux alentours. Veillez au bon stationnement de vos véhicules.
              </p>
            </div>

            {/* Règle 3 */}
            <div className="bg-white dark:bg-mosque-900 border border-mosque-100 dark:border-mosque-800 p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition duration-300 shadow-xl shadow-mosque-100/50 dark:shadow-none">
              <div className="w-16 h-16 bg-mosque-100 dark:bg-mosque-800 rounded-full flex items-center justify-center mb-6 text-mosque-600 dark:text-mosque-400">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-mosque-900 dark:text-white mb-3">L'hygiène</h3>
              <p className="text-mosque-600 dark:text-mosque-400 leading-relaxed">
                Préservons tous ensemble la propreté du Masjid. Bien se sécher suite aux ablutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Cours d'Arabe & Formulaire Web3Forms */}
      <section id="cours" className="py-24 bg-white dark:bg-mosque-900 border-t border-mosque-100 dark:border-mosque-800">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mosque-100 dark:bg-mosque-800 text-mosque-700 dark:text-mosque-300 font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Apprentissage</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-mosque-900 dark:text-white mb-6 leading-tight">
              Inscrivez-vous aux <br />
              <span className="text-mosque-500">Cours d'Arabe</span>
            </h2>
            <p className="text-lg text-mosque-600 dark:text-mosque-400 mb-8 leading-relaxed">
              La mosquée El Amel propose des cours d'apprentissage de la langue arabe et du Saint Coran pour tous les niveaux. Remplissez ce formulaire pour vous pré-inscrire, nous vous recontacterons très vite.
            </p>
            <ul className="space-y-4 text-mosque-700 dark:text-mosque-300 mb-10">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-mosque-gold-500" />
                Apprentissage de l'alphabet et de la lecture
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-mosque-gold-500" />
                Tajwid et psalmodie du Coran
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-mosque-gold-500" />
                Cours enfants et adultes
              </li>
            </ul>
          </div>

          <div className="bg-mosque-50 dark:bg-mosque-950 p-8 md:p-10 rounded-3xl shadow-2xl border border-mosque-100 dark:border-mosque-800">
            <h3 className="text-2xl font-bold text-mosque-900 dark:text-white mb-6">Formulaire d'inscription</h3>

            {/* Formulaire utilisant Web3Forms pour gratuité sans back-end */}
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
              {/* Remplacez la clé ici par votre clé générée sur https://web3forms.com/ */}
              <input type="hidden" name="access_key" value="VOTRE_CLE_WEB3FORMS_ICI" />
              <input type="hidden" name="subject" value="Nouvelle Inscription - Cours d'Arabe Mosquée" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-mosque-700 dark:text-mosque-300 mb-1">Prénom</label>
                  <input type="text" name="prenom" required className="w-full px-4 py-3 rounded-xl border border-mosque-200 dark:border-mosque-700 bg-white dark:bg-mosque-900 focus:ring-2 focus:ring-mosque-500 outline-none transition" placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mosque-700 dark:text-mosque-300 mb-1">Nom</label>
                  <input type="text" name="nom" required className="w-full px-4 py-3 rounded-xl border border-mosque-200 dark:border-mosque-700 bg-white dark:bg-mosque-900 focus:ring-2 focus:ring-mosque-500 outline-none transition" placeholder="Votre nom" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-mosque-700 dark:text-mosque-300 mb-1">Téléphone</label>
                <input type="tel" name="telephone" required className="w-full px-4 py-3 rounded-xl border border-mosque-200 dark:border-mosque-700 bg-white dark:bg-mosque-900 focus:ring-2 focus:ring-mosque-500 outline-none transition" placeholder="06 00 00 00 00" />
              </div>

              <div>
                <label className="block text-sm font-medium text-mosque-700 dark:text-mosque-300 mb-1">Niveau estimé</label>
                <select name="niveau" className="w-full px-4 py-3 rounded-xl border border-mosque-200 dark:border-mosque-700 bg-white dark:bg-mosque-900 focus:ring-2 focus:ring-mosque-500 outline-none transition">
                  <option value="Débutant (Alphabet)">Débutant (Apprentissage de l'alphabet)</option>
                  <option value="Intermédiaire (Lecture)">Intermédiaire (Je sais lire)</option>
                  <option value="Avancé (Tajwid)">Avancé (Tajwid / Perfectionnement)</option>
                </select>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-mosque-600 hover:bg-mosque-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-mosque-600/30 flex justify-center items-center gap-2">
                  <Send className="w-5 h-5" />
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-mosque-950 pt-20 pb-10 border-t border-mosque-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-16">

            {/* L'Association */}
            <div>
              <div className="text-2xl font-bold text-white mb-6">Mosquée El Amel</div>
              <p className="text-mosque-300 mb-6 leading-relaxed">
                Association AFA - Un espace dédié à la spiritualité, l'apprentissage et la fraternité à Valserhône.
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100090711383335"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-mosque-gold-400 hover:text-mosque-gold-300 font-medium transition"
              >
                <Facebook className="w-5 h-5" />
                Suivez-nous sur Facebook
              </a>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex gap-4 text-mosque-300">
                  <MapPin className="w-6 h-6 shrink-0 text-mosque-500" />
                  <a href="https://maps.google.com/?q=3+Rue+Paul+Langevin,+01200+Valserhône" target="_blank" rel="noreferrer" className="hover:text-white transition">
                    3 Rue Paul Langevin, <br /> 01200 Valserhône
                  </a>
                </li>
                {/* 
                <li className="flex gap-4 text-mosque-300">
                  <Mail className="w-6 h-6 shrink-0 text-mosque-500" />
                  <span>contact@mosquee-el-amel.fr</span>
                </li>
                */}
              </ul>
            </div>

            {/* Accès direct */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Liens Rapides</h4>
              <ul className="space-y-3">
                <li><a href="#horaires" className="text-mosque-300 hover:text-white transition">Horaires de prière</a></li>
                <li><a href="#regles" className="text-mosque-300 hover:text-white transition">Règles de la mosquée</a></li>
                <li><a href="#cours" className="text-mosque-300 hover:text-white transition">Inscription aux Cours d'Arabe</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-mosque-900 text-center text-mosque-500 text-sm">
            © {new Date().getFullYear()} Mosquée El Amel - Association AFA. Tous droits réservés.
          </div>
        </div>
      </footer>

    </main>
  );
}
