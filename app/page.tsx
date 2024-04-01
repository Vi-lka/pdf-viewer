import Image from "next/image";
import PDFViewer from "./PdfViewer";

export default function Home() {
  return (
    <main>
      <PDFViewer file="https://s3.amazonaws.com/pdftron/downloads/pl/2gb-sample-file.pdf" />
    </main>
  );
}
