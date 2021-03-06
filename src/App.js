import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Menu from './components/LeftMenu';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <main id="outer-conainer">
	      <Menu />
	      <div class="container" id="page-wrap">
	        <div class="panel panel-default">
	          <div class="panel-heading">
	            <h3 class="panel-title">
	              BOOK CATALOG &nbsp;
	              {localStorage.getItem('jwtToken') &&
	                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
	              }
	            </h3>
	          </div>
	          <div class="panel-body">
	            <table class="table table-stripe">
	              <thead>
	                <tr>
	                  <th>ISBN</th>
	                  <th>Title</th>
	                  <th>Author</th>
	                </tr>
	              </thead>
	              <tbody>
	                {this.state.books.map(book =>
	                  <tr>
	                    <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
	                    <td>{book.title}</td>
	                    <td>{book.author}</td>
	                  </tr>
	                )}
	              </tbody>
	            </table>
	          </div>
		    </div>
	      </div>
      </main>
    );
  }
}

export default App;
