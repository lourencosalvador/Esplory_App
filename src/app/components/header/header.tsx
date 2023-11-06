import './header.css'
export function Header(){
    return(
        <header className="header">
            <div className="transparent-color"></div>
            <nav>
              <div className="title">
              <h1>
                .Explory
              </h1>
              </div>
                <menu>
                    <ul>
                        <li id='ativo'>Home</li>
                        <li>History</li>
                        <li>Category</li>
                    </ul> 
                </menu>
                <div className="conta">
                        <h1>@Lourenco.com</h1>
                    </div>
            </nav>
            <section>
                <div className='entrada'>
                    <div className="pau"></div>
                    <h3> mbora aventurar-se</h3>
                </div>
                <h1>Esta Preparado Para Ver <br /> 
                  Os Melhores Momento na Natureza!
                </h1>
               <div className="id">
               <h3>Veja em baixo</h3>
               </div>
            </section>
            <div className="pontos">
                <ul>
                    <li>Norte</li>
                    <li>Sul</li>
                    <li>Este</li>
                    <li>Oeste</li>
                </ul>
            </div>
        </header>
    )
}