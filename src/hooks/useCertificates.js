import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAllCertificates,
  fetchCertificateById,
  uploadCertificates,
} from "../api/certificates";

// get all certificates
export const useFetchAllCertificates = () => {
  return useQuery({
    queryKey: ["certificates"],
    queryFn: () => fetchAllCertificates,
    staleTime: 1000 * 60 * 60 * 24, // Set stale time to 24 hours
    cacheTime: 1000 * 60 * 60 * 24, // Keep data in cache for 24 hours
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });
};

// get certificate by id
export const useFetchCertificateById = (id) => {
  return useQuery({
    queryKey: ["certificate", id],
    queryFn: () => fetchCertificateById(id),
    staleTime: 1000 * 60 * 60 * 24, // Set stale time to 24 hours
    cacheTime: 1000 * 60 * 60 * 24, // Keep data in cache for 24 hours
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });
};

export const useUploadCertificates = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadCertificates,
    onSuccess: () => {
      queryClient.invalidateQueries(["certificates"]);
    },
  });
};
