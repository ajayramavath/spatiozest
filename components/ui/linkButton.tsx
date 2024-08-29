import Link from 'next/link'

const LinkButton = ({title, link}:{title:string;link:string}) => {
  return (
      <button 
      className="px-8 py-2 cursor-pointer  bg-black text-blue-500 text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
          <Link href={link}>{title}</Link>
      </button>
  )
}

export default LinkButton