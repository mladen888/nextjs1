import Link from 'next/link';
import React from 'react';
const Profiles = () => {

    const profiles = [1,2,3]

  return (
    <div>
        {
            profiles.map((name, id) =>{
                return(
                    <div key={id}>
                            <Link href={`/profiles/${name}`}> Profil: {name}</Link>
                    </div>
                        
                )
            })
        }
    </div>
  );
};

export default Profiles