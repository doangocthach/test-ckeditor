import React, { useState } from 'react'
import EditorType from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import MyCustomUploadAdapterPlugin from './MyCustomUploadAdapterPlugin';
import './ckEditor.css'
// console.log(EditorType.builtinPlugins.map(plugin => plugin.pluginName), "vcl");

// convert data to '/n'
const convertToText = str => {
  const splitStr = str?.split(/<p>(.*?)<\/p>/g);
  return splitStr?.filter(e => e != "").join(`\n`) || ''
}
// convert '/n' to post data
const converToXml = xml => {
  return xml?.split('\n').map(e => `<p>${e}</p>`).join("") || ''
}
export default function EditorBase({ type = "classic", onChange }) {
  const [showTool, setShowTool] = useState(false)
  const [data, setdata] = useState('')
  return (
    <div className={((type = "inline" && !showTool) ? 'hidden-toolbar' : '') + " compose-editor"}>
      <CKEditor
        editor={EditorType}
        config={{
          extraPlugins: [MyCustomUploadAdapterPlugin],
          toolbar: {
            items: [
              'heading',
              '|',
              'bold',
              'italic',
              '|',
              'MathType',
              'ChemType',
              '|',
              'outdent',
              'indent',
              '|',
              'bulletedList',
              'numberedList',
              'underline',
              'strikethrough',
              'code',
              'subscript',
              'superscript',
              'link',
              'ngjyutumberedList',
              'imageUpload',
              'mediaEmbed',
              'insertTable',
              'blockQuote',
              // 'table',
              'specialCharacters',
              '|',
              'fontsize',
              'fontfamily',
              'fontcolor',
              'alignment',
              '|',
              'undo',
              'redo',
              // 'ckfinder'
            ],
          },
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data)
          setdata(data)
          onChange && onChange(event, editor)
        }}



        data={data}

        onBlur={(event, editor) => {
          type = "inline" && setShowTool(false);
        }}
        onFocus={(event, editor) => {
          type = "inline" && setShowTool(true)
        }}
      />
    </div>
  )
}
