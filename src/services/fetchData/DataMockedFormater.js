/**
 * Fetch USER_MAIN_DATA from mockDATA
 * @param {Array} data
 * @param {Number} id
 * @returns Array
 */
const getUserMainData = (data, id) => {
  const userMainData = []
  userMainData.push(data)
  let userMainDataMocked

  for (let i = 0; i < userMainData[0].length; i++) {
    if (userMainData[0][i].id == id) {
      userMainDataMocked = userMainData[0][i]
      break
    }
  }
  return userMainDataMocked
}

/**
 * Fetch USER_PERFORMANCE from mockDATA
 * @param {Array} data
 * @param {Number} id
 * @returns Array
 */
const getUserPerformance = (data, id) => {
  const userPerformance = []
  userPerformance.push(data)
  let userPerformanceMocked

  for (let j = 0; j < userPerformance[0].length; j++) {
    if (userPerformance[0][j].userId == id) {
      userPerformanceMocked = userPerformance[0][j]
      break
    }
  }
  return userPerformanceMocked
}

/**
 * Fetch USER_AVERAGE_SESSIONS from mockDATA
 * @param {Array} data
 * @param {Number} id
 * @returns Array
 */
const getAverageSession = (data, id) => {
  const userAverageSession = []
  userAverageSession.push(data)
  let userAverageSessionMocked

  for (let j = 0; j < userAverageSession[0].length; j++) {
    if (userAverageSession[0][j].userId == id) {
      userAverageSessionMocked = userAverageSession[0][j]
      break
    }
  }
  return userAverageSessionMocked
}

/**
 * Fetch USER_ACTIVITY from mockDATA
 * @param {Array} data
 * @param {Number} id
 * @returns Array
 */
const getUserActivity = (data, id) => {
  const userActivity = []
  userActivity.push(data)
  let userActivityMocked

  for (let j = 0; j < userActivity[0].length; j++) {
    if (userActivity[0][j].userId == id) {
      userActivityMocked = userActivity[0][j]
      break
    }
  }

  return userActivityMocked
}

export {
  getUserMainData,
  getUserPerformance,
  getAverageSession,
  getUserActivity,
}
