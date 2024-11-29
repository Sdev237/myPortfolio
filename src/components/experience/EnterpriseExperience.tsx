import React from 'react'
import './EnterpriseExperience.scss'

export const EnterpriseExperience = () => {
  
  const company = [
    { name: 'Orange Digital Center', logo: 'https://c.woopic.com/logo-orange.png', poste: 'Analyste Programmeur', date: '2022-2023' },
    { name: 'Hugo Company LTD', logo: '../app/fonts/hugo.png', poste: 'Gestionnaire du parc informatique', date: '2020-2022' },
    { name: 'CENADI',logo:"https://i0.wp.com/www.cenadi.cm/wp-content/uploads/2020/09/armoiries_logo_cenadi.png?fit=180%2C80&amp;ssl=1", poste: 'Développeur Full Stack', date: '2018' }
  ];
  return (
    <>
      <div className='px-4 py-4 d-flex flex-wrap justify-content-between align-items-center w-100 gap-3'>
        {company.map((comp, idx) => (
          <div key={idx} className='box text-center'>
            <div className=" col-12 col-md-12 col-lg-12 text-start d-flex flex-column z-1">
              <div className="name d-flex align-items-center pb-3">
                {comp.logo && <img src={comp.logo} alt={comp.name} width={40} height={30} className='me-2'/>}
                {comp.name}
              </div>
              <span className='opacity-75'>{comp.poste}</span>
            </div>
            <div className="date my-2">{comp.date}</div>
          </div>
        ))}
      </div>
    </>
  )
}
