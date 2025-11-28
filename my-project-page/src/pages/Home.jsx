// src/App.jsx
import "../App.css";
import { useNavigate } from 'react-router-dom'


import { publications,researchProjects } from "../libs/config";
function App() {
  const navigate = useNavigate()
  const link= (url,id) => {
    url? navigate(`${url}/${id?id:''}`):null
  }
  return (
    <div className="page">
      {/* ====== 顶部简介（About / Hero） ====== */}
      <header className="hero">
        {/* 左侧头像 */}
        <div className="hero-photo">
          <img src="yukang.jpg" alt="Yukang Shen" />
        </div>

        {/* 右侧文字块 */}
        <div className="hero-text">
          <h1 className="name">Yukang Shen</h1>

          <p className="hero-title">
            Graduate Research Assistant · M.S. Software Engineering,  
            Kennesaw State University
          </p>

          <p className="hero-desc">
            I work on synthetic data engines, medical perception, and  
            embodied AI systems. My research focuses on  
            <strong>synthetic-to-real transfer</strong>,  
            <strong>safe injection perception</strong>, and  
            <strong> data-centric VLA systems</strong> for AR-guided  
            medical assistance.
          </p>

          {/* 链接区域 */}
          <div className="hero-links">
            <a href="mailto:shenyukang99@gmail.com">Email</a>
            <span>·</span>
            <a href="https://github.com/Shen-Yukang" target="_blank">GitHub</a>
            <span>·</span>
            <a href="/phD_CV_Yukang.pdf" target="_blank" rel="noreferrer">
            Full CV (PDF)
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        {/* ====== Section 1: About / Research Background ====== */}
        <section className="section">
          <h2>About</h2>
          <p>
           I am a Graduate Research Assistant at Kennesaw State University working on synthetic-first perception, high-precision spatial reasoning, and data-centric embodied AI (Vision–Language–Action systems) for medical and healthcare applications.
          </p>
          <p>
            My research focuses on designing synthetic-first pipelines, multi-stage perception systems (segmentation → keypoints → geometry), uncertainty modeling, and safety-aware visual guidance for deltoid intramuscular injection and AR-assisted procedures.
          </p>
          <p>Prior to academia, I worked as a Software Engineer at <strong>SenseTime</strong> (CIT team), building AR-assisted navigation platforms and engineering systems for large-scale CV applications. I also previously worked at <strong>Baidu</strong> as a intern.
        </p>
          <p className="about-keywords">
            <strong>Research interests:</strong> Cross-disciplinary spatial perception, physics-informed sensing, embodied intelligence for medical and healthcare scenario.
          </p>
        </section>

        {/* ====== Section 2: Research Projects ====== */}
        <section className="section">
          <h2>Research</h2>
          <p className="section-intro">
            I currently work on synthetic-first pipelines and safety-aware perception
            modules for embodied AI systems, with a focus on medical injection scenarios
            and AR guidance.
          </p>

          <div className="project-list">
            {researchProjects.map((proj) => (
              <article key={proj.title} className="project-card" onClick={()=>link(proj.url,proj.rp_id)}>
                {/* 左侧文字区 */}
                <div className="project-main">
                  <div className="project-header">
                    <h3>{proj.title}</h3>
                    <div>{proj.tags.map((tag)=>{
                      return <span className="project-tag" style={{backgroundColor:tag.color, color:tag.fontColor}}>{tag.text}</span>
                    })}</div>
                    
                  </div>
                  <p className="project-meta">{proj.time}</p>
                  <p className="project-description">{proj.description}</p>
                  <ul className="project-bullets">
                    {proj.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                {/* 右侧 media 区（图片 / 视频 / 预留空位） */}
                <div className="project-media">
                  {proj.media ? (
                    proj.media.type === "image" ? (
                      <img
                        src={proj.media.src}
                        alt={proj.media.alt}
                        className="project-media-img"
                      />
                    ) : (
                      <div className="project-media-video-wrapper">
                        <iframe
                          src={proj.media.embedUrl}
                          title={proj.title}
                          loading="lazy"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )
                  ) : (
                    <div className="project-media-placeholder">
                      {/* 没有 media 的时候可以留白，或者写 Coming soon */}
                      {/* <span>Media coming soon</span> */}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ====== Section 3: Publications ====== */}
        <section className="section">
          <h2>Publications</h2>
          <ul className="pub-list">
            {publications.map((p) => (
              <a key={p.title} className="pub-item" href={p.url}>
                <div className="pub-main">
                  <span className="pub-year">{p.year}</span>
                  <div className="pub-title">{p.title}</div>
                  <div className="pub-authors">{p.authors}</div>
                  <div className="pub-venue">{p.venue}</div>
                </div>
                <div className="pub-media">
                  {p.media && (
                    <img
                      src={p.media.src}
                      alt={p.media.alt}
                      className="pub-media-img"
                    />
                  )}
                </div>
              </a>
            ))}
          </ul>
          {/* 以后有更多论文，就按这个结构往 publications 数组里加即可 */}
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Yukang Shen · Built with React & Vite
      </footer>
    </div>
  );
}

export default App;
