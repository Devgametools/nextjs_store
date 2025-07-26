interface CategoryPageProps {
    params: {
        categories: string[]
        
    },
    searchParams?: string
}

export default async function CategoryPage(props: CategoryPageProps) {
    const { categories } = await props.params;
    return (
        <div>
            <h1>Category: {categories}</h1>
            <p>Welcome to the {categories} category page!</p>
        </div>
    );
}