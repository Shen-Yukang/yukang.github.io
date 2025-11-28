export const MedicalAIProject = {
  title: "Synthetic-First Perception and Data Engine for Medical AI",
  subtitle:
    "Ph.D.-oriented research on high-precision spatial perception and data-centric pipelines for deltoid injection assistance and embodied medical intelligence.",

  summary: {
    problem:
      "Real medical perception data are scarce due to privacy restrictions, uneven lighting, body-shape diversity, and high annotation cost, making it difficult for models to reliably identify deltoid injection regions.",
    theme:
      "A Synthetic-First Data Engine that integrates cold-start filtering, controlled text-to-image generation, CLIP-based quality evaluation, iterative segmentation training, and an anthropometry-grounded safe-zone formulation.",
    result:
      "+XX% segmentation IoU with only limited real labels, generalizable to real patients with anatomically interpretable safe-zone projections.",
  },

  background: {
    intro:
      "Deltoid intramuscular injection is a routine yet safety-critical clinical procedure. In busy clinics, inaccurate landmarking and cognitive overload can lead to misplaced injections and potential nerve damage.",
    challenges: [
      {
        question: "Q1: What should the perception model actually identify?",
        answer:
          "The deltoid region, arm posture, anatomical landmarks, and safe-zone boundaries in RGB or AR views.",
      },
      {
        question: "Q2: Why is the data limited?",
        answer:
          "Injection images are restricted by medical privacy rules, uneven lighting, limited diversity, and expensive expert labeling.",
      },
      {
        question: "Q3: Why do existing methods fail?",
        answer:
          "General segmentation models lack domain-specific priors and provide no interpretable concept of safe injection zones.",
      },
    ],
  },

  contributions: [
    "A modular, scalable Synthetic Data Engine for rare medical perception tasks.",
    "An anthropometry-based, explainable geometric framework for safe injection-zone estimation.",
    "Dataset quality evaluation and a curated deltoid-segmentation dataset for downstream training and benchmarking.",
  ],

  methods: {
    pipelineImage: "/images/data_engine_pipeline.png",
    steps: [
      "Cold-start filtering and task definition.",
      "Controlled T2I synthesis with pose, BMI, clothing, and lighting constraints.",
      "CLIP-based and geometry-based quality filtering.",
      "Iterative YOLOv11-Seg training with mixed synthetic–real data.",
      "Safe-zone inference and AR overlay based on arm-axis estimation.",
    ],
  },

  results: {
    metricHighlights: [
      {
        label: "Segmentation IoU",
        value: "+XX%",
        desc: "Improvement over real-only baseline with minimal real labels",
      },
      {
        label: "MAPE (Safe-Zone Error)",
        value: "< 8%",
        desc: "Reliable anthropometric localization",
      },
      {
        label: "Real Labels Needed",
        value: "Very few",
        desc: "Achieves real-level performance with minimal supervision",
      },
    ],
    evaluationImages: [
      "/images/eval-performance.png",
      "/images/eval-domain-gap.png",
      "/images/eval-safetyband.png",
    ],
  },

  contact: {
    email: "yshen4@students.kennesaw.edu",
  },
};
