interface CategoryPageProps {
    params: {
        category: string;
    };
}

export default function CategoryPage(props: CategoryPageProps) {
    const { category } = props.params;
    return (
        <div>
            <h1>Category: {category}</h1>
            <p>Welcome to the {category} category page!</p>
        </div>
    );
}