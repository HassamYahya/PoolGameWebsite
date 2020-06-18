import React from 'react';
import logo from './logo.svg';
import './css/style.css'
import { render } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  render() {
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
            <a href="#" id="login-register-button"
              onClick={() => {
                this.setState({ showModal: !this.state.showModal })
              }}
            >Login / Register</a>
          </div>

        </header>
        {this.state.showModal &&
          <Modal
            show={this.state.showModal}
            onHide={() => this.setState({ showModal: false })}
            backdrop="static"
            keyboard={true}
          >
            <Modal.Header closeButton>
              <Modal.Title>Login / Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  type="password"
                />
              </InputGroup>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.setState({ showModal: false })}>
                Close
          </Button>
              <Button onClick={() => this.setState({ showModal: false })} variant="primary">Login/Register</Button>
            </Modal.Footer>
          </Modal>
        }


        <main>

          <section id="pool-image">
            <div className="pool-marketing-text">
              <h1>The Best <span>Pool</span> Game Out There</h1>
              <h5>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</h5>
              <button>Read More</button>
              <button onClick={() => {
                this.setState({ showModal: !this.state.showModal })
              }}>Play Game</button>
            </div>
          </section>

          <section id="latest-news">
            <div className="flex">
              <h5>Latest News</h5>
              <div id="latest-news-container">
                <div className="latest-news-item">
                  <span className="badge new">New</span>
                  <span className="latest-news-text">Stay Tuned we are updating the server</span>
                </div>
              </div>
            </div>
          </section>

          <section id="game-types-boxes">
            <div className="flex">
              <div className="box new">
                <div className="shade"></div>
                <span className="badge new">New</span>
                <div className="contents">
                  <h4>The Best Pool Game Out There</h4>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                  <a href="#" className="comments">3 Comments</a>
                </div>
              </div>

              <div className="box strategy">
                <div className="shade"></div>
                <span className="badge strategy">New</span>
                <div className="contents">
                  <h4>The Best Pool Game Out There</h4>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                  <a href="#" className="comments">3 Comments</a>
                </div>
              </div>

              <div className="box rpg">
                <div className="shade"></div>
                <span className="badge rpg">New</span>
                <div className="contents">
                  <h4>The Best Pool Game Out There</h4>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                  <a href="#" className="comments">3 Comments</a>
                </div>
              </div>

              <div className="box racing">
                <div className="shade"></div>
                <span className="badge racing">New</span>
                <div className="contents">
                  <h4>The Best Pool Game Out There</h4>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                  <a href="#" className="comments">3 Comments</a>
                </div>
              </div>
            </div>
          </section>

          <section id="recent-games">
            <h1>Recent Games</h1>
            <div className="flex">
              <div className="box">
                <span className="badge new">New</span>
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_1.jpg" />
                <div className="box-lower-section">
                  <h4>The Best Pool Game Out There</h4>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user lorem ipsum dolor sit amet.</p>
                  <a href="#" className="comments">3 Comments</a>
                </div>
              </div>

              <div className="box">
                <span className="badge racing">Racing</span>
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_2.jpg" />
                <div className="box-lower-section">
                  <h4>Susce pulvinar metus nulla, vel facilisis sem</h4>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user lorem ipsum dolor sit amet.</p>
                  <a href="#" className="comments">3 Comments</a>
                </div>
              </div>

              <div className="box">
                <span className="badge adventure">Adventure</span>
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_3.jpg" />
                <div className="box-lower-section">
                  <h4>The Best Pool Game Out There</h4>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user lorem ipsum dolor sit amet.</p>
                  <a href="#" className="comments">3 Comments</a>
                </div>
              </div>
            </div>
          </section>

          <section id="tournaments">
            <div className="flex">
              <span className="badge tournaments">Tournaments</span>
              <div className="box">
                <span className="badge premium-tournament">Premium Tournament</span>
                <div className="tournaments-image">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/tournaments_1.jpg" />
                </div>
                <div className="tournaments-content">
                  <h3>Starcraft 2</h3>
                  <div><label>Tournament Begins:</label> <strong>June 20, 2019</strong></div>
                  <div><label>Tournament Ends:</label> <strong>July 01, 2019</strong></div>
                  <div><label>Participants:</label> <strong>10 teams</strong></div>
                  <div><label>Tournament Organizer:</label> <strong>Admin</strong></div>
                  <div><label className="prizes">Prizes:</label> <label>1st place $2000, 2nd place: $1000, 3rd place: $500</label></div>
                </div>
              </div>

              <div className="box">
                <span className="badge premium-tournament">Premium Tournament</span>
                <div className="tournaments-image">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/tournaments_2.jpg" />
                </div>
                <div className="tournaments-content">
                  <h3>World Of Warcraft</h3>
                  <div><label>Tournament Begins:</label> <strong>June 20, 2019</strong></div>
                  <div><label>Tournament Ends:</label> <strong>July 01, 2019</strong></div>
                  <div><label>Participants:</label> <strong>10 teams</strong></div>
                  <div><label>Tournament Organizer:</label> <strong>Admin</strong></div>
                  <div><label className="prizes">Prizes:</label> <label>1st place $2000, 2nd place: $1000, 3rd place: $500</label></div>
                </div>
              </div>
            </div>
          </section>

          <section id="recent-reviews">
            <h1>Recent Reviews</h1>
            <div className="flex">
              <div className="box">
                <span className="rating-badge gold">9.3</span>
                <div className="recent-reviews-image">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_1.jpg" />
                </div>
                <div>
                  <h4>Assasin's Creed</h4>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                </div>
              </div>

              <div className="box">
                <span className="rating-badge purple">9.5</span>
                <div className="recent-reviews-image">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_2.jpg" />
                </div>
                <div>
                  <h4>Doom</h4>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                </div>
              </div>

              <div className="box">
                <span className="rating-badge green">9.1</span>
                <div className="recent-reviews-image">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_3.jpg" />
                </div>
                <div>
                  <h4>Overwatch</h4>
                  <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                </div>
              </div>

              <div className="box">
                <span className="rating-badge violet">9.7</span>
                <div className="recent-reviews-image">
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
            <div className="flex">
              <div className="game-warrior">
                <img src="https://onclickwebdesign.com/wp-content/uploads/footer_logo.png" />
                <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                <img className="footer-graphic" src="https://onclickwebdesign.com/wp-content/uploads/sword_lady_footer.png" />
              </div>

              <div className="posts-comments-box">
                <h3>Latest Posts</h3>
                <div className="post-item">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_1.jpg" />
                  <div>
                    <h5>June 21, 2019</h5>
                    <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                    <small>By: Admin</small>
                  </div>
                </div>

                <div className="post-item">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_2.jpg" />
                  <div>
                    <h5>June 21, 2019</h5>
                    <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                    <small>By: Admin</small>
                  </div>
                </div>

                <div className="post-item">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_3.jpg" />
                  <div>
                    <h5>June 21, 2019</h5>
                    <p>The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user.</p>
                    <small>By: Admin</small>
                  </div>
                </div>
              </div>

              <div className="posts-comments-box">
                <h3>Top Comments</h3>
                <div className="comments-item">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_1.jpg" />
                  <div>
                    <p><span className="author">James Smith</span> <span>on</span> The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                    <h5>June 21, 2019</h5>
                  </div>
                </div>

                <div className="comments-item">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_2.jpg" />
                  <div>
                    <p><span className="author">James Smith</span> <span>on</span> The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                    <h5>June 21, 2019</h5>
                  </div>
                </div>

                <div className="comments-item">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_3.jpg" />
                  <div>
                    <p><span className="author">James Smith</span> <span>on</span> The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                    <h5>June 21, 2019</h5>
                  </div>
                </div>

                <div className="comments-item">
                  <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_4.jpg" />
                  <div>
                    <p><span className="author">James Smith</span> <span>on</span> The Pool Game is the most fun pool game ever made in the history of Game. This is not what we say, these are the qoutes of our community user</p>
                    <h5>June 21, 2019</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="flex">
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
}

export default App;
