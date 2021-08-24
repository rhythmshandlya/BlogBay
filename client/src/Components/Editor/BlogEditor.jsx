import React from "react";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./constants.js";
import api from "../../Util/api.js";
import './Stylesheets/editor.css';
import { useHistory } from 'react-router-dom';

import Loading from './Loading'


const ReactEditor = (props) => {

  const history = useHistory();
  const [loadingSave, setLoadingSave] = React.useState(null);
  const [loadingPublish, setLoadingPublish] = React.useState(null);

  console.log(props.data);
  const editorJsRef = React.useRef(null);

  //Store data to api
  const handleSave = React.useCallback(async () => {
    async function fetchMyAPI() {
      try {
        setLoadingSave(<Loading/>);
        const savedData = await editorJsRef.current.save();
        await api.patch('user/currentBlog', savedData, { withCredentials: true });
        document.querySelector('.inlineFrame').contentWindow.location.reload()
        setLoadingSave(null);
      } catch (err) {
        setLoadingSave(null);
        alert(err.response.data.message);
      }
  }
  fetchMyAPI();
  }, []);

  //publish data
  const handlePublish=async ()=>{
    const savedData = await editorJsRef.current.save();

    let sampleImages = [];
    savedData.blocks.forEach(element => {
    if (element.type === 'simpleImage')
        sampleImages.push(element.data.url);
    });

    const blog = {
      title: savedData.blocks[0].data.text,
      content: savedData,
      summary: savedData.blocks[1].data.text,
      blogImages: sampleImages
    }
    try {
      setLoadingPublish(<Loading />);
      const newBlog = await api.post('/blogs', blog, { withCredentials: true });
      await api.patch('user/currentBlog', {}, { withCredentials: true });
      setLoadingPublish(null);

      history.push(`/blog/${newBlog.data.data._id}`);
    } catch (err) {
      setLoadingPublish(null);
      alert(err.response);
    }
  }
  const handlePreview = () => {
    document.querySelector('.inlineFrame').classList.toggle('hide');
  }

  return (
    <React.Fragment>
      <div className='btn-container-editor'>
        <div className='btn-editor btn-save' onClick={handleSave}>SAVE{loadingSave}</div>
        <div className='btn-editor btn-preview' onClick={handlePreview}>PREVIEW</div>
        <div className='btn-editor btn-publish' onClick={handlePublish}>PUBLISH{loadingPublish}</div>
      </div>

      <iframe className="inlineFrame hide"
        title="Inline Frame Preview"
        width="60%"
        height="600px"
        src="http://localhost:3000/preview">
      </iframe>

      <EditorJs
        instanceRef={instance => (editorJsRef.current = instance)}
        tools={EDITOR_JS_TOOLS}
        data={props.data}
      />
    </React.Fragment>
  );
};

export default ReactEditor;
