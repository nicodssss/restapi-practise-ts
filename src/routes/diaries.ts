import express from 'express'
import * as diaryService from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(+req.params.id)
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body

  const newDiaryEntry = diaryService.addDiary({
    date,
    weather,
    visibility,
    comment
  })
  res.json(newDiaryEntry)
})

export default router
