import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-classic-with-mathtype';
// import MathType from '@wiris/mathtype-ckeditor5/src/plugin';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// const str = `Nguyên tử vàng có 79 electron ở vỏ nguyên tử. Điện tích hạt nhân của nguyên tử vàng là;A. +79\nB. -79\nC.  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>-</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math>\nD.  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>+</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math>;D.  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>+</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math>;Giải Thích\nĐáp án D\nĐiện tích hạt nhân là  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>79</mn><mo>.</mo><mo> </mo><mn>1</mn><mo>,</mo><mn>602</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>19</mn></mrow></msup><mo> </mo><mo>=</mo><mo>+</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math> , hoặc kí hiệu là 79+.`

const convertToText = str => {
  const splitStr = str?.split(/<p>(.*?)<\/p>/g);
  return splitStr?.filter(e => e != "").join(`\n`) || ''
}
const converToXml = xml => {
  return xml?.split('\n').map(e => `<p>${e}</p>`).join("") || ''
}

const App = () => {
  const [data, setdata] = useState('')
  console.log(data)

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            'heading',
            'MathType',
            'ChemType',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'ngjyutumberedList',
            'imageUpload',
            'mediaEmbed',
            'insertTable',
            'blockQuote',
            'undo',
            'redo',
          ],
        },
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        setdata(convertToText(data))
      }}
      data={converToXml(data)}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        // console.log( 'Editor is ready to use!', editor );
      }}
    />
  )
}
export default App