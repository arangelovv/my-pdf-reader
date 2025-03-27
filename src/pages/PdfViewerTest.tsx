import { useEffect, useState } from "react";
import { PdfFile, db } from "../shared/db";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url
).toString();

export function PdfViewerTest() {
	const [pdfFile, setPdfFile] = useState<PdfFile | undefined>();
	const [pdfBuffer, setPdfBuffer] = useState<ArrayBuffer | undefined>();
	const [numPages, setNumPages] = useState<number>(0);

	useEffect(() => {
		const loadFirstPdf = async () => {
			try {
				const pdf = await db.table("pdfFiles").get(12); // Get PDF with id 1
				setPdfFile(pdf);
				if (pdf) {
					setPdfBuffer(pdf.content);
				}
			} catch (error) {
				console.error("Error loading PDF:", error);
			}
		};
		loadFirstPdf();
	}, []);

	function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
		setNumPages(numPages);
	}

	return (
		<div className="flex flex-col items-center overflow-auto h-full">
			{pdfBuffer && (
				<Document
					file={pdfBuffer}
					onLoadSuccess={onDocumentLoadSuccess}>
					{Array.from(new Array(numPages), (el, index) => (
						<Page
							key={`page_${index + 1}`}
							pageNumber={index + 1}
							width={600}
						/>
					))}
				</Document>
			)}
		</div>
	);
}
