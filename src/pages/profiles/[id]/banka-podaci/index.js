import { useRouter } from 'next/router';
import React from 'react';

const BankaPodaci = () => {
  const router = useRouter()
  console.log(router)
  return (
    <p>Banka {router.query.id}</p>
  )
}

export default BankaPodaci