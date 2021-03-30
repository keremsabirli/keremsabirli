// import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import '../pages/index.css'
import Header from '../components/header/header'

function MyApp ({ Component, pageProps }) {
  let items = [
    {
      id: 1,
      title: 'About',
      link: '/'
    },
    {
      id: 2,
      title: 'Posts',
      link: '/posts',
    },
    {
      id: 3,
      title: 'Contact',
      link: '/contact'
    }
  ];
  return (
    <div className='page-container'>
      <Header items={items}></Header>
      <div className="content-container">
        <Component {...pageProps} />
      </div>
    </div>
  )
}



export default MyApp
