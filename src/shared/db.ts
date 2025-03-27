import Dexie, { EntityTable } from "dexie";

export interface PdfFile {
	id: number;
	name: string;
	size: number;
}

export const db = new Dexie("PDFsDatabase") as Dexie & {
	pdfFiles: EntityTable<PdfFile, "id">;
};

db.version(1).stores({
	pdfFiles: "++id, name, size",
});
