
import React,{useState} from 'react';
import classes from './OneFile.module.css';
//import { Document, Page,pdfjs } from 'react-pdf';
//import { Page, Text, View, Document } from 'react-pdf';
//import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
//import DocViewer, { DocViewerRenderers }  from "react-doc-viewer";
//import FileViewer from 'react-file-viewer';

//import FileViewer from 'react-file-viewer';
//import { CustomErrorComponent } from 'custom-error';

 import DocViewer, { DocViewerRenderers } from "react-doc-viewer";


const OneFile=()=>{

    const url = "https://arxiv.org/pdf/1602.06581.pdf";
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    }



    const docs = [
      { uri: require("./filedir/mobile.png") },
    ];










    return (

    <div className={classes.oneFile}>

      
    <DocViewer
        pluginRenderers={DocViewerRenderers}
        documents={docs}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false
          }
        }}
        style={{ height: 500 }}
      />








    </div>

    );










}

export default OneFile;
