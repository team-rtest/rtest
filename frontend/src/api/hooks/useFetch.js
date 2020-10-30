import { useQuery } from "@apollo/client";

function useCreate(query, variables) {
  const { data, loading, error } = useQuery(query, { variables });
  return [data, loading, error];
}

export default useCreate;
