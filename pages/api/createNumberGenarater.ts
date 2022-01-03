import type { NextApiRequest, NextApiResponse } from 'next'

type NumberGeneraterApiResponse =  {
	numberList?: number[][]
	debugMessage?: string
}

export default function gamesApi(
  req: NextApiRequest,
  res: NextApiResponse<NumberGeneraterApiResponse>
): void {
	const numberList = numberListGenerate()

  if (numberList) {
    res.status(200).json({ numberList })
  } else {
    res.status(400).json({ debugMessage: 'Generate error'})
  }
}

function numberListGenerate(): number[][] {
	const BingoColumn = 5

	const BingoRowNotCenterSize = 5
	const BingoRowCenterSize = 4 // 中央だけ常に空いている状態になっているはずなので、生成する整数は4

	const numberList: number[][] = []

	for (let c = 0; c < BingoColumn; c++){
		if (c === 2) { // ビンゴカード中央の話
			numberList.push(getRandomNumberList(c, BingoRowCenterSize))
			continue
		}
		numberList.push(getRandomNumberList(c, BingoRowNotCenterSize))
	}

	return numberList
}

/**
 * @param columnIndex 列
 * @param maxLength 生成される整数の数
 * @returns ランダムで生成した整数のリスト
 */
function getRandomNumberList(columnIndex: number, maxLength: number): number[]{
	const MaxColumnRange = 15 // ビンゴの最大値は75なので一列の最大値は15
	const columnList: number[] = []

	const minColumnNumber = columnIndex * MaxColumnRange
	const maxColumnNumber = (columnIndex + 1) * MaxColumnRange

	while (columnList.length < maxLength) {
		const randomNumber = getRandomNumber(minColumnNumber, maxColumnNumber)
		if (!columnList.find((n: number) => n === randomNumber)) {
			columnList.push(randomNumber)
		}
	}
	return columnList
}

function getRandomNumber(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}