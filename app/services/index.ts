
import Analytics from '@segment/analytics-node'

const sourceId=process.env.TWILO_SRC
const writeKey=process.env.TWILO_WRITE_KEY
//@ts-ignore
export const analytics= new Analytics(writeKey)



