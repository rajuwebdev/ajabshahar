import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentCard } from "../components/ContentCard";
import { Search } from "../components/Search";
import { TexturedBackground } from "../components/TexturedBackground";

export default function Index() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const contentItems = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F207b3c404bb44ba5aa0bc8844bed53c8%2F49faf702561a454484422a8182ea8e83?format=webp&width=800",
      title: "Main Nijaam Se Naina",
      subtitle: "O cast My Heart To Nizam's Glance",
      author: "FARID AYAZ & ABU MOHAMMED feat AMIR KHUSRO",
      description:
        "The delicacy of looking eyes with the beloved and living one's heart in love composed couplet. Both poetry and music are beautifully represented by the gossiping neighbourhood women.",
      category: "song",
      link: "/songs/main-nijaam-se-naina",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      title: "Shoonyay is not 'nothingness'",
      subtitle: "",
      author: "KRISHNA HAKTI",
      description:
        "Teaching has its own intrinsic character. Everything exists in relation to something else. The sense of void that pervades in the human mind is worth looking in to.",
      category: "reflection",
      link: "/reflections/shoonyay",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      title: "Maukhik Parampara",
      subtitle: "Oral Traditions",
      author: "BALKHI FOLK",
      description:
        "While there are many kinds of oral traditions - stories, myths, parables, proverbs, riddles, and folklore - our focus here are the oral traditions of Kashmir and other mystic poets - the transmission and preservation of the poetic knowledge of oral traditions.",
      category: "reflection",
      link: "/reflections/maukhik-parampara",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=300&fit=crop",
      title: "Had Anhad",
      subtitle: "Journeys with Ram & Kabir",
      author: "A film by SHARNAMRANJNAK",
      description:
        "Kabir was a 15th century mystic poet and saint who defied the boundaries between Hindu and Muslim. He laid a Middle mystic path and searched for God - Ram Wilo Khuda Khuda.",
      category: "film",
      link: "/films/had-anhad",
    },
  ];

  const sidePoems: any[] = [];

  return (
    <div className="min-h-screen relative">
      <TexturedBackground />

      <div className="relative z-10">
        <Header onSearchToggle={() => setIsSearchOpen(true)} />

        <main className="container mx-auto px-4 py-8 sm:my-12 pxLayers px-layer3 pt-8 pb-[100px] md:pt-16 md:pb-24">
          <div className="mx-auto">
            {/* Left Column - Content Cards */}
            <div className="card-container">
              {contentItems.map((item, index) => (
                <div
                  key={index}
                  style={{ border: "2px solid", maxWidth: "100%" }}
                >
                  <ContentCard {...item} />
                </div>
              ))}
            </div>

            <div className="flex-1 flex flex-col gap-6">
              {sidePoems.map((poem, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg ${
                    index % 2 === 1 ? "mt-8" : ""
                  }`}
                >
                  <p className="text-gray-700 italic leading-relaxed mb-4 whitespace-pre-line text-sm">
                    {poem.text}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {poem.author}
                  </p>
                  <button className="mt-4 text-rose-500 hover:text-rose-600 text-sm font-medium uppercase tracking-wide">
                    EXPLORE POEM
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
