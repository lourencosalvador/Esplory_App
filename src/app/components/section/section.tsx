"use client"
import { useLayoutEffect } from 'react'
import './section.css'
import { motion } from "framer-motion"



export function SectionHot(){



    return(
      <section id='section'>
        <div className="card">
            <div className="context">
              O1
        </div>
        <div className="context2">
        <div className='entrada'>
                    <div className="pau"></div>
                    <h3>Montanhas de Card</h3>
                    
                </div>
                <h1>Queres saber como foi 
                Nas <br /> Montanhas  de Card?
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur 
                      adipisicing elit. Dolorem voluptates sed 
                      quasi libero dicta nisi eum ipsa officia quibusdam, 
                      ducimus voluptatem e
                      ligendi nulla aut quia quam obcaecati rerum veniam officiis?</p>
              <h3 id='vermais'>Ver mais</h3>
        </div>
        <figure>
             <img src="pexels-sam-kolder-2387876.jpg" alt="" />
         </figure>
      </div>
       

      <div className="card">
        
        <figure>
             <img src="pexels-sabina-kallari-14076648.jpg" alt="" />
         </figure>
           
        <div className="context3">
        <div className='entrada'>
                    <div className="pau"></div>
                    <h3>Montanhas de Host</h3>
                    
                </div>
                <h1>Conhece o clima 
                Mas <br /> denso de Africa
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur 
                      adipisicing elit. Dolorem voluptates sed 
                      quasi libero dicta nisi eum ipsa officia quibusdam, 
                      ducimus voluptatem e
                      ligendi nulla aut quia quam obcaecati rerum veniam officiis?</p>
              <h3 id='vermais'>Ver mais</h3>
        </div>
         <div className="context1">
              O2
        </div>
      </div>
      

      <div className="card">
            <div className="context">
              O3
        </div>
        <div className="context2">
        <div className='entrada'>
                    <div className="pau"></div>
                    <h3>Casa da Arvore</h3>
                    
                </div>
                <h1>Casa na Natureza
                <br />é uma aventura
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur 
                      adipisicing elit. Dolorem voluptates sed 
                      quasi libero dicta nisi eum ipsa officia quibusdam, 
                      ducimus voluptatem e
                      ligendi nulla aut quia quam obcaecati rerum veniam officiis?</p>
              <h3 id='vermais'>Ver mais</h3>
        </div>
        <figure>
             <img src="pexels-felix-mittermeier-2832034.jpg" alt="" />
         </figure>
      </div>
      </section>
    )
}