import React from 'react'
import { withSiteData } from 'react-static'
import { Card } from 'antd'
import { Start } from '../components/Steps'
//
import logoImg from '../logo.png'


export default withSiteData(() => (
  <div>
    <Card title="Welcome to React-static tutorial" style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
      <div className="custom-image">
        <img alt="react-static" width="100%" src={logoImg} />
      </div>
    </Card>
    <div>To be able to create website in React you may
       need to learn JavaScript and/or TupeScript </div>
    <Start key="0" />
  </div>
))
