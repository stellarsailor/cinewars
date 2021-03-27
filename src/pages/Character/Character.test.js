import { 
  render, 
  fireEvent, 
  waitFor 
} from "@testing-library/react";
import { 
  createStore, 
  applyMiddleware 
} from 'redux'
import { Provider } from 'react-redux'
import Thunk from 'redux-thunk';
import rootReducer from '../../modules';
import App from '../../App'
import Character from "./Character";
import { serverUrl } from "../../api/serverUrl";
import { createMemoryHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import axios from 'axios';
// to resolve cors problem (https://github.com/axios/axios/issues/1754)
axios.defaults.adapter = require('axios/lib/adapters/http');

const store = createStore(rootReducer, applyMiddleware(Thunk))

describe('<Character />', () => {
  it('matches snapshot', () => {
    const history = createMemoryHistory()
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <Character />
        </Router>
      </Provider>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the loader indicator properly', () => {
    const history = createMemoryHistory()
    const route = '/character/1'
    history.push(route)

    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <Character />
        </Router>
      </Provider>
    );
    
    utils.getByAltText("loader indicator")
  });

  // This should test one character's info properly, but it cannot fetch data from API due to "Error: Cross origin http://localhost forbidden". It can be solved by changing  fetch() to axios() like line 20 here, but the instruction said "Use the Fetch API". I left the function with fetch().

  // it('should fetch data properly with fetch() function', async () => {
  //   const history = createMemoryHistory()
  //   const route = '/character/1'
  //   history.push(route)

  //   const utils = render(<Provider store={store}><Router history={history}><Character /></Router></Provider>);

  //   let url = `${serverUrl}/people/1`
  //   const res = await axios(url)
  //   const data = res.data

  //   await waitFor(() => {
  //     utils.getByText(data.name)
  //     utils.getByText(data.birth_year)
  //     utils.getByText(data.height)
  //     utils.getByText(data.mass)
  //   })
  // })

})