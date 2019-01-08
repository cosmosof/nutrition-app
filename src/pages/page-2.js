import React from 'react'
import { Link } from 'gatsby'
import { Button, Layout, DatePicker, TimePicker } from 'antd'

import SEO from '../components/seo'

const SecondPage = () => {
  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

  return (
  
  <div>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div><TimePicker /></div>
    <div style={{width: `479px`, background: `gray`}}><DatePicker /></div>

    <Link to="/">Go back to the homepage</Link>
    <Button type="primary">Primary</Button>
  </div>
)}

export default SecondPage
