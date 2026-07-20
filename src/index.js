const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $description = document.getElementById("description");
const $Contentsocial = document.getElementById("content-social");

const data = {
  name: "Santiago Castellar Garcia 🇨🇴",
  nickname: "0xcraxker",
  description: "Además de programar, me gusta experimentar con proyectos personales, personalizar mis entornos de trabajo y descubrir formas más eficientes de desarrollar software. Mi objetivo es seguir creciendo como desarrollador, construir soluciones útiles y ampliar mis conocimientos en ingeniería de sistemas y tecnologías modernas.",
  avatar: "https://avatars.githubusercontent.com/u/203917835?v=4",
  social: [
    {
      name: "Tiktok",
      url: "https://tiktok.com/Santy401",
    },
    {
      name: "instagram",
      url: "https://instagram.com/Santy401",
    },
    {
      name: "Github",
      url: "https://github.com/Santy401",
    }
  ],
  links: [
    {
      name: "Simplapp",
      url: "https://Simplapp.com.co/",
      color: "red",
      emoji: "💰",
    },
    {
      name: "CMP",
      url: "https://www.casapozonmuseo.org/",
      color: "yellow",
      emoji: "🏛️",
    },
  ],
  footer: "Made with Love on Colombia",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let description = document.createTextNode(data?.description);
  let social = document.createTextNode(data?.social);
  let links = data?.links?.map((links) => {
    return `<div class="bg-${links.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${links.color}-600 text-center hover:text-${links.color}-800 cursor-pointer"
            href="${links.url}" target="_blank">
            ${links.name}
          </a>
          <span>${links.emoji}</span>
        </div>`
  }).join('');
  let Social = data?.social?.map((social) => {
    return `<a href="${social.url}" target="_blank" class="text-sm font-semibold text-slate-700 hover:text-slate-900">${social.name}</a>`
  }).join('');
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $Contentsocial.innerHTML = Social;
  $links.appendChild(newItem);
  $name.appendChild(name);
  $description.appendChild(description);
  // $social.appendChild(social);
}

main();