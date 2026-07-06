/*
  Site content data for Antonio Emanuele Cina's academic website.
  Edit this file to add publications, talks, appointments, interests, and links.
  The page is static and works on GitHub Pages with no build step.
*/

window.siteData = {
  person: {
    name: "Antonio Emanuele Cinà",
    title: "Tenure-Track Researcher (RTDA), University of Genoa",
    tagline: "Machine Learning Security · Adversarial ML · Cybersecurity",
    email: "antonio.cina@unige.it",
    profileImage: "assets/img/profile.jpg",
    imageAlt: "Portrait of Antonio Emanuele Cinà",
    links: [
      { label: "Email", href: "mailto:antonio.cina@unige.it", icon: "mail" },
      { label: "Academic Page", href: "https://rubrica.unige.it/personale/UkJOXVpo", icon: "university" },
      { label: "SAIfer Lab", href: "https://www.saiferlab.ai/people/antonioemanuelecina", icon: "lab" },
      { label: "GitHub", href: "https://github.com/Cinofix/", icon: "github" }
    ]
  },

  quotes: [
    {
      text: "A teacher affects eternity; he can never tell where his influence stops.",
      author: "Henry Adams"
    },
    {
      text: "The pursuit of truth and beauty is a sphere of activity in which we are permitted to remain children all our lives.",
      author: "Albert Einstein"
    }
  ],

  interests: [
    "Machine Learning Security",
    "Adversarial ML",
    "Cybersecurity",
    "NLP for Cybercrime",
    "AI Robustness"
  ],

  bio: [
    "Antonio Emanuele Cinà, born in October 1995, is a RTDA at the University of Genoa, Italy, and a member of the SAIfer Lab. At the University of Genoa, Antonio contributes to the SAIfer Lab by actively conducting research and officially supervising PhD students. He is involved in teaching activities and delivers courses in both undergraduate and graduate programs, in Italian and English. He also supervises several Bachelor’s and Master’s theses.",
    "Previously, Antonio worked as a Post-Doc Researcher at the CISPA Helmholtz Center for Information Security, a leading research institute located in Saarbrücken, Germany. There, he focused on cutting-edge research in cybersecurity and machine learning security. Antonio obtained his Ph.D. with honors in January 2023 from Ca' Foscari University of Venice, where he also completed his Bachelor’s and Master’s degrees in Computer Science, both with full marks and honors. At Ca' Foscari, Antonio received several personal awards for academic excellence, including being recognized as the third-best Computer Science student in 2016 and the best graduate of Ca' Foscari in 2017. He also served as an elected representative of the Ph.D. program in Computer Science at Ca' Foscari University from 2019 to 2021 and was recognized as an outstanding alumnus.",
    "Antonio is a member of the IEEE Computer Society and the ACM Computer Society."
  ],

  researchFocus: [
    {
      title: "Machine Learning Security and Reliability",
      text: "Antonio investigates vulnerabilities and errors that arise from spurious or adversarial correlations learned during training, which can lead to unexpected behaviors such as misclassification or toxic content generation. His work contributes to risk categorization, robustness benchmarks, and guidelines for resilient models."
    },
    {
      title: "Cybersecurity and AI for Scam Detection",
      text: "During his Post-Doc at CISPA, Antonio expanded his research to include natural language processing and clustering techniques for identifying cybercriminals and analyzing how they manipulate victims. This work supports AI-based systems that help users identify and avoid threats."
    }
  ],

  objective: "The core objective of Antonio’s research is to open the black box of learning models to ensure their correct, robust, reliable, and ethical use in academic and industrial contexts. This involves understanding systems, identifying vulnerabilities, interpreting mechanisms that cause failures, and addressing them to create more secure and transparent AI systems.",

  timeline: [
    {
      title: "University of Genoa",
      meta: "2023 - Present · RTDA Researcher",
      type: "Professional experience",
      logo: "https://www.google.com/s2/favicons?domain=unige.it&sz=96",
      fallback: "UG"
    },
    {
      title: "CISPA Helmholtz Center for Information Security",
      meta: "2023 · Postdoctoral Researcher",
      type: "Professional experience",
      logo: "https://www.google.com/s2/favicons?domain=cispa.de&sz=96",
      fallback: "CISPA"
    },
    {
      title: "Ph.D. in Computer Science, Ca' Foscari University of Venice",
      meta: "2019 - 2023",
      type: "Education",
      logo: "https://www.google.com/s2/favicons?domain=unive.it&sz=96",
      fallback: "CF"
    },
    {
      title: "M.Sc. in Computer Science, Ca' Foscari University of Venice",
      meta: "2017 - 2019 · Summa cum laude",
      type: "Education",
      logo: "https://www.google.com/s2/favicons?domain=unive.it&sz=96",
      fallback: "CF"
    },
    {
      title: "B.Sc. in Computer Science, Ca' Foscari University of Venice",
      meta: "2014 - 2017 · Summa cum laude, Best Graduate",
      type: "Education",
      logo: "https://www.google.com/s2/favicons?domain=unive.it&sz=96",
      fallback: "CF"
    }
  ],

  publications: {
    journals: [
      { title: "Energy-Latency Attacks via Sponge Poisoning", venue: "Information Sciences", year: 2025 },
      { title: "Machine Learning Security against Data Poisoning: Are We There Yet?", venue: "IEEE Computer", year: 2024 },
      { title: "Backdoor Learning Curves: Explaining Backdoor Poisoning Beyond Influence Functions", venue: "International Journal of Machine Learning and Cybernetics", year: 2024 },
      { title: "Wild Patterns Reloaded: A Survey of Machine Learning Security against Training Data Poisoning", venue: "ACM Computing Surveys", year: 2023 },
      { title: "Hardening RGB-D Object Recognition Systems against Adversarial Patch Attacks", venue: "Information Sciences", year: 2023 },
      { title: "A Black-box Adversarial Attack for Poisoning Clustering", venue: "Pattern Recognition", year: 2022 }
    ],
    conferences: [
      { title: "σ-zero: Gradient-based Optimization of ℓ0-norm Adversarial Examples", venue: "International Conference on Learning Representations (ICLR)", year: 2025 },
      { title: "Pirates of Charity: Exploring Donation-based Abuses in Social Media Platforms", venue: "The Web Conference (WWW)", year: 2025 },
      { title: "AttackBench: Evaluating Gradient-based Attacks for Adversarial Examples", venue: "AAAI Conference on Artificial Intelligence (AAAI)", year: 2025 },
      { title: "Understanding XAI Through the Philosopher’s Glasses: A Historical Perspective", venue: "European Conference on Artificial Intelligence (ECAI)", year: 2024 },
      { title: "The Imitation Game: Exploring Brand Impersonation Attacks on Social Media Platforms", venue: "USENIX Security Symposium", year: 2024 },
      { title: "Conning the Crypto Conman: End-to-End Analysis of Cryptocurrency-based Technical Support Scams", venue: "IEEE Symposium on Security and Privacy (SP)", year: 2024 },
      { title: "Minimizing Energy Consumption of Deep Learning Models by Energy-Aware Training", venue: "International Conference on Image Analysis and Processing (ICIAP)", year: 2023 },
      { title: "Stealing with Uncertainty Quantification Models", venue: "European Symposium on Artificial Neural Networks, Computational Intelligence and Machine Learning (ESANN)", year: 2023 },
      { title: "The Hammer and the Nut: Is Bilevel Optimization Really Needed to Poison Linear Classifiers?", venue: "International Joint Conference on Neural Networks (IJCNN)", year: 2021 }
    ]
  },

  talks: {
    conference: [
      { year: 2025, title: "σ-zero: Gradient-based Optimization of ℓ0-norm Adversarial Examples", venue: "ICLR" },
      { year: 2025, title: "AttackBench: Evaluating Gradient-based Attacks for Adversarial Examples", venue: "AAAI" },
      { year: 2023, title: "On the Limitations of Model Stealing with Uncertainty Quantification Models", venue: "ICML Workshop: New Frontiers in Adversarial Machine Learning" },
      { year: 2022, title: "Mislead Machine Learning", venue: "ITASEC Workshop: AI for Security and Security of AI" },
      { year: 2021, title: "Explaining Backdoor Poisoning", venue: "ICCV Workshop: Adversarial Robustness in the Real World" },
      { year: 2021, title: "Is Bilevel Optimization Really Needed to Poison Linear Classifiers?", venue: "IJCNN" }
    ],
    invited: [
      { year: 2024, title: "Foundations of LLMs, Applications, and Security Risks", venue: "Keynote, ICMLC" },
      { year: 2024, title: "Reliable Machine Learning Security Benchmarking", venue: "ML Security Workshop @ ICMLC" },
      { year: 2024, title: "Robust ML: Benchmarking Best Practices", venue: "ML for Cybersecurity Workshop @ ECML PKDD" },
      { year: 2023, title: "Training with Malicious Teachers", venue: "Robustness in Deep Learning Workshop @ GAMM" },
      { year: 2022, title: "Where ML Security Is Broken: Poisoning Attacks", venue: "Security of ML @ Dagstuhl Seminar" },
      { year: 2022, title: "Mislead Machine Learning", venue: "ASSG: AppSec and Cybersecurity Governance" }
    ],
    other: [
      { year: 2024, title: "Foundations of LLMs, Applications, and Security Risks", venue: "PRALAB, University of Cagliari" },
      { year: 2024, title: "Data & MLOps in Sustainable Transportation & Logistics", venue: "University of Pisa, Spoke 10 PNRR" },
      { year: 2024, title: "Training with Malicious Teachers: Poisoning Attacks", venue: "PRALAB, University of Cagliari" },
      { year: 2024, title: "Handling Scientific Experiments with HPC Clusters & Slurm", venue: "PRALAB, University of Cagliari" },
      { year: 2023, title: "Training with Malicious Teachers", venue: "SoSySec Seminar, INRIA" },
      { year: 2023, title: "Dose Makes the Poison", venue: "SAILab, Siena" },
      { year: 2023, title: "Dose Makes the Poison", venue: "SmartLab, Prof. Fabio Roli" },
      { year: 2022, title: "AI in the Film Industry", venue: "AIA, Villorba" },
      { year: 2022, title: "Mislead Machine Learning", venue: "Codemotion Online Seminar" }
    ]
  }
};
