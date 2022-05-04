const axios = require('axios')

// Create activity 
// Add note (optional, if provided)

exports.handler = async (event) => {
  try {
    console.log(JSON.parse(event.body))
    const { activity_payload, node_payload, auth } = JSON.parse(event.bod)
    // const { payload, auth } = JSON.parse(event.body)
    const { data } = await axios({
      url: `https://app.orbit.love/api/v1/${auth.workspaceId}/activities`,
      method: 'POST',
      headers: { Authorization: `Bearer ${auth.apiToken}` },
      data: activity_payload,
    })
    console.log(data)
    return res(data)
  } catch (error) {
    return res({ error }, 500)
  }
}

function res(o, statusCode = 200) {
  return { statusCode, body: JSON.stringify(o) }
}
