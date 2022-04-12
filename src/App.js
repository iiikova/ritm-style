import "./App.css";
import { FaCalendarDay, FaBookOpen, FaMapMarkerAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Navigation } from "swiper";

function App() {
  return (
    <div className="App">
      {/* MAIN N NAV */}
      <div className="container ">
        <div className="main-header">
          <div className="logo">
            <img src={require("./assets/images/logo.png")} alt="" />
          </div>
          <div className="navbar">
            <ul>
              <li>Main</li>
              <li>Services</li>
              <li>Review</li>
              <li>Contacts</li>
              <li>News</li>
              <li>About me</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <button>Sign up for a session</button>
          </div>
        </div>
        <div className="first-screen">
          <p>
            <span></span> Improved health <span></span>
          </p>
          <h1>Aquatherapy</h1>
          <h1>RitmStyle</h1>
        </div>
      </div>

      {/* SERVICES*/}
      <div className="container outer">
        <h2>
          <span></span> Sessions RitmStyle <span></span>
        </h2>
        <div className="service">
          <div className="service-item">
            <p>Standard RitmStyle</p>
          </div>
          <div className="service-item">
            <p>RitmStyle for couples</p>
          </div>
          <div className="service-item">
            <p>RitmStyle for pregnant</p>
          </div>
          <div className="service-item">
            <p> RitmStyle fully immersed in water</p>
          </div>
          <div className="service-item">
            <p> RitmStyle + colorful underwater photo session</p>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="container ">
        <h2>
          <span></span>
          Reviews
          <span></span>
        </h2>
        <div className="reviews">
          <Swiper
            grabCursor={true}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={25}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <div>
                <h3>Oleksandr Dmitry</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur nulla viverra egestas tellus. Cursus scelerisque
                  phasellus netus proin. Etiam mauris maecenas facilisis
                  faucibus mauris eleifend purus. Purus dictum vulputate
                  elementum mauris amet. Hendrerit sit cras ullamcorper morbi
                  quam vitae ante nibh. Ornare ipsum mi nisl augue placerat
                  lacus. Dolor ipsum fermentum viverra bibendum faucibus urna.
                  Arcu, ut sed tellus lacus quisque diam. Semper sed aenean in
                  etiam mus praesent diam semper in. Pretium id a amet, massa
                  ligula nibh faucibus ornare. Ut aenean rhoncus sed nam ut diam
                  dapibus. Risus nibh faucibus eu vestibulum tempor, quis
                  ultrices mauris. Porta enim, donec odio sagittis, eget velit
                  at.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide active>
              <div>
                <h3>Kira Ivanivna</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                  diam risus morbi nulla dictum. Urna mi orci gravida placerat
                  amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare
                  fringilla enim nibh donec sit imperdiet. Amet, diam duis eu
                  sit et. Volutpat vestibulum a lectus sed blandit. Venenatis
                  urna mattis eu enim molestie iaculis et aliquet. Velit in
                  pellentesque vestibulum phasellus orci. Fermentum sed
                  phasellus aliquam nulla non aenean. Quisque id nunc, mauris
                  potenti a massa. Fermentum at elit, convallis leo dolor
                  aliquet id elementum. Ullamcorper sociis et cum bibendum in
                  egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi
                  nam nulla pulvinar mauris vel lacinia venenatis.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3>Yana Doros</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lacinia eget mattis orci aliquam enim tincidunt gravida
                  aliquet ut. Ipsum vulputate morbi felis, lobortis tincidunt.
                  Pretium dictum odio feugiat auctor diam sit viverra gravida.
                  Lobortis arcu rhoncus, mi mi vitae feugiat amet, vitae ac.
                  Cursus diam turpis iaculis nisi sit. Vel blandit et sit elit
                  vestibulum feugiat proin tempor, justo. Diam commodo,
                  pellentesque at porttitor tristique faucibus faucibus morbi.
                  Bibendum pretium lacus, tempus viverra vitae odio nunc eget.
                  Tortor fermentum orci neque sed. Mauris faucibus diam lorem
                  erat ullamcorper donec egestas neque. Maecenas malesuada
                  mauris magnis sed id. Luctus vitae justo, in consectetur arcu.
                  Nulla feugiat at eu in aliquet. Diam nunc, libero mauris
                  tellus suspendisse morbi sagittis semper.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3>Oleksandr Dmitry</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur nulla viverra egestas tellus. Cursus scelerisque
                  phasellus netus proin. Etiam mauris maecenas facilisis
                  faucibus mauris eleifend purus. Purus dictum vulputate
                  elementum mauris amet. Hendrerit sit cras ullamcorper morbi
                  quam vitae ante nibh. Ornare ipsum mi nisl augue placerat
                  lacus. Dolor ipsum fermentum viverra bibendum faucibus urna.
                  Arcu, ut sed tellus lacus quisque diam. Semper sed aenean in
                  etiam mus praesent diam semper in. Pretium id a amet, massa
                  ligula nibh faucibus ornare. Ut aenean rhoncus sed nam ut diam
                  dapibus. Risus nibh faucibus eu vestibulum tempor, quis
                  ultrices mauris. Porta enim, donec odio sagittis, eget velit
                  at.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3>Oleksandr Dmitry</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur nulla viverra egestas tellus. Cursus scelerisque
                  phasellus netus proin. Etiam mauris maecenas facilisis
                  faucibus mauris eleifend purus. Purus dictum vulputate
                  elementum mauris amet. Hendrerit sit cras ullamcorper morbi
                  quam vitae ante nibh. Ornare ipsum mi nisl augue placerat
                  lacus. Dolor ipsum fermentum viverra bibendum faucibus urna.
                  Arcu, ut sed tellus lacus quisque diam. Semper sed aenean in
                  etiam mus praesent diam semper in. Pretium id a amet, massa
                  ligula nibh faucibus ornare. Ut aenean rhoncus sed nam ut diam
                  dapibus. Risus nibh faucibus eu vestibulum tempor, quis
                  ultrices mauris. Porta enim, donec odio sagittis, eget velit
                  at.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3>Kira Ivanivna</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                  diam risus morbi nulla dictum. Urna mi orci gravida placerat
                  amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare
                  fringilla enim nibh donec sit imperdiet. Amet, diam duis eu
                  sit et. Volutpat vestibulum a lectus sed blandit. Venenatis
                  urna mattis eu enim molestie iaculis et aliquet. Velit in
                  pellentesque vestibulum phasellus orci. Fermentum sed
                  phasellus aliquam nulla non aenean. Quisque id nunc, mauris
                  potenti a massa. Fermentum at elit, convallis leo dolor
                  aliquet id elementum. Ullamcorper sociis et cum bibendum in
                  egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi
                  nam nulla pulvinar mauris vel lacinia venenatis.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3>Yana Doros</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lacinia eget mattis orci aliquam enim tincidunt gravida
                  aliquet ut. Ipsum vulputate morbi felis, lobortis tincidunt.
                  Pretium dictum odio feugiat auctor diam sit viverra gravida.
                  Lobortis arcu rhoncus, mi mi vitae feugiat amet, vitae ac.
                  Cursus diam turpis iaculis nisi sit. Vel blandit et sit elit
                  vestibulum feugiat proin tempor, justo. Diam commodo,
                  pellentesque at porttitor tristique faucibus faucibus morbi.
                  Bibendum pretium lacus, tempus viverra vitae odio nunc eget.
                  Tortor fermentum orci neque sed. Mauris faucibus diam lorem
                  erat ullamcorper donec egestas neque. Maecenas malesuada
                  mauris magnis sed id. Luctus vitae justo, in consectetur arcu.
                  Nulla feugiat at eu in aliquet. Diam nunc, libero mauris
                  tellus suspendisse morbi sagittis semper.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3>Oleksandr Dmitry</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur nulla viverra egestas tellus. Cursus scelerisque
                  phasellus netus proin. Etiam mauris maecenas facilisis
                  faucibus mauris eleifend purus. Purus dictum vulputate
                  elementum mauris amet. Hendrerit sit cras ullamcorper morbi
                  quam vitae ante nibh. Ornare ipsum mi nisl augue placerat
                  lacus. Dolor ipsum fermentum viverra bibendum faucibus urna.
                  Arcu, ut sed tellus lacus quisque diam. Semper sed aenean in
                  etiam mus praesent diam semper in. Pretium id a amet, massa
                  ligula nibh faucibus ornare. Ut aenean rhoncus sed nam ut diam
                  dapibus. Risus nibh faucibus eu vestibulum tempor, quis
                  ultrices mauris. Porta enim, donec odio sagittis, eget velit
                  at.{" "}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* ABOUT */}
      <div className="container outer">
        <h2>
          <span></span> About RitmStyle<span></span>{" "}
        </h2>

        <div className="about">
          <div className="item">
            <h3>RitmStyle massage </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
              purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est.
              Erat consectetur etiam a sit diam in imperdiet amet.
              <br />
              <br />
              Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis
              adipiscing. Nisl convallis mauris in consequat. Sit ac vitae
              posuere maecenas dictumst quam. Felis amet diam, non augue massa.
              Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant
              tortor at tempor.
            </p>
          </div>

          <div className="item"></div>
          <div className="item"></div>
          <div className="item">
            <h3>RitmStyle massage </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu cras
              quis ac a non ut viverra turpis eget. Hendrerit quis pulvinar
              massa ipsum sem. Donec posuere nulla enim non neque etiam. Eros
              arcu, pulvinar penatibus luctus ridiculus sagittis vel nunc hac.
              Nisi, diam tincidunt dui viverra. Eget quis ultricies sem nunc
              risus senectus luctus ultricies. Enim feugiat pharetra pharetra
              et.
              <br />
              <br />
              Pulvinar arcu at morbi posuere cursus. Fermentum est sit enim
              velit ornare molestie. Ipsum nisi id sed tempor elementum. Mi nunc
              eget pellentesque ipsum. Suspendisse risus a id vel massa
              tincidunt. Hendrerit blandit in augue vel mi quam magna egestas.
              Fringilla ac lacus viverra ullamcorper leo, enim vitae id aliquam.
              Magna sed tristique tellus enim, netus tempor at elit dui.
              Ullamcorper hendrerit feugiat libero tellus diam egestas dui
              tellus odio.
            </p>
          </div>
        </div>
      </div>

      {/* PRICE */}
      <div className="container outer">
        <h2>
          <span></span> Session cost<span></span>{" "}
        </h2>
        <div className="price">
          <div className="item">
            <div>
              <p>
                <span></span> RitmStyle with immersion
              </p>
              <p>1000 $</p>
            </div>
            <div>
              <p>
                <span></span> Subscription to RitmStyle
              </p>
              <p>5500 $</p>
            </div>
            <div>
              <p>
                <span></span> RitmStyle with immersion
              </p>
              <p>6000 $</p>
            </div>
            <div>
              <p>
                <span></span> RitmStyle for couples
              </p>
              <p>12000 $</p>
            </div>
            <div>
              <p>
                <span></span> RitmStyle for pregnant women
              </p>
              <p>1100 $</p>
            </div>
            <div>
              <p>
                <span></span> RitmStyle + photo session
              </p>
              <p>130 $</p>
            </div>
          </div>
          <div className="item">
            <div className="image"></div>
            <p>Gift Certificate</p>
          </div>
        </div>
      </div>

      {/* CONTACTS */}
      <div className="container outer">
        <div className="contacts">
          <div className="item">{/* MAP */}</div>
          <div className="item">
            <h3>Swimming pool WorkClass</h3>
            <p>
              <FaMapMarkerAlt className="icon" />
              Bromley 140
            </p>
            <p>
              <FaBookOpen className="icon" />
              c. Edway
            </p>
            <p>
              <FaCalendarDay className="icon" />
              Appointment by appointment
            </p>
            <button>Sign up for a session</button>
          </div>
          <div className="item">
            <h3>Swimming pool WorkClass</h3>
            <p>
              <FaMapMarkerAlt className="icon" />
              Bromley 140 Bromley 140
            </p>
            <p>
              <FaBookOpen className="icon" />
              c. Edway c. Edway
            </p>
            <p>
              <FaCalendarDay className="icon" />
              Appointment by appointment
            </p>
            <button>Sign up for a session</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="container outer">
        <div className="footer">
          <p>© 2018-2022 RitmStyle</p>
          <p>
            <a href="mailto:ikova.ua@gmail.com">
              develop by ikova.ua@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
