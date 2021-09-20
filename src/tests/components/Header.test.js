
import React from 'react';

// shallow makes the render of a JSX component (JSX), without his childs
// https://enzymejs.github.io/enzyme/docs/api/shallow.html
import { shallow } from 'enzyme';

// Import code to test
import Header from 'src/components/Header';

describe('<Header />', () => {
    it ('uses the title given as props', () => {
        const menu =  [{title:'home'},{title:'features'},{title:'contact'}];
        // Shallow render of the component
        const wrapper = shallow(<Header menu={menu}/>);

        // I verify if the value in the component is the same as I decided up
        expect(wrapper.find('a')).toHaveLength(3);
    });
});