// Animações com GSAP
gsap.registerPlugin(ScrollTrigger);

// Animações de entrada
gsap.from("section", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "section",
    start: "top 80%",
  }
});

// Animação de rolagem suave ao clicar no menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    gsap.to(window, {
      scrollTo: {
        y: targetSection,
        offsetY: 70 // altura do header fixo
      },
      duration: 1,
      ease: "power2.inOut"
    });
  });
});

// Clique em cards de projeto para abrir modal
document.querySelectorAll('.card-projeto').forEach(card => {
  card.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.id = "modal-projeto";
    modal.style.position = "fixed";
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.85)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = 1000;
    modal.style.backdropFilter = "blur(6px)";

    modal.innerHTML = `
      <div class="conteudo" style="background: #111; padding: 2rem; border-radius: 12px; max-width: 900px; width: 90%; display: flex; flex-wrap: wrap; gap: 2rem;">
        <video src="${card.dataset.video}" autoplay muted loop playsinline style="max-width: 400px; width: 100%; border-radius: 12px; box-shadow: 0 0 15px #7b2cbf;"></video>
        <div class="texto" style="flex: 1; color: white;">
          <h2>${card.dataset.title}</h2>
          <p>${card.dataset.desc}</p>
          <a href="${card.dataset.link}" target="_blank" style="color: #a259ff;">🔗 Ver no GitHub</a><br><br>
          <button id="fecharModal" style="margin-top: 1rem; padding: 0.8rem 1.2rem; background: #7b2cbf; border: none; color: white; border-radius: 8px; cursor: pointer;">Fechar</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('fecharModal').addEventListener('click', () => {
      modal.remove();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const codigoSobre = document.getElementById("codigoSobre");
  const linhasCodigo = [
    "    Sobre mim",
    "    Me chamo Felipe Dias de Menezes, sou desenvolvedor e apaixonado por tecnologia.",
    "    Desenvolvedor Full Stack com foco em soluções eficientes e escaláveis. Experiência em projetos com Python, JavaScript, React, Node.js e bancos de dados relacionais e NoSQL. Apaixonado por tecnologia, aprendizado contínuo e desenvolvimento de software com impacto real.",
  ];

  let linhaAtual = 0;
  let charAtual = 0;
  let textoFinal = "";

  function escreverLinha() {
    if (linhaAtual < linhasCodigo.length) {
      if (charAtual < linhasCodigo[linhaAtual].length) {
        textoFinal += linhasCodigo[linhaAtual][charAtual];
        charAtual++;
        codigoSobre.innerText = textoFinal + "|";
        setTimeout(escreverLinha, 30);
      } else {
        textoFinal += "\n";
        linhaAtual++;
        charAtual = 0;
        setTimeout(escreverLinha, 300);
      }
    } else {
      codigoSobre.innerText = textoFinal;
    }
  }

  escreverLinha();
});

gsap.from(".tech-item", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#tecnologias",
    start: "top 80%",
  }
});
