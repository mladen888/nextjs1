import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const SingleProfile = () => {
    const router = useRouter()
    console.log(router)
  return (
    <div>
        
        <p>ovo je profil </p>
        <Link href={`/profiles/${router.query.id}/licni-podaci`}>Licni Podaci  </Link>
        <Link href={`/profiles/${router.query.id}/kucni-ljubimac`}>Ljubimac</Link>
        <Link href={`/profiles/${router.query.id}/banka-podaci`}>Banka</Link>

    </div>
  );
};

export default SingleProfile