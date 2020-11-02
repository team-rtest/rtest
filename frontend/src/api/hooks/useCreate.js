import { useMutation } from "@apollo/client";

function useCreate(mutation) {
  const [create, { data }] = useMutation(mutation);
  return [create, data];
}

export default useCreate;
