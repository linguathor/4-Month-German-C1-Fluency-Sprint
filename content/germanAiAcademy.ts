// content/germanAiAcademy.ts
// Canonical copy (German, no gendering, short sentences).

export const academy = {
  meta: {
    title: "German AI Academy – Dein Weg zu sicherem C1-Deutsch",
    description:
      "Premium-Programm mit KI-Übungen, Live-Calls und klaren Plänen. In 4 Monaten sicher sprechen. Starte ohne Risiko."
  },

  hero: {
    h1: "4-monatiger C1-Fluency Sprint",
    sub: "Idealer Mix aus KI-Tutoring und menschlicher Expertise und Begleitung",
    ctaPrimary: { label: "Anmeldung vom 13. bis 20. Oktober", href: "" },
    badges: ["Für Deutschlernende ab B2-Niveau", "Ohne Risiko starten", "Kurze, klare Aufgaben"],
    audienceBadge: "Für Deutschlernende ab B2-Niveau",
    urgency: {
      spotsLeft: 22,
      cohortStartDate: "2025-10-15",
      enrolledToday: 5
    }
  },

  // Optional teaser block (for TestLessonTeaser component)
  testLesson: {
    title: "Testlektion: So trainierst du mit KI",
    blurb: "Sieh in 60 Sekunden, wie die Übungen funktionieren. Klare Schritte. Sofortiges Feedback. Starte danach die komplette Testlektion.",
    ctaLabel: "Komplette Testlektion starten"
  },

  outcomes: {
    title: "Deine Transformation nach 4 Monaten",
    summary: "Unser Versprechen an dich: sichtbare, nutzbare Fortschritte.",
    items: [
      { label: "800–1.200 neue aktive Wörter", sub: "gezielt für Arbeit & Alltag" },
      { label: "8–12 Gesprächs­szenarien",     sub: "sicher meistern" },
      { label: "Spontanes Sprechen",           sub: "ohne Denkpausen" },
      { label: "Schnelles Verstehen",          sub: "Kern eines Gesprächs sofort erfassen" }
    ],
    definition: {
      heading: "Was heißt »aktive Wörter«?",
      text: "Ein Wort gilt als »aktiv«, wenn du es selbständig und korrekt in Gesprächen verwendest. Nicht nur passiv erkennen oder verstehen, sondern aktiv produzieren.",
      examples: [
        "Du sagst im Meeting: »Ich bin mit dem Projekt zufrieden« (statt nur zu verstehen, was andere sagen)",
        "Du schreibst eine E-Mail: »Bitte senden Sie mir die Unterlagen« (statt nur einfache Sätze zu bilden)",
        "Du diskutierst: »Das ist eine gute Idee, aber wir sollten auch...« (statt nur zuzuhören)"
      ],
      counting: "Wortformen werden zusammengezählt: »reden« zählt auch für »redete«, »geredet«, »rede« usw.",
      practical: "Die Wörter sind direkt nützlich für deinen Arbeitsalltag: Meetings, Feedback-Gespräche, Small Talk mit Kollegen."
    }
  },

  status: {
    title: "Dein erreichbarer Status nach 4 Monaten",
    bullets: [
      "Absolutes Verständnis, wenn Kolleg:innen mit dir sprechen",
      "Keine Denkpausen mehr beim Sprechen",
      "Alle verstehen sofort, was du meinst",
      "Du fühlst dich nicht mehr wie ein Außenseiter",
      "Du kannst endlich du selbst sein – auch auf Deutsch",
      "Sichere Teilnahme an komplexen Diskussionen und Meetings"
    ]
  },

  learningLoop: {
    title: "Der Lern-Loop",
    summary: "Call → kurze Aufgabe → KI-Anwendung. Jede Woche.",
    steps: [
      { title: "Input im Live-Call", text: "Vokabeln, Strukturen, Beispiele." },
      { title: "Wochenaufgabe", text: "kurz, klar, umsetzbar." },
      { title: "Anwendung mit KI", text: "Tandem-Spaces und Feedback." }
    ]
  },

  calls: {
    title: "So funktioniert unser Programm",
    subtitle: "4 Live-Calls pro Monat",
    callSchedule: "Unsere Calls finden immer dienstags um 19 Uhr deutscher Zeit statt. (Falls du mal nicht dabei sein kannst, keine Sorge - es gibt immer eine Aufnahme des Calls)",
    summary: "FAQ, zwei Diskussionen, ein Hör-Dialog – plus Materialien.",
    items: [
      { name: "FAQ-Call", desc: "Fragen klären. Hürden abbauen." },
  { name: "Wortschatz-Call 1", desc: "Vorbereitetes Thema. Coaching-Feedback." },
  { name: "Wortschatz-Call 2", desc: "Transfer und Vertiefung." },
      { name: "Hör-Dialog", desc: "Duo-Dialog (Flemming und David) mit Aufgaben." }
    ],
    deliverables: ["Aufzeichnung", "Transkript", "Vokabelliste", "KI-Sprechübung"]
  },

  interactivity: {
    title: "So bleibt es interaktiv",
    summary: "Hot-Seat-Coaching, Live-Umfragen, Q&A – jeder kommt dran.",
  bullets: ["Hot-Seat-Coaching", "Live-Umfragen und Quiz", "Lernspiele"]
  },

  materials: {
    title: "Materialien nach jedem Call",
    summary: "PDF-Handout, Karteikarten, Aufgaben – sofort verfügbar.",
    bullets: ["PDF-Handout", "Digitale Karteikarten (Anki/Quizlet)", "Aufgaben mit Lösung"]
  },

  tandemSpaces: {
    title: "Tandem-Spaces: Deine persönliche Sprechpraxis",
    subtitle: "Strukturierte Peer-Sessions mit KI-Feedback für echte Gespräche",
    status: "Beta" as const,
    features: [
      {
        icon: "🎯",
        title: "Strukturierte Praxis",
        description: "Geführte Rollenspiele und Szenarien",
        details: ["Job-spezifische Situationen (Medizin, Business, etc.)", "Zeitgesteuerte Übungen für maximale Effizienz", "Vorbereitete Prompts und Gesprächsleitfäden"]
      },
      {
        icon: "👥",
        title: "Kleine Gruppen (2-5 Personen)",
        description: "Mehr Sprechzeit pro Person",
        details: ["Weniger Stress, mehr Vertrauen", "Feste Tandem-Partner für Kontinuität", "Persönliche Lernbeziehungen aufbauen"]
      },
      {
        icon: "📅",
        title: "Regelmäßige Termine",
        description: "Wöchentliche feste Slots",
        details: ["Verlässliche Lernroutine entwickeln", "Accountability durch Partner", "Automatische Zoom-Integration"]
      },
      {
        icon: "🤖",
        title: "KI-gestütztes Feedback",
        description: "Automatische Zoom-Transkription",
        details: ["Detailliertes Sprach-Feedback nach jeder Session", "Fortschrittsmessung über Zeit", "Personalisierte Verbesserungsvorschläge"]
      }
    ],
    scenarios: [
      {
        category: "Persönliches & Biografie",
        icon: "\u{1F464}",
        color: "from-purple-50 via-purple-100 to-pink-100",
        situations: ["Berufliche Laufbahn erzählen", "Wohnsituation beschreiben", "Über Freundschaft und Familie", "Leidenschaften vorstellen"],
        level: "both" as const,
        description: "Deine Geschichte, deine Erfahrungen – authentisch und persönlich"
      },
      {
        category: "Erlebnisse & Kultur", 
        icon: "\u{1F30D}",
        color: "from-sky-50 via-blue-100 to-cyan-100",
        situations: ["Reiseerlebnisse schildern", "Kulturelle Traditionen erklären", "Anekdoten erzählen", "Lieblingsorte beschreiben"],
        level: "both" as const,
        description: "Geschichten und Erfahrungen lebendig vermitteln"
      },
      {
        category: "Beruf & Gesellschaft",
        icon: "\u{1F4BC}", 
        color: "from-emerald-50 via-green-100 to-teal-100",
        situations: ["Meinungen zu aktuellen Themen", "Technologie im Alltag", "Berufliche Herausforderungen", "Gesundheit & Lebensstil"],
        level: "C1" as const,
        description: "Komplexe Themen durchdenken und strukturiert argumentieren"
      },
      {
        category: "Zukunft & Reflexion",
        icon: "🎯",
        color: "from-yellow-50 via-amber-100 to-orange-100", 
        situations: ["Zukunftspläne entwickeln", "Dankbarkeit ausdrücken", "Persönliche Ziele formulieren", "Lebenserfahrungen reflektieren"],
        level: "C1" as const,
        description: "Abstrakt denken und tiefere Einsichten ausdrücken"
      }
    ],
    benefits: {
      B2: [
        "Übergang von passivem zu aktivem Sprechen",
        "Vertrauen in spontane Gespräche aufbauen",
        "Häufige Fehler systematisch eliminieren",
        "Grundwortschatz in echten Situationen anwenden"
      ],
      C1: [
        "Nuancen und komplexe Strukturen üben",
        "Berufsspezifische Kommunikation perfektionieren",
        "Native-ähnliche Flüssigkeit entwickeln",
        "Kulturelle Feinheiten meistern"
      ]
    }
  },

  germanAiAcademyAccess: {
    title: "GERMAN AI ACADEMY: Lerne, wann und wie du willst.",
    subtitle: "Dein digitaler Coach – flexibel, intelligent, immer verfügbar",
    description: "Voller Zugang zum innovativsten C1-Deutschkurs, den es derzeit gibt.",
    cycleCenter: {
      goal1: "Fließend sprechen",
      goal2: "C1 Niveau"
    },
    cycleSteps: [
      { 
        label: "Input", 
        subtitle: "Gezielte Lektionen",
        description: "Du erhältst themenbasierte <strong>Materialien und Aufgaben</strong> (Hörtexte, Vokabeln, Grammatik) als <strong>gezielte Vorbereitung</strong>.", 
        icon: "📚" 
      },
      { 
        label: "Output", 
        subtitle: "Aktive Anwendung",
        description: "Wende das Gelernte sofort an: <strong>Formuliere Antworten</strong> im Chatbot-Dialog oder erstelle <strong>eigene Texte/Sprachaufnahmen</strong>.", 
        icon: "💬" 
      },
      { 
        label: "Feedback", 
        subtitle: "Sofortige Korrektur",
        description: "Der KI-Tutor liefert <strong>unverzügliches und detailliertes Feedback</strong> zu Grammatik, Wortwahl und Stil – <strong>24/7</strong>.", 
        icon: "✨" 
      },
      { 
        label: "Verbesserung", 
        subtitle: "Kontinuierlicher Fortschritt",
        description: "Basierend auf den Korrekturen <strong>trainierst du gezielt deine Schwachstellen</strong> für <strong>sichtbare und messbare Fortschritte</strong> auf <strong>C1-Niveau</strong>.", 
        icon: "📈" 
      }
    ],
    features: [
      {
        icon: "✍️",
        title: "Effektive Übungen",
        description: "Wähle gezielte Übungen für Sprechen, Schreiben und Grammatik – ganz nach deinem individuellen Ziel.",
        tag: "Strukturiertes & gezieltes Lernen"
      },
      {
        icon: "🎯",
        title: "Interaktive Challenges",
        description: "Tägliche Aufgaben und Wochenpläne sorgen für Struktur und kontinuierliche Fortschritte.",
        tag: "Motivation & Routine"
      },
      {
        icon: "🤖",
        title: "KI-Chatbot & Tutoring",
        description: "Erhalte in Echtzeit Feedback und Korrekturen – so, als hättest du deinen persönlichen Lehrer immer dabei.",
        tag: "Sofortiges, individuelles Feedback"
      },
      {
        icon: "👥",
        title: "Live-Calls & Community",
        description: "Tausche dich in regelmäßigen Live-Sessions und in unserer aktiven Community mit anderen Lernenden aus.",
        tag: "Direkte Praxis & Interaktion"
      }
    ],
    summary: "Die German AI Academy ist dein flexibler Lernraum. Hier kannst du jederzeit und an jedem Ort selbständig lernen, Grammatik festigen und direktes Feedback vom KI-Tutor erhalten. Sie ergänzt die Live-Calls perfekt und stellt sicher, dass du auch außerhalb der festen Termine kontinuierlich Fortschritte machst."
  },

  accountability: {
    title: "Wöchentliche Mikro-Aufgaben",
    blurb: "Kurze Motivation und eine kleine Aufgabe pro Woche per E-Mail oder Telegram.",
    cta: { label: "Anmeldung vom 13. bis 20. Oktober", href: "" }
  },

  aiPlan: {
    title: "Dein KI-Lernplan (Premium)",
    summary: "Aus Test und Zielen. Automatische Anpassungen. Ohne 1-h Setup.",
    bullets: ["Plan aus Test und Zielen", "Automatische Anpassungen", "Ohne 1-h Coaching-Setup"]
  },

  ux: {
    title: "Auf der Plattform",
    summary: "Zwischen den Calls nutzt du die Academy: kurze KI-Drills mit Feedback. Start-Pfad, Filter, KI-Chat, Offline-Modus.",
    checklist: [
      "Start-hier Pfad",
      "Filter nach Fertigkeiten und Themen",
      "KI-Chat integriert",
      "Offline-Download (optional)",
      "Zeitökonomische Übungen"
    ]
  },

  community: {
    title: "Community & Support",
    summary: "Aktive Lerngemeinschaft mit täglichem Austausch, Telegram-Support und strukturierten Übungsgruppen.",
    description: "Werde Teil einer motivierten Community aus B2/C1-Lernern. Täglich aktive Diskussionen, schnelle Hilfe bei Fragen und regelmäßige Tandem-Sessions.",
    features: [
      {
        title: "Telegram-Gruppe",
        description: "Direkter Austausch mit Coaches und Teilnehmern. Schnelle Antworten auf Fragen und täglich neue Lerntipps.",
        icon: "telegram",
        access: "Sofortiger Zugang nach Anmeldung"
      },
      {
        title: "Level-Gruppen",
        description: "Separate B2- und C1-Gruppen für zielgerichtete Diskussionen und passende Herausforderungen.",
        icon: "users",
        access: "Einstufung nach Aufnahmetest"
      },
      {
        title: "Tandem-Vermittlung",
        description: "Wir vermitteln Übungspartner mit ähnlichem Level und gleichen Zielen für regelmäßige Gespräche.",
        icon: "partnership",
        access: "Automatische Vermittlung"
      },
      {
        title: "Aufgaben-Challenges",
        description: "Wöchentliche Community-Challenges mit Belohnungen für aktive Teilnahme und Fortschritte.",
        icon: "trophy",
        access: "Freiwillige Teilnahme"
      }
    ],
    telegramInfo: {
      title: "Telegram-Community beitreten",
      description: "Über 500 aktive B2/C1-Lerner. Täglich neue Inhalte, schnelle Hilfe und motivierende Erfolgsgeschichten.",
      benefits: [
        "Sofortiger Support bei Fragen",
        "Täglich neue Lerntipps und Übungen",
        "Motivierende Erfolgsgeschichten",
        "Vermittlung von Tandem-Partnern",
        "Exklusive Community-Events"
      ],
      joinProcess: "Nach der Anmeldung erhältst du automatisch den Telegram-Link und wirst in die passende Level-Gruppe eingeladen."
    },
    stats: {
      members: "500+",
      dailyMessages: "150+",
      successStories: "50+",
      activeHours: "16h täglich"
    }
  },

  fit: {
    title: "Passt das zu dir?",
    summary: "Ab B2 mit Eigeninitiative. Nicht für A1/A2 oder rein passives Lernen.",
    for: ["B2+ Niveau", "Eigeninitiative", "Zeit: 5–8 Stunden pro Woche"],
    notFor: ["A1/A2", "Nur passives Lernen", "Keine Zeit für kurze Aufgaben"]
  },

  cohort: {
    title: "Nächste Runde",
    summary: "Start in wenigen Wochen. Begrenzte Plätze.",
    start: "Oktober 2025",
    seats: "Begrenzte Plätze. Warteliste empfohlen.",
    cta: { label: "Anmeldung vom 13. bis 20. Oktober", href: "" }
  },

  instructors: {
    title: "Wer wir sind?",
    summary: "Zwei leidenschaftliche Sprach-Coaches und Sprachenlerner.",
    subtitle: "David & Flemming",
    description: "Sprach-Coaches, Deutschlehrer, Sprachenliebhaber",
    people: [
      {
        name: "David",
        role: "Coach. Fokus: Wortschatz und Struktur.",
        description: "David kommt aus Kalifornien in den USA und hat erst vor 20 Jahren begonnen, Deutsch zu lernen, aber man merkt nicht, dass er kein Muttersprachler ist. Er hat innerhalb kürzester Zeit gelernt, die Deutsche Sprache auf muttersprachlichem Niveau zu sprechen.",
        img: "/images/david-coach.jpg"
      },
      {
        name: "Flemming",
        role: "Coach. Fokus: Sprechen und Aussprache.",
        description: "Flemming ist deutscher Muttersprachler und spricht ebenfalls mehrere Sprachen auf hohem Niveau. Zudem hat er jahrelang als Journalist gearbeitet und kennt sich bestens mit den Feinheiten der deutschen Sprache aus.",
        img: "/images/flemming-coach.jpg"
      }
    ]
  },

  // C1-Masterclass Explainer Section
  eliteMastermindExplainer: {
    badge: "💎 C1-Masterclass",
    headline: {
      line1: "C1-Masterclass:",
      line2: "Maximale Transformation, minimale Zeit."
    },
    description: "Die C1-Masterclass bietet dir die <strong>intensivste Begleitung auf dem Markt</strong>. Dieses exklusive Programm richtet sich an alle, die das C1-Niveau in kürzester Zeit und mit maximaler Sicherheit erreichen müssen. Du erhältst intensive 1:1 Strategie-Sessions und wöchentliche Konversationstraining in sehr kleinen Mini-Gruppen (max. 5 Personen). Der <strong>angestrebte Erfolg (fließendes C1-Niveau) ist identisch mit dem 4-monatigen C1 Fluency Sprint</strong>, doch die zusätzliche, persönliche Betreuung sorgt für einen <strong>maßgeschneiderten Weg</strong> und <strong>maximale Effizienz</strong>.",
    features: [
      {
        icon: "🎯",
        title: "Intensiver Fokus",
        description: "1:1 Strategie-Sessions und persönlicher Chat für maximale Individualität"
      },
      {
        icon: "👥",
        title: "Exklusives Training",
        description: "Konversation in Mini-Gruppen mit maximal 5 Personen"
      },
      {
        icon: "⚡",
        title: "Zeitersparnis",
        description: "Der schnellste und sicherste Weg zum C1-Niveau"
      }
    ],
    outcomeComparison: {
      icon: "🎓",
      title: "Gleiches Ziel, maximale Effizienz:",
      description: "Sowohl der <strong>4-monatige C1 Fluency Sprint</strong> als auch die <strong>C1-Masterclass</strong> führen dich zum <strong>fließenden C1-Niveau</strong>. Der Unterschied? In der C1-Masterclass erhältst du <strong>intensive 1:1-Betreuung und kleinere Gruppen</strong> für maximale Individualität und Effizienz."
    }
  },

  // Existing pricing (ignore number debates; replace links as needed)
  pricing: {
    title: "Preise",
    note: "inkl. MwSt. | klare Kündigungsbedingungen | transparente Laufzeiten",
    plans: [
      {
        name: "4-monatiger C1 Fluency Sprint",
        priceNote: "990 € / 4 Monate",
        period: "einmalig",
        features: [
          "16 Live-Calls mit Coaching",
          "KI-Übungen mit Feedback",
          "Tandem-Spaces",
          "Community-Zugang",
          "Fortschritts-Messung",
          "Materialien nach jedem Call",
          "Gratis Verlängerung bei Zielverfehlung"
        ],
        cta: { label: "Anmeldung vom 13. bis 20. Oktober", href: "" },
        popular: true,
        legal: "inkl. MwSt. • Einmalzahlung"
      },
      {
        name: "C1-Masterclass",
        priceNote: "4.990 € / 4 Monate",
        period: "Bewerbung",
        features: [
          "Alle Inhalte des 4-monatigen C1 Fluency Sprint",
          "Mini-Gruppen (max. 5), 3×/Woche Konversation",
          "Zwei 1:1-Strategie-Sessions",
          "Persönlicher Chat",
          "Sehr limitiert"
        ],
        cta: { label: "Anmeldung vom 13. bis 20. Oktober", href: "" },
        popular: false,
        legal: "inkl. MwSt. • Bewerbung erforderlich"
      }
    ]
  },

  launchBonuses: {
    title: "Exklusive Launch-Boni",
    summary: "Starte bis zum 20. Oktober und erhalte diese wertvollen Zusätze kostenlos dazu",
    deadline: "Nur bis 20. Oktober 2025",
    bonuses: [
      {
        title: "Wöchentliche Übungspläne",
        description: "Strukturierte 7-Tage-Pläne mit klaren Tageszielen. Jede Woche erhältst du einen personalisierten Plan mit konkreten Aufgaben für kontinuierlichen Fortschritt.",
        value: "Wert: 150€",
        icon: "calendar"
      },
      {
        title: "Bonus-Materialien Paket",
        description: "Zusätzliche Übungen, Checklisten und Vorlagen für häufige Gesprächssituationen. Direkt anwendbar in Beruf und Alltag.",
        value: "Wert: 99€",
        icon: "book"
      }
    ]
  },

  limitedTimeBonus: {
    badge: "🎁 Exklusiver Bonus",
    headline: "Sichere dir jetzt deinen Bonus!",
    deadline: "20. Oktober",
    deadlineDate: "2025-10-20T23:59:59",
    title: "Wöchentliche Übungspläne für mehr Effizienz & Struktur",
    description: "Wir erstellen dir persönliche, <strong class=\"font-semibold text-orange-700\">wöchentliche Lernpfade</strong>, die deine Fortschritte maximieren und genau auf deine Ziele abgestimmt sind. So weißt du immer, welche Übungen und Calls <strong class=\"font-semibold text-orange-700\">Priorität haben</strong>.",
    ctaText: "Anmeldung vom 13. bis 20. Oktober",
    ctaHref: "",
    features: [
      "Personalisierte Lernpfade basierend auf deinen Fortschritten",
      "Klare Priorisierung von Übungen und Calls",
      "Optimale Zeiteinteilung für maximalen Lerneffekt"
    ]
  },

  guarantee: {
    badge: "100% GARANTIE",
    headline: {
      line1: "Kein Risiko für dich:",
      line2: "Deine Erfolgsgarantie"
    },
    promise: "Wir stehen zu unserem Programm. Solltest du nach Abschluss des 4-monatigen Fluency Sprints deine Ziele nicht erreicht haben, verlängern wir deinen Zugang kostenlos um weitere 4 Monate – ohne Wenn und Aber.",
    conditionsTitle: "So funktioniert die Garantie:",
    conditions: [
      {
        icon: "✓",
        title: "Mindestens 14 von 16 Live-Calls",
        description: "Du nimmst aktiv an mindestens 14 der 16 Live-Calls teil (das sind 87,5% Anwesenheit)",
        metric: "87,5% Anwesenheit"
      },
      {
        icon: "✓",
        title: "Regelmäßige Tandem-Praxis",
        description: "Du besuchst mindestens 3 Tandem Spaces pro Monat (ca. 1× pro Woche)",
        metric: "3×/Monat"
      },
      {
        icon: "✓",
        title: "Kontinuierliche Plattform-Nutzung",
        description: "Du arbeitest regelmäßig mit den Materialien in der German AI Academy und bearbeitest die Übungen",
        metric: "Regelmäßig aktiv"
      }
    ],
    ctaText: "Anmeldung vom 13. bis 20. Oktober",
    ctaHref: ""
  },

  testimonials: {
    title: "Erfolge unserer Lerner",
    items: [
      { name: "Pablo", text: "Ich mache schnell Fortschritte. Die Übungen sind klar. Die Live-Calls helfen mir beim Sprechen.", flagAlt: "ES" },
      { name: "Sara", text: "Ich war unsicher beim Sprechen. Nach 4 Monaten fühle ich mich sicher in Meetings.", flagAlt: "IT" },
      { name: "Ignacio", text: "Die Struktur ist stark. Der Duo-Dialog motiviert. KI-Feedback ist direkt nutzbar.", flagAlt: "AR" }
    ]
  },

  faq: {
    title: "Häufige Fragen (FAQ)",
    items: [
      { 
        q: "Für wen ist das Programm geeignet?", 
        a: "Für motivierte Deutschlerner auf B2–C1-Niveau, die in kurzer Zeit spürbare Fortschritte machen wollen – egal ob für Beruf, Studium oder Alltag." 
      },
      { 
        q: "Wie funktioniert die Garantie?", 
        a: "Wenn du aktiv mitmachst (14 von 16 Calls und mindestens 1 wöchentliches Tandem) und dich trotzdem nicht deutlich verbesserst, verlängern wir das Programm kostenlos um 4 Monate. Also, absolut kein Risiko für dich." 
      },
      { 
        q: "Wie viel Zeit brauche ich wirklich?", 
        a: "Plane etwa 3–4 Stunden pro Woche ein. Das ist das Mindestmaß, was jeder schafft und was du brauchst, um Fortschritte zu machen. Wenn du noch 1-2 Stunden mehr hast, wirst du noch schnellere Fortschritte sehen." 
      },
      { 
        q: "Wie groß sind die Gruppen?", 
        a: "In den Live-Calls sind ca. 30 Teilnehmer dabei – hier geht es um Wortschatz und Hörverstehen. Für die Sprechpraxis übst du dagegen in kleinen Tandem-Gruppen mit 2–5 Teilnehmern. So bekommst du beides: Dynamik und intensives Feedback." 
      },
      { 
        q: "Was, wenn ich einen Call verpasse?", 
        a: "Kein Problem: Du bekommst Aufzeichnungen, Transkripte und Aufgaben, sodass du flexibel nacharbeiten kannst. Außerdem kannst du jederzeit mit KI und Tandems üben – dein Fortschritt bleibt erhalten." 
      }
    ]
  },

  faqExtra: {
    items: [
      { 
        q: "Was ist der Unterschied zwischen dem C1 Fluency Sprint und der C1-Masterclass?", 
        a: "Die Ergebnisse nach 4 Monaten sind ungefähr die gleichen. Aber wenn du die maximale persönliche Betreuung durch erfahrene Lehrer und Coaches wünschst, dann bekommst du das in der Masterclass." 
      },
      { 
        q: "Was, wenn ich schnell die Motivation verliere?", 
        a: "Genau deshalb haben wir ein System mit wöchentlicher Fortschrittsmessung entwickelt. Du siehst schwarz auf weiß, wie du besser wirst – das motiviert mehr als jedes abstrakte Ziel. Außerdem hält dich die Community und dein Tandem-Partner am Ball." 
      },
      { 
        q: "Kann ich KI-Feedback überhaupt trauen?", 
        a: "Ja – und das Beste: Es bleibt nicht bei KI. Die KI liefert dir sofort nach jedem Gespräch ein Transkript und Feedback. Dazu kommen unsere Coaches David und Flemming in den Calls. Du profitierst also von präziser Technik + menschlicher Erfahrung." 
      },
      { 
        q: "Gibt es Ratenzahlungen?", 
        a: "Ja, über unseren Zahlungsanbieter kannst du bequem in Raten zahlen." 
      },
      { 
        q: "Brauche ich Anki unbedingt?", 
        a: "Nein. Du kannst wählen: digitale Lernkarten mit Anki – oder unser handschriftliches System. Beides ist effektiv, du entscheidest, was zu dir passt." 
      },
      { q: "Brauche ich Anki?", a: "Nicht zwingend. Wir bieten Alternativen und optionalen Download." },
      { q: "Welche Themen und Skills?", a: "Hören, Sprechen, Schreiben, Grammatik. Mit Themenfilter." },
      { q: "Wie starte ich?", a: "Teste die Lektion. Wähle deinen Plan. Starte heute." }
    ]
  },

  diagnostics: {
    title: "Wie messen wir deinen Fortschritt?",
    summary: "Drei klare Kennzahlen für messbare Verbesserungen – die Basis für unsere Garantie."
  },

  progress: {
    title: "Dein Lernfortschritt",
    summary: "Verfolge deine Entwicklung mit klaren Kennzahlen und Zielen.",
    metrics: [
      { key: "words", label: "Aktive Wörter", value: 1200, unit: "", help: "Wörter, die du aktiv verwendest" },
      { key: "scenarios", label: "Szenarien gemeistert", value: 8, unit: "/12", help: "Gesprächssituationen mit Score ≥7" },
      { key: "fluency", label: "Sprechzeit/Woche", value: 45, unit: "Min", help: "Aktive Sprechzeit ohne Pausen" }
    ],
    percentage: 75,
    guarantee: "Bei weniger als 75% Fortschritt verlängern wir kostenlos"
  }
} as const;

export type Plan = typeof academy.pricing.plans[number];
