import { SQLite } from "expo";

const tableName = "qrcodes";
const db = SQLite.openDatabase("qrcodes");

export default class SQL {

	static InitDatabase() {
		db.transaction(tx => {
			tx.executeSql(
				`create table if not exists ${tableName} (id integer primary key not null, value text, date text);`
			);
		});
	}

	static AddQRCode = text => {
		db.transaction(
			tx => {
				tx.executeSql(`insert into ${tableName} (value, date) values (?,?)` [
					text,
					new Date().toUTCString()
				]);
			}
		);
	}

	static GetQRCodes = () => {
		return new Promise((resolve, reject) => {
			db.transaction(async tx => {
				await tx.executeSql(
					`select * from ${tableName} order by id DESC`,
					null,
					(_, { rows: { _array } }) => {
						resolve(_array);
					}
				);
			});
		});
	}

}
