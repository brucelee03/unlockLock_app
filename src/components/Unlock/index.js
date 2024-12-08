import {useState} from 'react'

import {
  UnlockContainer,
  LockImage,
  DeviceStatus,
  DeviceButton,
} from './styledComponents'

const Unlock = () => {
  const [isDeviceLocked, setDeviceStatus] = useState(true)

  const onChangeLockStatus = () => {
    setDeviceStatus(prevDeviceStatus => !prevDeviceStatus)
  }

  return (
    <UnlockContainer>
      <LockImage
        src={
          isDeviceLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isDeviceLocked ? 'lock' : 'unlock'}
      />
      <DeviceStatus>
        {isDeviceLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </DeviceStatus>
      <DeviceButton type="button" onClick={onChangeLockStatus}>
        {isDeviceLocked ? 'Unlock' : 'Lock'}
      </DeviceButton>
    </UnlockContainer>
  )
}

export default Unlock
