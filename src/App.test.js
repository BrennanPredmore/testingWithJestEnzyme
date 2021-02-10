import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

//CONFIGURE ENYZME
Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

import App from './App';

test('renders learn react link', () => {
 const wrapper = shallow(<App/>)
 expect(wrapper).toBeFalsy();
});
