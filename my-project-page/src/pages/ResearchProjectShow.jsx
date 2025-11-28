// ResearchProjectShow.tsx / ResearchProjectShow.jsx

const medicalAIProject = {
  title: "Synthetic-First Perception and Data Engine for Medical AI",
  subtitle:
    "Oriented research on high-precision spatial perception and data-centric pipelines for deltoid injection assistance and embodied medical intelligence.",

  summary: {
    problem:
      "Real medical perception data are rare due to privacy restrictions, uneven lighting, limited patient diversity, and expensive expert labeling. These constraints limit the performance and generalizability of models designed for deltoid injection understanding.",
    theme:
      "We build a scalable Synthetic Data Engine that can generate, filter, and iterate on large volumes of anatomically valid training data, enabling synthetic-only or synthetic-first training. We further integrate an anthropometric, explainable framework for projecting safe intramuscular injection zones.",
    result:
      "Synthetic-only training achieves ≥90% real-data AP, with MAPE ≤ 8% and dist% ≤ 10%. Mixed synthetic–real training further improves performance, and our anthropometric framework provides consistent, interpretable safety-zone guidance.",
  },

  background: {
    intro:
      "Deltoid intramuscular injection is a routine yet safety-critical clinical procedure. In busy clinics, inaccurate landmarking and cognitive overload can lead to misplaced injections and potential nerve damage. At the same time, privacy constraints and limited labeled data make it difficult to train robust vision models for this task.",
    challenges: [
      {
        question: "Q1 · Can a scalable Synthetic Data Engine accelerate training for rare, privacy-restricted medical perception tasks? ",
        answer:
          "The deltoid region, arm posture, anatomical landmarks, and safe-zone boundaries in RGB or AR views.",
      },
      {
        question: "Q2 · Can purely synthetic images achieve segmentation performance comparable to real-image training?",
        answer:
          "Injection images are constrained by medical privacy rules, uneven lighting, limited population coverage, and expensive expert annotation.",
      },
      {
        question: "Q3 · How can we provide explainable, anatomically grounded guidance for safe intramuscular injection based on perception outputs?",
        answer:
          "Generic segmentation models lack domain-specific priors and provide no interpretable concept of safe injection zones or safety margins.",
      },
    ],
    images: [
      {
        src: "bg_data_collection_issue1.png",
        alt: "Clinical data collection limitations",
        caption: "Limited real injection data due to privacy and clinical workflow constraints."
      },
      {
        src: "bg_data_collection_issue2.png",
        alt: "Lighting and pose variation",
        caption: "Inconsistent lighting, arm posture, and occlusions affect data quality."
      },
      {
        src: "bg_data_labeling_issue.png",
        alt: "Annotation burden",
        caption: "Expert labeling is costly and difficult to scale for medical datasets."
      }
    ]
  },

  contributions: [
    "A modular, scalable Synthetic Data Engine for rare medical perception tasks.",
    "An anthropometry-based, explainable geometric framework for safe injection-zone estimation.",
    "Dataset quality evaluation and a curated deltoid-segmentation dataset for downstream training and benchmarking.",
  ],

  methods: {
    steps: [
      "Cold-start: define the task, collect a small seed set of real images, and filter out low-quality examples.",
      "Controlled T2I synthesis: generate deltoid scenes with controlled pose, BMI, clothing, and lighting conditions.",
      "Quality filtering: use CLIP-based scores and geometric sanity checks to discard anatomically implausible images.",
      "Iterative segmentation training: train a YOLO-based segmentation model, periodically mixing in the limited real labels.",
      "Safe-zone inference and AR overlay: estimate the arm axis, project anthropometric safety bands, and overlay guidance in real time.",
    ],
  },

  resultsImages: [
    {
      src: "result1.png",
      alt: "Performance across synthetic-only datasets",
      caption: "Figure 7. Performance across synthetic-only datasets of varying sizes (50–345).",
    },
    {
      src: "result2.png",
      alt: "Core metrics on synthetic dataset",
      caption: "Figure 12. Performance effect of mixed synthetic-real training.",
    },
    {
      src: "result3.png",
      alt: "Gap between real-test and synthetic-test evaluation",
      caption: "Figure 9. Gap between real-test and synthetic-test evaluation.",
    },
    {
      src: "result4.png",
      alt: "Relationship between task success and IoU",
      caption: "Figure 10. Relationship between task success and IoU.",
    },
  ],

  contact: {
    email: "yshen4@students.kennesaw.edu",
  },
};

function SummaryCard({ title, content }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-700">{content}</p>
    </div>
  );
}

function BackgroundQA({ q, a }) {
  return (
    <div className="rounded-xl bg-slate-50 px-3 py-2">
      <p className="text-xs font-semibold text-slate-900">{q}</p>
      <p className="mt-1 text-xs text-slate-700">{a}</p>
    </div>
  );
}

function MetricCard({
  label,
  value,
  desc,
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-600">{desc}</p>
    </div>
  );
}

function ResearchProjectShow() {
  const p = medicalAIProject;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8 lg:px-16">
      <main className="mx-auto max-w-5xl space-y-10">
        {/* 1. Header */}
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            Research Project
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {p.title}
          </h1>
          <p className="text-sm text-slate-600">{p.subtitle}</p>
        </header>

        {/* 2. Three-block summary: Problem / Theme / Outcome */}
        <section className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm sm:grid-cols-3">
          <SummaryCard title="Problem" content={p.summary.problem} />
          <SummaryCard title="Theme" content={p.summary.theme} />
          <SummaryCard title="Outcome" content={p.summary.result} />
        </section>

        {/* 3. Background & clinical context */}
        <section className="grid gap-8 lg:grid-cols-[3fr,2fr]">
          {/* Left: text + Q&A */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Background &amp; Clinical Context
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              {p.background.intro}
            </p>

            <div className="mt-4 space-y-3 rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Key Questions
              </p>
              {p.background.challenges.map((item) => (
                <BackgroundQA key={item.question} q={item.question} a={item.answer} />
              ))}
            </div>
          </div>

          {/* Right: image placeholders */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-slate-900">
              Data Collection & Labeling Gap
            </h3>

            {/* Dynamic grid (1/2/3 columns depending on screen) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

              {p.background.images?.map((img) => (
                <div
                  key={img.src}
                  className="rounded-2xl overflow-hidden bg-white shadow-sm"
                >
                  <div className="aspect-video bg-slate-100">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full "
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* 4. Contributions */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Motivation &amp; Contributions
          </h2>
          <p className="text-sm text-slate-700">
            Instead of treating data scarcity as a fixed limitation, this project asks:{" "}
            <span className="font-medium">
              “What if we design a synthetic-first engine that continuously generates,
              filters, and reuses data to train reliable medical perception models?”
            </span>
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {p.contributions.map((c, idx) => (
              <li key={idx} className="rounded-2xl bg-white p-4 text-sm shadow-sm">
                <p className="font-medium text-slate-900">
                  C{idx + 1} · {c.split(":")[0]}
                </p>
                <p className="mt-1 text-slate-700">{c}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Method design */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Method Design &amp; Data Engine
          </h2>
          <p className="text-sm text-slate-700">
            The system is organized as a high-efficiency data engine plus a safety-aware
            perception module:
          </p>
          <ol className="space-y-3 text-sm text-slate-700 list-decimal list-inside">
            {p.methods.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>

          <div className="mt-3 rounded-2xl bg-white p-4 shadow-sm">
            <div className="aspect-video rounded-xl bg-slate-200">
              {/* Replace with pipeline figure */}
              {/* <div className="flex h-full items-center justify-center text-xs text-slate-500">
                Pipeline diagram: Synthetic Data Engine → Segmentation Model → Safe-Zone
                Overlay (image placeholder)
              </div > */}
              <img className="flex h-full items-center justify-center text-xs text-slate-500" src="/overall_architecture.png" alt="" />
              {/* <img src="/overall_architecture_suffix.png" alt="" /> */}
            </div>
          </div>
        </section>

        {/* 6. Evaluation results */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Evaluation &amp; Key Results
          </h2>
          <p className="text-sm text-slate-700">
            We summarize core quantitative results and synthetic→real generalization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.resultsImages?.map((fig) => (
              <div
                key={fig.src}
                className="rounded-2xl overflow-hidden bg-white shadow"
              >
                <div className="aspect-video bg-slate-100">
                  <img
                    src={fig.src}
                    alt={fig.alt}
                    className="h-full w-full"
                  />
                </div>
                {fig.caption && (
                  <p className="text-xs text-slate-500 p-3">{fig.caption}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* demo */}
        <section>
          <p> Demo </p>
          <video
            src="/perception_demo.mp4"
            controls
            className="rounded-xl w-full shadow"
            autoPlay={false}
            muted={false}
          />
      </section>
      <img className="flex h-full items-center justify-center text-xs text-slate-500" src="/resut4.png" alt="" />
        {/* 7. Resources & contact */}
        <section className="space-y-3 border-t border-dashed border-slate-200 pt-6">
          <h2 className="text-sm font-semibold text-slate-900">
            Resources &amp; Contact
          </h2>
          <ul className="flex flex-wrap gap-3 text-sm">
            <li>
              <a
                href="https://github.com/"
                className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:border-sky-400 hover:text-sky-700"
              >
                GitHub Code (coming soon)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:border-sky-400 hover:text-sky-700"
              >
                Paper / Preprint  (coming soon)
              </a>
            </li>
          </ul>
          <p className="text-xs text-slate-500">
            Contact:{" "}
            <a
              href={`mailto:${p.contact.email}`}
              className="font-medium text-sky-700 underline-offset-2 hover:underline"
            >
              {p.contact.email}
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default ResearchProjectShow;
