/*
  Site content data for Antonio Emanuele Cina's academic website.
  Edit this file to add publications, talks, appointments, interests, and links.
  The page is static and works on GitHub Pages with no build step.
*/

window.siteData = {
  person: {
    name: "Antonio Emanuele Cinà",
    title: "Tenure-track Assistant Professor of Computer Science, University of Trieste",
    tagline: "Machine learning security · adversarial ML · cybersecurity",
    email: "antonio.cina@unige.it",
    profileImage: "assets/img/profile.jpg",
    imageAlt: "Portrait photograph of Antonio Emanuele Cinà",
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
    "AI for cybersecurity",
    "AI Robustness"
  ],

  bio: [
    "Antonio Emanuele Cinà is a tenure-track assistant professor of Computer Science at the University of Trieste, Italy. He was previously a postdoctoral researcher at the CISPA Helmholtz Center for Information Security in Saarbrücken, Germany, and an assistant professor at the University of Genova, Italy.",
    "His research lies at the intersection of machine learning and computer security, with a focus on the reliability of AI systems in adversarial and real-world settings. He investigates vulnerabilities and failure modes arising from spurious and adversarial correlations—non-causal patterns that can undermine the expected behavior of AI systems, from misclassifications in safety-sensitive applications to the generation of toxic or ethically inappropriate content.",
    "His work aims to evaluate and mitigate these threats through penetration testing methodologies and the design of defense techniques. Antonio is a member of the IEEE Computer Society and serves as Associate Editor of the International Journal of Machine Learning and Cybernetics, Springer."
  ],

  researchFocus: [
    {
      title: "Machine Learning Security and Reliability",
      text: "He investigates vulnerabilities and failure modes arising from spurious and adversarial correlations learned during training, which can undermine AI behavior in safety-sensitive systems or produce toxic or unethical outputs. His work contributes to risk categorization, robustness benchmarks, and guidelines for resilient models."
    },
    {
      title: "AI for cybersecurity applications",
      text: "He also examines the interaction and use of AI for enhancing cybersecurity applications, including violence and cybercrime detection. This research supports security-oriented systems that are more reliable, interpretable, and resistant to manipulation."
    }
  ],

  objective: "His research opens the black box of machine learning models to ensure robust, reliable, ethical, and transparent use in academic and industrial contexts. He studies vulnerabilities and failure modes, using penetration testing methodologies and defense design to create more secure and trustworthy AI systems.",

  timeline: [
    {
      title: "University of Trieste",
      meta: "2024 - Present · Tenure-track Assistant Professor",
      type: "Professional experience",
      logo: "assets/img/units.png",
      fallback: "UT"
    },
    {
      title: "University of Genoa",
      meta: "2023 - 2024 · Assistant Professor",
      type: "Professional experience",
      logo: "assets/img/unige.png",
      fallback: "UG"
    },
    {
      title: "CISPA Helmholtz Center for Information Security",
      meta: "2023 · Postdoctoral Researcher",
      type: "Professional experience",
      logo: "assets/img/cispa.png",
      fallback: "CISPA"
    },
    {
      title: "Ph.D. in Computer Science, Ca' Foscari University of Venice",
      meta: "2019 - 2023",
      type: "Education",
      logo: "assets/img/unive.png",
      fallback: "CF"
    },
    {
      title: "M.Sc. in Computer Science, Ca' Foscari University of Venice",
      meta: "2017 - 2019 · Summa cum laude",
      type: "Education",
      logo: "assets/img/unive.png",
      fallback: "CF"
    },
    {
      title: "B.Sc. in Computer Science, Ca' Foscari University of Venice",
      meta: "2014 - 2017 · Summa cum laude, Best Graduate",
      type: "Education",
      logo: "assets/img/unive.png",
      fallback: "CF"
    }
  ],

  publications: {
    journals: [
      {
        title: "Sonic: Fast and transferable data poisoning on clustering algorithms",
        venue: "Information Sciences",
        year: 2026,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:3fE2CSJIrl8C",
        authors: "Villani, F.; Lazzaro, D.; Cinà, Antonio Emanuele; Dell’Amico, M.; Biggio, B.; Roli, F.",
      },
      {
        title: "Evaluating the robustness of explainable AI in medical image recognition under natural and adversarial data corruption",
        venue: "Machine Learning",
        year: 2026,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:L8Ckcad2t8MC",
        authors: "Repetto, S.; Maljkovic, I.; Lotto, M.; Cinà, Antonio Emanuele; Vascon, S.; Roli, F.",
      },
      {
        title: "HORNET: Fast and minimal adversarial perturbations",
        venue: "Information Sciences",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:ZeXyd9-uunAC",
        authors: "Wu, J.; Cinà, Antonio Emanuele; Villani, F.; Xia, Z.; Demetrio, L.; Oneto, L.; Anguita, D.; Roli, F.; Feng, X.",
      },
      {
        title: "Poison Once, Fool Many: Practical Poisoning Attacks against Text-to-Image Retrieval Systems",
        venue: "Knowledge-Based Systems",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:7PzlFSSx8tAC",
        authors: "Lazzaro, D.; Mura, R.; Cinà, Antonio Emanuele; Laurita, G.; Vercelli, G.; Oneto, L.; Biggio, B.; Roli, F.",
      },
      {
        title: "On the robustness of adversarial training against uncertainty attacks",
        venue: "Pattern Recognition",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:Zph67rFs4hoC",
        authors: "Ledda, E.; Scodeller, G.; Angioni, D.; Piras, G.; Cinà, Antonio Emanuele; Fumera, G.; Biggio, B.; Roli, F.",
      },
      {
        title: "Rethinking Robustness in Machine Learning: A Posterior Agreement Approach",
        venue: "Transactions on Machine Learning Research (TMLR)",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:4TOpqqG69KYC",
        authors: "Carvalho, J. B. S.; Rodríguez, V. J.; Torcinovich, A.; Cinà, Antonio E.; Cotrini, C.; Schönherr, L.; Buhmann, J. M.",
      },
      {
        title: "Robust image classification with multi-modal large language models",
        venue: "Pattern Recognition Letters",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:ULOm3_A8WrAC",
        authors: "Villani, F.; Maljkovic, I.; Lazzaro, D.; Sotgiu, A.; Cinà, Antonio Emanuele; Roli, F.",
      },
      {
        title: "Energy-Latency Attacks via Sponge Poisoning",
        venue: "Information Sciences",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:qjMakFHDy7sC",
        authors: "Cinà, Antonio Emanuele; Demontis, A.; Biggio, B.; Roli, F.; Pelillo, M.",
      },
      {
        title: "Machine Learning Security against Data Poisoning: Are We There Yet?",
        venue: "IEEE Computer",
        year: 2024,
        authors: "Cinà, Antonio Emanuele; Grosse, K.; Demontis, A.; Biggio, B.; Roli, F.; Pelillo, M.",
      },
      {
        title: "Backdoor Learning Curves: Explaining Backdoor Poisoning Beyond Influence Functions",
        venue: "International Journal of Machine Learning and Cybernetics",
        year: 2024,
        authors: "Cinà, Antonio Emanuele; Grosse, K.; Vascon, S.; Demontis, A.; Zellinger, W.; Moser, B. A.; Biggio, B.; Oprea, A.; Pelillo, M.; Roli, F.",
      },
      {
        title: "Wild Patterns Reloaded: A Survey of Machine Learning Security against Training Data Poisoning",
        venue: "ACM Computing Surveys",
        year: 2023,
        authors: "Cinà, Antonio Emanuele; Grosse, K.; Demontis, A.; Vascon, S.; Zellinger, W.; Moser, B. A.; Biggio, B.; Oprea, A.; Pelillo, M.; Roli, F.",
      },
      {
        title: "Hardening RGB-D Object Recognition Systems against Adversarial Patch Attacks",
        venue: "Information Sciences",
        year: 2023,
        authors: "Zheng, Y.; Demetrio, L.; Cinà, Antonio Emanuele; Feng, X.; Xia, Z.; Jiang, X.; Demontis, A.; Biggio, B.; Roli, F.",
      },
      {
        title: "A Black-box Adversarial Attack for Poisoning Clustering",
        venue: "Pattern Recognition",
        year: 2022,
        authors: "Cinà, Antonio Emanuele; Torcinovich, A.; Pelillo, M.",
      }
    ],
    conferences: [
      {
        title: "Harnessing Hyperbolic Geometry for Harmful Prompt Detection and Sanitization",
        venue: "International Conference on Learning Representations (ICLR)",
        year: 2026,
        authors: "Maljkovic, I.; Briglia, M. R.; Masi, I.; Cinà, Antonio Emanuele; Roli, F.",
      },
      {
        title: "TransferBench: Benchmarking Ensemble-based Black-box Transfer Attacks",
        venue: "NeurIPS",
        year: 2025,
        authors: "Brau, F.; Pintor, M.; Cinà, Antonio Emanuele; Mura, R.; Scionis, L.; Oneto, L.; Roli, F.; Biggio, B.",
      },
      {
        title: "σ-zero: Gradient-based Optimization of ℓ0-norm Adversarial Examples",
        venue: "International Conference on Learning Representations (ICLR)",
        year: 2025,
        authors: "Cinà, Antonio Emanuele; Villani, F.; Pintor, M.; Schönherr, L.; Biggio, B.; Pelillo, M.",
      },
      {
        title: "AttackBench: Evaluating Gradient-based Attacks for Adversarial Examples",
        venue: "AAAI Conference on Artificial Intelligence (AAAI)",
        year: 2025,
        authors: "Cinà, Antonio Emanuele; Rony, J.; Pintor, M.; Demetrio, L.; Demontis, A.; Biggio, B.; Ben Ayed, I.; Roli, F.",
      },
      {
        title: "Code Generation of Smart Contracts with LLMs: A Case Study on Hyperledger Fabric",
        venue: "IEEE ISSRE",
        year: 2025,
        authors: "Olivieri, L.; Beste, D.; Negrini, L.; Schönherr, L.; Cinà, Antonio Emanuele; Ferrara, P.",
      },
      {
        title: "Pirates of Charity: Exploring Donation-based Abuses in Social Media Platforms",
        venue: "Proceedings of the ACM on Web Conference",
        year: 2025,
        authors: "Acharya, B.; Lazzaro, D.; Cinà, Antonio Emanuele; Holz, T.",
      },
      {
        title: "Exploring the Potential of LLMs for Code Deobfuscation",
        venue: "International Conference on Detection of Intrusions and Malware (DIMVA)",
        year: 2025,
        authors: "Beste, D.; Menguy, G.; Hajipour, H.; Fritz, M.; Cinà, Antonio Emanuele; Bardin, S.; Holz, T.; Eisenhofer, T.; Schönherr, L.",
      },
      {
        title: "Understanding XAI Through the Philosopher’s Glasses: A Historical Perspective",
        venue: "European Conference on Artificial Intelligence (ECAI)",
        year: 2024,
        authors: "Mattioli, M.; Cinà, Antonio Emanuele; Pelillo, M.",
      },
      {
        title: "The Imitation Game: Exploring Brand Impersonation Attacks on Social Media Platforms",
        venue: "USENIX Security Symposium",
        year: 2024,
        authors: "Acharya, B.; Lazzaro, D.; López-Morales, E.; Saad, M.; Cinà, Antonio Emanuele; Schönherr, L.; Holz, T.",
      },
      {
        title: "Conning the Crypto Conman: End-to-End Analysis of Cryptocurrency-based Technical Support Scams",
        venue: "IEEE Symposium on Security and Privacy (SP)",
        year: 2024,
        authors: "Acharya, B.; Saad, M.; Cinà, Antonio Emanuele; Schönherr, L.; Nguyen, H. D.; Oest, A.; Holz, T.",
      },
      {
        title: "Toward Measuring and Understanding the Overvalidation Phenomena",
        venue: "International Conference on Machine Learning and Applications",
        year: 2024,
        authors: "Mori, F.; Cinà, Antonio Emanuele; Roli, F.; Anguita, D.; Oneto, L.",
      },
      {
        title: "Minimizing Energy Consumption of Deep Learning Models by Energy-Aware Training",
        venue: "International Conference on Image Analysis and Processing (ICIAP)",
        year: 2023,
        authors: "Lazzaro, D.; Cinà, Antonio Emanuele; Pintor, M.; Demontis, A.; Biggio, B.; Roli, F.; Pelillo, M.",
      },
      {
        title: "Stealing with Uncertainty Quantification Models",
        venue: "European Symposium on Artificial Neural Networks, Computational Intelligence and Machine Learning (ESANN)",
        year: 2023,
        authors: "Pape, D.; Däubener, S.; Eisenhofer, T.; Cinà, Antonio Emanuele; Schönherr, L.",
      },
      {
        title: "The Hammer and the Nut: Is Bilevel Optimization Really Needed to Poison Linear Classifiers?",
        venue: "International Joint Conference on Neural Networks (IJCNN)",
        year: 2021,
        authors: "Cinà, Antonio Emanuele; Vascon, S.; Demontis, A.; Biggio, B.; Roli, F.; Pelillo, M.",
      }
    ]
  },

  talks: {
    conference: [
      { year: 2026, title: "Harnessing Hyperbolic Geometry for Harmful Prompt Detection and Sanitization", venue: "ICLR" },
      { year: 2025, title: "TransferBench: Benchmarking Ensemble-based Black-box Transfer Attacks", venue: "NeurIPS" },
      { year: 2025, title: "Code Generation of Smart Contracts with LLMs: A Case Study on Hyperledger Fabric", venue: "IEEE ISSRE" },
      { year: 2025, title: "Exploring the potential of llms for code deobfuscation", venue: "DIMVA" },
      { year: 2025, title: "AttackBench: Evaluating Gradient-based Attacks for Adversarial Examples", venue: "AAAI" },
      { year: 2023, title: "On the Limitations of Model Stealing with Uncertainty Quantification Models", venue: "ICML Workshop: New Frontiers in Adversarial Machine Learning" }
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
      { year: 2025, title: "Evaluating the Evaluators: Trust in Adversarial Robustness Tests", venue: "Ital-IA 2025" },
      { year: 2025, title: "Vulnerability Assessment of LLM-Generated Smart Contracts in Ethereum", venue: "CEUR Workshop Proceedings" },
      { year: 2024, title: "Foundations of LLMs, Applications, and Security Risks", venue: "PRALAB, University of Cagliari" },
      { year: 2024, title: "Data & MLOps in Sustainable Transportation & Logistics", venue: "University of Pisa, Spoke 10 PNRR" },
      { year: 2024, title: "Handling Scientific Experiments with HPC Clusters & Slurm", venue: "PRALAB, University of Cagliari" },
      { year: 2023, title: "Training with Malicious Teachers", venue: "SoSySec Seminar, INRIA" },
      { year: 2023, title: "Dose Makes the Poison", venue: "SAILab, Siena" },
      { year: 2023, title: "Dose Makes the Poison", venue: "SmartLab, Prof. Fabio Roli" }
    ]
  }
};
