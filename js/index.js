/*Animación para la imagen del header*/
ScrollReveal().reveal('#imgPerfil', {
    duration: 1000,
    distance: '180%',
    origin: 'right',
    opacity: null
});

ScrollReveal().reveal('.swiper', {
    delay: 500,
    duration: 2000,
    distance: '100%',
    origin: 'right',
    scale: 1.85,
    rotate: {
        
        y: 20,
        z: 100
    }
});

/*Funciones para Sección Sobre mi Swiper*/

var swiper = new Swiper(".swiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect:{
        rotate: 10,
        stretch: -25,
        depth: 100,
        modifier: 4,
        slideShadows: true
    },
    loop: true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    keyboard:{
        enabled: true
    },
    mousewheel:{
        thresholDelta:70
    },
    breakpoints:{
        560:{
            slidesPerView: 2.5
        },
        768:{
            slidesPerView: 3 
        },
        1024:{
            slidesPerView: 3
        }
    }
});

var card = new Swiper(".card",{
    effect: "flip"
});

/*Animación para la sección habilidades*/
ScrollReveal().reveal('.card1', {
    delay: 500,
    duration: 2000,
    distance: '150%',
    origin: 'left'
});

ScrollReveal().reveal('.card9', {
    delay: 1500,
    duration: 2000,
    distance: '100%',
    origin: 'top'
});

ScrollReveal().reveal('.card10', {
    delay: 2000,
    duration: 2000,
    distance: '100%',
    origin: 'top'
});

ScrollReveal().reveal('.card11', {
    delay: 2500,
    duration: 2000,
    distance: '150%',
    origin: 'right'
});

ScrollReveal().reveal('.card12', {
    delay: 3000,
    duration: 2000,
    distance: '150%',
    origin: 'left'
});

ScrollReveal().reveal('.card13', {
    delay: 3500,
    duration: 2000,
    distance: '100%',
    origin: 'bottom'
});

ScrollReveal().reveal('.card14', {
    delay: 4000,
    duration: 2000,
    distance: '100%',
    origin: 'bottom'
});

ScrollReveal().reveal('.card15', {
    delay: 4500,
    duration: 2000,
    distance: '150%',
    origin: 'right'
});

/*Animación para la sección Proyectos*/
ScrollReveal().reveal('.card3', {
    delay: 500,
    duration: 2000,
    distance: '150%',
    origin: 'left'
});

ScrollReveal().reveal('.card4', {
    delay: 1000,
    duration: 2000,
    distance: '150%',
    origin: 'top'
});

ScrollReveal().reveal('.card5', {
    delay: 1500,
    duration: 2000,
    distance: '150%',
    origin: 'right'
});

ScrollReveal().reveal('.card6', {
    delay: 2500,
    duration: 2000,
    distance: '150%',
    origin: 'left'
});

ScrollReveal().reveal('.card7', {
    delay: 3000,
    duration: 2000,
    distance: '100%',
    origin: 'bottom'
});

ScrollReveal().reveal('.card8', {
    delay: 3500,
    duration: 2000,
    distance: '150%',
    origin: 'right'
});

/*Animación para la sección Testimonios*/
ScrollReveal().reveal('.card16', {
    delay: 500,
    duration: 2000,
    distance: '150%',
    origin: 'top'
});

ScrollReveal().reveal('.card17', {
    delay: 1000,
    duration: 2000,
    distance: '100%',
    origin: 'bottom'
});

ScrollReveal().reveal('.card18', {
    delay: 1500,
    duration: 2000,
    distance: '100%',
    origin: 'right'
});

/*JS para la sección de testimonios*/
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')
const testimonials = [
  {
    name: 'Diego Lozano',
    position: 'Merchandiser Fútbol Decathlon España',
    photo:
      'img/diego2.webp',
    text:
      'Durante el tiempo que trabajé con César, demostró ser una persona altamente analítica, capaz de comprender y resolver situaciones complejas con gran rapidez. Su capacidad de anticiparse a los sucesos le permitió aportar soluciones preventivas muy valiosas para el equipo. Además su responsabilidad y compromiso fueron constantes en cada estrategia que llevamos a cabo. Sin duda César es un profesional confiable y de gran valor.',
  },
  {
    name: 'Pepa Castán',
    position: 'Directora Decathlon Logroño',
    photo: 'img/pepa.webp',
    text:
      'César es un profesional altamente comprometido con su trabajo. Destaca por su sentido de la responsabilidad, asegurándose siempre de cumplir con los objetivos establecidos y de mantener la calidad en cada gesto. Es proactivo al identificar posibles problemas y propone soluciones antes de que afecten al equipo. Además su actitud confiable genera un ambiente de trabajo en el que sus compañeros pueden apoyarse en él.',
  },
  {
    name: 'Jose Luis Castillejo',
    position: 'Responsable Sección Decathlon Usera',
    photo: 'img/jose.webp',
    text:
      "Trabajar con César fué fundamental en mi desarrollo profesional. Desde el primer día me brindó su apoyo y conocimientos, transmitiéndome un alto nivel de exigencia y compromiso que me han permitido crecer dentro de la empresa. Destaco su capacidad de enseñar y acompañar con rigor y cercanía",
  },
  {
    name: 'Virginia Sáez',
    position: 'Vendedora deportiva Decathlon Majadahonda',
    photo: 'img/vir.webp',
    text:
      "Trabajar con César es sinónimo de eficacia e innovación para llegar a conseguir esos retos que nos llevan el éxito. Su nivel de exigencia en los detalles marca la diferencia para alcanzar nuestros objetivos. Sus ganas de crear nuevos procedimientos que mejoran el rendimiento diario y sobre todo, su saber hacer en la formación y acompañamiento de las nuevas incorporaciones, hacen de él un pilar clave en el funcionamiento de nuestro equipo. Un verdadero placer trabajar y aprender cada día a su lado.",
  },
]
let idx = 1
function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]
  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position
  idx++
  if (idx > testimonials.length - 1) {
    idx = 0
  }
}
setInterval(updateTestimonial, 20001)

/*Typed js*/
const typed = new Typed('.multiple-text', {
    strings:['Desarrollador Web', 'Front-end Developer', 'Back-end Developer', 'Angular Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*Resto del JS*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*Scroll section active link*/
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const boton = document.querySelector('.btn');

const activePage = () =>{
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () =>{
        if(!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');
        }
    });
});

logoLink.addEventListener('click', () => {
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');
    }
});

boton.addEventListener('click', () => {
    if(!navLinks[2].classList.contains('active')){
        activePage();

        navLinks[2].classList.add('active');
    }
});

/*Para activar el apartado correspondiente del Navbar al hacer scroll*/
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function onScroll() {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const top = section.offsetTop - 100; // margen para activar antes
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        const id = section.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});
