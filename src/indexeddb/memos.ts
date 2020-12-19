import Dexie from 'dexie'

export interface MemoRecord {
  datetime: string
  title: string
  text: string
}

const database = new Dexie('markdown-editor') // DB名
database.version(1).stores({ memos: '&datetime' }) // DBのバージョン指定、storesで使用するテーブルとインデックスとなるデータ名を指定
const memos: Dexie.Table<MemoRecord, string> = database.table('memos') // 型定義は1つ目で総称型、2つ目でキーとなるデータの型

// DBへの保存処理
export const putMemo = async (title: string, text: string): Promise<void> => {
  const datetime = new Date().toISOString() // フォーマットはISO8601
  await memos.put({ datetime, title, text }) // 保存
}
