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
            <div className="img_box">
              <StaticImage src="../../images/grafika/img (9).jpg" alt="img1" />
            </div>
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
              Nazywam si?? Paulina Wiater. Jestem studentk?? II roku na kierunku
              projektowanie graficzne na uczelni Pa??stwowej Wy??szej Szkole
              Wschodnioeuropejskiej w Przemy??lu. Fotografi?? interesuje si?? od 8
              lat, natomiast grafik?? od 3 lat. Od zawsze patrz?? na ??wiat kadrami
              i wsz??dzie dostrzegam pi??kno. Pasjonuje mnie tworzenie czego?? od
              nowa, daje mi to du???? satysfakcj?? i u??miech na twarzy. W moich
              pracach mo??na odnale???? charakterystyczn?? prostot?? i minimalizm
              wektorowych linii oraz koloryt w ???akwarelowych??? projektach. Staram
              si?? by?? najlepsza w tym co robi??, jednak ca??y czas si?? rozwijam i
              ulepszam swoje umiej??tno??ci tak, aby tworzy?? co?? wyj??tkowego i
              niepowtarzalnego. <br /> Opinie:
              <br />
              <a
                href="https://www.maxmodels.pl/fotograf-inaphoto,referencje.html"
                target="_blank"
              >
                https://www.maxmodels.pl/fotograf-inaphoto,referencje.html
              </a>
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
