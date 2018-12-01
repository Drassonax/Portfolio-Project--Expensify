import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpensListItem from '../../components/ExpenseListItem'

test('should render expense list correctly', () => {
    const wrapper = shallow(<ExpensListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})