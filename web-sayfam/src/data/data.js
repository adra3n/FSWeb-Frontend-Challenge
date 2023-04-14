import jslogo from '../assets/logo-js.png'
import reactlogo from '../assets/logo-react.png'
import reduxlogo from '../assets/logo-redux.png'
import vscodelogo from '../assets/logo-vscode.png'
import nodejslogo from '../assets/logo-nodejs.png'
import figmalogo from '../assets/logo-figma.png'
import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'

const data = {
  projects: [
    {
      name: 'Pizza Order',

      text: {
        en: 'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.',
        tr: 'Kullanıcılarınızın kabul etmek veya reddetmek istedikleri çerezleri seçmelerine izin veren basit, özelleştirilebilir, minimal bir çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu kod ve temaların her türlü özelleştirmesine olanak tanır.',
      },

      skills: ['react', 'cypress', 'yup', 'tailwind', 'vercel'],
      website: 'https://fsweb-s11g3-crud-filmler-kappa.vercel.app/',
      git: 'https://github.com/adra3n/fsweb-s11g3-crud-filmler',
      image: project1,
    },

    {
      name: 'Minnet Günlüğü',

      text: {
        en: 'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.',
        tr: 'Kullanıcılarınızın kabul etmek veya reddetmek istedikleri çerezleri seçmelerine izin veren basit, özelleştirilebilir, minimal bir çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu kod ve temaların her türlü özelleştirmesine olanak tanır.',
      },
      skills: ['react', 'redux', 'tailwind', 'vercel'],
      website: 'https://fsweb-s10-challenge-six.vercel.app/',
      git: 'https://github.com/adra3n/fsweb-s10-challenge/',
      image: project2,
    },
  ],
  skills: [
    { name: 'Java Script', logo: jslogo },
    { name: 'Node', logo: nodejslogo },
    { name: 'React', logo: reactlogo },
    { name: 'VS Code', logo: vscodelogo },
    { name: 'Redux', logo: reduxlogo },
    { name: 'Figma', logo: figmalogo },
  ],
}

export default data
