import Link from 'next/link'
import Image from 'next/image'
export default function Header (props) {
  console.log(props)
  return (
    <div className='header'>
      <div className='header-left'>
        <div className='title'>keremsabirli</div>
        {props.items.map(item => {
          return (
            <Link key={item.id} href={item.link}>
              <div className='header-item'>{item.title}</div>
            </Link>
          )
        })}
      </div>
      <div className='header-right'>
        <a href='https://github.com/keremsabirli' target="_blank">
          <div className='header-icon-item'>
            <Image src='/github.svg' width='32' height='32'></Image>
          </div>
        </a>
      </div>
    </div>
  )
}
