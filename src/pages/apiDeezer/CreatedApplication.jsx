import React from 'react';
import styles from './CreatedApplication.module.css';
import imagecontext from '../../assets/img/contextimage-view.png';
import imagenewget from '../../assets/img/getinnewcomponent.png';
import renderimage from '../../assets/img/render_code.png'; 

export const CreatedApplication = () => {
  return (
    <div className='container'>
      <div className={styles.text_about}>
        <div>
          <h2>Deezer Music</h2>
          <p>Como a aplicação foi criada?</p>
          <article>
            <p>A aplicação complta feita com <span className={styles.destlink}>React JS</span>, onde foi utilizado métodos famosos do react onde facilitam a construção de uma aplicação. </p>
            <h3>Tópicos</h3>

            <ul className={styles.listTopicos}>
              <li>React Icons</li>
              <li>React Router</li>
              <li>Context API</li>
              <li>CSS modules</li>
            </ul>

            <h3>Exemplo de código</h3>

            <p>Criando um contextAPI primeiro, onde passa todo o fluxo da aplicação. Sendo assim, <span className={styles.destlink}>realizando a requisição</span> dentro de uma função que pede o nome do artista como parâmetro</p>
          
            <img src={imagecontext} alt="image-context" />

            <p>Após o useState salvar como Array e outros como Object, basta chamar no seu componente que deseja mostrar. </p>

            <img src={imagenewget} alt="image-get-data" />

            <p>Feito isso, ficou bem trabnquilo. Sabendo que é <span className={styles.destlink}>array</span> basta fazer um map como no ezempo abaixo. Caso os dados vim em <span className={styles.destlink}>object</span>, pode manipular de forma direta.</p>
          
            <img src={renderimage} alt="image-render-code" />

            <p>E é mais ou menos isso. Dessa forma ou de outra, até porque <span className={styles.destlink}>existe diversas maneiras de atingir o mesmo resultad</span>o, é assim uma das formas que realiza requisições e renderiza na página em react.</p>
          </article>
        </div>
      </div>

    </div>
  )
}
