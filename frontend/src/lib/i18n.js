// i18n — FR/EN translations for PawClean landing page
import { createContext, useContext, useState } from "react";

export const translations = {
  fr: {
    // AnnouncementBar
    announcement: {
      messages: [
        { icon: "🚚", text: "Livraison gratuite partout en France métropolitaine" },
        { icon: "⚡", text: "Expédition sous 48 h depuis Paris" },
        { icon: "★", text: "Note vérifiée 4,9 / 5 — 4 200 maîtres conquis" },
        { icon: "↺", text: "30 jours pour changer d'avis — retour offert" },
      ],
      until: "Jusqu'à",
      close: "Fermer le bandeau",
    },
    // Hero
    hero: {
      overline: "Pour chiens et chats — fabriqué en silicone alimentaire",
      headline1: "Des pattes propres",
      headline2: "en",
      headline2accent: "dix secondes",
      headline2end: ".",
      body: "La routine de la balade, simplifiée. Un gobelet en silicone, de l'eau tiède, et la boue disparaît.",
      cta: "Découvrir PawClean",
      scrollLink: "Voir le rituel",
      nav: {
        ritual: "Le rituel",
        product: "Le produit",
        inside: "Vu de près",
        reviews: "Avis",
        faq: "Questions",
        buy: "Acheter",
      },
      ticker: [
        "Livraison gratuite en France",
        "Garantie 30 jours satisfait ou remboursé",
        "Silicone alimentaire — sans BPA",
        "+ 4 200 clients satisfaits",
        "Expédition sous 48 h",
        "Avis vérifiés ★ 4.9 / 5",
      ],
    },
    // HowItWorks
    how: {
      overline: "Le rituel",
      headline1: "Trois gestes.",
      headline2: "Aucun produit.",
      headline3: "Une patte impeccable.",
    },
    // ProductSelector
    product: {
      overline: "Le produit",
      headline1: "Le gobelet",
      headline2: "en silicone.",
      body: "Trois tailles pensées pour chaque morphologie. Trois couleurs choisies pour vivre dans votre entrée.",
      colorLabel: "Coloris",
      sizeLabel: "Taille",
      scaleLabel: "Schéma à l'échelle",
      specHeight: "Hauteur",
      specWidth: "Largeur",
      specOpening: "Ouverture",
      tolerance: "Tolérance ± 2 mm. Mêmes proportions pour les trois tailles, seule la hauteur change.",
      priceLabel: "Prix unitaire · livraison offerte",
      buyCta: "Acheter ce modèle",
      currency: "€",
      prices: null,
    },
    // InsideLook
    inside: {
      overline: "Vu de près",
      headline: "Pensé jusqu'au moindre détail.",
      row1: {
        overline: "L'intérieur",
        title: "Une couronne de picots silicone à 360°.",
        body: "Souples, fermes, étudiés pour épouser chaque coussinet sans irriter. La rotation douce du gobelet décolle la boue, le sable et les pollens accumulés pendant la balade. Aucune brosse, aucun produit — juste de la friction maîtrisée et un peu d'eau tiède.",
        tags: ["360° de picots", "Silicone alimentaire", "Sans BPA"],
        imgAlt: "Les trois coloris PawClean — le gobelet bleu basculé révèle la couronne intérieure de picots silicone",
      },
      row2: {
        overline: "Démontable",
        title1: "Trois pièces.",
        title2: "Un démontage en deux secondes.",
        body: "Le corps, la bague et la couronne de picots se séparent d'un quart de tour. Tout passe au lave-vaisselle sans se déformer. Aucun recoin oublié, aucune mauvaise odeur — votre gobelet reste impeccable, lavage après lavage.",
        tags: ["Lave-vaisselle", "Sans recoins cachés", "Pièces interchangeables"],
        imgAlt: "Le gobelet PawClean démonté — le corps transparent, la bague blanche et la couronne de picots silicone",
      },
      row3: {
        overline: "En situation",
        title1: "Quatre gestes. Dix secondes.",
        titleAccent: "Le tour est joué.",
        body: "Eau tiède, rotation douce, séchage à la serviette — et le tapis d'entrée vous remerciera.",
        imgAlt: "Démonstration en six étapes : remplir le gobelet, plonger la patte, sécher à la serviette, vider l'eau sale, et le résultat avant/après",
      },
    },
    // Features
    features: {
      overline: "Conçu pour durer",
      headline1: "Petits détails.",
      headline2: "Grande différence.",
    },
    // Reviews
    reviews: {
      overline: "4 200 avis vérifiés",
      headline1: "Ce qu'en disent",
      headline2: "leurs maîtres.",
      average: "sur 5 — moyenne France",
      verified: "Vérifié",
    },
    // Delivery
    delivery: {
      overline: "Promesse PawClean",
      headline1: "Commandé aujourd'hui.",
      headline2: "Adopté la semaine prochaine.",
      stats: [
        {
          suffix: "€",
          label: "Livraison gratuite",
          body: "Partout en France métropolitaine, sans condition de montant.",
        },
        {
          suffix: " j",
          label: "Délai moyen",
          body: "6 à 10 jours ouvrés, avec suivi e-mail à chaque étape.",
        },
        {
          suffix: " j",
          label: "Retour offert",
          body: "Satisfait ou remboursé, sans justification, pendant 30 jours.",
        },
      ],
    },
    // FAQSection
    faq: {
      overline: "Questions fréquentes",
      headline1: "Tout ce qu'il faut",
      headlineAccent: "savoir",
      headline2: ".",
    },
    // Footer
    footer: {
      tagline: "La routine de la balade, simplifiée. Conçu à Paris, fabriqué en Europe.",
      legal: "Mentions légales",
      cgv: "CGV",
      privacy: "Confidentialité",
      cookies: "Cookies",
      contact: "Contact",
      copyright: "Tous droits réservés.",
    },
    // MobileBuyBar
    mobileBuy: {
      overline: "PawClean — silicone",
      from: "À partir de",
      shipping: "· livraison offerte",
      cta: "Acheter",
    },
    // Data overrides
    sizes: [
      {
        weight: "jusqu'à 8 kg",
        breed: "Chihuahua, Yorkshire, Bichon",
        dimensions: { height: "Hauteur", width: "Largeur", opening: "Ouverture" },
      },
      {
        weight: "de 8 à 20 kg",
        breed: "Cocker, Border Collie, Bouledogue",
        dimensions: { height: "Hauteur", width: "Largeur", opening: "Ouverture" },
      },
      {
        weight: "à partir de 20 kg",
        breed: "Labrador, Berger, Dogue Allemand",
        dimensions: { height: "Hauteur", width: "Largeur", opening: "Ouverture" },
      },
    ],
    colors: [
      { name: "Vert forêt" },
      { name: "Bleu brume" },
      { name: "Terracotta" },
    ],
    steps: [
      { title: "Remplir", body: "Un fond d'eau tiède. Pas de savon. Pas de produit. Juste de l'eau." },
      { title: "Insérer", body: "Plongez une patte à la fois. Une rotation douce du gobelet suffit." },
      { title: "Essuyer", body: "Une serviette, dix secondes, et la patte ressort impeccable." },
    ],
    featureItems: [
      { title: "Picots silicone 360°", body: "Une couronne intérieure de picots souples qui épouse chaque coussinet sans irriter." },
      { title: "Sans BPA, sans phtalates", body: "Silicone alimentaire de qualité médicale. Adapté aux peaux les plus sensibles." },
      { title: "Lavable au lave-vaisselle", body: "Démontable en deux secondes. Lavage à haute température sans déformation." },
      { title: "Compact, prêt à voyager", body: "Tient dans un sac. Bouchon hermétique. Aucune fuite, aucune odeur." },
    ],
    reviewItems: [
      { body: "Mon golden adore patauger. Avant, c'était la guerre à chaque retour de balade. Là, dix secondes par patte et tout est réglé. Le parquet me remercie.", city: "Lyon", pet: "Pumba, Golden 4 ans" },
      { body: "Je vis en appartement. Cet objet a changé ma routine entière. Et franchement, en terracotta sur l'étagère de l'entrée, c'est presque déco.", city: "Bordeaux", pet: "Nougat, Cocker 2 ans" },
      { body: "Acheté pour le chat — sceptique au début. Au bout de trois jours, il se laisse faire sans broncher. Effet magique.", city: "Annecy", pet: "Miso, chat Européen" },
      { body: "La finition est splendide. Le silicone est doux, ferme, vraiment qualitatif. On sent que c'est pensé pour durer. Bravo.", city: "Lille", pet: "Mia, Border Collie 6 ans" },
      { body: "Très bon produit. Le M est parfait pour mon Berger Australien. Petite préférence pour le bouchon plus ferme la prochaine version.", city: "Nantes", pet: "Otto, Berger Australien" },
      { body: "Livraison en 4 jours, emballage soigné, produit impeccable. Je l'ai offert à ma sœur et j'en ai recommandé un pour moi. Tout est dit.", city: "Marseille", pet: "Olive, Cavalier King Charles" },
    ],
    faqItems: [
      {
        q: "Comment choisir la bonne taille ?",
        a: "La taille S convient aux chiens et chats jusqu'à 8 kg. La taille M est idéale pour les races moyennes (8 à 20 kg). La taille L s'adresse aux grandes races à partir de 20 kg. En cas de doute, choisissez la taille supérieure — le gobelet s'adapte à la patte, pas l'inverse.",
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
    ],
  },

  en: {
    // AnnouncementBar
    announcement: {
      messages: [
        { icon: "🚚", text: "Free shipping across mainland France" },
        { icon: "⚡", text: "Shipped within 48 h from Paris" },
        { icon: "★", text: "Verified rating 4.9 / 5 — 4,200 happy owners" },
        { icon: "↺", text: "30 days to change your mind — free returns" },
      ],
      until: "Until",
      close: "Close banner",
    },
    // Hero
    hero: {
      overline: "For dogs & cats — made from food-grade silicone",
      headline1: "Clean paws",
      headline2: "in",
      headline2accent: "ten seconds",
      headline2end: ".",
      body: "The post-walk routine, simplified. One silicone cup, warm water, and the mud is gone.",
      cta: "Discover PawClean",
      scrollLink: "See how it works",
      nav: {
        ritual: "The ritual",
        product: "The product",
        inside: "Up close",
        reviews: "Reviews",
        faq: "FAQ",
        buy: "Buy",
      },
      ticker: [
        "Free shipping to France",
        "30-day money-back guarantee",
        "Food-grade silicone — BPA-free",
        "4,200+ happy customers",
        "Shipped within 48 h",
        "Verified reviews ★ 4.9 / 5",
      ],
    },
    // HowItWorks
    how: {
      overline: "The ritual",
      headline1: "Three steps.",
      headline2: "No soap.",
      headline3: "One spotless paw.",
    },
    // ProductSelector
    product: {
      overline: "The product",
      headline1: "The silicone",
      headline2: "paw cup.",
      body: "Three sizes for every breed. Three colours designed to live in your hallway.",
      colorLabel: "Colour",
      sizeLabel: "Size",
      scaleLabel: "Scale diagram",
      specHeight: "Height",
      specWidth: "Width",
      specOpening: "Opening",
      tolerance: "Tolerance ± 2 mm. Same proportions across all three sizes — only the height changes.",
      priceLabel: "Unit price · free shipping",
      buyCta: "Buy this model",
      currency: "$",
      prices: { S: 20, M: 23, L: 25 },
    },
    // InsideLook
    inside: {
      overline: "Up close",
      headline: "Designed down to the last detail.",
      row1: {
        overline: "Inside",
        title: "A 360° ring of silicone bristles.",
        body: "Soft yet firm, designed to wrap around every paw pad without irritating. A gentle twist of the cup lifts mud, sand and pollen picked up on the walk. No brush, no product — just controlled friction and a little warm water.",
        tags: ["360° bristles", "Food-grade silicone", "BPA-free"],
        imgAlt: "The three PawClean colours — the blue cup tilted to reveal the inner ring of silicone bristles",
      },
      row2: {
        overline: "Disassembles",
        title1: "Three parts.",
        title2: "Apart in two seconds.",
        body: "The body, collar and bristle ring separate with a quarter-turn. Everything is dishwasher-safe and keeps its shape. No hidden corners, no lingering odours — your cup stays spotless, wash after wash.",
        tags: ["Dishwasher-safe", "No hidden corners", "Interchangeable parts"],
        imgAlt: "The PawClean cup disassembled — the transparent body, white collar and silicone bristle ring",
      },
      row3: {
        overline: "In action",
        title1: "Four moves. Ten seconds.",
        titleAccent: "Done.",
        body: "Warm water, gentle twist, towel-dry — and your hallway rug will thank you.",
        imgAlt: "Six-step demonstration: fill the cup, dip the paw, dry with a towel, empty the dirty water, and the before/after result",
      },
    },
    // Features
    features: {
      overline: "Built to last",
      headline1: "Small details.",
      headline2: "Big difference.",
    },
    // Reviews
    reviews: {
      overline: "4,200 verified reviews",
      headline1: "What their",
      headline2: "owners say.",
      average: "out of 5 — France average",
      verified: "Verified",
    },
    // Delivery
    delivery: {
      overline: "PawClean promise",
      headline1: "Ordered today.",
      headline2: "Yours by next week.",
      stats: [
        {
          suffix: "€",
          label: "Free shipping",
          body: "Anywhere in mainland France, no minimum order.",
        },
        {
          suffix: " d",
          label: "Average delivery",
          body: "6 to 10 business days, with email tracking at every step.",
        },
        {
          suffix: " d",
          label: "Free returns",
          body: "Satisfied or refunded — no questions asked, for 30 days.",
        },
      ],
    },
    // FAQSection
    faq: {
      overline: "Frequently asked questions",
      headline1: "Everything you need",
      headlineAccent: "to know",
      headline2: ".",
    },
    // Footer
    footer: {
      tagline: "The post-walk routine, simplified. Designed in Paris, made in Europe.",
      legal: "Legal notice",
      cgv: "T&Cs",
      privacy: "Privacy",
      cookies: "Cookies",
      contact: "Contact",
      copyright: "All rights reserved.",
    },
    // MobileBuyBar
    mobileBuy: {
      overline: "PawClean — silicone",
      from: "From $20",
      shipping: "· free shipping",
      cta: "Buy",
    },
    // Data overrides
    sizes: [
      {
        weight: "up to 8 kg",
        breed: "Chihuahua, Yorkshire, Bichon",
        dimensions: { height: "Height", width: "Width", opening: "Opening" },
      },
      {
        weight: "8 to 20 kg",
        breed: "Cocker, Border Collie, Bulldog",
        dimensions: { height: "Height", width: "Width", opening: "Opening" },
      },
      {
        weight: "20 kg and over",
        breed: "Labrador, Shepherd, Great Dane",
        dimensions: { height: "Height", width: "Width", opening: "Opening" },
      },
    ],
    colors: [
      { name: "Forest Green" },
      { name: "Misty Blue" },
      { name: "Terracotta" },
    ],
    steps: [
      { title: "Fill", body: "A little warm water. No soap. No product. Just water." },
      { title: "Dip", body: "One paw at a time. A gentle twist of the cup does all the work." },
      { title: "Dry", body: "One towel, ten seconds, and the paw comes out spotless." },
    ],
    featureItems: [
      { title: "360° silicone bristles", body: "An inner ring of soft bristles that wraps around every pad without irritating." },
      { title: "BPA-free, phthalate-free", body: "Medical-grade food silicone. Safe for the most sensitive skin." },
      { title: "Dishwasher safe", body: "Disassembles in two seconds. High-temperature wash with no warping." },
      { title: "Compact, travel-ready", body: "Fits in a bag. Watertight cap. No leaks, no odours." },
    ],
    reviewItems: [
      { body: "My golden loves puddles. Before, every walk ended in a battle. Now, ten seconds per paw and we're done. The floors are grateful.", city: "Lyon", pet: "Pumba, 4-year-old Golden" },
      { body: "I live in a flat. This thing changed my entire routine. And honestly, in terracotta on the hallway shelf, it's almost decorative.", city: "Bordeaux", pet: "Nougat, 2-year-old Cocker" },
      { body: "Bought it for the cat — sceptical at first. By day three, he lets me do it without a fuss. Magic.", city: "Annecy", pet: "Miso, European Shorthair" },
      { body: "The finish is beautiful. The silicone is soft yet firm — genuinely high quality. You can tell it's made to last. Bravo.", city: "Lille", pet: "Mia, 6-year-old Border Collie" },
      { body: "Great product. The M is perfect for my Australian Shepherd. Slight preference for a firmer cap in the next version.", city: "Nantes", pet: "Otto, Australian Shepherd" },
      { body: "Delivered in 4 days, carefully packaged, flawless product. I gave one to my sister and ordered another for myself. Says it all.", city: "Marseille", pet: "Olive, Cavalier King Charles" },
    ],
    faqItems: [
      {
        q: "How do I choose the right size?",
        a: "Size S fits dogs and cats up to 8 kg. Size M is ideal for medium breeds (8 to 20 kg). Size L is designed for large breeds from 20 kg upward. If in doubt, go up a size — the cup adapts to the paw, not the other way around.",
      },
      {
        q: "Do I need soap or a cleaning product?",
        a: "No. Warm water is all you need. The silicone bristles lift mud and sand through gentle friction. Adding soap is unnecessary and may irritate paw pads.",
      },
      {
        q: "Is the silicone really safe?",
        a: "Yes. Our silicone is food-grade (food-safe), BPA-free, phthalate-free and latex-free. It meets European REACH standards and is suitable for animals with sensitive skin.",
      },
      {
        q: "How long does a full clean take?",
        a: "About 10 seconds per paw — 40 seconds for a full session. Faster than towelling, and far more effective.",
      },
      {
        q: "What are the delivery times and costs?",
        a: "Free shipping throughout mainland France. Average delivery time of 6 to 10 business days. Email tracking updates at every stage.",
      },
      {
        q: "What is your returns policy?",
        a: "You have 30 days to return the product, used or unused, for a full refund. No explanation required.",
      },
    ],
  },
};

// Context
import React from "react";
const LangContext = createContext({ lang: "fr", setLang: () => {}, t: translations.fr });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
