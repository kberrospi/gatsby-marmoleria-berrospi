import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../styles/coming-soon.css'
//import logoWhite from '../images/logo_white.png';

const comingSoon = () => {
  return (
    <div className='bg-coming-soon' >
      <div className='bg-transparent-coming-soon'>
      <Layout>
        <Seo title="Coming Soon" description="" lang="es" meta={[]}/>
        <div className='comming-soon-title' >
          <h1 className='title-coming-soon'> Coming Soon </h1>
        </div>
      </Layout>
      </div>
    </div>
  )
}

export default comingSoon;
