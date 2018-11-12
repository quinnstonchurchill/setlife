import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import { ThemeProvider, GlobalStyle } from '../src/styles'
import { Box } from '../src/components'

addDecorator(withInfo)
addDecorator(withNotes)
addDecorator(story => (
    <ThemeProvider>
        <>
            <Box p='2rem'>{story()}</Box>
            <GlobalStyle />
        </>
    </ThemeProvider>
))

const req = require.context('.', true, /\.story\.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)