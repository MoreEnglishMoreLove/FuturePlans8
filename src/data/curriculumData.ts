import { CurriculumWorksheet, VocabularyWord } from '../types';

export const SOCIAL_LINKS = {
  teacherName: "المعلمة جيداء صقر",
  teacherNameEn: "T. Jaidaa Saqer",
  whatsapp: "+963933036079",
  whatsappClean: "963933036079",
  facebook: "https://www.facebook.com/MoreEnglishMoreLove/",
  youtube: "https://www.youtube.com/@MoreEnglishMoreLove",
  instagram: "https://www.instagram.com/moreenglishmorelove/",
  telegram: "https://t.me/moreenglishmorelove",
};

export const UNIT_QUOTES = [
  {
    quote: "Education is the most powerful weapon you can use to change the world.",
    quoteAr: "التعليم هو أقوى سلاح يمكنك استخدامه لتغيير العالم.",
    author: "Nelson Mandela (نيلسون مانديلا)"
  },
  {
    quote: "Education is not preparation for life, education is life itself.",
    quoteAr: "التعليم ليس استعداداً للحياة، بل التعليم هو الحياة نفسها.",
    author: "John Dewey (جون ديوي)"
  },
  {
    quote: "You learn something every day if you pay attention.",
    quoteAr: "تتعلم شيئاً كل يوم إذا كنت منتبهاً.",
    author: "Ray LeBlond (راي ليبلوند)"
  }
];

export const SPEAKING_ACTIVITIES = [
  {
    id: 1,
    question: "At what age do children usually start school?",
    questionAr: "في أي عمر يبدأ الأطفال عادة المدرسة؟",
    modelAnswer: "Children usually start school at the age of 6.",
    modelAnswerAr: "عادةً ما يبدأ الأطفال المدرسة في عمر السادسة.",
    category: "Schooldays"
  },
  {
    id: 2,
    question: "Who accompanies them on their first day?",
    questionAr: "من يرافقهم في يومهم الأول؟",
    modelAnswer: "Usually their parents.",
    modelAnswerAr: "عادةً ما يرافقهم والدهم أو والدتهم (أولياء أمورهم).",
    category: "Schooldays"
  },
  {
    id: 3,
    question: "How did you feel when you went to school for the first time?",
    questionAr: "كيف شعرت عندما ذهبت إلى المدرسة لأول مرة؟",
    modelAnswer: "I felt excited and a little nervous.",
    modelAnswerAr: "شعرت بالحماس وقليل من التوتر.",
    category: "Schooldays"
  },
  {
    id: 4,
    question: "Describe to your classmates your feelings about school this year.",
    questionAr: "صف لزملائك مشاعرك عن المدرسة هذا العام.",
    modelAnswer: "I feel happy because I have new friends and I learn new things.",
    modelAnswerAr: "أشعر بالسعادة لأن لدي أصدقاء جدد وأتعلم أشياء جديدة.",
    category: "Schooldays"
  }
];

export const SPEAKING_PHOTO_ANALYSIS = [
  { id: 1, label: "a classroom in the past", labelAr: "صف دراسي في الماضي", era: "past" },
  { id: 2, label: "modern technology in school", labelAr: "تكنولوجيا حديثة في المدرسة", era: "future" },
  { id: 3, label: "a class in the past", labelAr: "صف دراسي في الماضي", era: "past" },
  { id: 4, label: "a class today", labelAr: "صف دراسي اليوم", era: "present" },
  { id: 5, label: "a science lab", labelAr: "مختبر علوم", era: "present" },
  { id: 6, label: "students in the hallway", labelAr: "طلاب في الممر", era: "present" },
];

export const READING_PASSAGES = [
  {
    id: "school-life",
    title: "School Life",
    titleAr: "الحياة المدرسية",
    paragraphs: [
      {
        en: "Some people start their school life at a very early age when they can't recognize how important the school and the learning process are. Little kids go to a sort of school which is called kindergarten. At that early age, children are exposed to new concepts that they really don't care for or even understand, especially when they are learning a foreign language.",
        ar: "يبدأ بعض الناس حياتهم المدرسية في سن مبكرة جداً، عندما لا يستطيعون إدراك مدى أهمية المدرسة وعملية التعلم. يذهب الأطفال الصغار إلى نوع من المدارس يُسمى رياض الأطفال. في هذا العمر المبكر، يتعرض الأطفال لمفاهيم جديدة لا يهتمون بها حقاً ولا يفهمونها، خاصة عندما يتعلمون لغة أجنبية."
      },
      {
        en: "Most people remember the first day of being at school with their parents holding their hands. They remember when they entered a strange building in which there are tables, chairs, lockers, colourful drawings, pictures and people they don't know. Quickly, their parents leave them there crying and shouting feeling depressed. But soon they are accustomed to the situation and they begin to love the feeling of familiarity.",
        ar: "يتذكر معظم الناس اليوم الأول في المدرسة وهم يمسكون بأيدي آبائهم. يتذكرون عندما دخلوا مبنى غريباً توجد فيه طاولات، كراسي، خزائن، ورسومات وصور ملونة وأشخاص لا يعرفونهم. وسرعان ما يتركهم آباؤهم هناك وهم يبكون ويصرخون ويشعرون بالاكتئاب. لكن سرعان ما يعتادون على الوضع ويبدأون في حب الشعور بالألفة."
      },
      {
        en: "After that, those little children grow up and go to their schools alone. They learn new things from their teachers and from their books. They begin to read, write and study independently. Soon they will have varied topics discovering that they have remarkable skills in some areas, but limited ones in others.",
        ar: "بعد ذلك، يكبر هؤلاء الأطفال الصغار ويذهبون إلى مدارسهم بمفردهم. يتعلمون أشياء جديدة من معلميهم ومن كتبهم. ويبدأون في القراءة والكتابة والدراسة بشكل مستقل. وسرعان ما ستكون لديهم موضوعات متنوعة، مكتشفين أن لديهم مهارات ملحوظة في بعض المجالات، لكنها محدودة في مجالات أخرى."
      },
      {
        en: "Then they reach higher schools, where they have much work to do. Here their achievement varies and their knowledge increases. Their attitudes will become different towards friends and goals in life. The difference between things that they have chosen and things which can help them decide their future career becomes much clearer for them.",
        ar: "ثم يصلون إلى مدارس أعلى، حيث يكون لديهم الكثير من العمل للقيام به. هنا تتفاوت إنجازاتهم وتزداد معرفتهم. وتصبح مواقفهم مختلفة تجاه الأصدقاء والأهداف في الحياة. ويصبح الفرق بين الأشياء التي اختاروها وتلك التي يمكن أن تساعدهم في تحديد مهنتهم المستقبلية أوضح بكثير بالنسبة لهم."
      },
      {
        en: "When they start working and see the different aspects of life, they discover how lovely school life was.",
        ar: "عندما يبدأون العمل ويرون الجوانب المختلفة للحياة، يكتشفون كم كانت الحياة المدرسية جميلة ورائعة."
      }
    ]
  },
  {
    id: "schools-future",
    title: "Schools in the Past, Present and Future",
    titleAr: "المدارس في الماضي والحاضر والمستقبل",
    paragraphs: [
      {
        en: "In the past and about 30 years ago, there were no computers or Internet as we have today. At that period, schools weren't provided with technological innovations of our time.",
        ar: "في الماضي وقبل حوالي 30 عاماً، لم تكن هناك حواسيب أو إنترنت كما هو الحال اليوم. في تلك الفترة، لم تكن المدارس مزودة بالابتكارات التكنولوجية لعصرنا."
      },
      {
        en: "The 21st century schools have changed with the development of modern technology and the needs of students. Nowadays, teachers and students use modern technologies. They are using the Internet, computers, laptops, mobiles and a number of other means which are continually being improved and updated. Modern technologies have played a major role in education so that teachers no longer have to rely on their traditional methods of teaching.",
        ar: "لقد تغيرت مدارس القرن الحادي والعشرين مع تطور التكنولوجيا الحديثة واحتياجات الطلاب. في الوقت الحاضر، يستخدم المعلمون والطلاب التكنولوجيا الحديثة؛ فهم يستخدمون الإنترنت، الحواسيب، الأجهزة المحمولة، والهواتف ووسائل أخرى يتم تحسينها وتحديثها باستمرار. لقد لعبت التقنيات الحديثة دوراً رئيسياً ومهماً في التعليم بحيث لم يعد المعلمون مضطرين للاعتماد على طرقهم التقليدية في التدريس."
      },
      {
        en: "That's why the concept of a future school comes in. A future school combines high-quality education with the possibility of new technologies in order to convey useful and practical knowledge.",
        ar: "ولهذا السبب يأتي مفهوم المدرسة المستقبلية. فالمدرسة المستقبلية تدمج التعليم عالي الجودة مع إمكانات التقنيات الجديدة من أجل نقل المعرفة المفيدة والعملية."
      },
      {
        en: "Future educators will have to face the fact that students will need to learn in a flexible, personalized format. This may mean having a more technology-focused classroom. In these future schools, students will prefer their learning experience to meet their interests, their academic needs and their future careers.",
        ar: "سيواجه معلمو المستقبل حقيقة أن الطلاب سيحتاجون إلى التعلم بطريقة مرنة ومخصصة لكل طالب. وهذا قد يعني وجود صف دراسي يركز أكثر على التكنولوجيا. وفي هذه المدارس، سيفضل الطلاب أن تلبي تجربتهم التعليمية اهتماماتهم واحتياجاتهم الأكاديمية ومهنهم المستقبلية."
      },
      {
        en: "Some of the main features that are expected to be changed in the system of future schools are: flying vehicles instead of school buses, robotic teachers instead of humans, and practical work more than books.",
        ar: "بعض الميزات الرئيسية المتوقع تغييرها في نظام المدارس المستقبلية: مركبات طائرة بدلاً من حافلات المدرسة، معلمون روبوتيون بدلاً من البشر، والعمل العملي أكثر من الكتب."
      }
    ]
  }
];

export const VOCABULARY_LIST: VocabularyWord[] = [
  {
    id: "concept",
    word: "concept",
    translation: "مفهوم / فكرة / مسألة",
    definition: "an idea of how something should be done, a problem or thought",
    definitionAr: "فكرة عن كيفية القيام بشيء ما، أو مسألة",
    example: "The concept of a future school combines education with technology.",
    partOfSpeech: "noun"
  },
  {
    id: "independently",
    word: "independently",
    translation: "بشكل مستقل / بحرية وثقة",
    definition: "doing things confidently and freely without depending on others",
    definitionAr: "القيام بالأشياء بثقة وحرية دون الاعتماد على الآخرين",
    example: "Students learn to study independently.",
    partOfSpeech: "adverb"
  },
  {
    id: "attitude",
    word: "attitude",
    translation: "موقف / اتجاه فكري أو شعوري",
    definition: "the way that you think and feel about something or somebody",
    definitionAr: "الطريقة التي تفكر وتشعر بها تجاه شخص أو شيء ما",
    example: "Their attitudes towards friends and life will become different.",
    partOfSpeech: "noun"
  },
  {
    id: "accustomed-to",
    word: "accustomed to",
    translation: "معتاد على",
    definition: "used to do something or familiar with a situation",
    definitionAr: "معتاد على فعل شيء ما أو ألف وضعاً معيناً",
    example: "Soon they are accustomed to the new school situation.",
    partOfSpeech: "adjective"
  },
  {
    id: "familiarity",
    word: "familiarity",
    translation: "الألفة / المعرفة الجيدة",
    definition: "a good knowledge of a particular subject or place",
    definitionAr: "معرفة جيدة بموضوع أو مكان معين",
    example: "They begin to love the feeling of familiarity.",
    partOfSpeech: "noun"
  },
  {
    id: "expose",
    word: "to expose",
    translation: "يعرّض لـ / يكشف عن",
    definition: "to show something that is usually hidden or place in an environment",
    definitionAr: "يعرض لشيء أو يكشف عن أمر كان مخفياً",
    example: "Children are exposed to new concepts.",
    partOfSpeech: "verb"
  },
  {
    id: "remarkable",
    word: "remarkable",
    translation: "ملحوظ / استثنائي / رائع",
    definition: "unusual, extraordinary or surprising",
    definitionAr: "غير عادي، ملحوظ أو مدهش",
    example: "They discover that they have remarkable skills in some areas.",
    partOfSpeech: "adjective"
  },
  {
    id: "innovations",
    word: "innovations",
    translation: "ابتكارات / أفكار وطرق جديدة",
    definition: "new ideas, methods, or devices",
    definitionAr: "أفكار أو طرق أو أدوات وتطبيقات جديدة",
    example: "People feel excited by the speed of technological innovations.",
    partOfSpeech: "noun"
  },
  {
    id: "major",
    word: "major",
    translation: "رئيسي / مهم جداً",
    definition: "very important, significant, or large",
    definitionAr: "رئيسي، ذو شأن أو ذو أهمية كبيرة",
    example: "Modern technologies have played a major role in education.",
    partOfSpeech: "adjective"
  },
  {
    id: "rely",
    word: "rely on",
    translation: "يعتمد على",
    definition: "depend on with full trust or confidence",
    definitionAr: "يعتمد على أو يثق في شيء لتلبية احتياجه",
    example: "Teachers no longer have to rely on traditional methods.",
    partOfSpeech: "verb"
  },
  {
    id: "flexible",
    word: "flexible",
    translation: "مرن / قابل للتكيف",
    definition: "able to change or suit new situations",
    definitionAr: "قادر على التغير أو التكيف مع المواقف والظروف",
    example: "Students will need to learn in a flexible format.",
    partOfSpeech: "adjective"
  },
  {
    id: "combine",
    word: "combine",
    translation: "يدمج / يجمع بين",
    definition: "to put two or more different things together",
    definitionAr: "جمع أو مزج شيئين مختلفين معاً",
    example: "A future school combines education with technology.",
    partOfSpeech: "verb"
  },
  {
    id: "convey",
    word: "convey",
    translation: "ينقل / يوصّل",
    definition: "to make ideas or feelings known to somebody",
    definitionAr: "إيصال ونقل الأفكار والمعارف للآخرين",
    example: "In order to convey useful and practical knowledge.",
    partOfSpeech: "verb"
  },
  {
    id: "personalize",
    word: "personalize",
    translation: "يخصص / يجعل الشيء مناسباً لشخص معين",
    definition: "to make something belong to or fit a particular person",
    definitionAr: "جعل الأمر ملائماً ومخصصاً لشخص محدد",
    example: "Learning will become more personalized.",
    partOfSpeech: "verb"
  }
];

export const MATCHING_PAIRS = [
  { id: 1, termA: "recognize", termAr: "يتعرف على / يدرك", termB: "to be aware that something exists or is true", matchKey: "b" },
  { id: 2, termA: "foreign", termAr: "أجنبي", termB: "from a country that is not your own", matchKey: "g" },
  { id: 3, termA: "concept", termAr: "مفهوم / فكرة", termB: "an idea of how something should be done", matchKey: "a" },
  { id: 4, termA: "vary", termAr: "يختلف / يتباين", termB: "to be different from each other in size, shape, etc.", matchKey: "c" },
  { id: 5, termA: "achievement", termAr: "إنجاز", termB: "a thing that somebody has done successfully", matchKey: "d" },
  { id: 6, termA: "limited", termAr: "محدود", termB: "not very great in amount", matchKey: "e" },
  { id: 7, termA: "process", termAr: "عملية", termB: "a series of actions or steps taken to achieve a particular aim", matchKey: "f" }
];

export const VOCABULARY_FILL_EXERCISES = [
  {
    id: 1,
    sentenceEn: "Smoking is one of the ________ causes of cancer.",
    sentenceAr: "التدخين هو أحد الأسباب الرئيسية للسرطان.",
    correctAnswer: "major",
    options: ["major", "flexible", "rely", "combined", "innovations", "provides"]
  },
  {
    id: 2,
    sentenceEn: "You need to be more ________ when you deal with other people.",
    sentenceAr: "تحتاج أن تكون أكثر مرونة عندما تتعامل مع الآخرين.",
    correctAnswer: "flexible",
    options: ["flexible", "major", "concept", "innovations", "rely", "provides"]
  },
  {
    id: 3,
    sentenceEn: "This hotel ________ good services for the guests.",
    sentenceAr: "يوفر هذا الفندق خدمات جيدة للنزلاء.",
    correctAnswer: "provides",
    options: ["provides", "rely", "combined", "flexible", "concept", "major"]
  },
  {
    id: 4,
    sentenceEn: "Diets are more effective when ________ with exercise.",
    sentenceAr: "الأنظمة الغذائية تكون أكثر فعالية عندما تُدمج مع التمرين.",
    correctAnswer: "combined",
    options: ["combined", "rely", "innovations", "flexible", "major", "provides"]
  },
  {
    id: 5,
    sentenceEn: "People in this village ________ on the river for their water.",
    sentenceAr: "يعتمد الناس في هذه القرية على النهر للحصول على مياههم.",
    correctAnswer: "rely",
    options: ["rely", "provides", "combined", "major", "flexible", "concept"]
  },
  {
    id: 6,
    sentenceEn: "Many people feel excited by the speed of technological ________.",
    sentenceAr: "يشعر الكثير من الناس بالحماس بسبب سرعة الابتكارات التكنولوجية.",
    correctAnswer: "innovations",
    options: ["innovations", "provides", "flexible", "rely", "major", "combined"]
  }
];

export const GRAMMAR_EXERCISES = [
  {
    id: 1,
    promptEn: "(you / come) tonight?",
    promptAr: "هل ستأتي الليلة؟",
    correctAnswer: "Will you come",
    tense: "Future Tense (will)",
    explanation: "نسأل عن المستقبل الليلة باستخدام Will + الفاعل + الفعل بالمصدر."
  },
  {
    id: 2,
    promptEn: "(he / eat) rice every day?",
    promptAr: "هل يأكل الأرز كل يوم؟",
    correctAnswer: "Does he eat",
    tense: "Present Simple Tense",
    explanation: "جملة عادة وتكرار مع (every day) والفاعل المفرد he تأخذ Does he eat."
  },
  {
    id: 3,
    promptEn: "I (work) at the moment.",
    promptAr: "أنا أعمل في هذه اللحظة.",
    correctAnswer: "am working",
    tense: "Present Progressive",
    explanation: "حدث يقع في لحظة التكلم مع (at the moment) فيأخذ am + verb-ing."
  },
  {
    id: 4,
    promptEn: "(she / come) to London often?",
    promptAr: "هل تأتي إلى لندن كثيراً؟",
    correctAnswer: "Does she come",
    tense: "Present Simple Tense",
    explanation: "ظرف التكرار (often) مع الفاعل المفرد المؤنث she يأخذ Does she come."
  },
  {
    id: 5,
    promptEn: "He (play) tennis now.",
    promptAr: "إنه يلعب التنس الآن.",
    correctAnswer: "is playing",
    tense: "Present Progressive",
    explanation: "مع كلمة (now) نستخدم المضارع المستمر: is playing."
  },
  {
    id: 6,
    promptEn: "She is very good at English. She (understands / is understanding) English very well.",
    promptAr: "هي جيدة جداً في الإنجليزية. هي تفهم الإنجليزية بشكل ممتاز.",
    correctAnswer: "understands",
    tense: "Present Simple (Stative Verb)",
    explanation: "فعل الفهم understand من أفعال الحواس والإدراك (Stative Verbs) التي لا تأخذ ing في المضارع المستمر."
  },
  {
    id: 7,
    promptEn: "They (will visit / are visiting) The National Museum next week.",
    promptAr: "سيزورون المتحف الوطني الأسبوع القادم.",
    correctAnswer: "will visit",
    tense: "Simple Future",
    explanation: "التعبير عن خطة أو حدث مستقبلي قادم."
  },
  {
    id: 8,
    promptEn: "He (is going to spend / spends) his vacation in Lattakia next summer.",
    promptAr: "إنه ينوي قضاء عطلته في اللاذقية الصيف القادم.",
    correctAnswer: "is going to spend",
    tense: "Future (going to - Intention)",
    explanation: "نستخدم be going to للتعبير عن نية مسبقة أو مخطط له للمستقبل."
  }
];

export const LISTENING_DIALOGUES = [
  {
    id: "vacation-dialogue",
    title: "Listen to the dialogue between the teacher and her students",
    titleAr: "حوار المعلمة وطلابها عن العطلة والعودة للمدرسة",
    transcript: [
      { speaker: "Teacher (المعلمة)", text: "Good morning class! Welcome back to school! Did you all have a nice vacation?" },
      { speaker: "Judie (جودي)", text: "Yes, Miss! I spent three weeks with my family in Lebanon. The weather was lovely." },
      { speaker: "Mary (ماري)", text: "I spent fifteen days in Aleppo visiting my grandparents. We had great family moments." },
      { speaker: "Taim (تيم)", text: "My family and I went on a wonderful sightseeing tour around too many places in Jordan." },
      { speaker: "George (جورج)", text: "I spent the vacation at home. Honestly, I'm not sure of my feelings about starting school again." },
      { speaker: "Teacher (المعلمة)", text: "Thank you all! Today I want all of you to write about the places you've visited in your vacation." }
    ],
    trueFalse: [
      { id: 1, question: "The teacher asked the students about their English books.", questionAr: "سألت المعلمة الطلاب عن كتبهم الإنجليزية.", answer: false, explanation: "خاطئة: المعلمة سألتهم عن عطلتهم الصيفية." },
      { id: 2, question: "Judie spent three weeks in Lebanon.", questionAr: "قضت جودي ثلاثة أسابيع في لبنان.", answer: true, explanation: "صحيحة: جودي قالت: I spent three weeks with my family in Lebanon." },
      { id: 3, question: "Mary went to see her grandparents.", questionAr: "ذهبت ماري لرؤية أجدادها.", answer: true, explanation: "صحيحة: ماري زارت أجدادها في حلب." },
      { id: 4, question: "Taim went alone on his journey.", questionAr: "ذهب تيم وحده في رحلته.", answer: false, explanation: "خاطئة: تيم ذهب مع عائلته." },
      { id: 5, question: "George is not sure of his feelings about starting school.", questionAr: "جورج غير متأكد من مشاعره حول بدء المدرسة.", answer: true, explanation: "صحيحة: جورج قال: I'm not sure of my feelings about starting school." }
    ],
    mcqs: [
      {
        id: 1,
        question: "Mary spent ________ days in Aleppo.",
        questionAr: "قضت ماري ________ يوماً في حلب.",
        options: ["too many", "fifteen", "five"],
        correctAnswer: "fifteen"
      },
      {
        id: 2,
        question: "Judie went with her ________ to Lebanon.",
        questionAr: "ذهبت جودي مع ________ إلى لبنان.",
        options: ["aunt", "relatives", "family"],
        correctAnswer: "family"
      },
      {
        id: 3,
        question: "Taim went on a sightseeing tour around ________ places in Jordan.",
        questionAr: "ذهب تيم في جولة سياحية حول ________ أماكن في الأردن.",
        options: ["too many", "all", "some"],
        correctAnswer: "too many"
      },
      {
        id: 4,
        question: "The teacher asked ________ about being ready to start school again.",
        questionAr: "سألت المعلمة ________ عن الاستعداد للعودة للمدرسة.",
        options: ["all the students", "only Judie", "both Judie and George"],
        correctAnswer: "all the students"
      },
      {
        id: 5,
        question: "The teacher wanted her students to ________.",
        questionAr: "أرادت المعلمة من طلابها أن ________.",
        options: [
          "decide where to go on vacation",
          "write about the places they've visited in their vacation",
          "plan for their next trip"
        ],
        correctAnswer: "write about the places they've visited in their vacation"
      }
    ]
  },
  {
    id: "jokes-dialogue",
    title: "Let Me Tell You Some Jokes! (نكات ومواقف مرحة)",
    titleAr: "استمع إلى النكات المدرسية وأجب عن المهام",
    transcript: [
      { speaker: "Joke 1 (Mia)", text: "Mia: Mom, I want a new teacher! Mom: Why? Mia: Because my teacher keeps asking us for all the answers!" },
      { speaker: "Joke 2 (Vic & Dad)", text: "Dad walked in and found Vic sitting right inside the goldfish bowl! Dad: What are you doing in there? Vic: Playing with the fish!" },
      { speaker: "Joke 3 (Margret)", text: "Margret, a grade 1 teacher, had her hair cut very short and coloured blonde for a change. Steve looked at her and said: Teacher, you've got a head!" },
      { speaker: "Joke 4 (Tim)", text: "Teacher: Tim, what do you want to be in the future? Tim: An astronaut! Teacher: Great, where will you land? Tim: On the sun! Teacher: You will burn! Tim: No, I've got problem-solving skills, I'll go at night!" }
    ],
    trueFalse: [
      { id: 1, question: "Mia wants a new teacher in her class.", questionAr: "تريد ميا معلمة جديدة في صفها.", answer: true, explanation: "صحيحة (T)" },
      { id: 2, question: "Dad found Vic sitting in the goldfish bowl.", questionAr: "وجد الأب فيك جالساً في وعاء السمك الذهبي.", answer: true, explanation: "صحيحة (T) في الحوار والأسئلة" },
      { id: 3, question: "Margret, a grade 1 teacher, had her hair cut short and coloured for a change.", questionAr: "مارغريت، معلمة الصف الأول، قصت شعرها قصيراً وصبغته للتغيير.", answer: true, explanation: "صحيحة (T)" },
      { id: 4, question: "Tim has problem-solving skills.", questionAr: "لدى تيم مهارات في حل المشكلات.", answer: true, explanation: "صحيحة (T)" }
    ],
    mcqs: [
      {
        id: 1,
        question: "Mia said that her teacher keeps ________.",
        questionAr: "قالت ميا إن معلمتها تستمر في ________.",
        options: [
          "answering all the questions they ask her",
          "speaking all the time",
          "asking them for the answers"
        ],
        correctAnswer: "asking them for the answers"
      },
      {
        id: 2,
        question: "Steve told his teacher that she got a ________.",
        questionAr: "قال ستيف لمعلمته إنها حصلت على ________.",
        options: ["hand", "hat", "head"],
        correctAnswer: "head"
      },
      {
        id: 3,
        question: "Tim wanted to be ________ in the future.",
        questionAr: "أراد تيم أن يكون ________ في المستقبل.",
        options: ["a pilot", "an astronaut", "a teacher"],
        correctAnswer: "an astronaut"
      },
      {
        id: 4,
        question: "Tim wanted to land on the sun ________.",
        questionAr: "أراد تيم الهبوط على الشمس ________.",
        options: ["at night", "during the day", "early in the morning"],
        correctAnswer: "at night"
      }
    ]
  }
];

export const WRITING_SECTION_DATA = {
  firstDayParagraph: {
    title: "Write a paragraph about your first day at school",
    titleAr: "اكتب فقرة عن يومك الأول في المدرسة",
    modelEn: "My first day at school was very exciting and a little scary. I woke up early in the morning. I wore my new uniform and took my backpack. My mom took me to school. I saw many children and some teachers. My teacher was very kind and smiled at me. She asked me my name and showed me my desk. I made a new friend. We played together during the break. I learned a lot of new things. At the end of the day, I was happy. I can't wait to go back to school.",
    modelAr: "كان يومي الأول في المدرسة ممتعاً جداً ومخيفاً بعض الشيء. استيقظت مبكراً في الصباح. ارتديت زيّي الجديد وأخذت حقيبتي. أوصلتني أمي إلى المدرسة. رأيت العديد من الأطفال وبعض المعلمين. كانت معلمتي لطيفة جداً وابتسمت لي. سألتني عن اسمي وأرتني مقعدي. تعرفت على صديق جديد. لعبنا معاً خلال الاستراحة. تعلمت الكثير من الأشياء الجديدة. في نهاية اليوم، كنت سعيداً. ولا أطيق الانتظار للعودة إلى المدرسة.",
    rules: [
      { rule: "A topic sentence (جملة افتتاحية تحدد الموضوع الرئيسي)" },
      { rule: "The body of the paragraph (صلب الفقرة مع التفاصيل والأحداث)" },
      { rule: "The conclusion (جملة خاتمة تلخص المشاعر أو النتيجة)" },
      { rule: "Capital letters at the beginning of sentences and for names (الحروف الكبيرة)" },
      { rule: "A full stop (.) at the end of each sentence (النقطة في نهاية كل جملة)" },
      { rule: "Commas (,) to separate items or clauses (الفواصل)" }
    ]
  },
  futureSchoolParagraph: {
    title: "Complete the paragraph using phrases in the box",
    titleAr: "أكمل الفقرة باستخدام العبارات في الصندوق",
    boxPhrases: [
      { id: "p1", text: "be done electronically", textAr: "تُنجز إلكترونياً" },
      { id: "p2", text: "should be designed", textAr: "يجب أن تُصمَّم" },
      { id: "p3", text: "put safety as their major concern", textAr: "تضع السلامة كاهتمام رئيسي لها" },
      { id: "p4", text: "in their laboratories", textAr: "في مختبراتهم" },
      { id: "p5", text: "teachers and students", textAr: "المعلمون والطلاب" }
    ],
    paragraphTemplate: "My future school (1) [should be designed] with much care on health and well-being. Students can easily surf the net from 3D screens. (2) [Teachers and students] will be engaged in virtual reality screens and discuss different topics (3) [in their laboratories]. Exams can (4) [be done electronically]. Planners and designers should (5) [put safety as their major concern].",
    translationAr: "سيتم تصميم مدرستي المستقبلية (1) بعناية فائقة بالتركيز على صحة ورفاهية الطلاب. يمكن للطلاب التصفح بسهولة عبر شاشات ثلاثية الأبعاد. (2) المعلمون والطلاب سينخرطون في شاشات الواقع الافتراضي ويناقشون مواضيع مختلفة (3) في مختبراتهم. الامتحانات يمكن أن (4) تُنجز إلكترونياً. كما يجب على المخططين والمصممين أن (5) يضعوا السلامة كاهتمام رئيسي لهم."
  },
  grammarRules: [
    {
      title: "Modal Verb 'should'",
      titleAr: "الفعل المساعد should (يجب / ينبغي)",
      explanation: "We use 'should' to give advice or express what is right.",
      explanationAr: "نستخدم should لإعطاء النصيحة أو للتعبير عن الشيء الصحيح والمناسب.",
      example: "Students should study hard. (يجب على الطلاب أن يدرسوا بجد)."
    },
    {
      title: "Passive Voice (be done)",
      titleAr: "المبني للمجهول بعد الأفعال الناقصة (be done)",
      explanation: "We use 'be done' to say that something is done by someone else.",
      explanationAr: "نستخدم الصيغة (Modal + be + past participle) للتعبير عن إنجاز الشيء في صيغة المبني للمجهول.",
      example: "Exams can be done electronically. (يمكن أن تُنجز الامتحانات إلكترونياً)."
    }
  ]
};

// 7 Comprehensive Curriculum Worksheets matching the exact pages from Teacher Jaidaa Saqer
export const CURRICULUM_WORKSHEETS: CurriculumWorksheet[] = [
  {
    id: 1,
    unit: "Unit 1: Future Plans",
    title: "Speaking & Schooldays Reflection",
    titleAr: "ورقة عمل 1: خطط المستقبل والمحادثة التفاعلية",
    pageNumber: 6,
    category: "speaking",
    summary: "مقدمة الوحدة الأولى، مقولات تحفيزية، والتحدث عن مشاعر المدرسة والماضي والحاضر.",
    sections: [
      {
        title: "Quotes on Education",
        titleAr: "أقوال مأثورة في التعليم",
        instructions: "Read the famous quotes and reflect on their meanings.",
        instructionsAr: "اقرأ الأقوال المأثورة وتأمل في معانيها العميقة.",
        type: "qa",
        items: UNIT_QUOTES.map((q, idx) => ({
          question: q.author,
          answer: `${q.quote}\n(${q.quoteAr})`
        }))
      },
      {
        title: "Speaking Discussion Questions",
        titleAr: "أسئلة المحادثة والنقاش",
        instructions: "In pairs, ask and answer the following questions.",
        instructionsAr: "في أزواج، اسأل وأجب عن الأسئلة التالية:",
        type: "qa",
        items: SPEAKING_ACTIVITIES.map(a => ({
          question: `${a.question} (${a.questionAr})`,
          answer: `${a.modelAnswer} (${a.modelAnswerAr})`
        }))
      }
    ]
  },
  {
    id: 2,
    unit: "Unit 1: Future Plans",
    title: "School Life Reading & Key Vocabulary",
    titleAr: "ورقة عمل 2: نص الحياة المدرسية والكلمات المفتاحية",
    pageNumber: 2,
    category: "reading",
    summary: "نص القراءة 'School Life' مع الكلمات المفتاحية وترجمتها وشرح المفاهيم.",
    sections: [
      {
        title: "Reading: School Life",
        titleAr: "نص القراءة: الحياة المدرسية",
        instructions: "Read the text carefully and study the parallel translation.",
        instructionsAr: "اقرأ النص بعناية وراجع الترجمة الموازية المرفقة.",
        type: "paragraph",
        items: READING_PASSAGES[0].paragraphs
      },
      {
        title: "Key Words of the Text",
        titleAr: "الكلمات المفتاحية للنص",
        instructions: "Memorize these essential vocabulary words and their definitions.",
        instructionsAr: "احفظ هذه المفردات الأساسية وتعاريفها النموذجية.",
        type: "qa",
        items: [
          { question: "concept (مفهوم)", answer: "an idea, a problem, etc. (فكرة، مسألة)" },
          { question: "independently (بشكل مستقل)", answer: "doing things confidently and freely (القيام بالأشياء بثقة وحرية)" },
          { question: "attitude (موقف / اتجاه)", answer: "the way that you think and feel about something or somebody" },
          { question: "accustomed to (معتاد على)", answer: "used to do something" },
          { question: "familiarity (الألفة)", answer: "a good knowledge of a particular subject or place" },
          { question: "to expose (يعرض / يكشف عن)", answer: "to show something that is usually hidden" },
          { question: "remarkable (ملحوظ / استثنائي)", answer: "unusual or surprising" }
        ]
      }
    ]
  },
  {
    id: 3,
    unit: "Unit 1: Future Plans",
    title: "Comprehension Questions & Vocabulary Matching",
    titleAr: "ورقة عمل 3: أسئلة الفهم وتوصيل المفردات",
    pageNumber: 3,
    category: "vocabulary",
    summary: "أسئلة فهم واستيعاب حول نص الحياة المدرسية، واختيارات متعددة، وتوصيل العمود A مع B.",
    sections: [
      {
        title: "A - Answer the following questions",
        titleAr: "أ - أجب عن الأسئلة التالية",
        instructions: "Answer the questions based on the text.",
        instructionsAr: "أجب عن الأسئلة بناءً على ما ورد في النص:",
        type: "qa",
        items: [
          {
            question: "1- In your opinion, is school important? Why? (هل المدرسة مهمة برأيك؟ ولماذا؟)",
            answer: "Yes, it is. Because it helps us learn and build our future. (نعم، إنها مهمة لأنها تساعدنا على التعلم وبناء مستقبلنا)."
          },
          {
            question: "2- What is a kindergarten? (ما هي رياض الأطفال؟)",
            answer: "It is a school for little children at an early age. (هي مدرسة للأطفال الصغار في سن مبكرة)."
          },
          {
            question: "3- Why do little children feel depressed on their first day at school? (لماذا يشعر الأطفال الصغار بالحزن في يومهم الأول؟)",
            answer: "Because they are in a strange place away from their parents. (لأنهم في مكان غريب بعيداً عن والديهم)."
          },
          {
            question: "4- When can people decide their future career? (متى يستطيع الناس تحديد مهنتهم المستقبلية؟)",
            answer: "When they grow up and discover their abilities and interests. (عندما يكبرون ويكتشفون قدراتهم واهتماماتهم)."
          }
        ]
      },
      {
        title: "B - Choose the correct answer a, b or c",
        titleAr: "ب - اختر الإجابة الصحيحة",
        instructions: "Select the most accurate option.",
        instructionsAr: "اختر الإجابة الأدق للعبارات التالية:",
        type: "mcq",
        items: [
          {
            question: "1- At an early age, kids ________ new concepts.",
            options: ["a- care for", "b- experience (الحل الصحيح)", "c- understand"],
            correctAnswer: "b- experience (الحل الصحيح)"
          },
          {
            question: "2- After a short time of being at school, it becomes a ________ place for children.",
            options: ["a- strange", "b- mysterious", "c- well-known (الحل الصحيح)"],
            correctAnswer: "c- well-known (الحل الصحيح)"
          },
          {
            question: "3- When children grow up, they do their work depending on ________.",
            options: ["a- themselves (الحل الصحيح)", "b- other friends", "c- their parents"],
            correctAnswer: "a- themselves (الحل الصحيح)"
          },
          {
            question: "4- Aspects of life make people discover that they ________ the good days of school life.",
            options: ["a- refuse to remember", "b- forget about", "c- long for (الحل الصحيح)"],
            correctAnswer: "c- long for (الحل الصحيح)"
          }
        ]
      },
      {
        title: "Vocabulary: Match column A with B",
        titleAr: "المفردات: صل العمود A مع العمود B",
        instructions: "Match each word in column A to its correct definition in column B.",
        instructionsAr: "صل كل كلمة بالتعريف الصحيح المقابل لها:",
        type: "matching",
        items: MATCHING_PAIRS.map(p => ({
          colA: `${p.termA} (${p.termAr})`,
          colB: `${p.matchKey}- ${p.termB}`,
          correctKey: p.matchKey
        }))
      }
    ]
  },
  {
    id: 4,
    unit: "Unit 1: Future Plans",
    title: "Grammar: Revision of Tenses",
    titleAr: "ورقة عمل 4: قواعد مراجعة الأزمنة",
    pageNumber: 4,
    category: "grammar",
    summary: "جدول مقارنة الأزمنة الثلاثة (المضارع البسيط، المضارع المستمر، المستقبل)، وتمرين تصحيح الأفعال.",
    sections: [
      {
        title: "Tenses Rule Comparison Table",
        titleAr: "جدول مقارنة قواعد الأزمنة",
        instructions: "Study the rules, uses, keywords, and sentence forms.",
        instructionsAr: "ادرس القواعد، الاستخدامات، الكلمات الدالة وتصريفات الجمل:",
        type: "grammar_rules",
        items: [
          {
            tense: "Present Simple Tense (المضارع البسيط)",
            use: "Facts which are always true, habits, things we do regularly.",
            useAr: "حقائق تكون صحيحة دائماً، عادات، أشياء نفعلها بانتظام.",
            adverbs: "always, often, usually, sometimes, never, everyday/week/year.",
            forms: "Affirmative: Water boils at 100°C / I drink coffee. Negative: I don't drink / He doesn't drink. Interrogative: Does water boil...? / Do you drink...?"
          },
          {
            tense: "Present Progressive Tense (المضارع المستمر)",
            use: "Activities happening at the moment of speaking, temporary activities.",
            useAr: "أنشطة تحدث في لحظة الكلام، أنشطة مؤقتة.",
            adverbs: "now, at the moment, these days, this week/month/year.",
            forms: "Affirmative: The water is boiling now / I'm drinking too much coffee. Negative: I'm not watching TV. Interrogative: Are you drinking...?"
          },
          {
            tense: "Future Tense (زمن المستقبل)",
            use: "with will: decisions, promises, predictions. with going to: planned events, future predictions based on evidence.",
            useAr: "باستخدام will: اتخاذ قرارات، وعود، تنبؤات عامة. باستخدام going to: أحداث تم التخطيط لها مسبقاً، تنبؤ مبني على أدلة واقعية.",
            adverbs: "tomorrow, next week/year/month, soon, in the future.",
            forms: "Affirmative: We will go to the theater tomorrow / He is going to graduate next year. Negative: We won't go / He is not going to graduate. Interrogative: Will you go...? / Is he going to...?"
          }
        ]
      },
      {
        title: "B - Make the verbs in brackets in the correct tense",
        titleAr: "ب - ضع الأفعال بين القوسين في الزمن الصحيح",
        instructions: "Put each verb into its appropriate grammatical tense.",
        instructionsAr: "صحح تصريف الأفعال بين القوسين بحسب زمن الجملة:",
        type: "qa",
        items: GRAMMAR_EXERCISES.slice(0, 5).map((ex, i) => ({
          question: `${i + 1}- ${ex.promptEn} (${ex.promptAr})`,
          answer: `${ex.correctAnswer} [الزمن: ${ex.tense}] - ${ex.explanation}`
        }))
      }
    ]
  },
  {
    id: 5,
    unit: "Unit 1: Future Plans",
    title: "Listening Jokes & First Day Writing",
    titleAr: "ورقة عمل 5: نكات الاستماع وموضوع اليوم الأول",
    pageNumber: 5,
    category: "listening",
    summary: "نصوص ونكات الاستماع التفاعلية، وأسئلة الصح/الخطأ والاختيارات، وفقرة كتابة اليوم الأول في المدرسة.",
    sections: [
      {
        title: "A - Decide if the statements are True or False",
        titleAr: "أ - حدد ما إذا كانت العبارات صحيحة أم خاطئة",
        instructions: "Listen to the jokes and choose T or F.",
        instructionsAr: "استمع للنكات المدرسية وحدد صحة العبارات:",
        type: "true_false",
        items: LISTENING_DIALOGUES[1].trueFalse
      },
      {
        title: "B - Choose the right answer a, b or c",
        titleAr: "ب - اختر الإجابة الصحيحة",
        instructions: "Select the correct completion for each joke.",
        instructionsAr: "اختر التكملة الصحيحة لكل موقف:",
        type: "mcq",
        items: LISTENING_DIALOGUES[1].mcqs
      },
      {
        title: "Writing: Paragraph about First Day at School",
        titleAr: "الكتابة: موضوع عن يومك الأول في المدرسة",
        instructions: "Read the model paragraph and remember the writing rules.",
        instructionsAr: "اقرأ النموذج التعبيري وتذكر قواعد الكتابة وعلامات الترقيم:",
        type: "paragraph",
        items: [
          {
            en: WRITING_SECTION_DATA.firstDayParagraph.modelEn,
            ar: WRITING_SECTION_DATA.firstDayParagraph.modelAr
          }
        ]
      }
    ]
  },
  {
    id: 6,
    unit: "Unit 1: Future Plans",
    title: "Schools in Past, Present & Future",
    titleAr: "ورقة عمل 6: المدارس في الماضي والحاضر والمستقبل",
    pageNumber: 8,
    category: "reading",
    summary: "نص مدارس المستقبل، الأسئلة والاستيعاب، وتمرين المفردات الرئيسية، واختيارات القواعد.",
    sections: [
      {
        title: "Comprehension Questions: Future Schools",
        titleAr: "أسئلة الاستيعاب: مدارس المستقبل",
        instructions: "Answer according to the reading text.",
        instructionsAr: "أجب عن الأسئلة بناءً على نص القراءة:",
        type: "qa",
        items: [
          {
            question: "1- How have the 21st century schools changed? (كيف تغيرت مدارس القرن الحادي والعشرين؟)",
            answer: "They have integrated modern technology into education. (لقد دمجت التكنولوجيا الحديثة في العملية التعليمية)."
          },
          {
            question: "2- What does 'they' in bold in the text refer to? (إلى ماذا يعود الضمير they في النص؟)",
            answer: "It refers to schools / future schools. (يعود إلى المدارس / مدارس المستقبل)."
          },
          {
            question: "3- Why does a future school combine high-quality education with new technologies? (لماذا تجمع مدرسة المستقبل بين التعليم والتكنولوجيا؟)",
            answer: "To provide a better and more effective learning experience. (لتوفير تجربة تعليمية أفضل وأكثر فاعلية وعملية)."
          },
          {
            question: "4- What will classrooms focus on in the future? (على ماذا ستركز الصفوف في المستقبل؟)",
            answer: "They will focus on practical and functional activities. (ستركز على الأنشطة العملية والوظيفية والتكنولوجيا)."
          },
          {
            question: "5- Mention one of the main features that are expected to be changed. (اذكر إحدى الميزات المتوقع تغييرها)",
            answer: "Flying vehicles instead of school buses, robotic teachers, or practical work more than books."
          }
        ]
      },
      {
        title: "Complete the sentences with vocabulary",
        titleAr: "أكمل الجمل باستخدام المفردات المعطاة",
        instructions: "Use: combined - rely - innovations - concept - major - provides - flexible",
        instructionsAr: "املأ الفراغات بالكلمات المناسبة:",
        type: "fill_blanks",
        items: VOCABULARY_FILL_EXERCISES.map(f => ({
          sentence: f.sentenceEn,
          sentenceAr: f.sentenceAr,
          answer: f.correctAnswer
        }))
      }
    ]
  },
  {
    id: 7,
    unit: "Unit 1: Future Plans",
    title: "Writing: Future School & Grammar Rules",
    titleAr: "ورقة عمل 7: إنشاء المدرسة المستقبلية وقواعد should و be done",
    pageNumber: 11,
    category: "writing",
    summary: "إكمال فقرة المدرسة المستقبلية بعبارات الصندوق، وقواعد Modal Verb 'should' والمبني للمجهول 'be done'، وعلامات الترقيم.",
    sections: [
      {
        title: "Writing: My Future School Paragraph Completion",
        titleAr: "الكتابة: إكمال فقرة مدرستي المستقبلية",
        instructions: "Complete the paragraph using phrases in the box.",
        instructionsAr: "أكمل الفقرة التالية باستخدام العبارات في الصندوق مع وضع علامات الترقيم والحروف الكبيرة:",
        type: "paragraph",
        items: [
          {
            en: WRITING_SECTION_DATA.futureSchoolParagraph.paragraphTemplate,
            ar: WRITING_SECTION_DATA.futureSchoolParagraph.translationAr
          }
        ]
      },
      {
        title: "Grammar Rules: should & be done",
        titleAr: "القواعد النحوية: should و be done",
        instructions: "Understand the grammar structures and examples.",
        instructionsAr: "افهم القواعد النحوية المعتمدة مع أمثلتها:",
        type: "grammar_rules",
        items: WRITING_SECTION_DATA.grammarRules
      },
      {
        title: "Punctuation Rules (علامات الترقيم)",
        titleAr: "علامات الترقيم وقواعد الإملاء",
        instructions: "Key writing mechanics rules to remember.",
        instructionsAr: "قواعد كتابية هامة يجب تذكرها دائماً:",
        type: "qa",
        items: [
          { question: "Full stop (.)", answer: "A full stop is used at the end of a sentence. (تُستخدم النقطة في نهاية الجملة التامة)." },
          { question: "Capital letters (A, B, C)", answer: "Used at the beginning of sentences and for proper names. (تُستخدم الحروف الكبيرة في بداية كل جملة ولأسماء الأشخاص والأماكن)." },
          { question: "Commas (,)", answer: "Used to separate items in a list or clauses in compound sentences. (تُستخدم الفواصل للفصل بين العناصر أو الجمل)." }
        ]
      }
    ]
  }
];
