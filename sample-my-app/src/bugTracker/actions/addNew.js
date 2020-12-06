import bugApi from "../services/bugApi";

// let currentBugId = 0;

// export function addNew(bugName) {
//   const newBug = {
//     id: ++currentBugId,
//     name: bugName,
//     isClosed: false,
//     createdAt: new Date()
//   };
//   const action = { type: "BUG_ADD_NEW", payload: newBug };
//   return action;
// }

export async function addNew(bugName) {
  const newBug = {
    id: 0,
    name: bugName,
    isClosed: false,
    createdAt: new Date(),
  };
  await bugApi.save(newBug);
  const action = { type: "BUG_ADD_NEW", payload: newBug };
  return action;
}
