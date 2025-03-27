import Dexie, { EntityTable } from "dexie";

export interface PdfFile {
	id: number;
	name: string;
	size: number;
	content: ArrayBuffer;
	dateAdded: Date;
	lastRead: Date | null;
}

export const db = new Dexie("PDFsDatabase") as Dexie & {
	pdfFiles: EntityTable<PdfFile, "id">;
};

db.version(2).stores({
	pdfFiles: "++id, name, size, content, dateAdded, lastRead",
});
