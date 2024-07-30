import Link from 'next/link';


export async function getServerSideProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  const pokemon = await res.json()
  return { props: { pokemon } }
}


export default function Home({pokemon}) {
  return (
    
    <div>
      <Link href='/about'> About
      </Link>
      
      <Link href='profiles'>Profiles
      </Link>

      <main>
      <p>{pokemon.name}</p>
    </main>
    </div>
    
  );
}
