import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function Main() {
  return (
    <main>
      <div id="Graphics" className="Gallery container-fluid">
        <div className="row Gallery__row">
          <div className="Gallery__img col-6">
            <StaticImage src="../../images/grafika/img (2).png" alt="img1" />
            <StaticImage src="../../images/grafika/img (1).png" alt="img1" />
            <StaticImage src="../../images/grafika/img (4).jpg" alt="img1" />
            <StaticImage src="../../images/grafika/img (10).jpg" alt="img1" />
            <StaticImage src="../../images/grafika/img (7).jpg" alt="img1" />
            <StaticImage src="../../images/grafika/img (11).jpg" alt="img1" />
          </div>
          <div className="Gallery__img col-6">
            <StaticImage src="../../images/grafika/img (2).jpg" alt="img1" />
            <StaticImage src="../../images/grafika/img (3).jpg" alt="img1" />
            <StaticImage src="../../images/grafika/img (5).jpg" alt="img1" />
            <StaticImage src="../../images/grafika/img (8).jpg" alt="img1" />
            <StaticImage src="../../images/grafika/img (9).jpg" alt="img1" />
            <StaticImage src="../../images/grafika/img (12).jpg" alt="img1" />
          </div>
        </div>
      </div>
      <div className="Title">
        <StaticImage src="../../images/fotografia.png" alt="fotografia" />
      </div>
      <div id="Photography" className="Gallery container-fluid">
        <div className="row Gallery__row 2x2 row__1">
          <div className="Gallery__img col-6">
            <StaticImage src="../../images/fotografia/fot (2).jpg" alt="img1" />
            <StaticImage src="../../images/fotografia/fot (9).jpg" alt="img1" />
            <StaticImage
              src="../../images/fotografia/fot (13).jpg"
              alt="img1"
            />
          </div>
          <div className="Gallery__img col-6">
            <StaticImage src="../../images/fotografia/fot (1).jpg" alt="img1" />
          </div>
        </div>
        <div className="row Gallery__row 3x3">
          <div className="Gallery__img col-4">
            <StaticImage src="../../images/fotografia/fot (8).jpg" alt="img1" />
          </div>
          <div className="Gallery__img col-4">
            <StaticImage src="../../images/fotografia/fot (6).jpg" alt="img1" />
          </div>
          <div className="Gallery__img col-4">
            <StaticImage
              src="../../images/fotografia/fot (16).jpg"
              alt="img1"
            />
          </div>
        </div>
        <div className="row Gallery__row 2x2 row__3">
          <div className="Gallery__img col-6">
            <StaticImage
              src="../../images/fotografia/fot (15).jpg"
              alt="img1"
            />
          </div>
          <div className="Gallery__img col-6">
            <StaticImage src="../../images/fotografia/fot (3).jpg" alt="img1" />
            <StaticImage
              src="../../images/fotografia/fot (10).jpg"
              alt="img1"
            />
          </div>
        </div>
        <div className="row Gallery__row 3x3">
          <div className="Gallery__img col-4">
            <StaticImage
              src="../../images/fotografia/fot (17).jpg"
              alt="img1"
            />
          </div>
          <div className="Gallery__img col-4">
            <StaticImage src="../../images/fotografia/fot (5).jpg" alt="img1" />
          </div>
          <div className="Gallery__img col-4">
            <StaticImage
              src="../../images/fotografia/fot (12).jpg"
              alt="img1"
            />
          </div>
        </div>
      </div>
      <div className="Title">
        <StaticImage src="../../images/omnie.png" alt="fotografia" />
      </div>
      <div id="About" className="About container">
        <div className="row">
          <div className="About__image col-md-6">
            <StaticImage
              src="../../images/img_about.jpg"
              alt="Paulina Wiater"
            />
          </div>
          <div className="About__text col-md-6">
            <p className="About__describe">
              Nazywam się Paulina Wiater. Jestem studentką II roku na kierunku
              projektowanie graficzne na uczelni Państwowej Wyższej Szkole
              Wschodnioeuropejskiej w Przemyślu. Fotografią interesuje się od 8
              lat, natomiast grafiką od 3 lat. Od zawsze patrzę na świat kadrami
              i wszędzie dostrzegam piękno. Pasjonuje mnie tworzenie czegoś od
              nowa, daje mi to dużą satysfakcję i uśmiech na twarzy. W moich
              pracach można odnaleźć charakterystyczną prostotę i minimalizm
              wektorowych linii oraz koloryt w „akwarelowych” projektach. Staram
              się być najlepsza w tym co robię, jednak cały czas się rozwijam i
              ulepszam swoje umiejętności tak, aby tworzyć coś wyjątkowego i
              niepowtarzalnego.
            </p>
          </div>
        </div>
        <div className="About__contact">
          <StaticImage src="../../images/logo.png" alt="logo" />
          <p>+48 537 699 671</p>
          <p>ina@vip.interia.pl</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
