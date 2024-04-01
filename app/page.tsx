import Image from "next/image";
import PDFViewer from "./PdfViewer";

export default function Home() {
  return (
    <main>
      <PDFViewer file="/file.pdf" />
    </main>
  );
}
