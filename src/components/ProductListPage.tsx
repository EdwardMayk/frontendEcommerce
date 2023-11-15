// Importa tus componentes y la consulta GraphQL necesaria
import { useGetAllProductsQuery } from '../../graphql/generated/schema';
import { ProductCard } from '@/components/ProductCard';

const ProductsPage = () => {
    // Llama a la consulta GraphQL
    const { loading, error, data } = useGetAllProductsQuery();

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Error al cargar productos: {error.message}</p>;
    }
    return (
        <div className="" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {data && data.products.map((product) => (
                <ProductCard
                    key={product.uuid}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
};

export default ProductsPage;
