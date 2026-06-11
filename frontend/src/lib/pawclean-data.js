// Central product + content data for PawClean landing.

export const STRIPE_LINKS = {
  S: "https://buy.stripe.com/7sY8wH2P8eO24cl9ABe7m00",
  M: "https://buy.stripe.com/00weV561k21g4cl6ope7m01",
  L: "https://buy.stripe.com/4gM4gr1L46hw8sB8wxe7m02",
};

export const SIZES = [
  {
    id: "S",
    label: "S",
    price: 18,
    breed: "Chihuahua, Yorkshire, Bichon",
    weight: "jusqu'à 8 kg",
    dogScale: 0.6,
    icon: "/icons/s.png",
  },
  {
    id: "M",
    label: "M",
    price: 21,
    breed: "Cocker, Border Collie, Bouledogue",
    weight: "de 8 à 25 kg",
    dogScale: 0.82,
    icon: "/icons/m.png",
  },
  {
    id: "L",
    label: "L",
    price: 23,
    breed: "Labrador, Berger, Dogue Allemand",
    weight: "à partir de 25 kg",
    dogScale: 1.0,
    icon: "/icons/l.png",
  },
];

export const COLORS = [
  {
    id: "sage",
    name: "Vert forêt",
    hex: "#3F6B58",
    light: "#A1B29E",
    bloom: "bloom-green",
    image: "/products/sage.png",
  },
  {
    id: "sky",
    name: "Bleu brume",
    hex: "#7794A8",
    light: "#A5B8C7",
    bloom: "bloom-blue",
    image: "/products/sky.png",
  },
  {
    id: "terracotta",
    name: "Terracotta",
    hex: "#C9644B",
    light: "#E8A287",
    bloom: "bloom-terracotta",
    image: "/products/terracotta.png",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Remplir",
    body: "Un fond d'eau tiède. Pas de savon. Pas de produit. Juste de l'eau.",
  },
  {
    n: "02",
    title: "Insérer",
    body: "Plongez une patte à la fois. Une rotation douce du gobelet suffit.",
  },
  {
    n: "03",
    title: "Essuyer",
    body: "Une serviette, dix secondes, et la patte ressort impeccable.",
  },
];

export const FEATURES = [
  {
    title: "Picots silicone 360°",
    body: "Une couronne intérieure de picots souples qui épouse chaque coussinet sans irriter.",
  },
  {
    title: "Sans BPA, sans phtalates",
    body: "Silicone alimentaire de qualité médicale. Adapté aux peaux les plus sensibles.",
  },
  {
    title: "Lavable au lave-vaisselle",
    body: "Démontable en deux secondes. Lavage à haute température sans déformation.",
  },
  {
    title: "Compact, prêt à voyager",
    body: "Tient dans un sac. Bouchon hermétique. Aucune fuite, aucune odeur.",
  },
];

export const REVIEWS = [
  {
    name: "Camille R.",
    city: "Lyon",
    flag: "🇫🇷",
    rating: 5,
    body: "Mon golden adore patauger. Avant, c'était la guerre à chaque retour de balade. Là, dix secondes par patte et tout est réglé. Le parquet me remercie.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    pet: "Pumba, Golden 4 ans",
  },
  {
    name: "Antoine D.",
    city: "Bordeaux",
    flag: "🇫🇷",
    rating: 5,
    body: "Je vis en appartement. Cet objet a changé ma routine entière. Et franchement, en terracotta sur l'étagère de l'entrée, c'est presque déco.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    pet: "Nougat, Cocker 2 ans",
  },
  {
    name: "Marion L.",
    city: "Annecy",
    flag: "🇫🇷",
    rating: 5,
    body: "Acheté pour le chat — sceptique au début. Au bout de trois jours, il se laisse faire sans broncher. Effet magique.",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    pet: "Miso, chat Européen",
  },
  {
    name: "Sophie B.",
    city: "Lille",
    flag: "🇫🇷",
    rating: 5,
    body: "La finition est splendide. Le silicone est doux, ferme, vraiment qualitatif. On sent que c'est pensé pour durer. Bravo.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    pet: "Mia, Border Collie 6 ans",
  },
  {
    name: "Julien M.",
    city: "Nantes",
    flag: "🇫🇷",
    rating: 4,
    body: "Très bon produit. Le M est parfait pour mon Berger Australien. Petite préférence pour le bouchon plus ferme la prochaine version.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    pet: "Otto, Berger Australien",
  },
  {
    name: "Léa P.",
    city: "Marseille",
    flag: "🇫🇷",
    rating: 5,
    body: "Livraison en 4 jours, emballage soigné, produit impeccable. Je l'ai offert à ma sœur et j'en ai recommandé un pour moi. Tout est dit.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    pet: "Olive, Cavalier King Charles",
  },
];

export const FAQ = [
  {
    q: "Comment choisir la bonne taille ?",
    a: "La taille S convient aux chiens et chats jusqu'à 8 kg. La taille M est idéale pour les races moyennes (8 à 25 kg). La taille L s'adresse aux grandes races à partir de 25 kg. En cas de doute, choisissez la taille supérieure — le gobelet s'adapte à la patte, pas l'inverse.",
  },
  {
    q: "Faut-il du savon ou un produit nettoyant ?",
    a: "Non. De l'eau tiède suffit. Les picots silicone décollent la boue et le sable par friction douce. Ajouter du savon est inutile et peut irriter les coussinets.",
  },
  {
    q: "Le silicone est-il vraiment sans danger ?",
    a: "Oui. Notre silicone est de qualité alimentaire (food-grade), sans BPA, sans phtalates et sans latex. Il est conforme aux normes européennes REACH et adapté aux animaux à peau sensible.",
  },
  {
    q: "Combien de temps prend un nettoyage complet ?",
    a: "Environ 10 secondes par patte. Soit 40 secondes pour une session complète. Plus rapide qu'un essuyage à la serviette, et bien plus efficace.",
  },
  {
    q: "Quels sont les délais et frais de livraison ?",
    a: "Livraison gratuite partout en France métropolitaine. Délai moyen de 6 à 10 jours ouvrés. Suivi par e-mail à chaque étape.",
  },
  {
    q: "Quelle est votre politique de retour ?",
    a: "Vous disposez de 30 jours pour nous renvoyer le produit, utilisé ou non, contre remboursement intégral. Aucune justification demandée.",
  },
];
