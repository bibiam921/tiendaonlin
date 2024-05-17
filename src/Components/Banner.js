import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="slide active">
          <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elconfidencial.com%2Ftecnologia%2F2023-12-21%2Faccesorios-apple-navidades-regalos_3795408%2F&psig=AOvVaw1cCEsEDpsdp0ycMm8AX3Oh&ust=1715984028466000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMj97OmYk4YDFQAAAAAdAAAAABAh' alt="Slide 1" />
          <img src='https://gagadget.com/media/post_big/Cool_iPhone_Accessories_1.png' alt="Slide 2" />
          <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fnatville.com.br%2Fcon-Tarjeta-Sim-KIT-4G-La-Tienda-Inteligente-75547.html&psig=AOvVaw161EUEjNCPMqdEXhgXBO6C&ust=1715984353204000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjQqoGak4YDFQAAAAAdAAAAABAu' alt="Slide 3" />
          <img src="https://pedidos.co/tienda/wp-content/uploads/2020/02/productos-apple-en-colombia-iphone-ipad-macbook-airpods.jpg" alt="Slide 4" />
          <div className="content">
            
           
          </div>
        </div>
        {/* Agrega más slides aquí si lo deseas */}
      </div>
    </div>
  );
}

export default Banner;
