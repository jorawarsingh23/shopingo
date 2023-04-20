import React from 'react'
import { NavBar } from './components/NavBar'
import { FeatureNavBar } from './components/FeatureNavBar'
import { CssBaseline } from '@mui/material'

export const App = () => {
  return (
    <CssBaseline>
        <NavBar />
        <FeatureNavBar />
    </CssBaseline>
  )
}
