import React from 'react';
import logo from './logo.svg';
import './css/style.css'

function App() {
  return (
    <div className="App">

      <header >
        <div className="flex">
          {/* <div className="logo">
            
            <a href="#">
              <img src={require('./assets/images/pngwing.com.png')} alt="Pool Game logo"></img>
            </a>
           
            
          </div> */}
          <nav>
            <button id="nav-toogle" className="hamburger-menu">
              <span className="strip"></span>
              <span className="strip"></span>
              <span className="strip"></span>
            </button>
            <ul id="nav-menu-container">
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Game</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Contacts</a></li>
            </ul>
          </nav>
          <a href="#" id="login-register-button">Login / Register</a>
        </div>
      </header>

      <main>
        <section id="pool-image">
          <div className="pool-marketing-text">
            <h1>The Best <span>Pool</span> Game Out There</h1>
            <h5>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</h5>
            <button>Read More</button>
            <button>Play Game</button>
          </div>
        </section>

        <section id="latest-news">
          <div class="flex">
            <h5>Latest News</h5>
            <div id="latest-news-container">
              <div class="latest-news-item">
                <span class="badge new">New</span>
                <span class="latest-news-text">Stay Tuned we are updating the server</span>
              </div>
            </div>
          </div>
        </section>

        <section id="game-types-boxes">
          <div class="flex">
            <div class="box new">
              <div class="shade"></div>
              <span class="badge new">New</span>
              <div class="contents">
                <h4>The Best Pool Game Out There</h4>
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                <a href="#" class="comments">3 Comments</a>
              </div>
            </div>

            <div class="box strategy">
              <div class="shade"></div>
              <span class="badge strategy">New</span>
              <div class="contents">
                <h4>The Best Pool Game Out There</h4>
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                <a href="#" class="comments">3 Comments</a>
              </div>
            </div>

            <div class="box rpg">
              <div class="shade"></div>
              <span class="badge rpg">New</span>
              <div class="contents">
                <h4>The Best Pool Game Out There</h4>
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                <a href="#" class="comments">3 Comments</a>
              </div>
            </div>

            <div class="box racing">
              <div class="shade"></div>
              <span class="badge racing">New</span>
              <div class="contents">
                <h4>The Best Pool Game Out There</h4>
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                <a href="#" class="comments">3 Comments</a>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-games">
          <h1>Recent Games</h1>
          <div class="flex">
            <div class="box">
              <span class="badge new">New</span>
              <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_1.jpg" />
              <div class="box-lower-section">
                <h4>The Best Pool Game Out There</h4>
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user lorem ipsum dolor sit amet.</p>
                <a href="#" class="comments">3 Comments</a>
              </div>
            </div>

            <div class="box">
              <span class="badge racing">Racing</span>
              <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_2.jpg" />
              <div class="box-lower-section">
                <h4>Susce pulvinar metus nulla, vel facilisis sem</h4>
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user lorem ipsum dolor sit amet.</p>
                <a href="#" class="comments">3 Comments</a>
              </div>
            </div>

            <div class="box">
              <span class="badge adventure">Adventure</span>
              <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_3.jpg" />
              <div class="box-lower-section">
                <h4>The Best Pool Game Out There</h4>
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user lorem ipsum dolor sit amet.</p>
                <a href="#" class="comments">3 Comments</a>
              </div>
            </div>
          </div>
        </section>

        <section id="tournaments">
          <div class="flex">
            <span class="badge tournaments">Tournaments</span>
            <div class="box">
              <span class="badge premium-tournament">Premium Tournament</span>
              <div class="tournaments-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/tournaments_1.jpg" />
              </div>
              <div class="tournaments-content">
                <h3>Starcraft 2</h3>
                <div><label>Tournament Begins:</label> <strong>June 20, 2019</strong></div>
                <div><label>Tournament Ends:</label> <strong>July 01, 2019</strong></div>
                <div><label>Participants:</label> <strong>10 teams</strong></div>
                <div><label>Tournament Organizer:</label> <strong>Admin</strong></div>
                <div><label class="prizes">Prizes:</label> <label>1st place $2000, 2nd place: $1000, 3rd place: $500</label></div>
              </div>
            </div>

            <div class="box">
              <span class="badge premium-tournament">Premium Tournament</span>
              <div class="tournaments-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/tournaments_2.jpg" />
              </div>
              <div class="tournaments-content">
                <h3>World Of Warcraft</h3>
                <div><label>Tournament Begins:</label> <strong>June 20, 2019</strong></div>
                <div><label>Tournament Ends:</label> <strong>July 01, 2019</strong></div>
                <div><label>Participants:</label> <strong>10 teams</strong></div>
                <div><label>Tournament Organizer:</label> <strong>Admin</strong></div>
                <div><label class="prizes">Prizes:</label> <label>1st place $2000, 2nd place: $1000, 3rd place: $500</label></div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-reviews">
          <h1>Recent Reviews</h1>
          <div class="flex">
            <div class="box">
              <span class="rating-badge gold">9.3</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_1.jpg" />
              </div>
              <div>
                <h4>Assasin's Creed</h4>
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
              </div>
            </div>

            <div class="box">
              <span class="rating-badge purple">9.5</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_2.jpg" />
              </div>
              <div>
                <h4>Doom</h4>
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
              </div>
            </div>

            <div class="box">
              <span class="rating-badge green">9.1</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_3.jpg" />
              </div>
              <div>
                <h4>Overwatch</h4>
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
              </div>
            </div>

            <div class="box">
              <span class="rating-badge violet">9.7</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_4.jpg" />
              </div>
              <div>
                <h4>GTA</h4>
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
              </div>
            </div>
          </div>
        </section>

        <section id="posts-comments">
          <div class="flex">
            <div class="game-warrior">
              <img src="https://onclickwebdesign.com/wp-content/uploads/footer_logo.png" />
              <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
              <img class="footer-graphic" src="https://onclickwebdesign.com/wp-content/uploads/sword_lady_footer.png" />
            </div>

            <div class="posts-comments-box">
              <h3>Latest Posts</h3>
              <div class="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_1.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                  <small>By: Admin</small>
                </div>
              </div>

              <div class="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_2.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                  <small>By: Admin</small>
                </div>
              </div>

              <div class="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_3.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                  <small>By: Admin</small>
                </div>
              </div>
            </div>

            <div class="posts-comments-box">
              <h3>Top Comments</h3>
              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_1.jpg" />
                <div>
                  <p><span class="author">James Smith</span> <span>on</span> The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_2.jpg" />
                <div>
                  <p><span class="author">James Smith</span> <span>on</span> The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_3.jpg" />
                <div>
                  <p><span class="author">James Smith</span> <span>on</span> The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_4.jpg" />
                <div>
                  <p><span class="author">James Smith</span> <span>on</span> The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div class="flex">
          <small>Copyright &copy; 2019 All rights reserved | Hassam Corpuration</small>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Games</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Forums</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>

    </div>
  );
}

export default App;
