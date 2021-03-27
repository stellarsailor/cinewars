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
import Main from "./Main";
import { serverUrl } from "../../api/serverUrl";
import axios from 'axios';
// to resolve cors problem (https://github.com/axios/axios/issues/1754)
axios.defaults.adapter = require('axios/lib/adapters/http');

const store = createStore(rootReducer, applyMiddleware(Thunk))

describe('<Main />', () => {
  it('matches snapshot', () => {
    const utils = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the table properly', () => {
    const utils = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    utils.getByText('Name')
    utils.getByText('Birth')
    utils.getByText('Height')
    utils.getByText('Mass')

    utils.getByText('< Prev')
    utils.getByText('1')
    utils.getByText('Next >')

    utils.getByAltText("stormtrooper's portrait")
  });

  it("shows character list properly", async () => {
    const utils = render(
      <Provider store={store}>
        <App>
          <Main />
        </App>
      </Provider>
    );
    let url = `${serverUrl}/people`
    const res = await axios(url)
    const data = res.data

    utils.getByText(data.results[0].name)
    utils.getAllByText(data.results[0].birth_year)
    utils.getAllByText(data.results[0].height)
    utils.getAllByText(data.results[0].mass)
  })
  
  it('should remain page 1 when press Prev at page 1 and shows next page when click Next >', async () => {
    const utils = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const prevPageButton = utils.getByText('< Prev')
    const pageNumber = utils.getByText('1')
    const nextPageButton = utils.getByText('Next >')

    fireEvent.click(prevPageButton)

    expect(pageNumber).toHaveTextContent('1')

    fireEvent.click(nextPageButton)

    let url = `${serverUrl}/people/?page=2`
    const res = await axios(url)
    const data = res.data

    utils.getByText(data.results[0].name)
    utils.getAllByText(data.results[0].birth_year)
    utils.getAllByText(data.results[0].height)
    utils.getAllByText(data.results[0].mass)
  });

});