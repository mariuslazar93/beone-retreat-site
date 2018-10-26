import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby';

class TitleAndMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  }

  render() {
    const { data } = this.props;
    const { title } = data.site.siteMetadata;
    return (
      <nav className="navbar is-info" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">{title}</Link>

            <span role="button"
              className={this.state.menuOpen ? 'navbar-burger burger is-active' : 'navbar-burger burger'}
              onClick={this.handleClick}
              aria-label="menu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>

          <div id="navbar-menu" className={this.state.menuOpen ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end">
              <Link to="/" className="navbar-item">Home</Link>
              <Link to="/schedule/" className="navbar-item">Schedule</Link>
              <Link to="/equipment/" className="navbar-item">Equipment</Link>
              <Link to="/rooms/" className="navbar-item">Rooms</Link>
              <Link to="/contact/" className="navbar-item">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

};


const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <TitleAndMenu data={data} />}
    />
  );
};

export default Header;
