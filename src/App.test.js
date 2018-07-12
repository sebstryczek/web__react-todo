//import React from 'react';
//import { shallow } from 'enzyme';
//import App from './App';
//
//it('renders without crashing', () => {
//  /*
//  const div = document.createElement('div');
//  ReactDOM.render(<App />, div);
//  ReactDOM.unmountComponentAtNode(div);
//  */
//  const component = shallow(<App />);
//  expect(component.exists()).toEqual(true);
//});
import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers/reducers';

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
      todos={[]}
      deleteTodo={mockFunction}
    />,
  );

  expect(component.exists()).toEqual(true);
});
