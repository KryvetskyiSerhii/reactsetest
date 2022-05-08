
import Blog from './components/blog/Blog';
import Main from './components/main/Main';
import { Route, Routes } from 'react-router-dom';
import ArticleItem from './components/blog/news/ArticleItem';
import DocumentMeta from 'react-document-meta'

function App(props) {
  
  const meta = {
    title: 'Search engine',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
  }

  return (
    <div className="App">
       <DocumentMeta {...meta} />
      
       
        <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/blog' element ={<Blog store={props.store}/>}>
          <Route path='/blog:id' element={<ArticleItem />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
