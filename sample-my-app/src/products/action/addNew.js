let productId = 0;

export function addNew(projectName) {
  const newProduct = {
    id: ++productId,
    name: projectName,
    createdAt: new Date(),
  };
  const action = { type: "ADD_NEW", payload: newProduct };
  return action;
}
