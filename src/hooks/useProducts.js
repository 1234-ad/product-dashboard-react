import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  fetchProducts, 
  fetchCategories, 
  fetchProductsByCategory, 
  addProduct, 
  updateProduct, 
  deleteProduct 
} from '../services/api';

// Query keys
export const QUERY_KEYS = {
  PRODUCTS: 'products',
  CATEGORIES: 'categories',
};

// Fetch products hook
export const useProducts = ({ page, limit, search, category }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS, { page, limit, search, category }],
    queryFn: () => {
      if (category && category !== 'all') {
        return fetchProductsByCategory({ category, page, limit });
      }
      return fetchProducts({ page, limit, search });
    },
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Fetch categories hook
export const useCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Add product mutation
export const useAddProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      // Invalidate and refetch products
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PRODUCTS] });
    },
  });
};

// Update product mutation
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      // Invalidate and refetch products
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PRODUCTS] });
    },
  });
};

// Delete product mutation
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      // Invalidate and refetch products
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PRODUCTS] });
    },
  });
};