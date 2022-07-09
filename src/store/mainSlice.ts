import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import sources from '../mock/sources.json';
import cities from '../mock/cities.json';
export const getProfileAsync:any = createAsyncThunk(
    'profile/getProfileAsync',
    async (params:any, state:any) => {
        await new Promise((resolve:any) => {
            const timerId = setTimeout(() => {
              console.log({results: params});
              resolve()
            }, 2000)
    },
  )
})

const toolkitSlice = createSlice({
  name: 'main',
  initialState: {
    loading: true as boolean | null,
    sources: sources as any [],
    cities: cities as any [],
  },
  reducers: {
  },
  extraReducers: {
    [getProfileAsync.pending]: (state:any, action:any) => {
      state.loading = false;
    },
    [getProfileAsync.fulfilled]: (state:any, { payload }:any) => {
      state.loading = true;
    },
    [getProfileAsync.rejected]: (state:any, action: any) => {
      state.loading = true;
    },
  }
})

export default toolkitSlice.reducer;
export const { } = toolkitSlice.actions;