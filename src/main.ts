import './style.css'
import { initLogo3D } from './logo3d'

const whatsapp = 'https://wa.me/5491173647291'
const instagram = 'https://www.instagram.com/ddelacruzdigital'

const projects = [
  ['Motomecánica','Motos y mecánica','https://motomecanica.netlify.app/','motomecanica.png'],
  ['Sabores del Océano','Gastronomía','https://saboresdeloceano.netlify.app/','oceano.jpg'],
  ['Paredes Motos','Motos y repuestos','https://paredesmotos.netlify.app/','paredes.jpg'],
  ['Rodados Álvaro','Motos y repuestos','https://alvarorodados.netlify.app/','alvaro.jpg'],
  ['Lo de Darío','Parrilla y restaurante','https://lodedariorestaurante.netlify.app/','lodedario.jpg'],
  ['Peluquería Marilen','Belleza y estética','https://peluqueriamarilen.netlify.app/','marilen.png'],
  ['Los Cristales','Restaurante','https://loscristales.netlify.app/','loscristales.jpg'],
  ['Rabanal Dietética','Comercio y alimentación','https://rabanaldietetica.netlify.app/','rabanal.jpg'],
  ['Melanzane','Gastronomía','https://melanzane.netlify.app/','melanzane.jpg'],
  ['Taller Feltes','Mecánica especializada','https://tallerfeltes.netlify.app/','feltes.jpg'],
  ['Café Bar El Capi','Café y gastronomía','https://cafebarelcapi.netlify.app/','elcapi.jpg'],
  ['Verdulería Jaime','Comercio y alimentación','https://verduleriajaime.netlify.app/','verduleriajaime.png'],
  ['Elizabeth De Chiara','Servicios profesionales','https://elizabethdechiara.netlify.app/','Elizabeth.jpg']
]

const projectCards = projects.map(([name, category, url, image], index) => `
  <article class="project-card reveal">
    <div class="project-visual">
      <img class="project-image" src="/images/${image}" alt="${name}" loading="lazy">
      <span class="project-number">PROYECTO ${String(index + 1).padStart(2,'0')}</span>
    </div>
    <div class="project-info">
      <span class="project-category">${category}</span>
      <h3>${name}</h3>
      <p>Diseño y desarrollo de presencia digital para una marca real.</p>
      <a class="project-link" href="${url}" target="_blank" rel="noopener">VISITAR PROYECTO <span>↗</span></a>
    </div>
  </article>
`).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="intro-screen" id="intro">
    <div class="intro-grid"></div>
    <div class="intro-particles"></div>
    <div class="intro-logo-wrap">
      <div class="logo-stage">
        <div class="logo-depth"></div>
        <img src="/images/logo.jpg" class="intro-logo" alt="DC Digital">
      </div>
      <div class="logo-light"></div>
    </div>
    <div class="intro-brand">DC <span>DIGITAL</span></div>
    <p class="intro-caption">EL FUTURO DE TU NEGOCIO COMIENZA AQUÍ</p>
    <div class="intro-progress"><span></span></div>
    <button class="skip-intro" id="skipIntro">ENTRAR ↗</button>
  </div>

  <div class="site-shell">
    <header class="topbar">
      <a href="#inicio" class="brand-mini">
        <img src="/images/logo.jpg" alt="DC Digital">
        <span>DC<span class="blue">DIGITAL</span></span>
      </a>
      <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú">☰</button>
      <nav id="navigation">
        <a href="#inicio">INICIO</a>
        <a href="#servicios">SERVICIOS</a>
        <a href="#proyectos">PROYECTOS</a>
        <a href="#nosotros">NOSOTROS</a>
        <a href="#contacto" class="nav-contact">HABLEMOS ↗</a>
      </nav>
    </header>

    <main>
      <section class="hero section" id="inicio">
        <div class="hero-glow"></div>
        <div class="hero-copy reveal">
          <span class="eyebrow"><i></i> ESTUDIO DE DESARROLLO DIGITAL</span>
          <h1>TU NEGOCIO.<br>EN OTRA <span>DIMENSIÓN.</span></h1>
          <p class="hero-description">Diseñamos y desarrollamos páginas web y aplicaciones móviles desde cero. Creamos experiencias digitales que hacen que tu marca se destaque, conecte y crezca.</p>
          <div class="hero-actions">
            <a class="button-primary" href="${whatsapp}" target="_blank">QUIERO DIGITALIZAR MI NEGOCIO ↗</a>
            <a class="button-outline" href="#proyectos">VER TRABAJOS</a>
          </div>
          <div class="hero-proof">
            <div><strong>13+</strong><span>PROYECTOS REALES</span></div>
            <div><strong>100%</strong><span>DISEÑO PERSONALIZADO</span></div>
            <div><strong>∞</strong><span>POSIBILIDADES</span></div>
          </div>
        </div>
        <div class="hero-art reveal">
          <div class="hero-ring ring-one"></div>
          <div class="hero-ring ring-two"></div>
          <div class="hero-logo-card">
            <div class="logo3d-host" id="dcLogo3D" aria-label="Logo DC Digital tridimensional"></div>
          </div>
          <span class="floating-tag tag-one">✦ DISEÑO CREATIVO</span>
          <span class="floating-tag tag-two">⌘ DESARROLLO DIGITAL</span>
          <span class="floating-tag tag-three">◉ INNOVACIÓN</span>
        </div>
        <a class="scroll-cue" href="#servicios">DESCUBRÍ LO QUE PODEMOS HACER <span>↓</span></a>
      </section>

      <section class="marquee" aria-label="Servicios">
        <div class="marquee-track">
          <span>DISEÑO WEB DESDE CERO ✳</span><span>APLICACIONES MÓVILES ✳</span><span>IDENTIDAD DIGITAL ✳</span><span>PUBLICIDAD ONLINE ✳</span><span>DISEÑO WEB DESDE CERO ✳</span><span>APLICACIONES MÓVILES ✳</span><span>IDENTIDAD DIGITAL ✳</span><span>PUBLICIDAD ONLINE ✳</span>
        </div>
      </section>

      <section class="section services-section" id="servicios">
        <div class="section-heading reveal">
          <span class="eyebrow"><i></i> LO QUE HACEMOS</span>
          <h2>IDEAS QUE SE<br>CONVIERTEN EN <span>REALIDAD.</span></h2>
          <p>No ofrecemos soluciones genéricas. Diseñamos herramientas digitales a medida para que cada negocio tenga su propia identidad.</p>
        </div>
        <div class="services-grid">
          <article class="service-card reveal">
            <span class="service-icon">◈</span><span class="service-index">01 / WEB</span>
            <h3>PÁGINAS WEB<br>DESDE CERO</h3>
            <p>Diseñamos páginas web únicas, modernas y profesionales. Cada detalle se construye para representar la identidad de tu negocio.</p>
            <ul><li>Diseño personalizado</li><li>Adaptación a celulares</li><li>Publicación en internet</li><li>Botones de contacto y consultas</li></ul>
            <a href="${whatsapp}" target="_blank">COTIZAR MI PÁGINA ↗</a>
          </article>
          <article class="service-card featured-service reveal">
            <span class="service-icon">▣</span><span class="service-index">02 / APPS</span>
            <h3>APLICACIONES<br>MÓVILES</h3>
            <p>Convertimos ideas en aplicaciones Android. Tu negocio puede tener su propia aplicación, diseñada para ofrecer una experiencia diferente.</p>
            <ul><li>Aplicaciones Android</li><li>Interfaces modernas</li><li>Funciones a medida</li><li>Experiencias móviles</li></ul>
            <a href="${whatsapp}" target="_blank">CREAR MI APLICACIÓN ↗</a>
          </article>
          <article class="service-card reveal">
            <span class="service-icon">✳</span><span class="service-index">03 / MARCA</span>
            <h3>PRESENCIA<br>DIGITAL</h3>
            <p>Hacemos que tu marca tenga una imagen profesional y una presencia online preparada para llegar a nuevos clientes.</p>
            <ul><li>Catálogos digitales</li><li>Presentación de productos</li><li>Integración con WhatsApp</li><li>Diseño de identidad online</li></ul>
            <a href="${whatsapp}" target="_blank">IMPULSAR MI MARCA ↗</a>
          </article>
          <article class="service-card reveal">
            <span class="service-icon">⌁</span><span class="service-index">04 / PROMOCIÓN</span>
            <h3>PUBLICIDAD Y<br>COMUNICACIÓN</h3>
            <p>Tu negocio necesita ser visto. Creamos espacios digitales y recursos promocionales para comunicar lo que ofrecés y atraer oportunidades.</p>
            <ul><li>Promoción de negocios</li><li>Comunicación comercial</li><li>Campañas y contenidos</li><li>Vitrinas digitales</li></ul>
            <a href="${whatsapp}" target="_blank">PROMOCIONAR MI NEGOCIO ↗</a>
          </article>
        </div>
      </section>

      <section class="ad-banner">
        <div class="ad-orb"></div>
        <div class="ad-content reveal">
          <span class="eyebrow"><i></i> TU PRÓXIMO PASO</span>
          <h2>¿TODAVÍA NO TENÉS<br><span>PÁGINA WEB?</span></h2>
          <p>Mientras tus clientes buscan negocios en internet, tu marca también puede estar ahí. Mostrá tus productos, tus servicios, tus horarios y tus medios de contacto en una web profesional.</p>
          <a class="button-primary" href="${whatsapp}" target="_blank">QUIERO MI PÁGINA WEB ↗</a>
        </div>
        <div class="ad-side-text">TU MARCA MERECE SER VISTA</div>
      </section>

      <section class="section portfolio-section" id="proyectos">
        <div class="section-heading reveal">
          <span class="eyebrow"><i></i> TRABAJOS REALIZADOS</span>
          <h2>PROYECTOS REALES.<br><span>RESULTADOS DIGITALES.</span></h2>
          <p>Estos son algunos de los negocios que ya tienen su espacio digital desarrollado por DC Digital. Cada proyecto tiene su propia identidad.</p>
        </div>
        <div class="portfolio-count"><strong>13</strong><span>PROYECTOS PUBLICADOS</span><span class="count-line"></span><span>EXPLORÁ LOS TRABAJOS ↘</span></div>
        <div class="projects-grid">${projectCards}</div>
        <div class="portfolio-cta reveal">
          <h3>EL PRÓXIMO PROYECTO<br>PUEDE SER EL TUYO.</h3>
          <a class="button-primary" href="${whatsapp}" target="_blank">HABLEMOS DE TU IDEA ↗</a>
        </div>
      </section>

      <section class="why-section section" id="nosotros">
        <div class="why-visual reveal">
          <div class="why-orbit"></div>
          <div class="why-symbol">DC<span>.</span></div>
          <div class="why-label">DIGITAL CREATION</div>
        </div>
        <div class="why-copy reveal">
          <span class="eyebrow"><i></i> NUESTRA VISIÓN</span>
          <h2>NO HACEMOS<br>LO DE SIEMPRE.<br><span>CREAMOS LO<br>QUE VIENE.</span></h2>
          <p>En DC Digital creemos que cada negocio merece una presencia digital a su altura. Por eso diseñamos desde cero, escuchamos cada idea y desarrollamos soluciones con identidad propia.</p>
          <p>Trabajamos con comercios, empresas, profesionales y emprendedores que quieren dar un paso adelante, mostrar mejor lo que hacen y llegar a más personas.</p>
          <a class="text-link" href="${whatsapp}" target="_blank">CONOCÉ LO QUE PODEMOS HACER POR VOS ↗</a>
        </div>
      </section>

      <section class="process-section section">
        <div class="section-heading reveal">
          <span class="eyebrow"><i></i> DE LA IDEA AL LANZAMIENTO</span>
          <h2>TU PROYECTO.<br><span>NUESTRO PROCESO.</span></h2>
        </div>
        <div class="process-grid">
          <div class="process-item reveal"><b>01</b><h3>ESCUCHAMOS</h3><p>Conocemos tu negocio, tus objetivos y lo que necesitás.</p></div>
          <div class="process-item reveal"><b>02</b><h3>DISEÑAMOS</h3><p>Construimos una propuesta visual pensada para tu marca.</p></div>
          <div class="process-item reveal"><b>03</b><h3>DESARROLLAMOS</h3><p>Transformamos el diseño en una solución digital funcional.</p></div>
          <div class="process-item reveal"><b>04</b><h3>PUBLICAMOS</h3><p>Tu proyecto sale al mundo y comienza una nueva etapa.</p></div>
        </div>
      </section>

      <section class="final-cta section" id="contacto">
        <div class="cta-glow"></div>
        <div class="reveal">
          <span class="eyebrow"><i></i> ES MOMENTO DE DAR EL SALTO</span>
          <h2>HAGAMOS ALGO<br><span>EXTRAORDINARIO.</span></h2>
          <p>Contanos tu idea. Puede ser una página web, una aplicación móvil o el comienzo de una nueva presencia digital para tu negocio.</p>
          <a class="button-primary large-button" href="${whatsapp}" target="_blank">HABLAR POR WHATSAPP ↗</a>
          <a class="instagram-link" href="${instagram}" target="_blank">TAMBIÉN EN INSTAGRAM · @DDELACRUZDIGITAL ↗</a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <a href="#inicio" class="footer-brand">DC<span>DIGITAL</span><small>CREAMOS TU PRÓXIMA DIMENSIÓN</small></a>
      <div class="footer-links"><a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a><a href="${instagram}" target="_blank">Instagram</a><a href="${whatsapp}" target="_blank">WhatsApp</a></div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} DC DIGITAL. TODOS LOS DERECHOS RESERVADOS.</span><a href="#inicio">VOLVER ARRIBA ↑</a></div>
    </footer>
  </div>

  <a class="floating-whatsapp" href="${whatsapp}" target="_blank" aria-label="Contactar por WhatsApp">✆</a>
`

void initLogo3D('#dcLogo3D').catch(error => {
  console.error('No se pudo iniciar el logo 3D:', error)
})

const intro = document.querySelector<HTMLElement>('#intro')
const finishIntro = () => {
  if (!intro || intro.classList.contains('intro-finished')) return
  intro.classList.add('intro-finished')
  document.body.classList.remove('intro-active')
  window.setTimeout(() => intro.remove(), 1100)
}
document.body.classList.add('intro-active')
document.querySelector('#skipIntro')?.addEventListener('click', finishIntro)
window.setTimeout(finishIntro, 4800)

document.querySelector('#menuToggle')?.addEventListener('click', () => {
  document.querySelector('#navigation')?.classList.toggle('nav-open')
})
document.querySelectorAll('#navigation a').forEach(link => {
  link.addEventListener('click', () => document.querySelector('#navigation')?.classList.remove('nav-open'))
})

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach(element => observer.observe(element))
