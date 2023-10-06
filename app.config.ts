export default defineAppConfig({
  alpine: {
    title: 'In my head',
    description: 'An open source mind',
    image: {
      src: '/alpine-0.webp',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'center', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logos/logo-black.svg', // path of the logo
        pathDark: '/logos/logo.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'no-logo' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: '' // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'This is my footer' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '',
      instagram: '',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://fauclair.com/linkedin'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
