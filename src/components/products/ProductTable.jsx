import { Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

const ProductTableSkeleton = () => (
  <div className="space-y-3">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex space-x-4">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-4 w-[80px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    ))}
  </div>
);

const ProductTable = ({ 
  products = [], 
  isLoading, 
  onEdit, 
  onDelete 
}) => {
  if (isLoading) {
    return <ProductTableSkeleton />;
  }

  if (!products.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No products found</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">
              <div className="flex items-center space-x-3">
                <img 
                  src={product.thumbnail} 
                  alt={product.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <div>
                  <p className="font-medium">{product.title}</p>
                  <p className="text-sm text-gray-500 truncate max-w-[200px]">
                    {product.description}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {product.category}
              </span>
            </TableCell>
            <TableCell>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                product.stock > 10 
                  ? 'bg-green-100 text-green-800' 
                  : product.stock > 0 
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
              }`}>
                {product.stock} units
              </span>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(product)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(product.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;