"use strict";

const ASMA_UL_HUSNA = [
  {
    number: 1,
    arabic: "اللَّهُ",
    transliteration: "Allāh",
    meanings: {
      en: "The One Worthy of All Worship",
      de: "Der Einzig Anbetungswürdige",
      tr: "İbadet Edilmeye Layık Tek Varlık"
    },
    description: {
      en: "The greatest name, encompassing all attributes of perfection.",
      de: "Der größte Name, der alle Attribute der Vollkommenheit umfasst.",
      tr: "Tüm mükemmellik sıfatlarını kapsayan en büyük isim."
    }
  },
  {
    number: 2,
    arabic: "الرَّحْمَٰنُ",
    transliteration: "Ar-Raḥmān",
    meanings: {
      en: "The Most Gracious",
      de: "Der Allgnädige",
      tr: "Çok Merhametli"
    },
    description: {
      en: "The One whose mercy encompasses all creation in this world.",
      de: "Derjenige, dessen Gnade die gesamte Schöpfung in dieser Welt umfasst.",
      tr: "Rahmeti bu dünyada tüm yaratılmışı kaplayan."
    }
  },
  {
    number: 3,
    arabic: "الرَّحِيمُ",
    transliteration: "Ar-Raḥīm",
    meanings: {
      en: "The Most Merciful",
      de: "Der Barmherzige",
      tr: "Pek Merhametli"
    },
    description: {
      en: "The One whose mercy is especially for the believers in the Hereafter.",
      de: "Derjenige, dessen Barmherzigkeit besonders den Gläubigen im Jenseits gilt.",
      tr: "Rahmeti ahirette özellikle müminler için olan."
    }
  },
  {
    number: 4,
    arabic: "الْمَلِكُ",
    transliteration: "Al-Malik",
    meanings: {
      en: "The Sovereign",
      de: "Der Herrscher",
      tr: "Hükümdar"
    },
    description: {
      en: "The One with complete dominion, whose sovereignty is absolute.",
      de: "Derjenige mit vollständiger Herrschaft, dessen Souveränität absolut ist.",
      tr: "Mutlak hükümranlığa sahip olan."
    }
  },
  {
    number: 5,
    arabic: "الْقُدُّوسُ",
    transliteration: "Al-Quddūs",
    meanings: {
      en: "The Most Holy",
      de: "Der Allheilige",
      tr: "Her Türlü Eksiklikten Münezzeh"
    },
    description: {
      en: "The One free from all imperfections, transcendently pure.",
      de: "Derjenige, der frei von allen Unvollkommenheiten ist, erhaben rein.",
      tr: "Her türlü kusur ve noksandan münezzeh olan."
    }
  },
  {
    number: 6,
    arabic: "السَّلَامُ",
    transliteration: "As-Salām",
    meanings: {
      en: "The Source of Peace",
      de: "Der Friedensspender",
      tr: "Selametin Kaynağı"
    },
    description: {
      en: "The One who is free from all defects and grants peace and safety.",
      de: "Derjenige, der frei von allen Mängeln ist und Frieden und Sicherheit schenkt.",
      tr: "Her türlü eksiklikten uzak olan ve barış veren."
    }
  },
  {
    number: 7,
    arabic: "الْمُؤْمِنُ",
    transliteration: "Al-Mu'min",
    meanings: {
      en: "The Granter of Security",
      de: "Der Sicherheitsspender",
      tr: "Güvenlik Veren"
    },
    description: {
      en: "The One who bestows faith and security upon His servants.",
      de: "Derjenige, der Seinen Dienern Glauben und Sicherheit verleiht.",
      tr: "Kullarına iman ve güvenlik veren."
    }
  },
  {
    number: 8,
    arabic: "الْمُهَيْمِنُ",
    transliteration: "Al-Muhaymin",
    meanings: {
      en: "The Guardian",
      de: "Der Allwachsame",
      tr: "Her Şeyi Gözetip Koruyan"
    },
    description: {
      en: "The One who watches over all things and preserves them.",
      de: "Derjenige, der alle Dinge beobachtet und bewahrt.",
      tr: "Her şeyi gözetip muhafaza eden."
    }
  },
  {
    number: 9,
    arabic: "الْعَزِيزُ",
    transliteration: "Al-'Azīz",
    meanings: {
      en: "The Almighty",
      de: "Der Allmächtige",
      tr: "Mutlak Güç Sahibi"
    },
    description: {
      en: "The One invincible in strength and might.",
      de: "Derjenige, der in Stärke und Macht unbesiegbar ist.",
      tr: "Güç ve kuvvette yenilmez olan."
    }
  },
  {
    number: 10,
    arabic: "الْجَبَّارُ",
    transliteration: "Al-Jabbār",
    meanings: {
      en: "The Compeller",
      de: "Der Bezwinger",
      tr: "Her Şeye Gücü Yeten"
    },
    description: {
      en: "The One who repairs, restores, and compels as He wills.",
      de: "Derjenige, der nach Seinem Willen repariert, wiederherstellt und zwingt.",
      tr: "Dilediği her şeyi yapan ve eksikleri tamamlayan."
    }
  },
  {
    number: 11,
    arabic: "الْمُتَكَبِّرُ",
    transliteration: "Al-Mutakabbir",
    meanings: {
      en: "The Supremely Great",
      de: "Der Erhabene",
      tr: "Her Şeyden Yüce"
    },
    description: {
      en: "The One who is supremely great, transcending all creation.",
      de: "Derjenige, der höchst groß ist und die gesamte Schöpfung übersteigt.",
      tr: "Her şeyden yüce ve üstün olan."
    }
  },
  {
    number: 12,
    arabic: "الْخَالِقُ",
    transliteration: "Al-Khāliq",
    meanings: {
      en: "The Creator",
      de: "Der Schöpfer",
      tr: "Yaratan"
    },
    description: {
      en: "The One who brings all things into existence from non-existence.",
      de: "Derjenige, der alle Dinge aus dem Nichts ins Dasein bringt.",
      tr: "Her şeyi yoktan var eden."
    }
  },
  {
    number: 13,
    arabic: "الْبَارِئُ",
    transliteration: "Al-Bāri'",
    meanings: {
      en: "The Originator",
      de: "Der Erschaffer",
      tr: "Eşsiz Yaratan"
    },
    description: {
      en: "The One who creates things in a distinguished, perfect manner.",
      de: "Derjenige, der Dinge auf herausragende, vollkommene Weise erschafft.",
      tr: "Her şeyi kusursuz biçimde yaratan."
    }
  },
  {
    number: 14,
    arabic: "الْمُصَوِّرُ",
    transliteration: "Al-Muṣawwir",
    meanings: {
      en: "The Fashioner of Forms",
      de: "Der Gestalter",
      tr: "Şekil Veren"
    },
    description: {
      en: "The One who gives shapes and forms to all things.",
      de: "Derjenige, der allen Dingen Formen und Gestalten gibt.",
      tr: "Her şeye şekil ve suret veren."
    }
  },
  {
    number: 15,
    arabic: "الْغَفَّارُ",
    transliteration: "Al-Ghaffār",
    meanings: {
      en: "The Oft-Forgiving",
      de: "Der Allvergebende",
      tr: "Çok Bağışlayan"
    },
    description: {
      en: "The One who repeatedly and abundantly forgives sins.",
      de: "Derjenige, der Sünden wiederholt und reichlich vergibt.",
      tr: "Günahları tekrar tekrar bağışlayan."
    }
  },
  {
    number: 16,
    arabic: "الْقَهَّارُ",
    transliteration: "Al-Qahhār",
    meanings: {
      en: "The All-Prevailing",
      de: "Der Überwältiger",
      tr: "Her Şeye Galip Gelen"
    },
    description: {
      en: "The One who subjugates everything, irresistible.",
      de: "Derjenige, der alles unterwirft, unwiderstehlich.",
      tr: "Her şeye hükmeden, yenilmez olan."
    }
  },
  {
    number: 17,
    arabic: "الْوَهَّابُ",
    transliteration: "Al-Wahhāb",
    meanings: {
      en: "The Bestower",
      de: "Der Großzügige Schenker",
      tr: "Karşılıksız Veren"
    },
    description: {
      en: "The One who bestows gifts freely without any expectation.",
      de: "Derjenige, der Gaben frei und ohne Erwartung schenkt.",
      tr: "Karşılık beklemeksizin bağış veren."
    }
  },
  {
    number: 18,
    arabic: "الرَّزَّاقُ",
    transliteration: "Ar-Razzāq",
    meanings: {
      en: "The Provider",
      de: "Der Versorger",
      tr: "Rızık Veren"
    },
    description: {
      en: "The One who provides sustenance to all of creation.",
      de: "Derjenige, der der gesamten Schöpfung Unterhalt gewährt.",
      tr: "Tüm yaratıklara rızık veren."
    }
  },
  {
    number: 19,
    arabic: "الْفَتَّاحُ",
    transliteration: "Al-Fattāḥ",
    meanings: {
      en: "The Opener",
      de: "Der Öffner",
      tr: "Her Şeyi Açan"
    },
    description: {
      en: "The One who opens all doors of mercy, knowledge, and victory.",
      de: "Derjenige, der alle Türen der Barmherzigkeit, des Wissens und des Sieges öffnet.",
      tr: "Her türlü hayır kapılarını açan."
    }
  },
  {
    number: 20,
    arabic: "الْعَلِيمُ",
    transliteration: "Al-'Alīm",
    meanings: {
      en: "The All-Knowing",
      de: "Der Allwissende",
      tr: "Her Şeyi Bilen"
    },
    description: {
      en: "The One whose knowledge encompasses everything without limit.",
      de: "Derjenige, dessen Wissen alles ohne Grenzen umfasst.",
      tr: "Sınırsız bilgisiyle her şeyi bilen."
    }
  },
  {
    number: 21,
    arabic: "الْقَابِضُ",
    transliteration: "Al-Qābiḍ",
    meanings: {
      en: "The Withholder",
      de: "Der Zurückhalter",
      tr: "Daraltan"
    },
    description: {
      en: "The One who withholds and constricts according to His wisdom.",
      de: "Derjenige, der nach Seiner Weisheit zurückhält und einschränkt.",
      tr: "Hikmeti gereği daraltan ve tutan."
    }
  },
  {
    number: 22,
    arabic: "الْبَاسِطُ",
    transliteration: "Al-Bāsiṭ",
    meanings: {
      en: "The Extender",
      de: "Der Erweiterer",
      tr: "Genişleten"
    },
    description: {
      en: "The One who expands and extends provision and mercy.",
      de: "Derjenige, der Versorgung und Barmherzigkeit ausdehnt und erweitert.",
      tr: "Rızkı ve rahmeti genişleten."
    }
  },
  {
    number: 23,
    arabic: "الْخَافِضُ",
    transliteration: "Al-Khāfiḍ",
    meanings: {
      en: "The Humbler",
      de: "Der Erniedriger",
      tr: "Alçaltan"
    },
    description: {
      en: "The One who lowers and humbles the arrogant and oppressive.",
      de: "Derjenige, der die Arroganten und Unterdrückerischen erniedrigt.",
      tr: "Kibirlileri ve zalimleri alçaltan."
    }
  },
  {
    number: 24,
    arabic: "الرَّافِعُ",
    transliteration: "Ar-Rāfi'",
    meanings: {
      en: "The Exalter",
      de: "Der Erhöher",
      tr: "Yükselten"
    },
    description: {
      en: "The One who raises the believers in rank and honour.",
      de: "Derjenige, der die Gläubigen im Rang und in der Ehre erhebt.",
      tr: "Müminleri derece ve onur bakımından yükselten."
    }
  },
  {
    number: 25,
    arabic: "الْمُعِزُّ",
    transliteration: "Al-Mu'izz",
    meanings: {
      en: "The Honourer",
      de: "Der Ehrenspender",
      tr: "İzzet Veren"
    },
    description: {
      en: "The One who bestows honour and dignity upon whom He wills.",
      de: "Derjenige, der dem, den Er will, Ehre und Würde verleiht.",
      tr: "Dilediğine izzet ve şeref veren."
    }
  },
  {
    number: 26,
    arabic: "الْمُذِلُّ",
    transliteration: "Al-Mudhill",
    meanings: {
      en: "The Humiliator",
      de: "Der Entehrende",
      tr: "Zillete Düşüren"
    },
    description: {
      en: "The One who humiliates the disbelievers and the arrogant.",
      de: "Derjenige, der die Ungläubigen und Arroganten demütigt.",
      tr: "İnkârcıları ve büyüklük taslayanları zelil kılan."
    }
  },
  {
    number: 27,
    arabic: "السَّمِيعُ",
    transliteration: "As-Samī'",
    meanings: {
      en: "The All-Hearing",
      de: "Der Allhörende",
      tr: "Her Şeyi İşiten"
    },
    description: {
      en: "The One who hears all things, apparent and hidden.",
      de: "Derjenige, der alle Dinge hört, offenbare und verborgene.",
      tr: "Gizli ve açık her şeyi işiten."
    }
  },
  {
    number: 28,
    arabic: "الْبَصِيرُ",
    transliteration: "Al-Baṣīr",
    meanings: {
      en: "The All-Seeing",
      de: "Der Allsehende",
      tr: "Her Şeyi Gören"
    },
    description: {
      en: "The One who sees all things, however fine or subtle.",
      de: "Derjenige, der alle Dinge sieht, egal wie fein oder subtil.",
      tr: "En ince ayrıntıya kadar her şeyi gören."
    }
  },
  {
    number: 29,
    arabic: "الْحَكَمُ",
    transliteration: "Al-Ḥakam",
    meanings: {
      en: "The Judge",
      de: "Der Richter",
      tr: "Hakem"
    },
    description: {
      en: "The One who is the ultimate judge between all creation.",
      de: "Derjenige, der der ultimative Richter unter der gesamten Schöpfung ist.",
      tr: "Tüm yaratılmışlar arasında nihai hükmü veren."
    }
  },
  {
    number: 30,
    arabic: "الْعَدْلُ",
    transliteration: "Al-'Adl",
    meanings: {
      en: "The Just",
      de: "Der Gerechte",
      tr: "Adaletli"
    },
    description: {
      en: "The One who is perfectly and completely just in all things.",
      de: "Derjenige, der in allen Dingen vollkommen und vollständig gerecht ist.",
      tr: "Her işinde tam anlamıyla adil olan."
    }
  },
  {
    number: 31,
    arabic: "اللَّطِيفُ",
    transliteration: "Al-Laṭīf",
    meanings: {
      en: "The Subtle",
      de: "Der Feinsinnige",
      tr: "Lütuf Sahibi"
    },
    description: {
      en: "The One who is subtle and gentle, knowing the finest details.",
      de: "Derjenige, der subtil und sanft ist und die feinsten Details kennt.",
      tr: "İnce ve nazik olan, en ince ayrıntıları bilen."
    }
  },
  {
    number: 32,
    arabic: "الْخَبِيرُ",
    transliteration: "Al-Khabīr",
    meanings: {
      en: "The All-Aware",
      de: "Der Allkundige",
      tr: "Her Şeyden Haberdar"
    },
    description: {
      en: "The One who is fully aware of all things, seen and unseen.",
      de: "Derjenige, der über alle Dinge vollständig informiert ist, Sichtbares und Unsichtbares.",
      tr: "Görünen ve görünmeyen her şeyden tam olarak haberdar olan."
    }
  },
  {
    number: 33,
    arabic: "الْحَلِيمُ",
    transliteration: "Al-Ḥalīm",
    meanings: {
      en: "The Forbearing",
      de: "Der Langmütige",
      tr: "Halim, Yumuşak Huylu"
    },
    description: {
      en: "The One who does not rush to punish, showing great patience.",
      de: "Derjenige, der es nicht eilig hat zu bestrafen und große Geduld zeigt.",
      tr: "Cezalandırmada acele etmeyen, büyük sabır gösteren."
    }
  },
  {
    number: 34,
    arabic: "الْعَظِيمُ",
    transliteration: "Al-'Aẓīm",
    meanings: {
      en: "The Magnificent",
      de: "Der Erhabene",
      tr: "Azamet Sahibi"
    },
    description: {
      en: "The One whose majesty and greatness are beyond comprehension.",
      de: "Derjenige, dessen Majestät und Größe jenseits jedes Begreifens sind.",
      tr: "Yüceliği ve büyüklüğü kavranamayan."
    }
  },
  {
    number: 35,
    arabic: "الْغَفُورُ",
    transliteration: "Al-Ghafūr",
    meanings: {
      en: "The All-Forgiving",
      de: "Der Allverzeihende",
      tr: "Gafur, Daima Bağışlayan"
    },
    description: {
      en: "The One whose forgiveness is vast and all-encompassing.",
      de: "Derjenige, dessen Vergebung weit und allumfassend ist.",
      tr: "Bağışlaması geniş ve kapsayıcı olan."
    }
  },
  {
    number: 36,
    arabic: "الشَّكُورُ",
    transliteration: "Ash-Shakūr",
    meanings: {
      en: "The Appreciative",
      de: "Der Dankbare",
      tr: "Şükrü Kabul Eden"
    },
    description: {
      en: "The One who greatly rewards those who are grateful to Him.",
      de: "Derjenige, der diejenigen reich belohnt, die Ihm gegenüber dankbar sind.",
      tr: "Şükredenleri bol bol mükâfatlandıran."
    }
  },
  {
    number: 37,
    arabic: "الْعَلِيُّ",
    transliteration: "Al-'Alīy",
    meanings: {
      en: "The Most High",
      de: "Der Allerhöchste",
      tr: "En Yüce"
    },
    description: {
      en: "The One who is high above all, supremely exalted.",
      de: "Derjenige, der über allem steht, höchst erhaben.",
      tr: "Her şeyden yüce ve üstün olan."
    }
  },
  {
    number: 38,
    arabic: "الْكَبِيرُ",
    transliteration: "Al-Kabīr",
    meanings: {
      en: "The Greatest",
      de: "Der Größte",
      tr: "En Büyük"
    },
    description: {
      en: "The One who is the greatest in every aspect of greatness.",
      de: "Derjenige, der in jedem Aspekt der Größe am größten ist.",
      tr: "Her yönüyle en büyük olan."
    }
  },
  {
    number: 39,
    arabic: "الْحَفِيظُ",
    transliteration: "Al-Ḥafīẓ",
    meanings: {
      en: "The Preserver",
      de: "Der Bewahrer",
      tr: "Koruyup Saklayan"
    },
    description: {
      en: "The One who preserves and protects all things from loss.",
      de: "Derjenige, der alle Dinge vor Verlust bewahrt und schützt.",
      tr: "Her şeyi koruyup muhafaza eden."
    }
  },
  {
    number: 40,
    arabic: "الْمُقِيتُ",
    transliteration: "Al-Muqīt",
    meanings: {
      en: "The Nourisher",
      de: "Der Ernährer",
      tr: "Kuvvet Veren"
    },
    description: {
      en: "The One who provides nourishment and sustains all creation.",
      de: "Derjenige, der Nahrung liefert und die gesamte Schöpfung erhält.",
      tr: "Besleyip ayakta tutan."
    }
  },
  {
    number: 41,
    arabic: "الْحَسِيبُ",
    transliteration: "Al-Ḥasīb",
    meanings: {
      en: "The Reckoner",
      de: "Der Abrechner",
      tr: "Hesap Gören"
    },
    description: {
      en: "The One who takes account of all deeds and is sufficient.",
      de: "Derjenige, der Rechenschaft über alle Taten ablegt und ausreichend ist.",
      tr: "Her amelin hesabını gören ve yeten."
    }
  },
  {
    number: 42,
    arabic: "الْجَلِيلُ",
    transliteration: "Al-Jalīl",
    meanings: {
      en: "The Majestic",
      de: "Der Majestätische",
      tr: "Celal Sahibi"
    },
    description: {
      en: "The One who possesses grandeur and majesty in all things.",
      de: "Derjenige, der in allen Dingen Großartigkeit und Majestät besitzt.",
      tr: "Her şeyde büyüklük ve yücelik sahibi olan."
    }
  },
  {
    number: 43,
    arabic: "الْكَرِيمُ",
    transliteration: "Al-Karīm",
    meanings: {
      en: "The Generous",
      de: "Der Großzügige",
      tr: "Cömert"
    },
    description: {
      en: "The One who is most generous, giving abundantly.",
      de: "Derjenige, der am großzügigsten ist und reichlich gibt.",
      tr: "En cömert olan, bol bol veren."
    }
  },
  {
    number: 44,
    arabic: "الرَّقِيبُ",
    transliteration: "Ar-Raqīb",
    meanings: {
      en: "The Watchful",
      de: "Der Aufmerksame",
      tr: "Gözetleyen"
    },
    description: {
      en: "The One who watches over all things at all times.",
      de: "Derjenige, der alle Dinge zu jeder Zeit beobachtet.",
      tr: "Her şeyi her an gözetleyen."
    }
  },
  {
    number: 45,
    arabic: "الْمُجِيبُ",
    transliteration: "Al-Mujīb",
    meanings: {
      en: "The Responder",
      de: "Der Erhörer",
      tr: "Duaları Kabul Eden"
    },
    description: {
      en: "The One who responds to and answers every supplication.",
      de: "Derjenige, der auf jede Bitte antwortet und sie erhört.",
      tr: "Her duayı kabul eden ve cevap veren."
    }
  },
  {
    number: 46,
    arabic: "الْوَاسِعُ",
    transliteration: "Al-Wāsi'",
    meanings: {
      en: "The All-Encompassing",
      de: "Der Allumfassende",
      tr: "Her Şeyi Kuşatan"
    },
    description: {
      en: "The One whose knowledge and mercy are boundless and vast.",
      de: "Derjenige, dessen Wissen und Barmherzigkeit grenzenlos und weit sind.",
      tr: "İlmi ve rahmeti sınırsız olan."
    }
  },
  {
    number: 47,
    arabic: "الْحَكِيمُ",
    transliteration: "Al-Ḥakīm",
    meanings: {
      en: "The All-Wise",
      de: "Der Allweise",
      tr: "Her İşinde Hikmet Sahibi"
    },
    description: {
      en: "The One who acts with perfect wisdom in all matters.",
      de: "Derjenige, der in allen Dingen mit vollkommener Weisheit handelt.",
      tr: "Her işinde mükemmel hikmetle hareket eden."
    }
  },
  {
    number: 48,
    arabic: "الْوَدُودُ",
    transliteration: "Al-Wadūd",
    meanings: {
      en: "The Most Loving",
      de: "Der Liebreiche",
      tr: "Sevgi Dolu"
    },
    description: {
      en: "The One who loves the believers and is most affectionate.",
      de: "Derjenige, der die Gläubigen liebt und am liebevollsten ist.",
      tr: "Müminleri seven ve en çok şefkat gösteren."
    }
  },
  {
    number: 49,
    arabic: "الْمَجِيدُ",
    transliteration: "Al-Majīd",
    meanings: {
      en: "The Glorious",
      de: "Der Glorreichste",
      tr: "Mecid, Şanlı"
    },
    description: {
      en: "The One who is glorious and noble, possessing the utmost perfection.",
      de: "Derjenige, der glorreich und edel ist und die höchste Vollkommenheit besitzt.",
      tr: "Şanlı ve soylu, en üstün mükemmelliğe sahip olan."
    }
  },
  {
    number: 50,
    arabic: "الْبَاعِثُ",
    transliteration: "Al-Bā'ith",
    meanings: {
      en: "The Resurrector",
      de: "Der Auferwecker",
      tr: "Yeniden Dirilten"
    },
    description: {
      en: "The One who will resurrect all beings on the Day of Judgement.",
      de: "Derjenige, der am Tag des Gerichts alle Wesen auferwecken wird.",
      tr: "Kıyamet gününde tüm varlıkları yeniden diriltecek olan."
    }
  },
  {
    number: 51,
    arabic: "الشَّهِيدُ",
    transliteration: "Ash-Shahīd",
    meanings: {
      en: "The Witness",
      de: "Der Zeuge",
      tr: "Her Şeye Şahit Olan"
    },
    description: {
      en: "The One who witnesses all things openly and secretly.",
      de: "Derjenige, der alle Dinge offen und heimlich bezeugt.",
      tr: "Açık ve gizli her şeye şahit olan."
    }
  },
  {
    number: 52,
    arabic: "الْحَقُّ",
    transliteration: "Al-Ḥaqq",
    meanings: {
      en: "The Truth",
      de: "Die Wahrheit",
      tr: "Mutlak Gerçek"
    },
    description: {
      en: "The One whose existence and attributes are absolutely real.",
      de: "Derjenige, dessen Existenz und Eigenschaften absolut real sind.",
      tr: "Varlığı ve sıfatları kesinlikle gerçek olan."
    }
  },
  {
    number: 53,
    arabic: "الْوَكِيلُ",
    transliteration: "Al-Wakīl",
    meanings: {
      en: "The Trustee",
      de: "Der Treuhänder",
      tr: "Vekil"
    },
    description: {
      en: "The One who is the disposer of affairs and the best trustee.",
      de: "Derjenige, der der Verwalter der Angelegenheiten und der beste Treuhänder ist.",
      tr: "İşleri en iyi şekilde idare eden vekil."
    }
  },
  {
    number: 54,
    arabic: "الْقَوِيُّ",
    transliteration: "Al-Qawīy",
    meanings: {
      en: "The All-Powerful",
      de: "Der Allkräftige",
      tr: "Güçlü"
    },
    description: {
      en: "The One who possesses infinite strength and power.",
      de: "Derjenige, der unendliche Stärke und Kraft besitzt.",
      tr: "Sonsuz güç ve kuvvete sahip olan."
    }
  },
  {
    number: 55,
    arabic: "الْمَتِينُ",
    transliteration: "Al-Matīn",
    meanings: {
      en: "The Firm",
      de: "Der Standhafte",
      tr: "Sağlam ve Güçlü"
    },
    description: {
      en: "The One of impenetrable strength and absolute firmness.",
      de: "Derjenige von undurchdringlicher Stärke und absoluter Standhaftigkeit.",
      tr: "Sarsılmaz güç ve kesinlikle sağlam olan."
    }
  },
  {
    number: 56,
    arabic: "الْوَلِيُّ",
    transliteration: "Al-Walīy",
    meanings: {
      en: "The Protecting Friend",
      de: "Der Beschützer",
      tr: "Dost ve Yardımcı"
    },
    description: {
      en: "The One who is the helper and protector of the believers.",
      de: "Derjenige, der der Helfer und Beschützer der Gläubigen ist.",
      tr: "Müminlerin yardımcısı ve koruyucusu olan."
    }
  },
  {
    number: 57,
    arabic: "الْحَمِيدُ",
    transliteration: "Al-Ḥamīd",
    meanings: {
      en: "The Praiseworthy",
      de: "Der Lobenswürdige",
      tr: "Hamde Layık"
    },
    description: {
      en: "The One worthy of all praise and all glorification.",
      de: "Derjenige, der alles Lobes und aller Verherrlichung würdig ist.",
      tr: "Tüm övgü ve yüceltmeye layık olan."
    }
  },
  {
    number: 58,
    arabic: "الْمُحْصِي",
    transliteration: "Al-Muḥṣī",
    meanings: {
      en: "The Accounter",
      de: "Der Allzähler",
      tr: "Her Şeyi Sayan"
    },
    description: {
      en: "The One who counts and records all things without omission.",
      de: "Derjenige, der alle Dinge ohne Auslassung zählt und aufzeichnet.",
      tr: "Her şeyi eksiksiz sayan ve kaydeden."
    }
  },
  {
    number: 59,
    arabic: "الْمُبْدِئُ",
    transliteration: "Al-Mubdi'",
    meanings: {
      en: "The Initiator",
      de: "Der Urheber",
      tr: "İlk Yaratan"
    },
    description: {
      en: "The One who begins creation and initiates all things from nothing.",
      de: "Derjenige, der die Schöpfung beginnt und alle Dinge aus dem Nichts einleitet.",
      tr: "Yaratmaya başlayan, her şeyi yoktan var eden."
    }
  },
  {
    number: 60,
    arabic: "الْمُعِيدُ",
    transliteration: "Al-Mu'īd",
    meanings: {
      en: "The Restorer",
      de: "Der Wiederherstellende",
      tr: "Yeniden Yaratan"
    },
    description: {
      en: "The One who restores creation after its destruction.",
      de: "Derjenige, der die Schöpfung nach ihrer Zerstörung wiederherstellt.",
      tr: "Yaratılanı yokluğundan sonra yeniden var eden."
    }
  },
  {
    number: 61,
    arabic: "الْمُحْيِي",
    transliteration: "Al-Muḥyī",
    meanings: {
      en: "The Giver of Life",
      de: "Der Lebensgeber",
      tr: "Hayat Veren"
    },
    description: {
      en: "The One who grants life to all living things.",
      de: "Derjenige, der allen Lebewesen Leben schenkt.",
      tr: "Tüm canlılara hayat veren."
    }
  },
  {
    number: 62,
    arabic: "الْمُمِيتُ",
    transliteration: "Al-Mumīt",
    meanings: {
      en: "The Taker of Life",
      de: "Der Lebensnehmer",
      tr: "Ölümü Yaratan"
    },
    description: {
      en: "The One who takes away the life of all living things.",
      de: "Derjenige, der allen Lebewesen das Leben nimmt.",
      tr: "Ölümü yaratan ve hayatı alan."
    }
  },
  {
    number: 63,
    arabic: "الْحَيُّ",
    transliteration: "Al-Ḥayy",
    meanings: {
      en: "The Ever-Living",
      de: "Der Ewig Lebende",
      tr: "Ebediyen Diri"
    },
    description: {
      en: "The One who is eternally alive, without beginning or end.",
      de: "Derjenige, der ewig lebt, ohne Anfang oder Ende.",
      tr: "Başlangıç ve sonu olmaksızın ebediyen diri olan."
    }
  },
  {
    number: 64,
    arabic: "الْقَيُّومُ",
    transliteration: "Al-Qayyūm",
    meanings: {
      en: "The Self-Subsisting",
      de: "Der Selbsterhaltende",
      tr: "Her Şeyi Ayakta Tutan"
    },
    description: {
      en: "The One who sustains all creation and depends on nothing.",
      de: "Derjenige, der die gesamte Schöpfung erhält und von nichts abhängt.",
      tr: "Tüm yaratılmışı ayakta tutan, kendisi hiçbir şeye muhtaç olmayan."
    }
  },
  {
    number: 65,
    arabic: "الْوَاجِدُ",
    transliteration: "Al-Wājid",
    meanings: {
      en: "The Finder",
      de: "Der Findende",
      tr: "Her Şeyi Bulan"
    },
    description: {
      en: "The One who finds and obtains whatever He wills.",
      de: "Derjenige, der findet und erhält, was Er will.",
      tr: "Dilediği her şeyi bulan ve elde eden."
    }
  },
  {
    number: 66,
    arabic: "الْمَاجِدُ",
    transliteration: "Al-Mājid",
    meanings: {
      en: "The Illustrious",
      de: "Der Großartige",
      tr: "Şanlı, Yüce"
    },
    description: {
      en: "The One who is gloriously noble and supremely generous.",
      de: "Derjenige, der herrlich edel und höchst großzügig ist.",
      tr: "Şanlı, asil ve son derece cömert olan."
    }
  },
  {
    number: 67,
    arabic: "الْوَاحِدُ",
    transliteration: "Al-Wāḥid",
    meanings: {
      en: "The One",
      de: "Der Eine",
      tr: "Bir Olan"
    },
    description: {
      en: "The One who has no partner and is unique in all attributes.",
      de: "Derjenige, der keinen Teilhaber hat und in allen Eigenschaften einzigartig ist.",
      tr: "Ortağı olmayan, tüm sıfatlarında eşsiz olan."
    }
  },
  {
    number: 68,
    arabic: "الْأَحَدُ",
    transliteration: "Al-Aḥad",
    meanings: {
      en: "The Unique",
      de: "Der Einzigartige",
      tr: "Tek, Eşsiz"
    },
    description: {
      en: "The One who is uniquely singular, without equal or like.",
      de: "Derjenige, der einzigartig singulär ist, ohne Gleichen oder Ähnlichkeit.",
      tr: "Eşi ve benzeri olmayan, mutlak tekil olan."
    }
  },
  {
    number: 69,
    arabic: "الصَّمَدُ",
    transliteration: "Aṣ-Ṣamad",
    meanings: {
      en: "The Eternal Refuge",
      de: "Der Ewige Zufluchtsort",
      tr: "Her Şeyin Kendisine Muhtaç Olduğu"
    },
    description: {
      en: "The Eternal, absolute, the refuge to whom all turn in need.",
      de: "Der Ewige, Absolute, der Zufluchtsort, zu dem sich alle in der Not wenden.",
      tr: "Ebedi, mutlak varlık; tüm ihtiyaçlar için sığınak."
    }
  },
  {
    number: 70,
    arabic: "الْقَادِرُ",
    transliteration: "Al-Qādir",
    meanings: {
      en: "The Capable",
      de: "Der Fähige",
      tr: "Her Şeye Gücü Yeten"
    },
    description: {
      en: "The One who has perfect ability over all things.",
      de: "Derjenige, der vollkommene Fähigkeit über alle Dinge hat.",
      tr: "Her şey üzerinde mükemmel gücü olan."
    }
  },
  {
    number: 71,
    arabic: "الْمُقْتَدِرُ",
    transliteration: "Al-Muqtadir",
    meanings: {
      en: "The All-Determining",
      de: "Der Allbestimmende",
      tr: "Kudret Sahibi"
    },
    description: {
      en: "The One who determines all things with absolute power.",
      de: "Derjenige, der alle Dinge mit absoluter Macht bestimmt.",
      tr: "Mutlak güçle her şeyi belirleyen."
    }
  },
  {
    number: 72,
    arabic: "الْمُقَدِّمُ",
    transliteration: "Al-Muqaddim",
    meanings: {
      en: "The Expediter",
      de: "Der Voransteller",
      tr: "Öne Geçiren"
    },
    description: {
      en: "The One who places things in their proper order, bringing forward.",
      de: "Derjenige, der Dinge in ihre richtige Reihenfolge bringt und vorwärtsbewegt.",
      tr: "Dilediğini öne alan, her şeyi doğru sırasına koyan."
    }
  },
  {
    number: 73,
    arabic: "الْمُؤَخِّرُ",
    transliteration: "Al-Mu'akhkhir",
    meanings: {
      en: "The Delayer",
      de: "Der Zurückhaltende",
      tr: "Geri Bırakan"
    },
    description: {
      en: "The One who delays and puts things back in their proper place.",
      de: "Derjenige, der verzögert und Dinge an ihren richtigen Platz zurückstellt.",
      tr: "Dilediğini geri bırakan, her şeyi uygun yerine koyan."
    }
  },
  {
    number: 74,
    arabic: "الْأَوَّلُ",
    transliteration: "Al-Awwal",
    meanings: {
      en: "The First",
      de: "Der Erste",
      tr: "İlk"
    },
    description: {
      en: "The One who is first, before all things, without beginning.",
      de: "Derjenige, der der Erste ist, vor allem, ohne Anfang.",
      tr: "Her şeyden önce olan, başlangıcı olmayan."
    }
  },
  {
    number: 75,
    arabic: "الْآخِرُ",
    transliteration: "Al-Ākhir",
    meanings: {
      en: "The Last",
      de: "Der Letzte",
      tr: "Son"
    },
    description: {
      en: "The One who is last, after all things, without end.",
      de: "Derjenige, der der Letzte ist, nach allem, ohne Ende.",
      tr: "Her şeyden sonra olan, sonu olmayan."
    }
  },
  {
    number: 76,
    arabic: "الظَّاهِرُ",
    transliteration: "Aẓ-Ẓāhir",
    meanings: {
      en: "The Manifest",
      de: "Der Offenkundige",
      tr: "Açık ve Aşikâr"
    },
    description: {
      en: "The One who is manifest through His signs and evidences.",
      de: "Derjenige, der durch Seine Zeichen und Beweise offenkundig ist.",
      tr: "Delil ve işaretleriyle açıkça görünen."
    }
  },
  {
    number: 77,
    arabic: "الْبَاطِنُ",
    transliteration: "Al-Bāṭin",
    meanings: {
      en: "The Hidden",
      de: "Der Verborgene",
      tr: "Gizli Olan"
    },
    description: {
      en: "The One who is hidden in His essence and cannot be seen.",
      de: "Derjenige, der in Seinem Wesen verborgen ist und nicht gesehen werden kann.",
      tr: "Zatı bakımından gizli olan ve görülemeyen."
    }
  },
  {
    number: 78,
    arabic: "الْوَالِي",
    transliteration: "Al-Wālī",
    meanings: {
      en: "The Governing",
      de: "Der Regierende",
      tr: "Hükmeden"
    },
    description: {
      en: "The One who governs and manages all the affairs of creation.",
      de: "Derjenige, der alle Angelegenheiten der Schöpfung regiert und verwaltet.",
      tr: "Yaratılmışın tüm işlerini idare eden."
    }
  },
  {
    number: 79,
    arabic: "الْمُتَعَالِي",
    transliteration: "Al-Muta'ālī",
    meanings: {
      en: "The Self-Exalted",
      de: "Der Sich-Selbst-Erhöhende",
      tr: "Her Şeyin Üzerinde Yüce"
    },
    description: {
      en: "The One who is supremely exalted above all things by His own right.",
      de: "Derjenige, der von sich aus über alle Dinge erhaben ist.",
      tr: "Kendi hakkıyla her şeyin üzerinde yüce olan."
    }
  },
  {
    number: 80,
    arabic: "الْبَرُّ",
    transliteration: "Al-Barr",
    meanings: {
      en: "The Source of Goodness",
      de: "Die Quelle des Guten",
      tr: "İyiliğin Kaynağı"
    },
    description: {
      en: "The One who is most kind and generous, the source of all goodness.",
      de: "Derjenige, der am freundlichsten und großzügigsten ist, die Quelle aller Güte.",
      tr: "En nazik ve cömert olan, tüm iyiliğin kaynağı."
    }
  },
  {
    number: 81,
    arabic: "التَّوَّابُ",
    transliteration: "At-Tawwāb",
    meanings: {
      en: "The Accepter of Repentance",
      de: "Der Reueannehmer",
      tr: "Tövbeyi Kabul Eden"
    },
    description: {
      en: "The One who continually accepts the repentance of His servants.",
      de: "Derjenige, der fortwährend die Reue Seiner Diener annimmt.",
      tr: "Kullarının tövbesini sürekli kabul eden."
    }
  },
  {
    number: 82,
    arabic: "الْمُنْتَقِمُ",
    transliteration: "Al-Muntaqim",
    meanings: {
      en: "The Avenger",
      de: "Der Rächer",
      tr: "İntikam Alan"
    },
    description: {
      en: "The One who justly punishes the persistent transgressors.",
      de: "Derjenige, der die hartnäckigen Übertreter gerecht bestraft.",
      tr: "İsrarcı günahkârları adaletle cezalandıran."
    }
  },
  {
    number: 83,
    arabic: "الْعَفُوُّ",
    transliteration: "Al-'Afuww",
    meanings: {
      en: "The Pardoner",
      de: "Der Vergebende",
      tr: "Affeden"
    },
    description: {
      en: "The One who fully pardons sins and effaces them completely.",
      de: "Derjenige, der Sünden vollständig vergibt und sie ganz auslöscht.",
      tr: "Günahları tamamen bağışlayan ve silen."
    }
  },
  {
    number: 84,
    arabic: "الرَّؤُوفُ",
    transliteration: "Ar-Ra'ūf",
    meanings: {
      en: "The Compassionate",
      de: "Der Mitfühlende",
      tr: "Şefkatli"
    },
    description: {
      en: "The One who has the utmost compassion and kindness.",
      de: "Derjenige, der das höchste Mitgefühl und Güte besitzt.",
      tr: "En üst düzeyde şefkat ve iyilik sahibi olan."
    }
  },
  {
    number: 85,
    arabic: "مَالِكُ الْمُلْكِ",
    transliteration: "Mālik al-Mulk",
    meanings: {
      en: "The Owner of All Sovereignty",
      de: "Der Eigentümer aller Souveränität",
      tr: "Mülkün Sahibi"
    },
    description: {
      en: "The One who owns all dominion and sovereignty absolutely.",
      de: "Derjenige, dem alle Herrschaft und Souveränität absolut gehören.",
      tr: "Tüm mülk ve hükümranlığın mutlak sahibi."
    }
  },
  {
    number: 86,
    arabic: "ذُو الْجَلَالِ وَالْإِكْرَامِ",
    transliteration: "Dhū al-Jalāli wa-l-Ikrām",
    meanings: {
      en: "The Lord of Majesty and Bounty",
      de: "Der Herr der Majestät und Großzügigkeit",
      tr: "Celal ve İkram Sahibi"
    },
    description: {
      en: "The One who possesses both incomparable glory and absolute generosity.",
      de: "Derjenige, der sowohl unvergleichliche Herrlichkeit als auch absolute Großzügigkeit besitzt.",
      tr: "Eşsiz yücelik ve mutlak cömertliğe sahip olan."
    }
  },
  {
    number: 87,
    arabic: "الْمُقْسِطُ",
    transliteration: "Al-Muqsiṭ",
    meanings: {
      en: "The Equitable",
      de: "Der Billige",
      tr: "Adaletli Davranan"
    },
    description: {
      en: "The One who deals justly and equitably with all of creation.",
      de: "Derjenige, der gerecht und billig mit der gesamten Schöpfung umgeht.",
      tr: "Tüm yaratılmışlara adil ve dengeli davranan."
    }
  },
  {
    number: 88,
    arabic: "الْجَامِعُ",
    transliteration: "Al-Jāmi'",
    meanings: {
      en: "The Gatherer",
      de: "Der Zusammenführer",
      tr: "Toplayan"
    },
    description: {
      en: "The One who will gather all of humanity on the Day of Judgement.",
      de: "Derjenige, der am Jüngsten Tag die gesamte Menschheit versammeln wird.",
      tr: "Kıyamet gününde tüm insanlığı toplayacak olan."
    }
  },
  {
    number: 89,
    arabic: "الْغَنِيُّ",
    transliteration: "Al-Ghanīy",
    meanings: {
      en: "The Self-Sufficient",
      de: "Der Selbstgenügsame",
      tr: "Hiçbir Şeye Muhtaç Olmayan"
    },
    description: {
      en: "The One who is completely independent and self-sufficient.",
      de: "Derjenige, der völlig unabhängig und selbstgenügsam ist.",
      tr: "Tamamen bağımsız ve hiçbir şeye muhtaç olmayan."
    }
  },
  {
    number: 90,
    arabic: "الْمُغْنِي",
    transliteration: "Al-Mughnī",
    meanings: {
      en: "The Enricher",
      de: "Der Bereichernde",
      tr: "Zenginleştiren"
    },
    description: {
      en: "The One who enriches and suffices whomever He wills.",
      de: "Derjenige, der denjenigen bereichert und ausreicht, den Er will.",
      tr: "Dilediğini zenginleştiren ve doyuran."
    }
  },
  {
    number: 91,
    arabic: "الْمَانِعُ",
    transliteration: "Al-Māni'",
    meanings: {
      en: "The Preventer",
      de: "Der Verhinderer",
      tr: "Men Eden"
    },
    description: {
      en: "The One who withholds and prevents harm from the believers.",
      de: "Derjenige, der von den Gläubigen Schaden zurückhält und verhindert.",
      tr: "Müminlerden zararı önleyip engelleyen."
    }
  },
  {
    number: 92,
    arabic: "الضَّارُّ",
    transliteration: "Aḍ-Ḍārr",
    meanings: {
      en: "The Afflicter",
      de: "Der Schädiger",
      tr: "Zarar Veren"
    },
    description: {
      en: "The One who creates adversity as a test and for wisdom.",
      de: "Derjenige, der Widrigkeiten als Prüfung und aus Weisheit erschafft.",
      tr: "Bir imtihan ve hikmet olarak sıkıntı yaratan."
    }
  },
  {
    number: 93,
    arabic: "النَّافِعُ",
    transliteration: "An-Nāfi'",
    meanings: {
      en: "The Benefiter",
      de: "Der Nützende",
      tr: "Fayda Veren"
    },
    description: {
      en: "The One who grants benefit to whomever He wills.",
      de: "Derjenige, dem er Nutzen gewährt, den er will.",
      tr: "Dilediğine fayda veren."
    }
  },
  {
    number: 94,
    arabic: "النُّورُ",
    transliteration: "An-Nūr",
    meanings: {
      en: "The Light",
      de: "Das Licht",
      tr: "Nur, Işık"
    },
    description: {
      en: "The One who is the divine light, illuminating hearts and the universe.",
      de: "Derjenige, der das göttliche Licht ist und Herzen und das Universum erleuchtet.",
      tr: "Kalpleri ve evreni aydınlatan ilahi nur."
    }
  },
  {
    number: 95,
    arabic: "الْهَادِي",
    transliteration: "Al-Hādī",
    meanings: {
      en: "The Guide",
      de: "Der Führer",
      tr: "Doğru Yola İleten"
    },
    description: {
      en: "The One who guides all of creation to what is beneficial.",
      de: "Derjenige, der die gesamte Schöpfung zu dem führt, was vorteilhaft ist.",
      tr: "Tüm yaratılmışı faydalı olana yönlendiren."
    }
  },
  {
    number: 96,
    arabic: "الْبَدِيعُ",
    transliteration: "Al-Badī'",
    meanings: {
      en: "The Originator of All",
      de: "Der Allurheber",
      tr: "Eşsiz Yaratıcı"
    },
    description: {
      en: "The One who created all things in a completely new and unique way.",
      de: "Derjenige, der alle Dinge auf eine völlig neue und einzigartige Weise geschaffen hat.",
      tr: "Her şeyi tamamen yeni ve eşsiz bir şekilde yaratan."
    }
  },
  {
    number: 97,
    arabic: "الْبَاقِي",
    transliteration: "Al-Bāqī",
    meanings: {
      en: "The Everlasting",
      de: "Der Ewig Bleibende",
      tr: "Ebedi Kalan"
    },
    description: {
      en: "The One who lasts forever while all else perishes.",
      de: "Derjenige, der für immer besteht, während alles andere vergeht.",
      tr: "Her şey yok olurken sonsuza dek varlığını sürdüren."
    }
  },
  {
    number: 98,
    arabic: "الْوَارِثُ",
    transliteration: "Al-Wārith",
    meanings: {
      en: "The Inheritor",
      de: "Der Erbe",
      tr: "Her Şeyin Varisi"
    },
    description: {
      en: "The One who inherits all of creation after everything perishes.",
      de: "Derjenige, der die gesamte Schöpfung erbt, nachdem alles vergehen wird.",
      tr: "Her şey yok olduktan sonra tüm yaratılmışı miras alan."
    }
  },
  {
    number: 99,
    arabic: "الصَّبُورُ",
    transliteration: "Aṣ-Ṣabūr",
    meanings: {
      en: "The Most Patient",
      de: "Der Geduldigste",
      tr: "Sabırlı Olan"
    },
    description: {
      en: "The One who is most patient, not rushing to punish the transgressors.",
      de: "Derjenige, der am geduldigsten ist und es nicht eilig hat, die Übertreter zu bestrafen.",
      tr: "En sabırlı olan, günahkârları cezalandırmak için acele etmeyen."
    }
  }
];

// Language display labels
const LANGUAGES = {
  en: { label: "English", flag: "🇬🇧" },
  de: { label: "Deutsch", flag: "🇩🇪" },
  tr: { label: "Türkçe", flag: "🇹🇷" }
};
