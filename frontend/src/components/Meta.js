import React from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <Helmet>
      <title>
        {userInfo && userInfo.isAdmin ? 'ProShop Admin' : 'Welcome To ProShop'} {title ? ` | ${title}` : ''}
      </title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: '',
  description: 'We sell the best products for cheap',
  keywords: 'electronics, buy electronics, cheap electroincs'
}

export default Meta
