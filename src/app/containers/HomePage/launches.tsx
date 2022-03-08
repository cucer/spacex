import React, { useEffect, useState } from 'react'
import { createSelector } from 'reselect'
import { useAppSelector } from '../../hooks'
import { makeSelectSpacexLaunches } from './selectors'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Footer } from '../../components/Footer'
import NotificationModal from '../../components/Modal'
import BackgroundImage from '../../assets/spacex.jpg'

const stateSelector = createSelector(
  makeSelectSpacexLaunches,
  (spacexLaunches) => ({
    spacexLaunches,
  })
)

export function Launches() {
  const [openModal, setOpenModal] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(false)
    }, 5000)
  }, [])

  const { spacexLaunches } = useAppSelector(stateSelector)

  const isEmpty = !spacexLaunches || spacexLaunches.length === 0

  if (isEmpty) return <div>Loading...</div>

  const theme = createTheme({
    typography: {
      h6: {
        fontSize: 16,
      },
      subtitle1: {
        fontWeight: 500,
        fontStyle: 'italic',
      },
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  })

  const styles = {
    paperContainer: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%',
      backgroundImage: `url(${BackgroundImage})`,
    },
  }

  return (
    <ThemeProvider theme={theme}>
      {/* Main */}
      <main>
        <Box
          sx={{
            bgcolor: 'black',
            pt: 8,
            pb: 6,
          }}
          style={styles.paperContainer}
        >
          <Container maxWidth='lg'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='white'
              gutterBottom
            >
              SpaceX Launches
            </Typography>
            <Typography variant='h5' align='center' color='white' paragraph>
              On Thursday, December 9 at 1:00 a.m. EST, Falcon 9 launched NASA’s
              Imaging X-ray Polarimetry Explorer (IXPE) to low Earth orbit from
              historic Launch Complex 39A (LC-39A) at NASA’s Kennedy Space
              Center in Florida. This was the fifth flight for NASA’s Launch
              Service Program.
            </Typography>
            <Typography variant='h6' align='center' color='white' paragraph>
              This was the fifth flight for this Falcon 9’s first stage booster,
              which previously supported launch of Crew-1, Crew-2, SXM-8, and
              CRS-23. This mission marked SpaceX’s 130th flight of Falcon 9 and
              its 90th successful landing.
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              color='#06d6a0'
              paragraph
            >
              “You want to wake up in the morning and think the future is going
              to be great - and that’s what being a spacefaring civilization is
              all about. It’s about believing in the future and thinking that
              the future will be better than the past. And I can’t think of
              anything more exciting than going out there and being among the
              stars.” <br />- Elon Musk
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth='xl'>
          <Grid container spacing={4}>
            {spacexLaunches &&
              spacexLaunches.map((launch) => (
                <Grid item key={launch?.id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: '#444444',
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, color: 'white' }}>
                      <Typography gutterBottom variant='h6'>
                        <span style={{ color: '#8e7cc3' }}>Mission Name: </span>{' '}
                        {launch?.mission_name}
                      </Typography>
                      <Typography gutterBottom variant='h6'>
                        <span style={{ color: '#8e7cc3' }}>Rocket Name: </span>{' '}
                        {launch?.rocket?.rocket_name}
                      </Typography>
                      <Typography gutterBottom variant='h6'>
                        <span style={{ color: '#8e7cc3' }}>Launch Year: </span>{' '}
                        {launch?.launch_year}
                      </Typography>
                      <Typography gutterBottom variant='h6'>
                        <span style={{ color: '#8e7cc3' }}>
                          Launch Success:{' '}
                        </span>{' '}
                        {launch?.launch_success &&
                        launch?.launch_success === true
                          ? 'Succeed'
                          : 'Failed'}
                      </Typography>
                      <Typography gutterBottom variant='h6'>
                        <span style={{ color: '#8e7cc3' }}>Site Name: </span>{' '}
                        {launch?.launch_site?.site_name}
                      </Typography>
                      <Typography gutterBottom variant='h6'>
                        <span style={{ color: '#8e7cc3' }}>Site Desc: </span>{' '}
                        {launch?.launch_site?.site_name_long}
                      </Typography>
                    </CardContent>

                    <CardActions sx={{ px: 2, fontSize: 14 }}>
                      {launch?.links?.article_link && (
                        <Link
                          color='#06d6a0'
                          underline='none'
                          href={launch?.links?.article_link}
                        >
                          <strong>News</strong>
                        </Link>
                      )}
                      {launch?.links?.wikipedia && (
                        <Link
                          color='#06d6a0'
                          underline='none'
                          href={launch?.links?.wikipedia}
                        >
                          <strong>Wiki</strong>
                        </Link>
                      )}
                      {launch?.links?.video_link && (
                        <Link
                          color='#06d6a0'
                          underline='none'
                          href={launch?.links?.video_link}
                        >
                          <strong>Video</strong>
                        </Link>
                      )}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'black', p: 2 }} component='footer'>
        <Footer />
      </Box>
      {/* Modal */}
      <div onClick={() => setOpenModal(false)}>
        <NotificationModal open={openModal} />
      </div>
    </ThemeProvider>
  )
}
