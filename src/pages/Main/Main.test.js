import { render, fireEvent, waitFor, waitForDomChange } from "@testing-library/react";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Thunk from 'redux-thunk';
import rootReducer from '../../modules';
import Main from "./Main";
import App from '../../App'
import { serverUrl } from "../../api/serverUrl";
import axios from 'axios';
// to resolve cors problem (https://github.com/axios/axios/issues/1754)
axios.defaults.adapter = require('axios/lib/adapters/http');

const store = createStore(rootReducer, applyMiddleware(Thunk))

describe('<Main />', () => {
  it('matches snapshot', () => {
    const utils = render(<Provider store={store}><Main/></Provider>);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the table properly', () => {
    const utils = render(<Provider store={store}><Main/></Provider>);
    utils.getByText('Name')
    utils.getByText('Birth')
    utils.getByText('Height')
    utils.getByText('Mass')

    utils.getByText('< Prev')
    utils.getByText('1')
    utils.getByText('Next >')

    utils.getByAltText("stormtrooper's portrait")
  });

  it('should remain page 1 when press Prev at page 1', () => {
    const utils = render(<Provider store={store}><Main/></Provider>);
    const prevPageButton = utils.getByText('< Prev')
    let pageNumber = utils.getByText('1')

    fireEvent.click(prevPageButton)
    fireEvent.click(prevPageButton)
    fireEvent.click(prevPageButton)
  
    expect(pageNumber).toHaveTextContent('1')
  });

  it('shows next page when click Next >', async () => {
    const utils = render(<Provider store={store}><Main/></Provider>);
    const nextPageButton = utils.getByText('Next >')

    fireEvent.click(nextPageButton)

    await waitFor(() => utils.getByText('2'))
  });

  it("shows character list properly", async () => {
    const utils = render(<Provider store={store}><Main/></Provider>);
    let url = `${serverUrl}/people/?page=2`
    const res = await axios(url)
    const data = res.data

    await waitFor(() => {
      utils.getByText(data.results[0].name)
      utils.getByText(data.results[0].birth_year)
      utils.getByText(data.results[0].height)
      utils.getByText(data.results[0].mass)
    })
  })
  
});