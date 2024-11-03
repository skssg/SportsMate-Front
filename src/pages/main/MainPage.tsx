import React from 'react'
import Header from '../../components/frames/Header'
import BottomMenu from '../../components/frames/BottomMenu'
import SearchBar from '../../components/commons/SearchBar'
import EvBanner from '../../components/EvBanner'
import Category from '../../components/commons/Category'

const MainPage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <br />
      <EvBanner />
      <br />
      <Category />
      <BottomMenu />
    </div>
  )
}

export default MainPage