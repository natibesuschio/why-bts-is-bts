export interface Song {
  title: string;
  album: string;
  year: number;
  meaning: string;
  whyItMattered: string;
  evolution: string;
}

export interface Era {
  id: string;
  name: string;
  period: string;
  year: string;
  mood: string;
  theme: string;
  description: string;
  narrative: string;
  image: string;
  imageAlt: string;
  songs: Song[];
  changedEverything?: {
    title: string;
    description: string;
    image?: string;
  };
}

export const eras: Era[] = [
  {
    id: "school-trilogy",
    name: "The School Trilogy",
    period: "2013 – 2014",
    year: "2013",
    mood: "Raw / Defiant / Hungry",
    theme: "Youth against the system",
    description:
      "Seven teenagers from a small company, armed with nothing but honesty and hip-hop, dared to challenge an industry that had already written them off.",
    image: "/images/era1.jpg",
    imageAlt: "Dark stage with dramatic spotlight",
    narrative:
      "Before BTS became a global phenomenon, they were underdogs — a group from a company so small it nearly went bankrupt. Their debut wasn't polished pop. It was rough, angry, and deeply personal. They rapped about the pressure of the Korean education system, about dreams being crushed under the weight of expectation. In an industry dominated by manufactured perfection, they chose authenticity. That choice would define everything that came after.",
    songs: [
      {
        title: "No More Dream",
        album: "2 Cool 4 Skool",
        year: 2013,
        meaning:
          "A confrontation with a generation told to stop dreaming. The song doesn't offer comfort — it demands that you question why you gave up in the first place.",
        whyItMattered:
          "It established BTS's identity from day one: they would speak to the things people were afraid to say. In an industry of love songs and party anthems, they chose social commentary.",
        evolution: "This was the seed. Every era that followed grew from this refusal to stay silent.",
      },
      {
        title: "N.O",
        album: "O!RUL8,2?",
        year: 2013,
        meaning:
          "A direct challenge to a society that reduces young people to test scores. The title itself is a refusal — a single syllable of rebellion.",
        whyItMattered: "It proved the debut wasn't a gimmick. BTS meant what they said. They weren't going to pivot to safer territory.",
        evolution: "The thematic backbone of their early identity — youth as resistance.",
      },
      {
        title: "Boy In Luv",
        album: "Skool Luv Affair",
        year: 2014,
        meaning:
          "Youthful intensity wrapped in the confusion of first love. Clumsy, loud, and deeply sincere — exactly what adolescence feels like.",
        whyItMattered: "Their first taste of commercial traction. It showed they could blend their message with accessibility without losing their edge.",
        evolution: "A bridge between pure hip-hop roots and the broader emotional palette they'd soon explore.",
      },
    ],
    changedEverything: {
      title: "They chose honesty over safety",
      image: "/images/horizontal1.jpg",
      description:
        "In a K-pop landscape built on perfection and corporate narratives, seven teenagers chose to talk about real pain, real pressure, and real dreams. That decision — made before anyone was watching — became the foundation of everything BTS would build.",
    },
  },
  {
    id: "hyyh",
    name: "The Most Beautiful Moment in Life",
    period: "2015 – 2016",
    year: "2015",
    mood: "Melancholic / Euphoric / Fleeting",
    theme: "The beauty and terror of youth",
    description:
      "BTS transformed from hip-hop idols into storytellers of an entire generation, capturing the unbearable beauty of moments that are already slipping away.",
    image: "/images/era2.jpg",
    imageAlt: "Concert crowd with warm lights and euphoric atmosphere",
    narrative:
      "The HYYH era was BTS's artistic awakening. They stopped simply talking about youth and started embodying it — in all its contradictions. The music videos formed an interconnected universe exploring friendship, loss, and the terrifying realization that the best moments of your life might already be behind you. This wasn't just an album cycle. It was the birth of BTS as narrative artists, and it changed the trajectory of K-pop storytelling forever.",
    songs: [
      {
        title: "I Need U",
        album: "The Most Beautiful Moment in Life, Pt. 1",
        year: 2015,
        meaning:
          "Desperation disguised as a love song. Beneath the surface, it's about needing something — someone — to make the pain stop. The MV revealed a darker truth: seven young men each fighting their own private battles with depression, abuse, and loss.",
        whyItMattered:
          "This song broke BTS into the mainstream and launched the Bangtan Universe. It proved that K-pop could be cinema, literature, and music all at once.",
        evolution: "The moment BTS stopped being a group and became a world.",
      },
      {
        title: "Run",
        album: "The Most Beautiful Moment in Life, Pt. 2",
        year: 2015,
        meaning:
          "Running toward something you know will destroy you, because standing still feels worse. It captures the reckless courage of youth — the willingness to be hurt just to feel alive.",
        whyItMattered: "It deepened the HYYH narrative and established BTS's ability to create musical worlds that demand repeat engagement and interpretation.",
        evolution: "Proof that BTS fans weren't just listeners — they were readers, analysts, co-creators of meaning.",
      },
      {
        title: "Fire",
        album: "The Most Beautiful Moment in Life: Young Forever",
        year: 2016,
        meaning:
          "Pure defiance set ablaze. After the melancholy of the era, Fire was a declaration: we're still here, we're still burning, and we refuse to be contained.",
        whyItMattered: "It became an anthem. The energy was infectious, the choreography iconic. It showed BTS could command a stadium.",
        evolution: "The bridge between emotional depth and explosive performance — a duality that would become their signature.",
      },
      {
        title: "Young Forever",
        album: "The Most Beautiful Moment in Life: Young Forever",
        year: 2016,
        meaning:
          "An ache made into music. The question at its center is devastating in its simplicity: will anyone remember this? Will I? The song acknowledges that youth ends — and chooses to keep running anyway.",
        whyItMattered: "It became the emotional thesis of the entire era. When performed live, with an ocean of ARMY singing back, it transcended pop music entirely.",
        evolution: "The first time BTS made the audience part of the art itself.",
      },
    ],
    changedEverything: {
      title: "They turned K-pop into literature",
      image: "/images/horizontal2.jpg",
      description:
        "The HYYH era introduced interconnected narratives, symbolic music videos, and emotional complexity that had never existed at this scale in pop music. BTS proved that a boy band could also be a storytelling collective — and that millions of people were hungry for exactly that.",
    },
  },
  {
    id: "wings",
    name: "Wings",
    period: "2016 – 2017",
    year: "2016",
    mood: "Dark / Introspective / Transformative",
    theme: "Temptation, growth, and finding your own truth",
    description:
      "Inspired by Hermann Hesse's 'Demian,' Wings was BTS's most artistically ambitious project — each member confronting their own shadow to emerge transformed.",
    image: "/images/era3.jpg",
    imageAlt: "Dark artistic silhouettes with dramatic lighting",
    narrative:
      "Wings was a declaration of artistic maturity. Drawing from Hesse's exploration of self-discovery through confrontation with darkness, each member released a solo short film exploring their individual struggles. The album was deeply personal: Suga's 'First Love' was a raw confession to his piano, Jimin's 'Lie' was a haunting exploration of self-deception, and V's 'Stigma' was a wound set to music. Together, it was BTS telling the world: we are seven individuals, each broken in our own way, and that's exactly what makes us whole.",
    songs: [
      {
        title: "Blood Sweat & Tears",
        album: "Wings",
        year: 2016,
        meaning:
          "Surrender to temptation as a necessary step in growth. The song asks: what if the thing that destroys you is also the thing that makes you real? Referencing Nietzsche, Michelangelo, and Hesse, it was pop philosophy at its most seductive.",
        whyItMattered:
          "It shattered expectations. The visuals were art-house cinema. The performance was magnetic. It proved BTS could operate on a level that transcended genre entirely.",
        evolution: "The moment the world realized BTS wasn't just talented — they were visionary.",
      },
      {
        title: "Spring Day",
        album: "You Never Walk Alone",
        year: 2017,
        meaning:
          "Loss given the most beautiful possible form. On the surface, it's about missing someone. Beneath, it carries echoes of the Sewol Ferry tragedy — a wound in Korean collective memory. The song doesn't try to heal. It sits with the grief and calls it sacred.",
        whyItMattered:
          "It became one of the longest-charting songs in Korean music history. It transcended being a BTS song and became a Korean cultural artifact — a song the entire nation adopted as its own expression of mourning.",
        evolution: "The proof that BTS could create something timeless. Not a hit — a hymn.",
      },
    ],
  },
  {
    id: "love-yourself",
    name: "Love Yourself",
    period: "2017 – 2018",
    year: "2017",
    mood: "Vulnerable / Triumphant / Universal",
    theme: "The journey from self-rejection to self-acceptance",
    description:
      "A three-part philosophical arc that took BTS from stadiums to the United Nations, asking the most fundamental question: can you love yourself?",
    image: "/images/era4.jpg",
    imageAlt: "Vast stadium concert with lights and crowd",
    narrative:
      "The Love Yourself series was BTS's thesis statement. Across three albums — Her, Tear, and Answer — they mapped the entire emotional journey of learning to love yourself. 'Her' was about finding love in another person. 'Tear' was about realizing that external love can't fix internal wounds. 'Answer' was about finally turning inward. It was ambitious, vulnerable, and impossibly resonant. By the time RM stood at the UN General Assembly and told young people to 'speak yourself,' BTS had become something no one had a word for yet.",
    songs: [
      {
        title: "DNA",
        album: "Love Yourself: Her",
        year: 2017,
        meaning:
          "Love as cosmic destiny — written into your DNA, echoing across infinite universes. It's romantic maximalism: the idea that some connections are so profound they must be encoded in the structure of reality itself.",
        whyItMattered:
          "BTS's breakthrough in the American market. The music video broke YouTube records. It announced BTS to an audience that had never considered K-pop as a serious art form.",
        evolution: "The door that opened the West — not through compromise, but through undeniable quality.",
      },
      {
        title: "Fake Love",
        album: "Love Yourself: Tear",
        year: 2018,
        meaning:
          "The devastating realization that you've been performing a version of yourself to be loved — and that the love you received was never really for you. It's about the masks we wear and the moment they become unbearable.",
        whyItMattered:
          "Their first Top 10 Billboard Hot 100 hit. Performed at the BBMAs, it showed the world a BTS that was darker, more complex, and completely unafraid of vulnerability.",
        evolution: "The emotional pivot of the entire series — from seeking love to questioning its authenticity.",
      },
      {
        title: "IDOL",
        album: "Love Yourself: Answer",
        year: 2018,
        meaning:
          "A joyful declaration of self-acceptance. After the pain of Fake Love, IDOL says: I don't care what you call me. You can't define me. I know who I am. It fuses Korean traditional music with global pop — a sonic embodiment of cultural pride.",
        whyItMattered:
          "It was the answer to every question the series had asked. After two albums of searching, BTS chose themselves — loudly, proudly, and in their own language.",
        evolution: "The thesis resolved. BTS didn't just sing about self-love — they performed it.",
      },
      {
        title: "Epiphany",
        album: "Love Yourself: Answer",
        year: 2018,
        meaning:
          "Jin's solo is the emotional key to the entire Love Yourself series. The epiphany is devastatingly simple: I am the one I should love. After searching for love in others, in fame, in validation — the answer was always within.",
        whyItMattered: "It distilled the entire three-album arc into a single, shattering realization. It's the moment the philosophy became personal.",
        evolution: "The emotional resolution that made the Love Yourself series not just an album trilogy, but a complete philosophical work.",
      },
    ],
    changedEverything: {
      title: "They spoke at the United Nations",
      description:
        "On September 24, 2018, RM addressed the 73rd United Nations General Assembly as part of the 'Generation Unlimited' campaign. A K-pop idol standing at the most important podium in the world, telling young people to love themselves — it wasn't just unprecedented. It redefined what a musician could be, what influence could look like, and who gets to speak on behalf of a generation.",
      image: "images/horizontal3.jpg",
    },
  },
  {
    id: "map-of-the-soul",
    name: "Map of the Soul",
    period: "2019 – 2020",
    year: "2019",
    mood: "Introspective / Monumental / Jungian",
    theme: "The architecture of identity — persona, shadow, ego",
    description:
      "Drawing from Carl Jung's theories of the psyche, BTS mapped the internal landscape of fame, identity, and the cost of becoming who the world needs you to be.",
    image: "/images/era5.jpg",
    imageAlt: "Massive concert stage with dramatic light beams",
    narrative:
      "At the height of their global fame, BTS did the most unexpected thing possible: they turned inward. Map of the Soul used Jungian psychology as a framework to examine what happens to identity under the weight of unprecedented fame. Persona asked: who am I when the world is watching? 7 answered: I am all of it — the light, the shadow, the child, the performer, the person behind the mask. It was BTS at their most intellectual and their most exposed.",
    songs: [
      {
        title: "Boy With Luv",
        album: "Map of the Soul: Persona",
        year: 2019,
        meaning:
          "A deliberate callback to 'Boy In Luv' — same boys, five years later, transformed. Where the original was aggressive and desperate, this is gentle and grateful. It's about finding joy in the small, ordinary moments of connection.",
        whyItMattered:
          "It broke the YouTube premiere record with 74.6 million views in 24 hours. But more importantly, it showed BTS reflecting on their own journey — the boys who once screamed for attention now whispering thank you.",
        evolution: "A mirror held up to their own past, proving that growth doesn't mean leaving behind who you were.",
      },
      {
        title: "Black Swan",
        album: "Map of the Soul: 7",
        year: 2020,
        meaning:
          "The fear that one day the music will stop moving you. Inspired by Martha Graham's famous quote about a dancer's first death, Black Swan is about the terror of losing your passion — the thing that makes you, you.",
        whyItMattered:
          "It was BTS at their most artistically fearless. The contemporary dance performance film, the orchestral arrangement, the raw vulnerability — it was a statement that BTS would always choose art over safety.",
        evolution: "The deepest BTS had ever gone into artistic self-examination. A song about the fear of creative death, delivered with breathtaking creative vitality.",
      },
      {
        title: "ON",
        album: "Map of the Soul: 7",
        year: 2020,
        meaning:
          "Acceptance of the weight. After years of examining identity, persona, and shadow, ON says: bring it all. The pain, the pressure, the glory — I'll carry it. Not because it's easy, but because this is who I chose to be.",
        whyItMattered:
          "Performed with a marching band in a cinematic music video, it was the most ambitious production BTS had ever attempted. It was a coronation — and a promise to keep going.",
        evolution: "The culmination of seven years of growth. From underdogs to kings, still choosing to carry the weight.",
      },
    ],
  },
  {
    id: "be-pandemic",
    name: "BE",
    period: "2020 – 2021",
    year: "2020",
    mood: "Intimate / Hopeful / Resilient",
    theme: "Finding meaning in stillness",
    description:
      "When the world stopped, BTS didn't chase the spectacle. They sat with the silence, and made something profoundly human.",
    image: "images/era6.jpg",
    imageAlt: "Lone figure in soft, intimate light",
    narrative:
      "The pandemic took everything away — the stadiums, the world tours, the physical connection with ARMY that had defined BTS's existence. Instead of waiting for the world to return, they created from within the void. BE was made almost entirely by the members themselves: they directed the visual concepts, curated the tracklist, designed the album packaging. It was their most personal and collaborative work — a message in a bottle from seven people trying to find hope in the same uncertainty as everyone else.",
    songs: [
      {
        title: "Life Goes On",
        album: "BE",
        year: 2020,
        meaning:
          "The simplest truth, delivered with devastating tenderness. When everything falls apart, life goes on. It doesn't minimize the pain — it honors it, and then gently reminds you that you will survive it.",
        whyItMattered:
          "The first Korean-language song to debut at #1 on the Billboard Hot 100. BTS didn't need to sing in English to reach the top. They just needed to say something true.",
        evolution: "Proof that BTS's power was never about spectacle — it was about sincerity.",
      },
      {
        title: "Dynamite",
        album: "Dynamite (Single)",
        year: 2020,
        meaning:
          "Pure, unapologetic joy. In their darkest professional moment — no concerts, no tours, separated from fans — BTS chose to make something that would simply make people smile. It's a disco-pop love letter to happiness itself.",
        whyItMattered: "Their first #1 on the Billboard Hot 100. Their first Grammy nomination. It proved that BTS could dominate the American market on their own terms.",
        evolution: "A strategic and emotional masterstroke — proving that sometimes the most radical act is choosing joy.",
      },
    ],
  },
  {
    id: "proof-chapter-two",
    name: "Proof & Chapter Two",
    period: "2022",
    year: "2022",
    mood: "Reflective / Individual / Expansive",
    theme: "Seven individuals, one unbreakable bond",
    description:
      "An anthology, a pause, and a promise: BTS closed their first chapter not with an ending, but with a dedication — to themselves, to each other, and to what comes next.",
    image: "/images/era7.jpg",
    imageAlt: "Cinematic night sky with stars — reflection and hope",
    narrative:
      "Proof was both a retrospective and a statement of intent. It collected the moments that defined BTS and added new ones — including 'Yet To Come,' a gentle promise that the best is still ahead. Then came military service and the solo era: each member releasing deeply personal projects that revealed who they are as individuals. RM's philosophical introspection, Suga's raw catharsis, j-hope's artistic reinvention, Jimin's emotional vulnerability, V's jazz-inflected soul-searching, Jungkook's global pop ambition, Jin's warm sincerity. Seven different paths, all leading back to the same truth: BTS is seven.",
    songs: [
      {
        title: "Yet To Come",
        album: "Proof",
        year: 2022,
        meaning:
          "A love letter disguised as a farewell. It references their entire history — past music videos, past eras, past selves — and says: the most beautiful moment is yet to come. It's not nostalgia. It's faith.",
        whyItMattered:
          "Released before their temporary hiatus for military service, it was the most emotionally charged release of their career. It told ARMY: this is not goodbye. This is a promise.",
        evolution: "The bridge between Chapter One and Chapter Two. A song that turns an ending into a beginning.",
      },
      {
        title: "For Youth",
        album: "Proof",
        year: 2022,
        meaning:
          "A direct, unguarded love letter to ARMY. Built around samples of fan chants from concerts around the world, it says what BTS rarely says so plainly: you saved us. Every word is gratitude, every note is devotion.",
        whyItMattered: "It crystallized the relationship between BTS and ARMY into its purest form. Not artist and fan. Family.",
        evolution: "The emotional thesis of their entire career: none of this would exist without the people who chose to listen.",
      },
    ],
  },
  {
  id: "arirang",
  name: "Arirang",
  period: "2026 – Present",
  year: "2026",
  mood: "Mythic / Cultural / Rebirth",
  theme: "Return, identity, and legacy beyond borders",
  description:
    "After years of silence as a group, BTS returns not as the same seven boys — but as something larger. Arirang is not just a comeback. It’s a reclamation of identity, culture, and legacy on a global stage.",
  image: "/images/era8.jpg",
  imageAlt: "Ethereal Korean landscape blending tradition and futuristic light",
  narrative:
    "Arirang marks the moment BTS steps back into the world together — but transformed. Military service, solo journeys, and time apart didn't weaken them. It refined them. The title itself is symbolic: Arirang, a traditional Korean folk song, carries centuries of longing, separation, and reunion. By invoking it, BTS positions their return not just as a musical event, but as a cultural statement. They are no longer just participants in global pop — they are authors of a new cultural narrative, one where tradition and future coexist. Arirang is about remembering where you come from while redefining where you’re going.",
  songs: [
    {
      title: "Body to Body",
      album: "Arirang",
      year: 2026,
      meaning:
      "An explosive opening built on longing, resistance, and connection. By sampling Gyeonggi Arirang, the song turns a traditional melody of endurance into a stadium anthem about closing the distance between people in a fractured world.",
    whyItMattered:
      "It immediately defined Arirang as more than a comeback album. BTS opened this era by grounding themselves in Korean cultural memory while transforming it into something global, urgent, and alive.",
    evolution:
      "The sound of BTS returning not just as performers, but as cultural storytellers — bigger, louder, and more rooted than ever.",
  },
    {
      title: "Swim",
      album: "Arirang",
      year: 2026,
      meaning:
      "A song about moving through uncertainty without needing to control every wave. It captures the peace that comes after chaos — the choice to keep going, not by force, but by trust.",
      whyItMattered:
      "As the title track, SWIM embodies the emotional maturity of this era. Instead of chasing spectacle, BTS reflects on their journey through fame, distance, and change, arriving at a quieter kind of confidence.",
      evolution:
      "Where earlier BTS eras fought against the tide, SWIM shows them learning how to move with it — wiser, calmer, and fully themselves.",
  },
    {
      title: "Alien",
      album: "Arirang",
      year: 2026,
      meaning:
      "A defiant declaration of identity, pride, and cultural legitimacy. Referencing Korean history and the rise of Eastern cultural power, the song turns otherness into strength and marginalization into triumph.",
      whyItMattered:
      "It became one of the boldest statements on the album — BTS reclaiming every doubt ever projected onto them and answering it with confidence, scale, and unmistakable cultural pride.",
      evolution:
      "The moment BTS stops asking for recognition and fully claims their place in global culture on their own terms.",
  },
  ],
  changedEverything: {
    title: "They returned as a legacy, not just a group",
    description:
      "Arirang redefines what it means to 'come back.' BTS didn’t return to reclaim relevance — they returned having transcended it. By grounding their new era in cultural symbolism and collective identity, they positioned themselves not just as global artists, but as a lasting cultural force.",
    image: "/images/horizontal4.jpg",
  },
}
];
