import { useRouter } from 'next/router';
import React from 'react';

const Ljubimac = () => {
  const router = useRouter()
  console.log(router)
  return (
    <p>Ljubimac {router.query.id}</p>
  )
}

export default Ljubimac