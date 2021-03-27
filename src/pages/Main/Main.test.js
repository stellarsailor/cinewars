import { render, fireEvent, waitFor, waitForDomChange} from "@testing-library/react";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Thunk from 'redux-thunk';
import rootReducer from '../../modules';
import Main from "./Main";

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

  it('shows next page when click Next >', async () => {
    const utils = render(<Provider store={store}><Main/></Provider>);
    const nextPageButton = utils.getByText('Next >')

    fireEvent.click(nextPageButton)

    await waitFor(() => utils.getByText('2'))
  });
});


describe('<Main />', () => {
  it('should remain page 1 when press Prev at page 1', async () => {
    const utils = render(<Provider store={store}><Main/></Provider>);
    const prevPageButton = utils.getByText('< Prev')
  
    fireEvent.click(prevPageButton)
    fireEvent.click(prevPageButton)
    fireEvent.click(prevPageButton)
  
    await waitFor(() => utils.getByText('1'))
  });
});
