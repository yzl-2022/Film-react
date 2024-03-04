import './List-film.css';

function List() {
  return (
    <div class="content wrapper">
      <h2>Liste des films</h2>
      <ul>
          <li>
              <a href="#">
                  <div class="pic"><img src="" alt=""/></div>
                  <div class="txt">
                      <h3>Queen Elizabeth II</h3>
                      <p>This is a special collection in terms of Queen Elizabeth II.</p>
                      <p><span>1125</span> items avaliable</p>
                  </div>
              </a>
              <div class="promo">SPÉCIAL</div>
          </li>
          <li>
              <a href="#">
                  <div class="pic"><img src="" alt=""/></div>
                  <div class="txt">
                      <h3>Asian Collection</h3>
                      <p>This is a special collection on asian stamps.</p>
                      <p><span>1125</span> items avaliable</p>
                  </div>
              </a>
          </li>
          <li>
              <a href="#">
                  <div class="pic"><img src="" alt=""/></div>
                  <div class="txt">
                      <h3>Personal Collection of Dr Jhon Stampee</h3>
                      <p>Personal collection of Dr Jhon Stampee.</p>
                      <p>Limited time offer.</p>
                  </div>
              </a>
          </li>
          <li>
              <a href="#">
                  <div class="pic"><img src="" alt=""/></div>
                  <div class="txt">
                      <h3>A ride back to 1900s</h3>
                      <p>Stamps used in 1900s from all over the world.</p>
                      <p>Starting price: <span>$15</span></p>
                  </div>
              </a>
          </li>
          <li>
              <a href="#">
                  <div class="pic"><img src="" alt=""/></div>
                  <div class="txt">
                      <h3>A ride back to 1900s</h3>
                      <p>Stamps used in 1900s from all over the world.</p>
                      <p>Starting price: <span>$15</span></p>
                  </div>
              </a>
          </li>
      </ul>
    </div>
  );
}

export default List