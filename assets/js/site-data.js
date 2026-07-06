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
    "AI for cybersecurity applications",
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
      logo: "https://www.google.com/s2/favicons?domain=units.it&sz=96",
      fallback: "UT"
    },
    {
      title: "University of Genoa",
      meta: "2023 - 2024 · Assistant Professor",
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
      {
        title: "Sonic: Fast and transferable data poisoning on clustering algorithms",
        venue: "Information Sciences",
        year: 2026,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:3fE2CSJIrl8C"
      },
      {
        title: "Evaluating the robustness of explainable AI in medical image recognition under natural and adversarial data corruption",
        venue: "Machine Learning",
        year: 2026,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:L8Ckcad2t8MC"
      },
      {
        title: "HORNET: Fast and minimal adversarial perturbations",
        venue: "Information Sciences",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:ZeXyd9-uunAC"
      },
      {
        title: "Poison Once, Fool Many: Practical Poisoning Attacks against Text-to-Image Retrieval Systems",
        venue: "Knowledge-Based Systems",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:7PzlFSSx8tAC"
      },
      {
        title: "On the robustness of adversarial training against uncertainty attacks",
        venue: "Pattern Recognition",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:Zph67rFs4hoC"
      },
      {
        title: "Rethinking Robustness in Machine Learning: A Posterior Agreement Approach",
        venue: "Transactions on Machine Learning Research (TMLR)",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:4TOpqqG69KYC"
      },
      {
        title: "Robust image classification with multi-modal large language models",
        venue: "Pattern Recognition Letters",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:ULOm3_A8WrAC"
      },
      {
        title: "Energy-Latency Attacks via Sponge Poisoning",
        venue: "Information Sciences",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:qjMakFHDy7sC"
      },
      {
        title: "Backdoor Learning Curves: Explaining Backdoor Poisoning Beyond Influence Functions",
        venue: "International Journal of Machine Learning and Cybernetics",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:2osOgNQ5qMEC"
      },
      {
        title: "Machine Learning Security against Data Poisoning: Are We There Yet?",
        venue: "IEEE Computer",
        year: 2024
      },
      {
        title: "Wild Patterns Reloaded: A Survey of Machine Learning Security against Training Data Poisoning",
        venue: "ACM Computing Surveys",
        year: 2023
      },
      {
        title: "Hardening RGB-D Object Recognition Systems against Adversarial Patch Attacks",
        venue: "Information Sciences",
        year: 2023
      },
      {
        title: "A Black-box Adversarial Attack for Poisoning Clustering",
        venue: "Pattern Recognition",
        year: 2022
      }
    ],
    conferences: [
      {
        title: "Harnessing Hyperbolic Geometry for Harmful Prompt Detection and Sanitization",
        venue: "International Conference on Learning Representations (ICLR)",
        year: 2026,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:hFOr9nPyWt4C"
      },
      {
        title: "TransferBench: Benchmarking Ensemble-based Black-box Transfer Attacks",
        venue: "NeurIPS",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:QIV2ME_5wuYC"
      },
      {
        title: "AttackBench: Evaluating Gradient-based Attacks for Adversarial Examples",
        venue: "AAAI Conference on Artificial Intelligence (AAAI)",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:UebtZRa9Y70C"
      },
      {
        title: "Pirates of Charity: Exploring Donation-based Abuses in Social Media Platforms",
        venue: "Proceedings of the ACM on Web Conference",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:YOwf2qJgpHMC"
      },
      {
        title: "Code Generation of Smart Contracts with LLMs: A Case Study on Hyperledger Fabric",
        venue: "IEEE ISSRE",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:dhFuZR0502QC"
      },
      {
        title: "Exploring the potential of llms for code deobfuscation",
        venue: "International Conference on Detection of Intrusions and Malware",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:4DMP91E08xMC"
      },
      {
        title: "Evaluating the Evaluators: Trust in Adversarial Robustness Tests",
        venue: "Ital-IA 2025: 5th National Conference on Artificial Intelligence",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:M3ejUd6NZC8C"
      },
      {
        title: "Vulnerability Assessment of LLM-Generated Smart Contracts in Ethereum",
        venue: "CEUR Workshop Proceedings",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:9ZlFYXVOiuMC"
      },
      {
        title: "σ-zero: Gradient-based Optimization of ℓ0-norm Adversarial Examples",
        venue: "International Conference on Learning Representations (ICLR)",
        year: 2025,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=Qtj8Lb8AAAAJ&sortby=pubdate&citation_for_view=Qtj8Lb8AAAAJ:MXK_kJrjxJIC"
      },
      {
        title: "Understanding XAI Through the Philosopher’s Glasses: A Historical Perspective",
        venue: "European Conference on Artificial Intelligence (ECAI)",
        year: 2024
      },
      {
        title: "The Imitation Game: Exploring Brand Impersonation Attacks on Social Media Platforms",
        venue: "USENIX Security Symposium",
        year: 2024
      },
      {
        title: "Conning the Crypto Conman: End-to-End Analysis of Cryptocurrency-based Technical Support Scams",
        venue: "IEEE Symposium on Security and Privacy (SP)",
        year: 2024
      },
      {
        title: "Minimizing Energy Consumption of Deep Learning Models by Energy-Aware Training",
        venue: "International Conference on Image Analysis and Processing (ICIAP)",
        year: 2023
      },
      {
        title: "Stealing with Uncertainty Quantification Models",
        venue: "European Symposium on Artificial Neural Networks, Computational Intelligence and Machine Learning (ESANN)",
        year: 2023
      },
      {
        title: "The Hammer and the Nut: Is Bilevel Optimization Really Needed to Poison Linear Classifiers?",
        venue: "International Joint Conference on Neural Networks (IJCNN)",
        year: 2021
      }
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
