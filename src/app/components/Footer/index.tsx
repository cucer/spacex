import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export function Footer() {
  return (
    <Typography variant='body2' color='white' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://cagatayucer.com/'>
        cagatayucer.com
      </Link>
    </Typography>
  )
}
