import { useRouter } from 'next/router';
import React from 'react';

const LicniPodaci = () => {
  const router = useRouter()
  console.log(router)
  return (
    <p>Licni Podaci {router.query.id}</p>
  )
}

export default LicniPodaci