import './style.css'

const whatsapp = '5491173647291'
const message = encodeURIComponent('Hola, DC Digital. Vi su página web y quisiera consultar para crear una página para mi negocio.')
const whatsappUrl = `https://wa.me/${whatsapp}?text=${message}`

const projects = [
  {
    number: '01',
    name: 'TALLER FELTES',
    type: 'TALLER DE MOTOS',
    description: 'Presencia digital profesional para un taller de motocicletas.',
    url: 'https://tallerfeltes.netlify.app/',
  },
  {
    number: '02',
    name: 'SABORES DEL OCÉANO',
    type: 'RESTAURANTE',
    description: 'Experiencia web premium para un restaurante peruano.',
    url: 'https://saboresdeloceano.netlify.app/',
  },
  {
    number: '03',
    name: 'VERDULERÍA JAIME',
    type: 'COMERCIO LOCAL',
    description: 'Página web para mostrar el negocio y facilitar el contacto.',
    url: 'https://verduleriajaime.netlify.app/',
  },
]

const advantages = [
  ['01', 'MÁS VISIBILIDAD', 'Tu negocio puede tener un espacio profesional donde mostrar todo lo que ofrecés.'],
  ['02', 'MÁS CONFIANZA', 'Una página cuidada transmite seriedad y permite que nuevos clientes conozcan tu negocio antes de visitarlo.'],
  ['03', 'DISPONIBLE 24/7', 'Tu información permanece disponible incluso cuando tu local está cerrado.'],
  ['04', 'TODO EN UN SOLO LUGAR', 'Productos, servicios, fotografías, horarios, ubicación, promociones y contacto.'],
  ['05', 'WHATSAPP DIRECTO', 'El cliente puede pasar de conocer tu negocio a contactarte en pocos segundos.'],
  ['06', 'GOOGLE MAPS', 'Facilitamos que las personas encuentren tu ubicación y sepan cómo llegar.'],
  ['07', 'CÓDIGO QR', 'Tu página puede estar en un cartel, una tarjeta, un menú, un folleto o en el mostrador.'],
  ['08', 'TU PROPIA IDENTIDAD', 'Tu web puede reflejar exactamente cómo querés que los clientes vean tu marca.'],
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="site">

    <div class="tech-grid"></div>
    <div class="scanline"></div>
    <div class="orb orb-a"></div>
    <div class="orb orb-b"></div>

    <header class="navbar">
      <a class="brand" href="#inicio">
        <img src="/images/logo.jpg" alt="DC Digital">
      </a>

      <nav>
        <a href="#servicios">SERVICIOS</a>
        <a href="#proyectos">PROYECTOS</a>
        <a href="#contacto">CONTACTO</a>
      </nav>

      <a class="nav-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener">
        WHATSAPP <span>↗</span>
      </a>
    </header>

    <main>

      <section class="hero" id="inicio">
        <div class="hero-code">
          <span>01</span>
          <span>DC_DIGITAL</span>
          <span>BUILD_MODE: ON</span>
        </div>

        <div class="hero-logo-big"><img src="/images/logo.jpg" alt="DC Digital"></div><div class="hero-content">
          <div class="hero-copy">
            <p class="eyebrow">// DIGITAL EXPERIENCES</p>

            <h1>
              TU NEGOCIO.<br>
              <span>TU MARCA.</span><br>
              TU MUNDO<br>
              DIGITAL.
            </h1>

            <p class="hero-description">
              Creamos páginas web profesionales para comercios,
              emprendimientos y negocios reales que quieren dar
              el próximo paso.
            </p>

            <a class="primary-button" href="${whatsappUrl}" target="_blank" rel="noopener">
              <span>QUIERO MI PÁGINA</span>
              <strong>↗</strong>
            </a>
          </div>

          <div class="hero-visual">
            <div class="image-frame">
              <div class="frame-label">DC_DIGITAL / 001</div>
              <img src="/images/foto-01.jpg" alt="DC Digital - Diseño web profesional">
              <div class="frame-corner corner-tl"></div>
              <div class="frame-corner corner-tr"></div>
              <div class="frame-corner corner-bl"></div>
              <div class="frame-corner corner-br"></div>
            </div>
          </div>
        </div>

        <div class="hero-bottom">
          <span>DESDE CABA, BUENOS AIRES</span>
          <span>WEB / QR / WHATSAPP / MAPS</span>
          <span>SCROLL ↓</span>
        </div>
      </section>


      <section class="manifesto">
        <div class="section-tag">// WHY A WEBSITE?</div>

        <div class="manifesto-grid">
          <div>
            <p class="mini-label">01 — PRESENCIA DIGITAL</p>
          </div>

          <div>
            <h2>
              TU NEGOCIO<br>
              <span>NO TERMINA</span><br>
              EN LA PUERTA.
            </h2>

            <h3>
              HOY, TU PRIMERA IMPRESIÓN TAMBIÉN SUCEDE EN INTERNET.
            </h3>

            <p class="long-copy">
              Tener un negocio significa mucho más que vender un producto
              o brindar un servicio. Significa construir confianza, conseguir
              nuevos clientes y hacer que las personas puedan encontrarte
              fácilmente.
            </p>

            <p class="long-copy">
              Una página web propia te permite mostrar quién sos, qué ofrecés,
              dónde estás, cuándo estás abierto y cómo pueden contactarte,
              todo desde un mismo lugar.
            </p>

            <p class="long-copy">
              Mientras tu negocio está cerrado, tu página puede seguir mostrando
              tus productos, servicios, fotografías, promociones y formas de
              contacto. Tus clientes pueden entrar desde un celular, compartir
              tu página por WhatsApp o acceder mediante un código QR.
            </p>

            <p class="long-copy">
              No se trata solamente de tener una página. Se trata de tener
              un espacio propio en Internet para que tu negocio esté disponible
              cuando alguien lo está buscando.
            </p>
          </div>
        </div>

        <div class="advantage-grid">
          ${advantages.map(([number, title, text]) => `
            <article class="advantage-card">
              <span>${number}</span>
              <div>
                <h4>${title}</h4>
                <p>${text}</p>
              </div>
            </article>
          `).join('')}
        </div>

        <div class="manifesto-end">
          <p>
            LAS REDES SOCIALES SON IMPORTANTES.<br>
            <span>PERO TU NEGOCIO TAMBIÉN MERECE TENER UN LUGAR PROPIO.</span>
          </p>
          <strong>DC DIGITAL</strong>
          <small>Convertimos negocios reales en experiencias digitales.</small>
        </div>
      </section>


      <section class="services" id="servicios">
        <div class="section-header">
          <div class="section-tag">// WHAT WE BUILD</div>
          <h2>NO VENDEMOS<br><span>PLANTILLAS.</span></h2>
          <p>CREAMOS EXPERIENCIAS.</p>
        </div>

        <div class="services-grid">
          <article><span>01</span><strong>DISEÑO WEB</strong><small>Diseños modernos adaptados a tu negocio.</small></article>
          <article><span>02</span><strong>MENÚ DIGITAL</strong><small>Tu carta disponible desde cualquier celular.</small></article>
          <article><span>03</span><strong>CATÁLOGO</strong><small>Mostrá tus productos y servicios.</small></article>
          <article><span>04</span><strong>WHATSAPP</strong><small>Contacto directo con tus clientes.</small></article>
          <article><span>05</span><strong>GOOGLE MAPS</strong><small>Facilitamos que puedan encontrarte.</small></article>
          <article><span>06</span><strong>CÓDIGO QR</strong><small>Tu web al alcance de un escaneo.</small></article>
        </div>
      </section>


      <section class="portfolio" id="proyectos">
        <div class="section-tag">// SELECTED WORKS</div>

        <div class="portfolio-heading">
          <h2>NO TE CONTAMOS<br>LO QUE <span>PODEMOS HACER.</span></h2>
          <p>TE MOSTRAMOS LO QUE YA HICIMOS.</p>
        </div>

        <div class="projects">
          ${projects.map(project => `
            <article class="project-card">
              <div class="project-number">${project.number}</div>
              <div class="project-info">
                <p>${project.type}</p>
                <h3>${project.name}</h3>
                <span>${project.description}</span>
              </div>
              <a href="${project.url}" target="_blank" rel="noopener">VER PROYECTO ↗</a>
            </article>
          `).join('')}
        </div>
      </section>


      <section class="process">
        <div class="section-tag">// HOW IT WORKS</div>

        <h2>
          DE LA IDEA<br>
          <span>A INTERNET.</span>
        </h2>

        <div class="process-line">
          <div><b>01</b><strong>IDEA</strong><small>Conocemos tu negocio.</small></div>
          <div><b>02</b><strong>DISEÑO</strong><small>Definimos la identidad.</small></div>
          <div><b>03</b><strong>DESARROLLO</strong><small>Construimos tu experiencia.</small></div>
          <div><b>04</b><strong>PUBLICACIÓN</strong><small>Tu negocio sale al mundo.</small></div>
        </div>
      </section>


      <section class="about">
        <div class="about-box">
          <div class="section-tag">// ABOUT DC DIGITAL</div>
          <h2>DE LA CALLE<br><span>A INTERNET.</span></h2>
          <p>
            Trabajamos con comercios y emprendimientos que quieren dar
            el próximo paso hacia lo digital.
          </p>
          <p class="location">CABA / BUENOS AIRES / ARGENTINA</p>
        </div>
      </section>


      <section class="final-cta" id="contacto">
        <div class="section-tag">// READY?</div>

        <h2>
          TU PRÓXIMO CLIENTE<br>
          PUEDE ESTAR<br>
          <span>A UN CLIC.</span>
        </h2>

        <p>Diseñamos. Conectamos. Digitalizamos.</p>

        <a class="mega-button" href="${whatsappUrl}" target="_blank" rel="noopener">
          <span>HABLAR POR WHATSAPP</span>
          <strong>↗</strong>
        </a>
      </section>

    </main>

    <footer>
      <div>
        <img src="/images/logo.jpg" alt="DC Digital">
      </div>
      <div>
        <span>DC DIGITAL</span>
        <span>CABA / ARGENTINA</span>
      </div>
      <a href="${whatsappUrl}" target="_blank" rel="noopener">
        +54 9 11 7364-7291 ↗
      </a>
    </footer>

  </div>
`

const cards = document.querySelectorAll<HTMLElement>('.advantage-card, .services-grid article, .project-card')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.12 })

cards.forEach(card => observer.observe(card))

document.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 2
  const y = (event.clientY / window.innerHeight - 0.5) * 2

  document.documentElement.style.setProperty('--mouse-x', `${x}`)
  document.documentElement.style.setProperty('--mouse-y', `${y}`)
})

/* ===== DC DIGITAL MATRIX BACKGROUND ===== */

const matrixCanvas = document.createElement('canvas')
matrixCanvas.className = 'matrix-canvas'
document.querySelector('.site')?.prepend(matrixCanvas)

const matrixCtx = matrixCanvas.getContext('2d')!

let matrixWidth = 0
let matrixHeight = 0
let columns = 0
let drops: number[] = []
let speeds: number[] = []

const matrixChars =
  '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' +
  '<>{}[]()/\\\\=+-_*#@$%&' +
  'DC_DIGITALWEBHTMLCSSJSQRWA'

function resizeMatrix() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  matrixWidth = window.innerWidth
  matrixHeight = window.innerHeight

  matrixCanvas.width = matrixWidth * dpr
  matrixCanvas.height = matrixHeight * dpr
  matrixCanvas.style.width = `${matrixWidth}px`
  matrixCanvas.style.height = `${matrixHeight}px`

  matrixCtx.setTransform(dpr, 0, 0, dpr, 0, 0)

  const fontSize = window.innerWidth < 600 ? 13 : 15
  columns = Math.floor(matrixWidth / fontSize)

  drops = Array.from(
    { length: columns },
    () => Math.random() * -80
  )

  speeds = Array.from(
    { length: columns },
    () => 0.35 + Math.random() * 1.15
  )
}

function drawMatrix() {
  const fontSize = window.innerWidth < 600 ? 13 : 15

  matrixCtx.fillStyle = 'rgba(5, 6, 8, 0.075)'
  matrixCtx.fillRect(0, 0, matrixWidth, matrixHeight)

  matrixCtx.font = `${fontSize}px "Space Mono", monospace`

  for (let i = 0; i < columns; i++) {
    const x = i * fontSize
    const y = drops[i] * fontSize

    const char =
      matrixChars[Math.floor(Math.random() * matrixChars.length)]

    const intensity = Math.random()

    if (intensity > 0.88) {
      matrixCtx.fillStyle = '#9dfff0'
      matrixCtx.shadowColor = '#00e5ff'
      matrixCtx.shadowBlur = 12
    } else if (intensity > 0.55) {
      matrixCtx.fillStyle = '#48ff9b'
      matrixCtx.shadowColor = '#48ff9b'
      matrixCtx.shadowBlur = 5
    } else {
      matrixCtx.fillStyle = 'rgba(0, 229, 255, 0.30)'
      matrixCtx.shadowBlur = 0
    }

    matrixCtx.fillText(char, x, y)

    drops[i] += speeds[i]

    if (y > matrixHeight + Math.random() * 500) {
      drops[i] = Math.random() * -30
      speeds[i] = 0.35 + Math.random() * 1.15
    }
  }

  matrixCtx.shadowBlur = 0

  requestAnimationFrame(drawMatrix)
}

resizeMatrix()
drawMatrix()

window.addEventListener('resize', resizeMatrix)

/* ===== END MATRIX BACKGROUND ===== */

