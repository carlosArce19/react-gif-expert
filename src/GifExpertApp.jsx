import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        setCategories( categories => {
            const categoryExist = categories.find( category =>  category.toLowerCase() === newCategory.toLowerCase() );
            return categoryExist ? categories: [newCategory, ...categories];
        });
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={ onAddCategory } />
            {
                categories.map( ( category ) => (
                    <GifGrid
                        key = { category }
                        category={ category }
                    />
                ))
            }
        </>
    );
}
