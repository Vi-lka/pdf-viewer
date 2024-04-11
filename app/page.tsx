"use client"

import { useState } from "react";
import PDFViewer from "./PdfViewer";

export default function Home() {
  
  // const [file, setFile] = useState("/sample.pdf");
  const [index, setIndex] = useState(0);

  return (
    <main>
      <div className="flex justify-center gap-6 flex-wrap items-center">
        <button className=" p-2 border border-white rounded-xl" onClick={() => {
          setIndex(0)
        }}>
          2гб Файл
        </button>
        <button className=" p-2 border border-white rounded-xl" onClick={() => {
          setIndex(1)
        }}>
          Пример
        </button>
        <button className=" p-2 border border-white rounded-xl" onClick={() => {
          setIndex(2)
        }}>
          Скан
        </button>
      </div>
      <PDFViewer file="https://s3.amazonaws.com/pdftron/downloads/pl/2gb-sample-file.pdf" className={index === 0 ? "block" : "hidden"} />
      <PDFViewer file="/sample.pdf" className={index === 1 ? "block" : "hidden"} />
      <PDFViewer file="/scan.pdf" className={index === 2 ? "block" : "hidden"} />
    </main>
  );
}
