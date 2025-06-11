import { NextApiRequest, NextApiResponse } from 'next'
import { getAllUkoly, addUkol } from '../../lib/ukoly'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const ukoly = await getAllUkoly()
    res.status(200).json(ukoly)
  } else if (req.method === 'POST') {
    const { nazev, datum } = req.body
    const newUkol = await addUkol(nazev, new Date(datum))
    res.status(201).json(newUkol)
  } else {
    res.status(405).end()
  }
}
  )
}
