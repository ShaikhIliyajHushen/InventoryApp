import React, { useState } from 'react';
import PageBreadcrumbs from '../Breadcrumbs';
import ItemsInventory from './ItemsInventory/Index';
import NewInventory from './NewInvetoryItem/index';
import ViewInvetory from './VeiwInvetory/index'
const Index = () => {
    const [toggleBtn, setToggleBtn] = useState(false)
    const [viewToggleBtn, setViewToggleBtn] = useState(false)
    const [imageUpload, setUploadImage] = useState('')
    const [name, setName] = useState('')

    return (<>
        <PageBreadcrumbs AddingItem={toggleBtn} viewToggleBtn={viewToggleBtn} />
        {toggleBtn || viewToggleBtn ? (
            viewToggleBtn ? (
                <ViewInvetory imageUpload={imageUpload} name={name} />
            ) : (
                <NewInventory setToggleBtn={setToggleBtn} setViewToggleBtn={setViewToggleBtn} setName={setName} setUploadImage={setUploadImage} />
            )
        ) : (
            <ItemsInventory setToggleBtn={setToggleBtn} />
        )}
    </>
    );
};

export default Index;
