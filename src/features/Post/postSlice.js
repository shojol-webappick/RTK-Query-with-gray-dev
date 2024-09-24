import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "hello everyone",
    description:
      "hello everyone this a post description and you just read it and please like, share and follow me for more post like this",
  },
  {
    id: 2,
    title: "please wait",
    description:
      "hello everyone this a post description and you just read it and please like, share and follow me for more post like this",
  },
];
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

// export const {} = postSlice.actions;

export default postSlice.reducer;
