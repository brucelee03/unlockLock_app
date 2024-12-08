import styled from 'styled-components'

export const UnlockContainer = styled.div`
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`

export const LockImage = styled.img`
  width: 100px;

  @media (max-width: 577px) {
    width: 80px;
  }
`

export const DeviceStatus = styled.p`
  color: #e2e8f0;
  font-size: 28px;
  margin-bottom: 120px;
  font-family: 'Roboto';

  @media (max-width: 577px) {
    font-size: 19px;
    margin-bottom: 60px;
  }
`

export const DeviceButton = styled.button`
  color: #ffffff;
  background-color: #06b6d4;
  width: 120px;
  height: 44px;
  border-width: 0;
  border-radius: 10px;
  font-size: 18px;

  @media (max-width: 577px) {
    width: 80px;
    heigth: 30px;
    font-size: 15px;
  }
`
