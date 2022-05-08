import { createSlice } from "@reduxjs/toolkit";
import globe from './../img/globe.png'




const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articleItems: [
          {
            id: 'aboutus',
            title: 'About Us',
            text: 'fdsbfdsjk fsdhjfksdhfjks dhfkjsdhfkjsdfhskd',
            img: globe,
            link: 'aboutus',
            isFound: false
          },
          {
            id: 'news',
            title: 'News',
            text: 'some news',
            link: 'news',
            img: globe,
            isFound: false
          },
          {
            id: 'thethirdsection',
            title: 'the third section',
            text: 'the third section',
            img: globe,
            link: 'thethirdsection',
            isFound: false
          },
          {
            id: 'thefinaldiv',
            title: 'the final block',
            text: 'the final block',
            img: globe,
            link: 'thefinaldiv',
            isFound: false
          },
        ]
      },
    reducers: {
        scrollToTheElement(state, action) {
        const filterState = state.articleItems.filter(e => e.text.toLowerCase().includes(action.payload)) 
         filterState[0].isFound = !filterState[0].isFound  
        },
        

    }  
})

export default articlesSlice.reducer
export const {toggleClass, scrollToTheElement} = articlesSlice.actions