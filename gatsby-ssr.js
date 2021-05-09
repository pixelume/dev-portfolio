import React from 'react'
import WrapRoot from './src/components/WrapRoot';
import Layout from './src/components/Layout/Layout';

export const wrapRootElement = ({element}) => (
  <WrapRoot>
    {element}
  </WrapRoot>
  )

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}