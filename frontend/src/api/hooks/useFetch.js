import { useMutation } from "@apollo/client";

function useCreate(mutation, variables) {
  const [create, { data }] = useMutation(mutation);
  create({ variables });
  return [data];
}

export default useCreate;
