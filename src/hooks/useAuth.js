import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/axios"; // Import the axios instance

const useAuth = () => {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      const token = localStorage.getItem("token");
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (token && storedUser) {
        return storedUser;
      }
      return null;
    },
    retry: false,
  });

  const login = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await api.post("/admin/signin", { email, password });
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      queryClient.setQueryData(["user"], data.data.user);
    },
  });

  const updatePassword = useMutation({
    mutationFn: async (email, isAdmin) => {
      const url = isAdmin
        ? "/admin/update-password"
        : "/student/update-password";
      await api.post(url, { email });
    },
  });

  const forgotPassword = useMutation({
    mutationFn: async (email, isAdmin) => {
      const url = isAdmin
        ? "/admin/forgot-password"
        : "/student/forgot-password";
      await api.post(url, { email });
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    queryClient.setQueryData(["user"], null);
  };

  return {
    user,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
    isLoading,
    login,
    forgotPassword,
    updatePassword,
    logout,
  };
};

export default useAuth;
