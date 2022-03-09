import axios from 'axios'

/**
 * Fetch USER_MAIN_DATA from API
 * @param {Number} id
 * @returns Object
 */
export const fetchMainData = async (id) => {
  let results
  await axios({
    url: `http://localhost:3000/user/${id}`,
    method: 'GET',
  })
    .then((response) => (results = response.data.data))
    .catch((error) => console.log(error))
  return results
}

/**
 * Fetch USER_ACTIVITY from API
 * @param {Number} id
 * @returns Object
 */
export const fetchActivity = async (id) => {
  let results
  await axios({
    url: `http://localhost:3000/user/${id}/activity`,
    method: 'GET',
  })
    .then((response) => (results = response.data.data))
    .catch((error) => console.log(error))
  return results
}

/**
 * Fetch USER_AVERAGE_SESSIONS from API
 * @param {Number} id
 * @returns Object
 */
export const fetchAverageSession = async (id) => {
  let results
  await axios({
    url: `http://localhost:3000/user/${id}/average-sessions`,
    method: 'GET',
  })
    .then((response) => (results = response.data.data))
    .catch((error) => console.log(error))
  return results
}

/**
 * Fetch USER_PERFORMANCE from API
 * @param {Number} id
 * @returns Object
 */
export const fetchPerformance = async (id) => {
  let results
  await axios({
    url: `http://localhost:3000/user/${id}/performance`,
    method: 'GET',
  })
    .then((response) => (results = response.data.data))
    .catch((error) => console.log(error))
  return results
}
