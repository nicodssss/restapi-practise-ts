import { NewDiaryEntry } from './types'
const isString = (comment: string): boolean =>{
    return typeof comment === 'string'
}
const parseComment = (commentFromReq: any): string => {
    if(!isString(commentFromReq)){
    return commentFromReq
}


const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    // ...
  }
}

  return newEntry
}

export default 