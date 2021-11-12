import { csrfFetch } from "./csrf.js";

const POST_COMMENT = "session/PostComments"
const PUT_COMMENT = "session/PutComments";
const GET_COMMENTS = "session/GetComments";
const DELETE_COMMENT = "session/DeleteComments";

const GetComments = (data) => {
  return {
    type: GET_COMMENTS,
    payload: data,
  };
};

const AddComments = (comment) => {
  return {
    type:POST_COMMENT,
    payload: comment,
  }
}

const UpdateComment = (comment) => {
  return {
    type: PUT_COMMENT,
    comment,
  };
};

const DeleteComment = () => {
  return {
    type: DELETE_COMMENT,
  };
};

export const UpdateAComment = (input, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${id}`, {
    method:"PUT",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const { UpdatedComment } = await response.json();
    dispatch(UpdateComment(UpdatedComment));
  }
}

export const AddAComment = (form) => async (dispatch) => {
  console.log("Beginning........", form.content)
  const formData = new FormData()
  formData.append('content', form.content)

  for (let value of formData.values()) {
    console.log("..... ",value);
 }

  const response = await fetch(`/api/add`, {
    method: "POST",
    body: formData,
  });

  console.log("things........", response)

  if (response.ok) {
    const { NewComment } = await response.json();
    dispatch(AddComments(NewComment));
  }
}

export const GetAllComments = () => async (dispatch) => {
  const response = await fetch(`/api/comments`);

  if (response.ok) {
    const data = await response.json();
    dispatch(GetComments(data));
  }
};

export const DeleteAComment = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(DeleteComment());
  }
};

const initialState = { comments: [] };
const CommentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {  
    case GET_COMMENTS:
      newState = Object.assign({}, state);
      newState.comments = action.payload.comments;
      return newState;
    case DELETE_COMMENT:
      newState = Object.assign({}, state);
      delete newState[action.comments];
      return newState;
    case POST_COMMENT:
      newState[action.payload.id] = action.payload
      return newState
    default:
      return state;
  }
};
export default CommentReducer;
