import styles from '../styles/bingoCard.module.css'

const Games = () => {
	const bingoNumberList: Array<Array<number | string>> = [[12,9,3,13,2],[25,29,16,18,28],[40,43,32,34],[55,53,47,49,48],[67,65,64,60,66]]

	bingoNumberList[2].splice(2, 0, '')

	return (
		<table className={styles.bingoCard}>
			<th colSpan={5} className={styles.bingoCardHeader}>Bingo Card</th>
			{bingoNumberList.map((columnNumberList: Array<number | string>) => (
				<tr className={styles.bingoColumns}>
					{columnNumberList.map((n: number | string) => (
						<td className={styles.bingoRows}>{n}</td>
					))}
				</tr>
			))}
		</table>
	)
}

export default Games