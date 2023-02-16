import Tilt from 'react-parallax-tilt';
import AirPlaneImg from './assets/airplane.svg'
import { QRCodeSVG } from 'qrcode.react';
function App() {
  return (
    
      <div id="boarding-pass">
        <h1>Cartão de embarque</h1>
        <Tilt>
          <main id="ticket">
            <section className="top">
              <div className="flight">
                <div className="number">
                  <p>Voo</p>
                  <strong>RS995</strong>
                </div>
                <div className="date">
                  <p>Data</p>
                  <strong>23/05/2023</strong>
                </div>
              </div>
              <div className="path">
                <div className="departure">
                  <p>São Paulo, Brasil</p>
                  <strong>GRU</strong>
                  <time>17:00</time>
                </div>
                <div className="airplane">
                  <img src={AirPlaneImg} alt="" />
                </div>
                <div className="arrival">
                  <p>Orlando, EUA</p>
                  <strong>ORL</strong>
                  <time>03:55</time>
                </div>
              </div>
            </section>
            <section className="middle">
              <div className="name">
                <p>Passageiro</p>
                <strong>Felipe Santana</strong>
              </div>
              <div className="city">
                <p>Assento</p>
                <strong>28A</strong>
              </div>
            </section>
            <section className="bottom">
              <div className="container">
                <div className="boarding-info">
                  <dl>
                    <dt>
                      <p>Embarque</p>
                      <time>16:15</time>
                    </dt>
                    <dt>
                      <p>Terminal</p>
                      <strong>2</strong>
                    </dt>
                    <dt>
                      <p>Portão</p>
                      <strong>15</strong>
                    </dt>
                  </dl>
                </div>
                <div className="qrcode">
                  <QRCodeSVG value="https://reactjs.org/" />,
                  <p>Grupo de embarque 3</p>
                </div>
              </div>
              <p><strong>Atenção:</strong> o portão fecha 16:45</p>
            </section>

          </main>
        </Tilt>
        <footer>Qualquer problema procure o balcão de atendimento da sua companhia aérea</footer>
      </div>
    
  )
}
export default App
