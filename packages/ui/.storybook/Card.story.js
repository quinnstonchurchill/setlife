import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card, Text } from '../src/components'

storiesOf('Card', module)
    .addParameters({
        info: {
            propTablesExclude: [Text]
        }
    })
    .add(
        'Card Component',
        () => (
            <Card
                backgroundImage='url(https://i.imgflip.com/1qnbjv.jpg)'
                backgroundRepeat='no-repeat'
                height={400}
            />
        ),
        {
            info: {
                text: 'Extended <Box/> component for adding box shadows and background images',
                inline: true
            }
        }
    )
    .add(
        'Box Shadows',
        () => (
            <>
                <Card mb='4rem' p='2rem' bg='white' depth={1}>
                    <Text>Shadow 1</Text>
                </Card>
                <Card mb='4rem' p='2rem' bg='white' depth={2}>
                    <Text>Shadow 2</Text>
                </Card>
                <Card mb='4rem' p='2rem' bg='white' depth={3}>
                    <Text>Shadow 3</Text>
                </Card>
                <Card mb='4rem' p='2rem' bg='white' depth={4}>
                    <Text>Shadow 4</Text>
                </Card>
                <Card mb='4rem' p='2rem' bg='white' depth={5}>
                    <Text>Shadow 5</Text>
                </Card>
            </>
        )
    )