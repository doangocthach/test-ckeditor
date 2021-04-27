import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from 'ckeditor5-classic-with-mathtype';
// import MathType from '@wiris/mathtype-ckeditor5/src/plugin';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
const str = `+ Mệnh đề” Nếu  !!![equation](<math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><msup><mrow><mi>A</mi><mi>B</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>=</mo><mo>-</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><msup><mrow><mi>B</mi><mi>C</mi></mrow><mrow><mo>→</mo></mrow></msup></math>)!!!  thì  !!![equation](<math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><mi>B</mi></math>)!!!  là trung điểm của đoạn AC sai vì  <math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><msup><mrow><mi>A</mi><mi>B</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>=</mo><mo>-</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><msup><mrow><mi>B</mi><mi>C</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>⇒</mo></math>   <math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><mi>A</mi></math>  là trung điểm BC.↵ ta suy ra  <math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><msup><mrow><mi>C</mi><mi>B</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>=</mo><msup><mrow><mi>A</mi><mi>C</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>.</mo></math>   sai vì  <math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><msup><mrow><mi>A</mi><mi>B</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>-</mo><mn>3</mn><msup><mrow><mi>A</mi><mi>C</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>⇒</mo></math>   <math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><msup><mrow><mi>C</mi><mi>B</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>=</mo><mo>-</mo><mn>4</mn><msup><mrow><mi>A</mi><mi>C</mi></mrow><mrow><mo>→</mo></mrow></msup></math> .↵+ Mệnh đề "Vì  <math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><msup><mrow><mi>A</mi><mi>B</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>=</mo><mo>-</mo><mn>2</mn><msup><mrow><mi>A</mi><mi>C</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>+</mo><mn>5</mn><msup><mrow><mi>A</mi><mi>D</mi></mrow><mrow><mo>→</mo></mrow></msup></math>  nên bốn điểm  cùng thuộc một mặt phẳng" là đúng vì theo định lý về sự đồng phẳng của 3 véctơ.↵+ Mệnh đề "từ  <math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><msup><mrow><mi>A</mi><mi>B</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>=</mo><mn>3</mn><msup><mrow><mi>A</mi><mi>C</mi></mrow><mrow><mo>→</mo></mrow></msup></math>  ta suy ra  <math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><msup><mrow><mi>B</mi><mi>A</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>=</mo><mo>-</mo><mn>3</mn><msup><mrow><mi>C</mi><mi>A</mi></mrow><mrow><mo>→</mo></mrow></msup></math> " là sai vì  <math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><msup><mrow><mi>A</mi><mi>B</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>=</mo><mn>3</mn><msup><mrow><mi>A</mi><mi>C</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>⇒</mo><msup><mrow><mi>B</mi><mi>A</mi></mrow><mrow><mo>→</mo></mrow></msup><mo>=</mo><mn>3</mn><msup><mrow><mi>C</mi><mi>A</mi></mrow><mrow><mo>→</mo></mrow></msup></math>`
const convertToText = str => {
  const splitStr = str?.split(/<p>(.*?)<\/p>/g);
  return splitStr?.filter(e => e != "").join(`\n`) || ''
}
const converToXml = xml => {
  return xml?.split('\n').map(e => `<p>${e}</p>`).join("") || ''
}
const App = () => {
  const [data, setdata] = useState('')
  // console.log(data)

  return (
    <CKEditor
      editor={Editor}
      config={{
        ckfinder: {
          uploadUrl: 'http://localhost:8000/upload',
        },
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
            "Image",
            "ImageCaption",
            "ImageStyle",
            "ImageToolbar",
          ],
        },
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        // console.log(converToXml(data))
        setdata(data);
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