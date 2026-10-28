export type Lang = 'en' | 'ar'

/**
 * Clinic facts — sourced from the brief and from public listings
 * (directory listings, map listings and the clinic's own public pages).
 * Update these in one place.
 */
export const clinic = {
  nameEn: "Dr. Sameer's Internal Medicine Clinic",
  nameAr: 'عيادة د. سمير لأمراض الباطنية',
  nameShortEn: 'Dr. Sameer’s',
  nameShortAr: 'عيادة د. سمير',
  nameSubEn: 'Internal Medicine Clinic',
  nameSubAr: 'لأمراض الباطنية',
  roleEn: 'Specialist Physician',
  roleAr: 'أخصائي باطنية',
  city: 'Doha, Qatar',
  addressEn:
    'Opposite Musheireb Metro Station, beside Four Points by Sheraton, Al Ghadeer Street No. 850, Doha, Qatar',
  addressAr:
    'مقابل محطة مشريب للمترو، بجانب فور بوينتس باي شيراتون، شارع الغدير رقم 850، الدوحة، قطر',
  phoneDisplay: '+974 6660 7890',
  phoneHref: 'tel:+97466607890',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Dr+Sameer%27s+Internal+Medicine+Clinic+Al+Ghadeer+Street+850+Doha+Qatar',
  mapEmbed:
    'https://maps.google.com/maps?q=Dr+Sameer%27s+Internal+Medicine+Clinic+Al+Ghadeer+Street+850+Doha+Qatar&z=16&output=embed',
  /** Review figures as supplied with the brief, shown only as listing information. */
  googleRating: '4.5',
  googleReviewCount: '212',
  emergencyNumber: '999',
} as const

/**
 * Only services published for this clinic in public sources are listed:
 * internal medicine consultations, laboratory blood investigations, ECG
 * and pharmacy services (see public directory listings for the clinic).
 */
export type ServiceId = 'consultation' | 'laboratory' | 'ecg' | 'pharmacy'

export interface ServiceCopy {
  id: ServiceId
  title: string
  description: string
  detail: string
}

export interface InfoItem {
  title: string
  body: string
}

export interface HourRow {
  day: string
  hours: string
}

export interface SiteCopy {
  meta: { title: string; description: string }
  nav: {
    home: string
    specialty: string
    services: string
    about: string
    patients: string
    contact: string
  }
  actions: {
    call: string
    directions: string
    enquiry: string
    learnMore: string
    menu: string
    close: string
    language: string
  }
  header: {
    tagline: string
    menuTitle: string
  }
  hero: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    body: string
    explore: string
    trust: [string, string, string]
    imageAlt: string
    imageCaption: string
    cardEyebrow: string
  }
  trust: {
    eyebrow: string
    outOf: string
    reviewsLabel: string
    note: string
    cta: string
  }
  specialty: {
    eyebrow: string
    title: string
    intro: string
    paragraphs: [string, string]
    panelTitle: string
    points: InfoItem[]
    note: string
  }
  services: {
    eyebrow: string
    title: string
    intro: string
    note: string
    cardCta: string
    dialogKicker: string
    dialogGoodToKnow: string
    dialogPoints: [string, string, string]
    dialogDisclaimer: string
    dialogCta: string
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: [string, string]
    points: InfoItem[]
    cta: string
    imageAlt: string
    detailAlt: string
    imageNote: string
    badge: string
  }
  patients: {
    eyebrow: string
    title: string
    intro: string
    items: InfoItem[]
    note: string
  }
  appointment: {
    eyebrow: string
    title: string
    body: string
    note: string
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    locationLabel: string
    locationValue: string
    phoneLabel: string
    enquireLabel: string
    enquireValue: string
    panelNote: string
    hoursTitle: string
    hoursRows: HourRow[]
    hoursNote: string
    mapTitle: string
    mapNote: string
    mapCta: string
  }
  footer: {
    blurb: string
    exploreTitle: string
    servicesTitle: string
    contactTitle: string
    languageTitle: string
    disclaimer: string
    medicalNote: string
    copyright: string
    credit: string
  }
  serviceDetails: Record<ServiceId, string>
  servicesList: ServiceCopy[]
}

const en: SiteCopy = {
  meta: {
    title: "Dr. Sameer's Internal Medicine Clinic · Doha, Qatar",
    description:
      'Specialist internal medicine consultations in Doha, Qatar, opposite Musheireb Metro Station — with laboratory blood investigations, ECG and pharmacy services. Call +974 6660 7890.',
  },
  nav: {
    home: 'Home',
    specialty: 'Internal Medicine',
    services: 'Services',
    about: 'The Clinic',
    patients: 'Patients',
    contact: 'Contact',
  },
  actions: {
    call: 'Call Now',
    directions: 'Get Directions',
    enquiry: 'Appointment Enquiry',
    learnMore: 'Learn More',
    menu: 'Open menu',
    close: 'Close',
    language: 'Language',
  },
  header: {
    tagline: 'Doha · Qatar',
    menuTitle: 'Menu',
  },
  hero: {
    eyebrow: 'Specialist Internal Medicine · Doha',
    titleLead: 'Specialist care that',
    titleAccent: 'starts with listening.',
    body: 'Dr. Sameer’s Internal Medicine Clinic offers specialist physician consultations in the heart of Doha — opposite Musheireb Metro Station — with laboratory blood investigations, ECG and pharmacy services listed by the clinic.',
    explore: 'Explore Services',
    trust: [
      'Specialist physician consultations',
      'Laboratory blood investigations & ECG',
      'Pharmacy services listed by the clinic',
    ],
    imageAlt:
      'A healthcare professional in a bright, contemporary clinical environment',
    imageCaption: 'Illustrative imagery — not a photograph of this clinic.',
    cardEyebrow: 'Appointments & enquiries',
  },
  trust: {
    eyebrow: 'Rated on Google',
    outOf: 'out of 5',
    reviewsLabel: 'reviews',
    note: 'Rating and review count shown as supplied from the clinic’s Google listing.',
    cta: 'View on Google Maps',
  },
  specialty: {
    eyebrow: 'Internal Medicine',
    title: 'Internal medicine, explained plainly.',
    intro:
      'Internal medicine is the specialty of adult medicine — diagnosing, treating and following up conditions that can affect several parts of the body at once.',
    paragraphs: [
      'An internal medicine physician looks at the whole picture rather than a single symptom. Blood pressure, diabetes, the thyroid, the heart, the lungs, the kidneys, the blood and the joints all sit within this specialty — which is why one consultation can connect dots that feel unrelated.',
      'A consultation is a place to ask questions, review results you already have, and understand what comes next. Where imaging, a specialist referral or a procedure is needed, the clinic can point you to the appropriate step.',
    ],
    panelTitle: 'What this specialty covers',
    points: [
      {
        title: 'Diagnosis & follow-up',
        body: 'Assessing new symptoms and reviewing ongoing conditions over time.',
      },
      {
        title: 'Adult health, whole picture',
        body: 'Heart, lungs, kidneys, hormones, blood and joints considered together.',
      },
      {
        title: 'Tests close to the consultation',
        body: 'Blood investigations and ECG are listed by the clinic, so basic checks can be arranged around your visit.',
      },
    ],
    note: 'General information about the specialty — not medical advice, and not a complete list of what the clinic treats. Please call to ask about your own concern.',
  },
  services: {
    eyebrow: 'Services at the Clinic',
    title: 'Only what is publicly listed — nothing more.',
    intro:
      'The four service categories published for this clinic in public sources: internal medicine consultations, laboratory blood investigations, ECG and pharmacy services.',
    note: 'Based on publicly listed information for this clinic. Availability can change — please call to confirm before visiting.',
    cardCta: 'Learn More',
    dialogKicker: 'Clinic Services',
    dialogGoodToKnow: 'Good to know',
    dialogPoints: [
      'Call the clinic to confirm availability and timings for this service.',
      'A consultation may come before any test or referral.',
      'You are welcome to ask questions before you visit.',
    ],
    dialogDisclaimer:
      'This is general information, not medical advice. Please speak with a qualified clinician about your own health.',
    dialogCta: 'Call to enquire',
  },
  about: {
    eyebrow: 'The Clinic',
    title: 'A neighbourhood clinic, a specialist physician.',
    paragraphs: [
      'Dr. Sameer’s Internal Medicine Clinic sits opposite Musheireb Metro Station, beside Four Points by Sheraton on Al Ghadeer Street — a central, easy-to-find address for patients coming from across Doha.',
      'Public listings record the clinic as established in 1999, offering consultations alongside laboratory blood investigations, ECG and pharmacy services. Appointment enquiries are handled by phone, with a real person on the other end.',
    ],
    points: [
      {
        title: 'Specialist physician',
        body: 'Consultations with a specialist physician in internal medicine.',
      },
      {
        title: 'Tests and pharmacy on the list',
        body: 'Laboratory investigations, ECG and pharmacy services published for the clinic.',
      },
      {
        title: 'Central and connected',
        body: 'Opposite Musheireb Metro Station, with parking noted in public listings.',
      },
    ],
    cta: 'Patient information',
    imageAlt: 'A calm, modern clinical interior with soft natural light',
    detailAlt: 'A consultation in a bright treatment room',
    imageNote:
      'Illustrative imagery of clinical environments — not photographs of this clinic.',
    badge: 'Al Ghadeer Street, Doha',
  },
  patients: {
    eyebrow: 'Patient Information',
    title: 'A few things worth knowing.',
    intro:
      'Straight answers to the questions patients ask most, so your call and your visit go smoothly.',
    items: [
      {
        title: 'Appointments are arranged by phone',
        body: 'This website does not take bookings. Call the clinic and the team will advise on available times.',
      },
      {
        title: 'What to have ready',
        body: 'Your concern in a sentence, any medicines you take, and recent results or reports if you have them.',
      },
      {
        title: 'Referrals for scans',
        body: 'Public listings note that referral letters for X-rays, ultrasound and scans at outside providers can be obtained from the clinic — please call to confirm current arrangements.',
      },
      {
        title: 'Insurance and payments',
        body: 'For insurance providers, approvals or fees, contact the clinic directly — this site publishes no pricing or coverage information.',
      },
    ],
    note: 'Opening hours and services are shown from public listings and can change — please call to confirm before travelling. In an emergency in Qatar, call 999.',
  },
  appointment: {
    eyebrow: 'Appointment Enquiry',
    title: 'Your next step is a phone call.',
    body: 'Have a question about a consultation, a test or availability? Call the clinic and the team will talk you through it.',
    note: 'No online booking — a person answers the phone.',
  },
  contact: {
    eyebrow: 'Contact & Location',
    title: 'Find us in Doha.',
    intro: 'Directions, hours and phone — everything you need to plan a visit.',
    locationLabel: 'Location',
    locationValue:
      'Opposite Musheireb Metro Station, beside Four Points by Sheraton, Al Ghadeer Street No. 850, Doha, Qatar',
    phoneLabel: 'Phone',
    enquireLabel: 'Appointments',
    enquireValue: 'By phone — call the clinic',
    panelNote:
      'Appointment enquiries are handled directly by the clinic. This website does not take online bookings.',
    hoursTitle: 'Opening Hours',
    hoursRows: [
      {
        day: 'Saturday – Thursday',
        hours: '8:30 AM – 1:00 PM · 4:30 – 9:00 PM',
      },
      { day: 'Friday', hours: '4:30 – 8:30 PM' },
    ],
    hoursNote:
      'Hours as published in public listings; listed times can differ between sources and may change — please call to confirm.',
    mapTitle: 'Map showing Dr. Sameer’s Internal Medicine Clinic in Doha',
    mapNote: 'Map preview by Google Maps',
    mapCta: 'Open in Google Maps',
  },
  footer: {
    blurb:
      'A bilingual website concept for Dr. Sameer’s Internal Medicine Clinic — a specialist clinic in Doha, Qatar.',
    exploreTitle: 'Explore',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    languageTitle: 'Language',
    disclaimer:
      'Unofficial website concept created by TRIBAL³ for presentation purposes — not the clinic’s official website.',
    medicalNote:
      'General information only, not medical advice. In an emergency in Qatar, call 999.',
    copyright: '© 2026 Dr. Sameer’s Internal Medicine Clinic · Doha, Qatar',
    credit: 'Concept & design by TRIBAL³',
  },
  serviceDetails: {
    consultation:
      'Consultations with a specialist physician in internal medicine — for new concerns, ongoing conditions, a review of existing results and follow-up. Call the clinic to ask about the next available appointment.',
    laboratory:
      'Blood investigations are listed among the clinic’s services and can be arranged around your consultation. Contact the clinic for current availability and any preparation instructions.',
    ecg:
      'An ECG records the heart’s electrical activity using small adhesive sensors. It is quick and non-invasive, and may be arranged as part of an assessment. Please call to confirm it is available on the day you plan to visit.',
    pharmacy:
      'The clinic lists pharmacy services alongside its consultations, so prescriptions can be handled close to your appointment. Call the clinic to confirm current availability.',
  },
  servicesList: [
    {
      id: 'consultation',
      title: 'Internal Medicine Consultations',
      description:
        'Specialist physician consultations for adult health concerns, ongoing conditions and follow-up.',
      detail: '',
    },
    {
      id: 'laboratory',
      title: 'Laboratory Blood Investigations',
      description:
        'Blood tests and investigations listed by the clinic to support assessment and monitoring.',
      detail: '',
    },
    {
      id: 'ecg',
      title: 'ECG (Electrocardiogram)',
      description:
        'A quick, non-invasive recording of the heart’s electrical activity.',
      detail: '',
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy Services',
      description:
        'Pharmacy services listed by the clinic, around the time of your visit.',
      detail: '',
    },
  ],
}

const ar: SiteCopy = {
  meta: {
    title: 'عيادة د. سمير لأمراض الباطنية · الدوحة، قطر',
    description:
      'استشارات تخصصية في أمراض الباطنية في الدوحة، قطر، مقابل محطة مشريب للمترو — مع تحاليل الدم وتخطيط القلب وخدمات الصيدلية. هاتف العيادة: 974 6660 7890.',
  },
  nav: {
    home: 'الرئيسية',
    specialty: 'أمراض الباطنية',
    services: 'الخدمات',
    about: 'العيادة',
    patients: 'للمريض',
    contact: 'تواصل معنا',
  },
  actions: {
    call: 'اتصل الآن',
    directions: 'الاتجاهات',
    enquiry: 'استفسار عن موعد',
    learnMore: 'اعرف المزيد',
    menu: 'فتح القائمة',
    close: 'إغلاق',
    language: 'اللغة',
  },
  header: {
    tagline: 'الدوحة · قطر',
    menuTitle: 'القائمة',
  },
  hero: {
    eyebrow: 'استشارات الباطنية التخصصية · الدوحة',
    titleLead: 'رعاية تخصصية',
    titleAccent: 'تبدأ بالاستماع.',
    body: 'عيادة د. سمير لأمراض الباطنية تقدّم استشارات أخصائي الباطنية في قلب الدوحة — مقابل محطة مشريب للمترو — مع تحاليل الدم وتخطيط القلب وخدمات الصيدلية المدرجة ضمن خدمات العيادة.',
    explore: 'استكشف الخدمات',
    trust: [
      'استشارات أخصائي الباطنية',
      'تحاليل دم وتخطيط القلب (ECG)',
      'خدمات صيدلية مدرجة للعيادة',
    ],
    imageAlt: 'كادر طبي في بيئة علاجية عصرية ومشرقة',
    imageCaption: 'صور توضيحية، وليست صورة لهذه العيادة.',
    cardEyebrow: 'المواعيد والاستفسارات',
  },
  trust: {
    eyebrow: 'التقييم على Google',
    outOf: 'من 5',
    reviewsLabel: 'مراجعة',
    note: 'التقييم وعدد المراجعات كما وردا في قائمة العيادة على Google.',
    cta: 'عرض على خرائط Google',
  },
  specialty: {
    eyebrow: 'أمراض الباطنية',
    title: 'أمراض الباطنية، بشرح مبسّط.',
    intro:
      'أمراض الباطنية هو تخصص يهتم بالبالغين — تشخيص الأمراض وعلاجها ومتابعتها، خصوصًا ما يمس عدة أجهزة في الجسم في آنٍ واحد.',
    paragraphs: [
      'ينظر أخصائي الباطنية إلى الصورة الكاملة لا إلى عَرَض واحد. ضغط الدم والسكري والغدة الدرقية والقلب والرئتان والكلى والدم والمفاصل كلها من نطاق هذا التخصص، ولهذا قد تكشف الاستشارة الواحدة عن صلة بين أعراض بدت منفصلة.',
      'الاستشارة فرصة لطرح الأسئلة، ومراجعة النتائج المتاحة لديك، وفهم الخطوة التالية. وعند الحاجة إلى أشعة أو إحالة إلى مختص أو إجراء طبي، ترشدك العيادة إلى الطريق المناسب.',
    ],
    panelTitle: 'ما يشمله هذا التخصص',
    points: [
      {
        title: 'التشخيص والمتابعة',
        body: 'تقييم الأعراض الجديدة ومتابعة الحالات المستمرة بمرور الوقت.',
      },
      {
        title: 'صحة البالغين ككل',
        body: 'القلب والرئتان والكلى والغدد والدم والمفاصل ضمن تصوير واحد.',
      },
      {
        title: 'فحوصات قريبة من الاستشارة',
        body: 'تحاليل الدم وتخطيط القلب مدرجة ضمن خدمات العيادة، ويمكن تنسيقها حول موعد زيارتك.',
      },
    ],
    note: 'معلومات عامة عن التخصص، وليست نصيحة طبية ولا قائمة كاملة بما تعالجه العيادة. يُرجى الاتصال للاستفسار عن حالتك.',
  },
  services: {
    eyebrow: 'خدمات العيادة',
    title: 'ما هو منشور للعموم فقط، لا أكثر.',
    intro:
      'فئات الخدمات الأربع المنشورة لهذه العيادة في المصادر العامة: استشارات أمراض الباطنية، وتحاليل الدم، وتخطيط القلب، وخدمات الصيدلية.',
    note: 'مبني على معلومات منشورة للعموم عن هذه العيادة. قد يتغير التوفر — يُرجى الاتصال للتأكيد قبل الزيارة.',
    cardCta: 'اعرف المزيد',
    dialogKicker: 'خدمات العيادة',
    dialogGoodToKnow: 'معلومات مفيدة',
    dialogPoints: [
      'اتصل بالعيادة لتأكيد التوفر ومواعيد هذه الخدمة.',
      'قد تسبق الاستشارة أي فحص أو إحالة.',
      'يمكنك طرح أسئلتك قبل الزيارة.',
    ],
    dialogDisclaimer:
      'هذه معلومات عامة وليست نصيحة طبية. يُرجى استشارة مختص مؤهل بشأن صحتك.',
    dialogCta: 'اتصل للاستفسار',
  },
  about: {
    eyebrow: 'العيادة',
    title: 'عيادة في الحي، وأخصائي باطنية في صلبها.',
    paragraphs: [
      'تقع عيادة د. سمير لأمراض الباطنية مقابل محطة مشريب للمترو، بجانب فور بوينتس باي شيراتون في شارع الغدير — موقع مركزي سهل الوصول من مختلف أنحاء الدوحة.',
      'تسجّل المصادر العامة أن العيادة تأسست عام 1999، وتقدّم الاستشارات إلى جانب تحاليل الدم وتخطيط القلب وخدمات الصيدلية. وتُرتَّب مواعيد الاستشارات عن طريق الهاتف، مع شخص يردّ عليك مباشرة.',
    ],
    points: [
      {
        title: 'أخصائي باطنية',
        body: 'استشارات مع أخصائي في أمراض الباطنية.',
      },
      {
        title: 'فحوصات وصيدلية',
        body: 'تحاليل مخبرية وتخطيط القلب وخدمات صيدلية منشورة ضمن خدمات العيادة.',
      },
      {
        title: 'موقع مركزي ومتصل',
        body: 'مقابل محطة مشريب للمترو، مع مواقف سيارات مذكورة في المصادر العامة.',
      },
    ],
    cta: 'معلومات للمريض',
    imageAlt: 'مساحة علاجية حديثة وهادئة بإضاءة طبيعية',
    detailAlt: 'استشارة في غرفة علاج مشرقة',
    imageNote: 'صور توضيحية لبيئات علاجية — وليست صورًا لهذه العيادة.',
    badge: 'شارع الغدير، الدوحة',
  },
  patients: {
    eyebrow: 'معلومات للمريض',
    title: 'ما يُستحسن معرفته.',
    intro: 'إجابات مباشرة عن الأسئلة التي يطرحها المرضى كثيرًا، لتسهيل اتصالك وزيارتك.',
    items: [
      {
        title: 'المواعيد تُرتَّب هاتفيًا',
        body: 'لا يقبل هذا الموقع الحجز الإلكتروني. اتصل بالعيادة وسيرشدك الفريق إلى المواعيد المتاحة.',
      },
      {
        title: 'جهّز ما تحتاجه',
        body: 'اشرح شكواك بجملة واحدة، واذكر الأدوية التي تتناولها، والنتائج أو التقارير الأخيرة إن وُجدت.',
      },
      {
        title: 'إحالات التصوير',
        body: 'تشير المصادر العامة إلى إمكانية استخراج خطابات إحالة للأشعة والموجات فوق الصوتية والتصوير لدى مختبرات خارجية — يُرجى الاتصال للتأكيد بترتيبات العيادة الحالية.',
      },
      {
        title: 'التأمين والمدفوعات',
        body: 'للاستفسار عن شركات التأمين أو الاعتمادات أو الرسوم، تواصل مع العيادة مباشرة — هذا الموقع لا ينشر أسعارًا ولا معلومات تغطية تأمينية.',
      },
    ],
    note: 'مواعيد العمل والخدمات موضحة وفق المصادر العامة وقد تتغير — يُرجى الاتصال للتأكيد قبل التوجّه. وفي الحالات الطارئة في قطر، اتصل بالرقم 999.',
  },
  appointment: {
    eyebrow: 'استفسار عن موعد',
    title: 'خطوتك التالية مكالمة هاتفية.',
    body: 'لديك سؤال عن استشارة أو فحص أو توفر موعد؟ اتصل بالعيادة وسيرشدك الفريق خطوة بخطوة.',
    note: 'لا يوجد حجز إلكتروني — شخص يردّ على الهاتف.',
  },
  contact: {
    eyebrow: 'التواصل والموقع',
    title: 'تجدونا في الدوحة.',
    intro: 'الاتجاهات ومواعيد العمل ورقم الهاتف — كل ما تحتاجه لترتيب زيارتك.',
    locationLabel: 'الموقع',
    locationValue:
      'مقابل محطة مشريب للمترو، بجانب فور بوينتس باي شيراتون، شارع الغدير رقم 850، الدوحة، قطر',
    phoneLabel: 'الهاتف',
    enquireLabel: 'المواعيد',
    enquireValue: 'هاتفيًا — اتصل بالعيادة',
    panelNote:
      'استفسارات المواعيد يتولاها فريق العيادة مباشرة، ولا يقبل هذا الموقع الحجز الإلكتروني.',
    hoursTitle: 'مواعيد العمل',
    hoursRows: [
      {
        day: 'السبت – الخميس',
        hours: 'من 8:30 صباحًا إلى 1:00 ظهرًا، ومن 4:30 مساءً إلى 9:00 مساءً',
      },
      { day: 'الجمعة', hours: 'من 4:30 مساءً إلى 8:30 مساءً' },
    ],
    hoursNote:
      'مواعيد العمل وفق المصادر العامة؛ وقد تختلف المواعيد المنشورة بين المصادر وقد تتغير — يُرجى الاتصال للتأكيد.',
    mapTitle: 'خريطة لموقع عيادة د. سمير لأمراض الباطنية في الدوحة',
    mapNote: 'معاينة الخريطة من خرائط Google',
    mapCta: 'فتح في خرائط Google',
  },
  footer: {
    blurb:
      'تصوّر لموقع إلكتروني ثنائي اللغة لعيادة د. سمير لأمراض الباطنية — عيادة تخصصية في الدوحة، قطر.',
    exploreTitle: 'استكشف',
    servicesTitle: 'الخدمات',
    contactTitle: 'تواصل',
    languageTitle: 'اللغة',
    disclaimer:
      'تصوّر غير رسمي للموقع أعدّته TRIBAL³ لأغراض العرض، وليس الموقع الرسمي للعيادة.',
    medicalNote: 'معلومات عامة وليست نصيحة طبية. في الحالات الطارئة في قطر، اتصل بالرقم 999.',
    copyright: '© 2026 عيادة د. سمير لأمراض الباطنية · الدوحة، قطر',
    credit: 'الفكرة والتصميم: TRIBAL³',
  },
  serviceDetails: {
    consultation:
      'استشارات مع أخصائي في أمراض الباطنية — للاستفسارات الجديدة والحالات المستمرة، ولمراجعة النتائج المتاحة والمتابعة. اتصل بالعيادة للاستفسار عن أقرب موعد متاح.',
    laboratory:
      'التحاليل المخبرية مدرجة ضمن خدمات العيادة ويمكن تنسيقها حول موعد استشارتك. تواصل مع العيادة للاستفسار عن التوفر الحالي وأي تعليمات التهيئة.',
    ecg:
      'يسجّل تخطيط القلب نشاط القلب الكهربائي عبر مستشعرات صغيرة تُوضع على الجلد. وهو إجراء سريع وغير جراحي، وقد يُطلب ضمن التقييم الطبي. يُرجى الاتصال للتأكيد بتوفره في اليوم الذي تنوي زيارته.',
    pharmacy:
      'تدرج العيادة خدمات الصيدلية إلى جانب استشاراتها، لتسهيل تجهيز الوصفات الطبية حول موعدك. اتصل بالعيادة للتأكد من التوفر الحالي.',
  },
  servicesList: [
    {
      id: 'consultation',
      title: 'استشارات أمراض الباطنية',
      description: 'استشارات أخصائي للبالغين، للاستفسارات الجديدة والحالات المستمرة والمتابعة.',
      detail: '',
    },
    {
      id: 'laboratory',
      title: 'تحاليل الدم المخبرية',
      description: 'فحوصات وتحاليل دم مدرجة ضمن خدمات العيادة لدعم التقييم والمتابعة.',
      detail: '',
    },
    {
      id: 'ecg',
      title: 'تخطيط القلب (ECG)',
      description: 'تسجيل سريع وغير جراحي للكهربائية القلبية.',
      detail: '',
    },
    {
      id: 'pharmacy',
      title: 'خدمات الصيدلية',
      description: 'خدمات صيدلية مدرجة ضمن العيادة، قرب موعد زيارتك.',
      detail: '',
    },
  ],
}

export const copy: Record<Lang, SiteCopy> = { en, ar }

export const isRtl = (lang: Lang) => lang === 'ar'
