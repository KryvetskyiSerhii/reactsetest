import { createSlice } from "@reduxjs/toolkit";





const toolkitSlice = createSlice({
    name: 'menu',
    initialState: {
        isModalVisible: false,
        isSearchBarVisible: false,
        menuItems: [
          {
            id: Date(),
            name: 'About Us',
            link: 'blog/about',
            link2: 'about'
          },
          {
            id: Date(),
            name: 'News',
            link: 'blog/',
            link2: ''
          },
          {
            id: Date(),
            name: 'Support',
            link: 'blog/supprt',
            link2: 'supprt'
          },
          {
            id: Date(),
            name: 'Settings',
            link: 'blog/settings',
            link2: 'settings'
          },
          {
            id: Date(),
            name: 'Contacts',
            link: 'blog/contacts',
            link2: 'contacts'
          }
        ]
      },
    reducers: {
        toggleClass(state) {
            state.isModalVisible = !state.isModalVisible  
              
        },
        searchBarIsVisible (state) {
          state.isSearchBarVisible = !state.isSearchBarVisible
        }

    }  
})

export default toolkitSlice.reducer
export const {toggleClass, searchBarIsVisible} = toolkitSlice.actions