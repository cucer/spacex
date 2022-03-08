import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { FunctionComponent } from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#444444',
  color: '#06d6a0',
  border: '2px solid #06d6a0',
  //   boxShadow: 24,
  p: 4,
}

interface IModalProps {
  open: boolean
}

const NotificationModal: FunctionComponent<IModalProps> = (props) => {
  const { open } = props
  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} style={{ outline: 'none' }}>
          <Typography id='modal-modal-title' variant='h5'>
            This page built with:
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            React, React Redux, Typescript, GraphQL, Apollo Client, Material UI,
            SpaceX GraphQL API
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default NotificationModal
