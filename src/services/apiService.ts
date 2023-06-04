import axios from 'axios'

const appleMusicAPI = () => {
  return axios.create({
    baseURL: 'https://api.music.apple.com',
    timeout: 20000,
    headers: { 'content-type': 'application/json' }
  })
}

export default appleMusicAPI
